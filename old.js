// let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // Request a weekday along with a long date
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(date.toLocaleString('en-sg', options));
// // → "Donnerstag, 20. Dezember 2012"

// // An application may want to use UTC and make that visible
// options.timeZone = 'UTC';
// options.timeZoneName = 'short';

// console.log(date.toLocaleString('en-sg', options));
// // → "Thursday, December 20, 2012, GMT"

// // Sometimes even the US needs 24-hour time
// console.log(date.toLocaleString('en-sg', { hour12: false }));
// // → "12/19/2012, 19:00:00"

//
let sgt = new Date().toLocaleString("en-SG",{timeZone:"Asia/Singapore",timeStyle:"medium", hourCycle: "h12"});
console.log(sgt);
//
function sgt(){
    document.getElementById("urTimezone").innerHTML = new Date().toLocaleString("en-SG",{timeZoneName:"long"});
    document.getElementById("sgt").innerHTML = new Date().toLocaleString("en-SG",{timeZone:"Asia/Singapore",timeStyle:"medium", hourCycle: "h12"});
    }
    sgt();
    setInterval(sgt,1000);
//
function localTime(){
    document.getElementById("displayTimeNow").innerHTML = `${hours}:${(today.getMinutes()<10?'0':'')}${today.getMinutes()}:${(today.getSeconds()<10?'0':'')}${today.getSeconds()}${dayNight}`; 
    }
    localTime();
    setInterval(localTime(),1000);
//

class TimeNow {
    constructor (hour,minute,cycle) {
        this.hour = hour;
        this.minute = minute;
        this.cycle = cycle;
    }
    getTime (){
        return `${this.hour}:${this.minute}${this.cycle}`;
        // return this.hour,":",this.minute,this.cycle;
    }
}