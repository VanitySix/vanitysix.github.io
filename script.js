emailjs.init("YOUR_USER_ID");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function (response) {
        console.log("Email sent successfully!", response.status, response.text);
      },
      function (error) {
        console.log("Failed to send email.", error);
      }
    );
  });
