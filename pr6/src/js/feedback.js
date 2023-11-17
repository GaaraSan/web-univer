document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    // Перевірка полів форми
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhone();
    var messageLength = validateMessageLength();

    displayMessageLength(messageLength);
  });
  var messageInput = form.querySelector(".feedback-message");
  messageInput.addEventListener("input", function () {
    var messageLength = validateMessageLength();
    displayMessageLength(messageLength);
  });

  function validateName() {
    var nameInput = form.querySelector(".feedback-name");
    var nameValue = nameInput.value.trim();

    if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/.test(nameValue)) {
      alert("Поле 'Ім’я' повинно містити тільки букви або пробіли.");
      return false;
    }

    return true;
  }

  function validateEmail() {
    var emailInput = form.querySelector(".feedback-email");
    var emailValue = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      alert("Некоректний формат електронної пошти.");
      return false;
    }

    return true;
  }

  function validatePhone() {
    var phoneInput = form.querySelector(".feedback-tel");
    var phoneValue = phoneInput.value.trim();

    if (!/^[0-9+\-() ]+$/.test(phoneValue)) {
      alert(
        "Поле 'Телефон' повинно містити тільки цифри, пробіли або символи +, -, (, )."
      );
      return false;
    }

    return true;
  }

  function validateMessageLength() {
    var messageInput = form.querySelector(".feedback-message");
    var messageValue = messageInput.value.trim();
    var messageLength = messageValue.length;

    return messageLength;
  }

  function displayMessageLength(length) {
    var lengthContainer = document.getElementById("messageLength");
    lengthContainer.textContent = "Довжина тексту повідомлення: " + length;
  }
});
