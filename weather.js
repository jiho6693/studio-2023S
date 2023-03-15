const apiKey = "2fcd83828c7a6dd5b3be29bc0b6fdd9c"
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.825226&lon=-71.418884&units=imperial&appid=2fcd83828c7a6dd5b3be29bc0b6fdd9c';

fetch(url)
  .then(response => response.json())
  .then((data) => { console.log(data)
    const weather = data.weather[0].main;
    console.log(weather)
    if(weather === "Snow"|| weather === "Rain" ){
        console.log("snow")
    } else {
        console.log("not bad")
    }

  })
