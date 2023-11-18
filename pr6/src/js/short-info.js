const shorts_button = document.querySelector('.shorts')
const shorts_info = document.querySelector('aside')

shorts_button.addEventListener('click', () => {
	shorts_info.classList.toggle('shorts-hiden')
})
