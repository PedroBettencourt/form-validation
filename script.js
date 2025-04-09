const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const passwordConf = document.querySelector("#pass-conf");


const validate = ((property) => {
    property.addEventListener("blur", () => {
        property.setCustomValidity("");
        if (!validityRules(property)) {
            property.reportValidity();
        }
    })
})

const validityRules = ((property) => {
    if (!(property === zip || property === passwordConf)) {
        console.log("gm")
        if (property.checkValidity()) return true;
        if (property === email) property.setCustomValidity("Please insert a valid email");
        if (property === country) property.setCustomValidity("Please select a country");
        if (property === password) property.setCustomValidity("Please insert a password");
        return false;
    }

    if (property === passwordConf) {
        if (!password.value) {
            property.setCustomValidity("Please insert a password");
        }
        else if (password.value === property.value) {
            return true;
        } else {
            property.setCustomValidity("The passwords must match");
        }
        return false;
    }

    const countryCode = country.value;
    if (!countryCode) {
        property.setCustomValidity("Please select a country");
        return false;
    }

    const zipPattern = countries[countryCode];
    if (!zip.value.match(zipPattern)) {
        property.setCustomValidity("Please insert a valid postal code");
        return false;
    }

    return true;
    
})

const countries = {pt: "[0-9]{4}-[0-9]{3}", es: "[0-9]{5}", fr:"[0-9]{5}"}

validate(email);
validate(country);
validate(zip);
validate(password);
validate(passwordConf);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email.checkValidity() && country.checkValidity && zip.checkValidity() &&
    password.checkValidity() && passwordConf.checkValidity()) {
        const emailValue = email.value;
        const countryValue = country.value;
        const zipValue = zip.value;
        const passValue = password.value;
        const passConfValue = passwordConf.value;
        form.reset();
        }
})