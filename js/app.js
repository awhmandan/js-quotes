//Random quote generator app
//Author - Dan Walsh

function randomQuote(){
	return quotes[Math.floor(Math.random() * (quotes.length))];
}

//inserting info into HTML 
function render(obj){
	document.getElementById('line').innerHTML = obj.quote;
	document.getElementById('author').innerHTML = obj.author;
}

document.getElementById('newQuote').addEventListener('click', function(){
	render(randomQuote());
});

render(randomQuote());
