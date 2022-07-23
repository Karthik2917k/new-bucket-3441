let form = document.querySelector("form");
let addressarr = JSON.parse(localStorage.getItem("addressdata")) || [];
form.addEventListener("submit", addressfunc);
function addressfunc(e) {
  e.preventDefault();

  let email = form.email.value;
  let firstname = form.firstname.value;
  let lastname = form.lastname.value;
  let mobile = form.mobile.value;
  let Address = form.Address.value;
  let post = form.postcode.value;
  if (
    email === "" ||
    firstname === "" ||
    lastname === "" ||
    mobile === "" ||
    Address === "" ||
    post === ""
  ) {
    alert("Fill the Form");
  } else {
    let obj = {
      Email: email,
      Fname: firstname,
      lname: lastname,
      Mobile: mobile,
      Address: Address,
      postcode: post,
    };
    addressarr.push(obj);
    localStorage.setItem("addressdata", JSON.stringify(addressarr));
    window.location.href = "payment.html";
  }
}
let signin = document.querySelector("#signin");
let signup = document.querySelector("#signup");
let signinarr = JSON.parse(localStorage.getItem("signin")) || [];
if (signinarr === null) {
  signin.textContent = "Sign In";
  signup.textContent = "Sign Up";
} else if (signinarr !== null) {
  signin.textContent = signinarr[signinarr.length - 1].name;
  signup.textContent = "";
}
