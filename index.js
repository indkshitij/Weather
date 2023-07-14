let userEnter = document.getElementById("userEnter");
let searchBtn = document.getElementById("searchBtn");
let showName = document.getElementById("showName");
let weatherImg = document.getElementById("weatherImg");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let infoContainer = document.getElementById("infoContainer");
let Mainbg = document.getElementById("Mainbg");
let userEnterValue = userEnter.value;
console.log("userEnter");

// Preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});
// Preloader

let fetchWeather = async (cityNameValue) => {
  let apiKey = "5653a9e965e092077e781b4b4c98ef38";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    // Display Info
    infoContainer.style.display = "block";
    // Update Weather
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    showName.innerHTML = data.name;
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed} km/hr`;

    // Update Img
    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "./Image/clouds.png";
      Mainbg.src = "./Image/cloudbg.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "./Image/rain.png";
      Mainbg.src = "./Image/rainbg.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "./Image/clear.png";
      Mainbg.src = "./Image/clear.bg.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "./Image/drizzle.png";
      Mainbg.src = "./Image/rainybg.jpg";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "./Image/mist.png";
      Mainbg.src = "./Image/mistbg.jpg";
    }
  } catch (error) {
    console.error("Error occurred while fetching weather data:", error);
  }
};

// // EventListener
searchBtn.addEventListener("click", () => {
  console.log("HII");
  console.log(userEnter.value);
  // console.log(userEnterValue)
  fetchWeather(userEnter.value);
});
