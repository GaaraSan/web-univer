const quotes = [
	'Atque quasi quidem molestiae molestiae.',
	'Qui qui a itaque ipsum et maiores.',
	'Hic aut aspernatur optio est omnis est esse sed.',
	'Quam numquam sed perspiciatis enim doloremque aspernatur dolor voluptatem sequi.',
	'Corrupti placeat expedita.',
	'Voluptatum tempore rem quia.',
	'Quo natus rerum mollitia ut placeat.',
	'Perferendis eligendi voluptatem id sint iste facilis et consectetur aperiam.',
	'Commodi rerum error error.',
	'Doloremque iste nihil quidem est dolores.',
	'Et ullam facere corrupti.',
	'Dolorem placeat laboriosam necessitatibus earum illo modi id sapiente alias.',
	'Placeat delectus tempore qui mollitia odio.',
	'Est enim velit illo veniam autem nisi velit suscipit.',
	'Eum ullam facilis itaque cupiditate ut.',
	'Id ipsum quaerat eum quasi et in.',
	'Ut suscipit expedita.',
	'Et dolore accusantium velit autem aspernatur necessitatibus quibusdam error qui.',
	'Aliquid ea rerum corrupti saepe.',
	'Vel animi non soluta quaerat autem optio aut maxime libero.',
	'Aut quasi quisquam maiores quam suscipit ad.',
	'Sequi non optio quibusdam ut ipsam et.',
	'Incidunt ut laudantium pariatur perferendis nulla.',
	'Id nemo soluta ut ipsum non.',
	'Sit est reprehenderit doloribus cum.',
	'Facilis nesciunt dignissimos fugit earum culpa repellat ut.',
	'Laborum et et quia omnis.'
]

function getQuote() {
	const i = Math.floor(Math.random() * quotes.length)

	return quotes[i]
}

const quote = $('.quote')[0]
quote.textContent = getQuote()
