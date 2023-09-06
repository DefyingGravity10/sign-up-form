let password = document.getElementById("password");
let confirmed_password = document.getElementById("confirm_password");

password.addEventListener("input", checkPassword);
confirmed_password.addEventListener("input", checkPassword);

function checkPassword() {
  if (password.value !== confirmed_password.value) {
    password.style.borderColor = "#bc0c0c";
    confirmed_password.style.borderColor = "#bc0c0c";
  }
  else if (password.value.length === 0 && confirmed_password.value.length === 0) {
    password.style.borderColor = "#fefefe";
    confirmed_password.style.borderColor = "#fefefe";
  }
  else if (password.value === confirmed_password.value) {
    password.style.borderColor = "#2c9f2d";
    confirmed_password.style.borderColor = "#2c9f2d";
  }
}