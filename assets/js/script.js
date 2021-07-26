var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener('click', function(){
 fetch('https://api.openweathermap.org/data/2.5/onecall?q='+inputValue.value+'&appid=3c5fedbc6d20b5cf5be7e03e1022c6ba')
.then(response => response.jsom())
.then(data => console.log(data))

.catch(err => alert("Wrong City Name!"))
})