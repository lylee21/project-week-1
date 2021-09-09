window.onload = function(){
    function timeNow(){
        document.getElementById("displayTime").innerHTML = new Date().toLocaleString("en-SG",{timeZoneName:"short"});
        let end = document.querySelector("#toTimezone").value;
        if(end == "GMT-4"){
          document.getElementById("labelText").innerHTML = "Converted Time and Date";
          document.getElementById("displayConvertedTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"America/New_York", dateStyle: "short", timeStyle:"long", hourCycle:"h12"});
        }else if(end == "GMT+1"){
          document.getElementById("labelText").innerHTML = "Converted Time and Date";
          document.getElementById("displayConvertedTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"GB", dateStyle: "short", timeStyle:"long", hourCycle:"h12"});
        }else if(end == "GMT+7"){
          document.getElementById("labelText").innerHTML = "Converted Time and Date";
          document.getElementById("displayConvertedTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"Asia/Jakarta", dateStyle: "short", timeStyle:"long", hourCycle:"h12"});
        }else if(end == "GMT+9"){
          document.getElementById("labelText").innerHTML = "Converted Time and Date";
          document.getElementById("displayConvertedTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"Japan", dateStyle: "short", timeStyle:"long", hourCycle:"h12"});
        }else if(end == "GMT-3"){
          document.getElementById("labelText").innerHTML = "Converted Time and s";
          document.getElementById("displayConvertedTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"Brazil/East", dateStyle: "short", timeStyle:"long", hourCycle:"h12"});  
        }
      }
      //timeNow();
      setInterval(timeNow,1000);
    // if(window.document.location == "conversion.html"){
    //     //let filledTime = document.querySelector("#inputTime").value;
    //     window.alert(`custom Time: ${filledTime}`);
    //     console.log("t");
    // }
    // let button = document.getElementById("convert");
    // button.addEventListener("click",function(){
    //     let filledTime = document.querySelector("#inputTime").value;
    //     let start = document.querySelector("#fromTimezone").value;
    //     let end = document.querySelector("#toTimezone").value;
    //     window.alert(`custom Time: ${filledTime}`);
    //     window.alert(`Converting from: ${start} to ${end}`);
    //     //window.document.location = "conversion.html";     
    // });
}

let localTime = new Date();

let hours = localTime.getHours() % 12 || 12;
if(hours<10){
    hours = "0" + hours;
}

let minutes = localTime.getMinutes();
if(minutes<10){
    minutes = "0" + minutes;
}

let cycle;
if (localTime.getHours()>= 12) {
    cycle = "pm";
}
else {
    cycle = "am";
}

//let convertedTime = document.getElementById("convertedTimeZone");
console.log(hours + ":" + minutes +cycle);


// document.getElementById("convert").addEventListener("click",function(event){
//     //event.preventDefault();
//     //let filledTime = document.querySelector("#inputTime").value;
//     window.document.location ="./conversion.html";
// });



// let offsetTime = localTime.getTimezoneOffset();
// console.log(offsetTime);
// localTime.setMinutes(localTime.getMinutes()+offsetTime);
// console.log("UTC"+ localTime);

// function displayTime(){
//     let input = document.getElementById("selectedTime").innerHTML = `${hours}:${minutes}${cycle}`; 
// }
// displayTime();


// function converter(){
//     let start = document.querySelector("#fromTimezone").value;
//     let end = document.querySelector("#toTimezone").value;
//     let inputTime = document.getElementbyId("inputTime").value;

//     switch (true) {
//         case (start=="g+8" && end=="g-4"):
//                 window.alert(hours + ":" + minutes +cycle);
//             break; 
//     } 
// }


// let today = new Date();
// let days = today.getDay();
// let nameOfDays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// let date = today.getFullYear()

//let today = new Date();
// let hours = today.getHours() % 12 || 12;

//let timeControl = document.querySelector('input[type="time"]');
//let timeControl = document.querySelector('input[type="time"]');
//timeControl.value = `${today.getHours()}:${today.getMinutes()}`;
//console.log(timeControl);

// window.onload = function() {
//     document.querySelector("#fromHour").focus();   
// }

// document.getElementById("submit").addEventListener("click",function(event){
//     event.preventDefault();
//     login();
// });


//let clock = new Date().toLocaleString("en-SG",timeZone:"Asia/Singapore");

//let sgt = new Date().toLocaleString("en-SG",{timeZone:"Asia/Singapore",timeStyle:"medium", hourCycle: "h12"});
//console.log(sgt);

//let timeNow = `${hours}:${(today.getMinutes()<10?'0':'')}${today.getMinutes()}:${(today.getSeconds()<10?'0':'')}${today.getSeconds()}${dayNight}`;
//document.getElementById("displayTimeNow").innerHTML = timeNow;
// function localTime(){
//     document.getElementById("displayTimeNow").innerHTML = `${hours}:${(today.getMinutes()<10?'0':'')}${today.getMinutes()}:${(today.getSeconds()<10?'0':'')}${today.getSeconds()}${dayNight}`; 
// }
// localTime();
// setInterval(localTime,1000);

//console.log(timeNow);



