function showSection(id){
let sections = document.querySelectorAll(".section");

for(let i = 0; i < sections.length; i++){
sections[i].classList.remove("active");
}

document.getElementById(id).classList.add("active");
}


async function generateUser(){
let response = await fetch("https://randomuser.me/api/");
let data = await response.json();
let user = data.results[0];

document.getElementById("userContainer").innerHTML = `
<div class="user-card">
<img src="${user.picture.large}">
<h3>${user.name.first} ${user.name.last}</h3>
<p>${user.email}</p>
<p>${user.location.country}</p>
</div>
`;
}


async function getWeather(){
let city = document.getElementById("cityInput").value;
let box = document.getElementById("weatherResult");

if(city == ""){
box.innerHTML = "Please enter a city";
return;
}

box.innerHTML = "Loading...";

try{

let geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
let geoData = await geo.json();

if(!geoData.results){
box.innerHTML = "City not found";
return;
}

let lat = geoData.results[0].latitude;
let lon = geoData.results[0].longitude;

let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
let weatherData = await weather.json();

let temp = weatherData.current_weather.temperature;
let wind = weatherData.current_weather.windspeed;

box.innerHTML = `
<div class="card">
<h3>${city}</h3>
<p>Temperature: ${temp} °C</p>
<p>Wind Speed: ${wind} km/h</p>
</div>
`;

}catch{
box.innerHTML = "Error getting weather.";
}

}


function addTask(){
let input = document.getElementById("taskInput");
let task = input.value;

if(task == "") return;

let li = document.createElement("li");

li.innerHTML = task + 
` <button onclick="removeTask(this)">Delete</button>`;

document.getElementById("taskList").appendChild(li);

input.value = "";

updateCount();
}


function removeTask(button){
button.parentElement.remove();
updateCount();
}


function updateCount(){
let total = document.querySelectorAll("#taskList li").length;
document.getElementById("taskCount").innerText = total;
}


function filterProducts(){
let text = document.getElementById("searchBox").value.toLowerCase();
let items = document.querySelectorAll("#productList li");

for(let i = 0; i < items.length; i++){

let name = items[i].textContent.toLowerCase();

if(name.includes(text)){
items[i].style.display = "block";
}else{
items[i].style.display = "none";
}

}

}