const time = document.getElementById('time');
const timeformate = document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let date1 = date.getDate()
    
    hr = hr < 10 ? `0${hr}` : hr;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = hr < 10 ? `0${mins}` : secs;
    date1 = hr < 10 ? `0${date1}` : date1;


    time.innerHTML = `${hr} :${mins}: ${secs}`
    timeformate.innerHTML = hr > 12 ? "PM" : "AM";
}