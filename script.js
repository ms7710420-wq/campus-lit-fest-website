const form = document.getElementById("registration-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Please complete all required fields.";
    message.style.color = "#a11a1a";
    form.reportValidity();
    return;
  }

  const name = form.elements.name.value.trim();
  message.textContent = `Thanks for registering, ${name}! Confirmation details have been sent to your email.`;
  message.style.color = "#1f6f32";
  form.reset();
});
