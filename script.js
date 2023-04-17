//defining variables and holding elements

var data;
const w_input=document.querySelector("#w_input")
const w_country=document.querySelector("#w_country")
const w_state=document.querySelector("#w_state")
const w_city=document.querySelector("#w_city")
const w_wind=document.querySelector("#w_wind")
const w_temp=document.querySelector("#w_temp")
const w_cloud=document.querySelector("#w_cloud")
const w_humidity=document.querySelector("#w_humidity")
const w_date=document.querySelector("#w_date")
const w_time=document.querySelector("#w_time")
const w_icon=document.querySelector("#w_icon")
const w_text=document.querySelector("#w_text")

// initial page


// Fetching Data from API and asseigning to variables

var getData= async (event)=>{
    event.preventDefault();
    if(!w_input.value){
        alert("Please Enter city Name");
        return;
    }
    const city=w_input.value 
    try{
        var fetchData= await fetch(`http://api.weatherapi.com/v1/current.json?key=529cee31f2ba4da986754455231304&q=${city}`)
    }
    catch(error){
        console.log("Catched Error")
        document.querySelector("section").style.visibility="hidden"
        document.querySelector("#val_").removeAttribute("hidden")
        return;
    }
    const g=await fetchData.json()
    data =g;
    if(data.error){
        return;
    }
    w_country.innerHTML=data.location.country
    w_state.innerHTML=data.location.region
    w_city.innerHTML=data.location.name
    w_temp.innerHTML=data.current.temp_c
    w_humidity.innerHTML=data.current.humidity
    w_wind.innerHTML=data.current.wind_kph
    w_cloud.innerText=data.current.cloud
    w_icon.src=data.current.condition.icon
    w_text.innerText=data.current.condition.text
    w_date.innerText= data.location.localtime.split(" ")[0]
    w_time.innerText= data.location.localtime.split(" ")[1]
    if (data.current.is_day==1){
        return
    }
    else{
        document.querySelector("body").style="background-image: url(./assets/n8t_sky.jpg);"
    }
}
// Represting Data in respective frontend field's

var hiSt=''

function srchM(event){
    var e=document.getElementById("w_input");
    // hiSt=hiSt+event.code[event.code.length-1]
    var tmp=dict.filter(s=> s.startsWith(e.value.charAt(0).toUpperCase()+e.value.slice(1)))
    tmp=tmp.slice(0,5)
    document.querySelector("#lst").innerHTML="";
    tmp.forEach((x)=>{
        var y=document.createElement("option");
        y.value=x
        document.querySelector("#lst").appendChild(y)
    })    
    
}