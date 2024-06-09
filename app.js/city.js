let url =
  "https://api.weatherapi.com/v1/current.json?key=c4206fc8a9304665b35113028241405&q=";
let Temperature = document.querySelector("#Temperature");

let Cloud = document.querySelector("#Cloud");
let Wind = document.querySelector("#Wind");
let visibility = document.querySelector("#visibility");
let FeelsLike = document.querySelector("#FeelsLike");
let Humidity = document.querySelector("#Humidity");
let Pressure = document.querySelector("#Pressure");
let GustSpeed = document.querySelector("#GustSpeed");
let city = document.querySelector(".city");
let image1 = document.querySelector(".image1");
let weather_desc = document.querySelector("#weather-description");
let Lat = document.querySelector("#Lat");
let Lan = document.querySelector("#Lan");
let interDes = document.querySelector("#interDes");
let Region = document.querySelector("#Region");
let Country = document.querySelector("#Country");
let clock = document.querySelector("#Clock");
let windMap = document.querySelector("#windMap");
let tempMap = document.querySelector("#tempMap");

let first1 = document.querySelector("#first1");
let second2 = document.querySelector("#second2");
let third3 = document.querySelector("#third3");
let fourth4 = document.querySelector("#fourth4");
let fifth5 = document.querySelector("#fifth5");
let sixth6 = document.querySelector("#sixth6");
let seventh7 = document.querySelector("#seventh7");
let eighth8 = document.querySelector("#eighth8");
let ninth9 = document.querySelector("#ninth9");
let tenth10 = document.querySelector("#tenth10");

let body = document.body;

//Api call

