container = document.querySelector(".container");
let cartls = JSON.parse(localStorage.getItem("cartpage")) || [];
let totalItems = document.querySelector("#Items");
let totalprice = document.querySelector("#total-price");
let discountprice = document.querySelector("#Discount");
let form = document.querySelector("form");
let checkout = document.querySelector("#check");
let ttotal = 0;
function display(data) {
  container.innerHTML = "";
  let count = 0;
  let total = 0;
  data.forEach(function (el, index) {
    count++;
    total = total + el.price;
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h3");
    name.textContent = el.name;
    let Price = document.createElement("p");
    Price.textContent = "$ " + el.price + " /-";
    let button = document.createElement("button");
    button.textContent = "DELETE";
    button.addEventListener("click", function () {
      deletecart(el);
    });
    div.append(img, name, Price, button);
    container.append(div);
  });
  totalItems.textContent = count;
  totalprice.textContent = "$ " + total + "/-";
  ttotal = total;
  discountprice.textContent = "$ " + total + "/-";
}
display(cartls);

function deletecart(product) {
  let deleted = cartls.filter(function (ele) {
    return ele !== product;
  });
  localStorage.setItem("cartpage", JSON.stringify(deleted));
  display(deleted);
  window.location.href = "cart.html";
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
form.addEventListener("submit", discfunc);
function discfunc(el) {
  el.preventDefault();
  let code = form.disc.value;
  if (code === "masai30") {
    ttotal = ttotal - ttotal * 0.3;
    discountprice.textContent = "$ " + ttotal + "/-";
    alert("30% Discount applied using 'masai30' Code");
  } else if (code !== "masai30") {
    alert("wrong Cupon code");
  }
}
checkout.addEventListener("click", checkfunc);
function checkfunc() {
  localStorage.setItem("totalprice", JSON.stringify(ttotal));
}
