let form = document.querySelector("form");
form.addEventListener("submit", subfunc);

let signupls = JSON.parse(localStorage.getItem("signup")) || [];
let signinls = JSON.parse(localStorage.getItem("signup")) || [];
let flag = false;
function subfunc(e) {
  e.preventDefault();
  if (form.email.value == "" || form.password.value == "") {
    alert("Fill the form");
  } else {
    let email = form.email.value;
    let password = form.password.value;
    let obj = {
      Email: email,
      Password: password,
    };

    if (signupls.length <= 0) {
      alert("User Data is not found plese Register");
      window.location.href = "signup.html";
    } else if (signinls.length >= 1) {
      signupls.forEach(function (el) {
        if (obj.Email === el.Email && obj.Password === el.Password) {
          signinls.push(el);
          localStorage.setItem("signin", JSON.stringify(signinls));
          flag = true;
          alert("Login Succeccfully Completed");
          localStorage.setItem("flag", JSON.stringify(flag));
          window.location.href = "index.html";
        } else if (obj.Email !== el.Email || obj.Password !== el.Password) {
          alert("wrong Details");
        }
      });
    }
  }
}

console.log(signupls);
