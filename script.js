const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
})

closeMenuBtn.addEventListener("click", () => {
  menuBtn.click()
})

function sendEmail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_r4kfpsr", "template_jxn6biq", params).then(function(res) {
    alert("Your message was sent successfully... We will respond to you shortly...")
    location.assign("/index.html")
  }, (er) => {
    alert("Your message was sent successfully... We will respond to you shortly...")
    location.assign("/index.html")
  })
}