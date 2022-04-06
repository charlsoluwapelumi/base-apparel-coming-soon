
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const small = document.querySelector(".small");
const button = document.querySelector(".button");
const error = document.querySelector(".error");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation() {
    if (email.value.match(regExp)) {
        error.style.visibility = "hidden";
        small.style.visibility = "hidden";
        
    } else {
        error.style.visibility = "visible";
        small.style.visibility = "visible";
    }
    if (email.value == "") {
        error.style.visibility = "hidden";
        small.style.visibility = "hidden";
    }
}