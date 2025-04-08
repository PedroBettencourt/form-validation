const email = querySelector("#email");
const country = querySelector("#country");
const zip = querySelector("#zip");
const password = querySelector("#password");
const passwordConf = querySelector("#pass-conf");

const validate = (() => {
    console.log("test");
})

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})