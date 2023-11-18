const shorts_button = $('.shorts')
const shorts_info = $('aside')[0]

shorts_button.on('click', () => {
	shorts_info.classList.toggle('shorts-hiden')
})