function logUserInput() {
  try {
    let userInput = "Barasat";
    userInput = document.getElementById("input2").value;

    const API_KEY = "c4206fc8a9304665b35113028241405";
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=10&aqi=yes&alerts=yes`;

    console.log(apiUrl);
    let p = fetch(apiUrl);
    p.then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
      .then((data) => {
        if (data) {
          console.log(data);
          city.innerHTML = `   <h5 class="card-title top city" > <i class="fa-solid fa-map-location-dot top"></i>${data.location.name}</h5>`;
          image1.innerHTML = `<img src="${data.current.condition.icon}" alt="a"> `;
          weather_desc.innerText = `${data.current.condition.text}`;
          Lat.innerText = `${data.location.lat}`;
          Lan.innerText = `${data.location.lon}`;
          Region.innerText = `${data.location.region}`;
          Country.innerText = `${data.location.country}`;

          Temperature.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly"><p> 
                                            <b>${data.current.temp_c}°C</b></p>
                                                   <p>     <b>${data.current.temp_f}°F</b> </p>
                                 </div>`;

          Cloud.innerHTML = `<b>${data.current.cloud}%</b>`;

          Wind.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly">
                                      <p> <b>${data.current.wind_kph} km/h</b></p>
                                     <p>     <b>${data.current.wind_mph}	mph</b> </p>
                        </div>`;

          visibility.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly">
                                      <p> <b>${data.current.vis_km} km</b></p>
                                      <p>     <b>${data.current.vis_miles}	miles</b> </p>
                                </div>`;

        try {
             FeelsLike.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly">
            <p> <b>${data.current.feelslike_c}°C</b></p>
              <p>     <b>${data.current.feelslike_f}°F</b> </p>
             </div>`;
             } catch (error) {
    console.log(error)
                            }
         

          Humidity.innerHTML = `<b>${data.current.humidity}%</b>`;

          Pressure.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly">
                                      <p> <b>${data.current.pressure_in}inch</b></p>
                                      <p>  <b>${data.current.pressure_mb}mb</b> </p>
                            </div>`;

          GustSpeed.innerHTML = `<div style="width='100%';display:flex; justify-content:space-evenly"><p> <b>${data.current.gust_kph} km/h</b></p><p>     <b>${data.current.gust_mph}	mph</b> </p></div>`;

          //windMap
          windMap.innerHTML = `<iframe  style="height: 400px;width: 100%;"
          src="https://embed.windy.com/embed2.html?lat=${data.location.lat}&amp;lon=${data.location.lon}&amp;detailLat=${data.location.lat}&amp;detailLon=${data.location.lon}&amp;width=100%&amp;height=100%&amp;zoom=10&amp;level=surface&amp;overlay=wind&amp;product=ecmwf&amp;menu=&amp;message=&amp;marker=&amp;calendar=now&amp;pressure=&amp;type=map&amp;location=coordinates&amp;detail=&amp;metricWind=default&amp;metricTemp=default&amp;radarRange=-1"
          frameborder="0"></iframe>`;

          //Temperature Map

          tempMap.innerHTML = `<iframe  style="height: 400px;width: 100%;"
          src="https://embed.windy.com/embed2.html?lat=${data.location.lat}&amp;lon=${data.location.lon}&amp;detailLat=${data.location.lat}&amp;detailLon=${data.location.lon}&amp;width=100%&amp;height=100%&amp;zoom=10&amp;level=surface&amp;overlay=temp&amp;product=ecmwf&amp;menu=&amp;message=&amp;marker=&amp;calendar=now&amp;pressure=&amp;type=map&amp;location=coordinates&amp;detail=&amp;metricWind=default&amp;metricTemp=default&amp;radarRange=-1"
          frameborder="0"></iframe>`;

          //first table
          first1.innerHTML = `
            <th scope="row">${data.forecast.forecastday[0].date}</th>
            
              <td>${data.forecast.forecastday[0].day.condition.text}</td>
              <td>${data.forecast.forecastday[0].day.maxtemp_c}</td>
              <td>${data.forecast.forecastday[0].day.mintemp_c}</td>
              <td>${data.forecast.forecastday[0].day.daily_chance_of_rain}</td>
              <td>${data.forecast.forecastday[0].day.avghumidity}</td>`;

          //second table
          second2.innerHTML = `
        <th scope="row">${data.forecast.forecastday[1].date}</th>
        
          <td>${data.forecast.forecastday[1].day.condition.text}</td>
          <td>${data.forecast.forecastday[1].day.maxtemp_c}</td>
          <td>${data.forecast.forecastday[1].day.mintemp_c}</td>
          <td>${data.forecast.forecastday[1].day.daily_chance_of_rain}</td>
          <td>${data.forecast.forecastday[1].day.avghumidity}</td>`;

          //third table
          third3.innerHTML = `
<th scope="row">${data.forecast.forecastday[2].date}</th>

  <td>${data.forecast.forecastday[2].day.condition.text}</td>
  <td>${data.forecast.forecastday[2].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[2].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[2].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[2].day.avghumidity}</td>`;

          //fou table
          fourth4.innerHTML = `
<th scope="row">${data.forecast.forecastday[3].date}</th>

  <td>${data.forecast.forecastday[3].day.condition.text}</td>
  <td>${data.forecast.forecastday[3].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[3].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[3].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[3].day.avghumidity}</td>`;

          //fifth table
          fifth5.innerHTML = `
<th scope="row">${data.forecast.forecastday[4].date}</th>

  <td>${data.forecast.forecastday[4].day.condition.text}</td>
  <td>${data.forecast.forecastday[4].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[4].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[4].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[4].day.avghumidity}</td>`;

          //6 table
          sixth6.innerHTML = `
<th scope="row">${data.forecast.forecastday[5].date}</th>

  <td>${data.forecast.forecastday[5].day.condition.text}</td>
  <td>${data.forecast.forecastday[5].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[5].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[5].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[5].day.avghumidity}</td>`;

          //7 table
          seventh7.innerHTML = `
<th scope="row">${data.forecast.forecastday[6].date}</th>

  <td>${data.forecast.forecastday[6].day.condition.text}</td>
  <td>${data.forecast.forecastday[6].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[6].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[6].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[6].day.avghumidity}</td>`;

          //8 table
          eighth8.innerHTML = `
<th scope="row">${data.forecast.forecastday[7].date}</th>

  <td>${data.forecast.forecastday[7].day.condition.text}</td>
  <td>${data.forecast.forecastday[7].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[7].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[7].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[7].day.avghumidity}</td>`;

          //9 table
          ninth9.innerHTML = `
<th scope="row">${data.forecast.forecastday[8].date}</th>

  <td>${data.forecast.forecastday[8].day.condition.text}</td>
  <td>${data.forecast.forecastday[8].day.maxtemp_c}</td>
  <td>${data.forecast.forecastday[8].day.mintemp_c}</td>
  <td>${data.forecast.forecastday[8].day.daily_chance_of_rain}</td>
  <td>${data.forecast.forecastday[8].day.avghumidity}</td>`;

          //first table
          tenth10.innerHTML = `
  <th scope="row">${data.forecast.forecastday[9].date}</th>
  
    <td>${data.forecast.forecastday[9].day.condition.text}</td>
    <td>${data.forecast.forecastday[9].day.maxtemp_c}</td>
    <td>${data.forecast.forecastday[9].day.mintemp_c}</td>
    <td>${data.forecast.forecastday[9].day.daily_chance_of_rain}</td>
    <td>${data.forecast.forecastday[9].day.avghumidity}</td>`;
        } else {
          body.innerHTML = `<p>Cannot fetch data</p>`;
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        weather_desc.innerHTML = `<p>Error: ${error.message}</p>`;
        Lat.innerHTML = `<p>Error: ${error.message}</p>`;
        Lan.innerHTML = `<p>Error: ${error.message}</p>`;
        body.innerHTML = `<div class="card mb-3" style="max-width:55rem">
        <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" class="card-img-top" alt="Unable to load">
        <div class="card-body">
          <h5 class="card-title">Error occurd</h5>
          <p class="card-text">Looks like you're not connected to the internet. or There are issue to collect data</p>
         <a href="index.html"><button type="button" class="btn btn-primary">Reload</button></a>
        </div>
      </div>`;
      });
  } catch (error) {
    console.log("User input error:", error);
  }
}

//for Clock
setInterval(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;

  clock.innerHTML = `${h}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  } ${ampm}`;
}, 1000);




function toggleDiv() {
    setTimeout(() => {
        const div = document.getElementById("myDiv");
        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "block";
            setTimeout(() => {
                div.classList.add("visible");
            }, 10); // Slight delay to allow the display property to take effect
            localStorage.setItem("divVisibility", "visible");
        } else {
            div.classList.remove("visible");
            localStorage.setItem("divVisibility", "hidden");
            setTimeout(() => {
                div.style.display = "none";
            }, 500); // Matches the duration of the transition
        }  
    }, 2000);
   
}

window.onload = function() {
    const divVisibility = localStorage.getItem("divVisibility");
    const div = document.getElementById("myDiv");
    if (divVisibility === "visible") {
        // The div should remain hidden on page load
        div.style.display = "none";
    }
}