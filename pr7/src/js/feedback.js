$(document).ready(function () {
	var form = $('#feedbackForm')
	form.on('submit', function (event) {
		event.preventDefault()

		var isNameValid = validateName()
		var isEmailValid = validateEmail()
		var isPhoneValid = validatePhone()
		var messageLength = validateMessageLength()

		displayMessageLength(messageLength)
	})
	var messageInput = form.find('.feedback-message')
	messageInput.on('input', function () {
		var messageLength = validateMessageLength()
		displayMessageLength(messageLength)
	})

	function validateName() {
		var nameInput = form.find('.feedback-name')
		var nameValue = nameInput.val().trim()

		if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/.test(nameValue)) {
			alert("Поле 'Ім’я' повинно містити тільки букви або пробіли.")
			return false
		}

		return true
	}

	function validateEmail() {
		var emailInput = form.find('.feedback-email')
		var emailValue = emailInput.val().trim()

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
			alert('Некоректний формат електронної пошти.')
			return false
		}

		return true
	}

	function validatePhone() {
		var phoneInput = form.find('.feedback-tel')
		var phoneValue = phoneInput.val().trim()

		if (!/^[0-9+\-() ]+$/.test(phoneValue)) {
			alert(
				"Поле 'Телефон' повинно містити тільки цифри, пробіли або символи +, -, (, )."
			)
			return false
		}

		return true
	}

	function validateMessageLength() {
		var messageInput = form.find('.feedback-message')
		var messageValue = messageInput.val().trim()
		var messageLength = messageValue.length

		return messageLength
	}

	function displayMessageLength(length) {
		var lengthContainer = $('#messageLength')
		lengthContainer.text('Довжина тексту повідомлення: ' + length)
	}
})
