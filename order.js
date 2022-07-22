let signin=document.querySelector("#signin");
let signup=document.querySelector("#signup");
let signinarr=JSON.parse(localStorage.getItem("signin"))||[];
if(signinarr === null){
    signin.textContent="Sign In";
    signup.textContent="Sign Up"
}
else if(signinarr !== null){
    signin.textContent=signinarr[signinarr.length-1].name;
    signup.textContent=""
}