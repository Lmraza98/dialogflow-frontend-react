export const getTime = () => {
	const today = new Date()
	let hour = today.getHours()
	let minutes = today.getMinutes()
	let ampm
	if(hour > 12)
	{
		hour = hour - 12
		ampm = ' PM'
	}
	else {
		ampm = ' AM'
	}
	if(minutes < 10) {
		minutes = '0' + minutes
	}
	return hour + ':' + minutes + ampm
}


