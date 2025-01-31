const dateDay = document.getElementById("dateDay")



const date = dayjs().format('dddd, DD MMMM, YYYY')

function updateClock(){
    const hour = dayjs().format('HH:mm:ss')
    document.getElementById("dateHour").textContent = hour;
}


setInterval(updateClock, 1000);
updateClock();
dateDay.innerHTML += date

