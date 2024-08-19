const emailText = document.getElementById("emailText");
const mysubmit = document.getElementById("mysubmit");
const error = document.getElementById("error");

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

mysubmit.onclick = function () {
  if (emailText.value.trim() == "") {
    error.textContent = "Whoops! looks like You forgot to add an email";
  } else if (emailText.value.match(emailRegex)) {
    error.style.color = "green";
    error.textContent = "Thank you for subscribing !";
  } else if (!emailText.value.match(emailRegex)) {
    error.style.color = "red";
    error.textContent = "Please provide a Valid email";
  }
};

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".nav-list");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
