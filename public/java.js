fetch("https://daily-horoscopes1.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "57417e0cd7msh9aeacf95c99c208p1320a5jsne3816a7b8eca",
		"x-rapidapi-host": "daily-horoscopes1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});