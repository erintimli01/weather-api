import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { WeatherService } from './../src/js/main';

// Business Logic

// function getWeather(city) {
//   let promise = WeatherService.getWeather(city);
//   promise.then(function(weatherDataArray) {
//     printElements(weatherDataArray);
//   }, function(errorArray) {
//     printError(errorArray);
//   });
// }

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  let promise = WeatherService.getWeather(city);
  promise.then(function(weatherDataArray) {
    printElements(weatherDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  document.querySelector("#showResponse").innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%. The temperature in Kelvins is ${data[0].main.temp} degrees.`;
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}


window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
