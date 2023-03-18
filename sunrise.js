
let lat = "41.825226"; 
let lon = "-71.418884";


const url = 'https://api.sunrise-sunset.org/json?lat=' + lat +'&lng=' + lon + '&date=today';


fetch(url)
  .then(response => response.json())
  .then((data) => { console.log(data)})