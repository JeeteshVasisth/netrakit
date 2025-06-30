var stripe = Stripe(
  "pk_test_51JwNL3SCMgLBq7U2BvAHhvjojwWVWn38DNeIIzNLSHHnfSghcv9UeLf14170YFYG0DbLlPQ1j2J3Z1JBFptPMMAf00c1fwAaEH"
)

function hi() {
  if (document.getElementById('m').checked == false) {
    l = "price_1OlnH1SCMgLBq7U2gGNSfrhF"
  } else {
    l = "price_1OLNoHSCMgLBq7U2tGknUIOX"
  }
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: l,
        quantity: Number(document.getElementById("x").value),
      }
    ],
    mode: "payment",
    successUrl: "https://netrakit.com/index.html",
    cancelUrl: "https://netrakit.com/cart.html",
  }).then(function (result) {
    console.log(result);
  });
}

const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
})

closeMenuBtn.addEventListener("click", () => {
  menuBtn.click()
})