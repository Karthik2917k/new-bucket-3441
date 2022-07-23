let form = document.querySelector("form");
form.addEventListener("submit", otpfunc);
let button = document.querySelector("#button");
button.addEventListener("click", cancelfunc);
function cancelfunc() {
  alert("your redirected to card page");
  window.location.href = "cart.html";
}
function otpfunc(e) {
  e.preventDefault();
  let otp = form.otp.value;
  let obj = {
    Otp: otp,
  };
  if (otp === "") {
    alert("Plese Enter OTP");
  } else {
    if (otp === "1234") {
      alert("Transaction Completed");
      window.location.href = "order.html";
    } else {
      alert("Wrong OTP");
    }
  }
}
