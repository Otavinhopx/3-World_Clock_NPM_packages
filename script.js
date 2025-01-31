const dateDay = document.getElementById("dateDay")



const date = dayjs().format('dddd, DD MMMM, YYYY')

function updateClock(){
    const hour = dayjs().format('HH:mm:ss')
    document.getElementById("dateHour").textContent = hour;
}


setInterval(updateClock, 1000);
updateClock();
dateDay.innerHTML += date

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-micromodal-trigger', // [3]
    closeTrigger: 'data-micromodal-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });