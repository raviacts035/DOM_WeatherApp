//defining variables and holding elements

var data;
const w_input=document.querySelector("#w_input")
const w_country=document.querySelector("#w_country")
const w_state=document.querySelector("#w_state")
const w_city=document.querySelector("#w_city")
const w_wind=document.querySelector("#w_wind")
const w_temp=document.querySelector("#w_temp")
const w_humidity=document.querySelector("#w_humidity")
const w_icon=document.querySelector("#w_icon")

// Fetching Data from API and asseigning to variables

var getData= async (event)=>{
    event.preventDefault();
    if(!w_input.value){
        alert("Please Enter city name")
        return;
    }
    const city=w_input.value
    var fetchData= await fetch(`http://api.weatherapi.com/v1/current.json?key=529cee31f2ba4da986754455231304&q=${city}`)
    const g=await fetchData.json()
    data =g;
    w_country.innerHTML=data.location.country
    w_state.innerHTML=data.location.region
    w_city.innerHTML=data.location.name
    w_temp.innerHTML=data.current.temp_c
    w_humidity.innerHTML=data.current.humidity
    w_wind.innerHTML=data.current.wind_kph
    w_icon.src=data.current.condition.icon
}
// Represting Data in respective frontend field's
