date = document.querySelector(".date");
temp = document.querySelector(".temp");
loc = document.querySelector(".loc");
min = document.querySelector(".min");
max = document.querySelector(".max");
locationIcon = document.querySelector('.weather-icon');
cityname = document.getElementById("cityname");
weathdescr=document.querySelector(".weath-descr");

//moment js for time function
function time() {
    var d = moment().format('Do-MMM-YY, h:mm:ss a  dddd');
    date.innerHTML = d;
}
time();
setInterval(time, 1000);




//1st city() is run when submit is cricked
function city() {
    if (cityname.value == "") {
    alert("Enter a city Name.");}
    else{
    getText(`http://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=dd2148c708035bd9df9580495995612a`);
    cityname.value = ""

    document.querySelector(".center").style.display = "flex";
    }
}

//2nd getText() is run to fetch openweather api
async function getText(file) {
    let myObject = await fetch(file);
    myText = await myObject.json();
    populate(myText);
}

//3rd populate()- to display results
function populate(data) {

    temp.innerHTML = `${myText.main.temp} C`; 
    loc.innerHTML = ` ${myText.name}, ${myText.sys.country}`;
    min.innerHTML = `Min ${myText.main.temp_min} C`;
    max.innerHTML = `Max ${myText.main.temp_max} C`;
    weathdescr.innerHTML = myText.weather[0].description;
    const icon = myText.weather[0].icon;
    locationIcon.innerHTML = "<img src='http://openweathermap.org/img/wn/" + icon + "@4x.png'>"

    background(myText.weather[0].description);

}

// //4th background() to dynamically update background image from unsplash api
// function background(data) {
//     document.body.style.background =
//         "linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,.3)),url("+`"https://source.unsplash.com/800x600/?${data}"`+")";
//         document.body.style.backgroundRepeat = "no-repeat";
//         document.body.style.backgroundSize = "100vw 100vh";
//         console.log(data);
// }