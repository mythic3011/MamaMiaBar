const newsletterSubscribeForm = document.getElementById("newsletter-subscribe-form");
const newsletterSubscribeSuccess = document.getElementById("newsletter-subscribe-success");
const newsletterSubscribeError = document.getElementById("newsletter-subscribe-error");

function sendEmail() {
    const email = newsletterSubscribeForm.email.value;

    if (email === "") {
        newsletterSubscribeForm.email.classList.add("border-red-500");
        newsletterSubscribeForm.email.classList.remove("border-green-500");
        return;
    }

    newsletterSubscribeForm.email.classList.add("border-green-500");
    newsletterSubscribeForm.email.classList.remove("border-red-500");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/newsletter-subscribe");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            newsletterSubscribeSuccess.style.display = "block";
            newsletterSubscribeError.style.display = "none";
        } else {
            newsletterSubscribeError.style.display = "block";
            newsletterSubscribeSuccess.style.display = "none";
        }
    };
    xhr.send(JSON.stringify({email: email}));
}
