const contactForm = document.getElementById("contact-form-full");
const contactFormNameInput = document.getElementById("contact-form-name-input");
const contactFormEmailInput = document.getElementById("contact-form-email-input");
const contactFormMessageInput = document.getElementById("contact-form-message-input");
const contactFormSubmitButton = document.getElementById("contact-form-submit-button");
const contactFormErrorDiv = document.getElementById("contact-form-error-div");

// set Form Submit Message language
contactFormSubmitButton.textContent = languageMap["contact-form-submit-button"];

function PrintFormSubmitMessage() {
    contactFormSubmitButton.textContent = languageMap["contact-form-submit-button"];
}

// Form Submit Button
contactFormSubmitButton.addEventListener("click", function () {
    // get form data
    const name = contactFormNameInput.value;
    const email = contactFormEmailInput.value;
    const message = contactFormMessageInput.value;

    // check if name and email are valid
    if (!name || !email) {
        contactFormErrorDiv.textContent = languageMap["contact-form-name-error"];
        return;
    }

    // check if email is valid
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        contactFormErrorDiv.textContent = languageMap["contact-form-email-error"];
        return;
    }

    // check if message is valid
    if (!message || !message.match(/[a-zA-Z0-9\s]+/)) {
        contactFormErrorDiv.textContent = languageMap["contact-form-message-error"];
        return;
    }

    // send form data to server
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("/contact", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                contactFormErrorDiv.textContent = languageMap["contact-form-success"];
            } else {
                contactFormErrorDiv.textContent = languageMap["contact-form-error"];
            }
        })
        .catch(error => {
            contactFormErrorDiv.textContent = languageMap["contact-form-error"];
        });
});

