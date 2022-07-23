let form = document.querySelector("form");
form.addEventListener("submit", paymentfunnc);
let amount = document.querySelector("#amount");
let totalamount = JSON.parse(localStorage.getItem("totalprice")) || [];
amount.textContent = "$" + totalamount + "/-";
let paymentarr = JSON.parse(localStorage.getItem("payment")) || [];
function paymentfunnc(e) {
  e.preventDefault();
  let cardnumber = form.cardnumber.value;
  let month = form.month.value;
  let year = form.year.value;
  let name = form.name.value;
  let cvv = form.cvv.value;
  let obj = {
    Cardnumber: cardnumber,
    Month: month,
    Year: year,
    Name: name,
    Cvv: cvv,
  };
  if (
    obj.Cardnumber === "" ||
    obj.Month === "" ||
    obj.Year === "" ||
    obj.Cvv === ""
  ) {
    alert("Fill the form");
  } else {
    if (obj.Cardnumber === "1234567890123456") {
      if (obj.Month === "NOV") {
        if (obj.Year === "20") {
          if (obj.Cvv === "659") {
            paymentarr.push(obj);
            alert("Card details are matcehd");
            localStorage.setItem("payment", JSON.stringify(paymentarr));
            window.location.href = "otp.html";
          } else {
            alert("Enter correct cvv");
          }
        } else {
          alert("selct correct Year");
        }
      } else {
        alert("Select correct month");
      }
    } else {
      alert("Enter Correct card Number");
    }
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
