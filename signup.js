let form = document.querySelector("form");
form.addEventListener("submit", subfunc);

let signup = JSON.parse(localStorage.getItem("signup")) || [];
function subfunc(e) {
  e.preventDefault();
  if (
    form.email.value == "" ||
    form.first.value == "" ||
    form.password.value == ""
  ) {
    alert("Fill the form");
  } else {
    let email = form.email.value;
    let name = form.first.value;
    let password = form.password.value;
    let obj = {
      Email: email,
      name: name,
      Password: password,
    };
    signup.push(obj);
    localStorage.setItem("signup", JSON.stringify(signup));
    window.location.href = "signin.html";
  }
}
console.log(signup);
