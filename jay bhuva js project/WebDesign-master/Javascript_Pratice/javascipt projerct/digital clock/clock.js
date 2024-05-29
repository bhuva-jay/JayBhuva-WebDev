const time = document.getElementById('time');
const timeformate = document.getElementById('timeformate');
// const ate1= document.getElementsById("ate1");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let date1=date.getDate();
    let mon= date.getMonth()
    let day= date.getDay()
    
    
    // hr = hr < 10 ? `0${hr}` : hr;
    // mins = mins < 10 ? `0${mins}` : mins;
    // secs = hr < 10 ? `0${mins}` : secs;
   

    time.innerHTML = `${hr} :${mins}: ${secs}:${date1} : ${mon} `
    // ate1.innerHTML=`${date1}`
    timeformate.innerHTML = hr > 12 ? "PM" : "AM";
    


//     let dow = [
//         "sunday",
//         "monday",
//         "tuesday",
//         "wednesday",
//         "thursday",
//         "friday",
//         "saturday"
//     ],
//     month=[
//         "January",
//         " February", 
//         "March",
//         " April",
//         " May",
//         " June",
//         " July",
//         " August",
//         " September",
//         " October",
//         " November",
//         " December"
//     ],
//     day = date.getdate()

//     let currentDate = dow[date.getDay()]+","+month[date.getMonth()]+""+day
//    document.getElementsByClassName("Daate")[0].innerHTML=currentDate
}