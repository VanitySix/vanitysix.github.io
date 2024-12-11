document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");
  form.addEventListener("submit", sendMail);
});

const sendMail = (event) => {
  // Page wont refresh when user submits
  //event.preventDefault();

  const user_data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  if (validate_input(user_data)) {
    // Email service ID + email template ID
    emailjs
      .send("service_ffxqpik", "template_dqyiuxl", user_data)
      .then(() => alert("Email Sent!"))
      .catch((error) => alert(`Failed to send email: ${error.message}`));
  }
};
// Validate user input
const validate_input = ({ name, email, message }) => {
  //If input is empty, alert
  if (!name || !email || !message) {
    alert("All fields are required.");
    return false;
  }

  // Email validation
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
};
