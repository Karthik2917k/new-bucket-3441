let sales1 = document.querySelector("#sale");
sales1.addEventListener("click", salefunc);
function salefunc() {
  window.location.href = "homepage.html";
}

let viewall = document.querySelector("#viewall");
viewall.addEventListener("click", viewfunc);
function viewfunc() {
  window.location.href = "homepage.html";
}
let mens = document.querySelector("#mensnav");
mens.addEventListener("click", mensfunc);
function mensfunc() {
  window.location.href = "mens.html";
}

let div101 = document.querySelector("#div101");
div101.addEventListener("click", div101func);
function div101func() {
  window.location.href = "div101.html";
}
let div102 = document.querySelector("#div102");
div102.addEventListener("click", div102func);
function div102func() {
  window.location.href = "div102.html";
}
let div103 = document.querySelector("#div103");
div103.addEventListener("click", div103func);
function div103func() {
  window.location.href = "div103.html";
}
let div104 = document.querySelector("#div104");
div104.addEventListener("click", div104func);
function div104func() {
  window.location.href = "div104.html";
}
let div105 = document.querySelector("#div105");
div105.addEventListener("click", div105func);
function div105func() {
  window.location.href = "div105.html";
}
let div106 = document.querySelector("#div106");
div106.addEventListener("click", div106func);
function div106func() {
  window.location.href = "div106.html";
}
let pokemon = document.querySelector("#pokemon");
pokemon.addEventListener("click", pokemonfunc);
function pokemonfunc() {
  window.location.href = "pokemon.html";
}
let div301 = document.querySelector("#div301");
div301.addEventListener("click", div301func);
function div301func() {
  window.location.href = "div301.html";
}
let div302 = document.querySelector("#div302");
div302.addEventListener("click", div302func);
function div302func() {
  window.location.href = "div302.html";
}
let div303 = document.querySelector("#div303");
div303.addEventListener("click", div303func);
function div303func() {
  window.location.href = "div303.html";
}
let div304 = document.querySelector("#div304");
div304.addEventListener("click", div304func);
function div304func() {
  window.location.href = "div304.html";
}

let div401 = document.querySelector("#div401");
div401.addEventListener("click", div401func);
function div401func() {
  window.location.href = "div401.html";
}
let div402 = document.querySelector("#div402");
div402.addEventListener("click", div402func);
function div402func() {
  window.location.href = "div402.html";
}
let logo501 = document.querySelector("#logo501");
logo501.addEventListener("click", logo501func);
function logo501func() {
  window.location.href = "logo501.html";
}
let logo502 = document.querySelector("#logo502");
logo502.addEventListener("click", logo502func);
function logo502func() {
  window.location.href = "logo502.html";
}
let logo503 = document.querySelector("#logo503");
logo503.addEventListener("click", logo503func);
function logo503func() {
  window.location.href = "logo503.html";
}
let logo504 = document.querySelector("#logo504");
logo504.addEventListener("click", logo504func);
function logo504func() {
  window.location.href = "logo504.html";
}
let logo505 = document.querySelector("#logo505");
logo505.addEventListener("click", logo505func);
function logo505func() {
  window.location.href = "logo505.html";
}
let logo506 = document.querySelector("#logo506");
logo506.addEventListener("click", logo506func);
function logo506func() {
  window.location.href = "logo506.html";
}
let social601 = document.querySelector("#social601");
social601.addEventListener("click", social601func);
function social601func() {
  window.location.href = "https://www.facebook.com/ASOS/";
}
let social602 = document.querySelector("#social602");
social602.addEventListener("click", social602func);
function social602func() {
  window.location.href = "https://www.instagram.com/asos/";
}
let social603 = document.querySelector("#social603");
social603.addEventListener("click", social603func);
function social603func() {
  window.location.href = "https://www.snapchat.com/add/asosfashion";
}
let divf201 = document.querySelector("#divf201");
divf201.addEventListener("click", divf201func);
function divf201func() {
  window.location.href = "https://www.asos.com/privacy-policy/";
}
let divf202 = document.querySelector("#divf202");
divf202.addEventListener("click", divf202func);
function divf202func() {
  window.location.href = "https://www.asos.com/terms-and-conditions/";
}
let divf203 = document.querySelector("#divf203");
divf203.addEventListener("click", divf203func);
function divf203func() {
  window.location.href = "https://www.asos.com/accessibility/";
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
