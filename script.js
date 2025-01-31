const dateHour = document.getElementById("dateHour");
const dateDay = document.getElementById("dateDay")
const timezoneSelector = document.querySelector(".modal_list");
const applyButton = document.querySelector(".modal_apply");
const timeZone = document.getElementById("timeZone")

dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

let selectedTimezone = "America/Sao_Paulo";
timeZone.textContent = "Brasilia (BRT UTC-3)";


const date = dayjs().format('dddd, DD MMMM, YYYY')

function updateClock(){
    const now = dayjs().tz(selectedTimezone);
    dateHour.textContent = now.format('HH:mm:ss');
}


setInterval(updateClock, 1000);
updateClock();

dateDay.textContent = dayjs().tz(selectedTimezone).format('dddd, DD MMMM, YYYY');

applyButton.addEventListener("click", () => {
    const timezoneMap = {
        "Brasilia (BRT UTC-3)": "America/Sao_Paulo",
        "New York (CST UTC-6)": "America/Chicago",
        "Spain (CET UTC+1)": "Europe/Madrid",
        "Japan (JST UTC+9)": "Asia/Tokyo",
        "Australia (ACT UTC+9:30/+10:30)": "Australia/Sydney"
    };
    const selectedOption = timezoneSelector.value;
    if (timezoneMap[selectedOption]) {
        selectedTimezone = timezoneMap[selectedOption];
        timeZone.textContent = selectedOption;
        updateClock(); // Atualizar o relógio imediatamente
        dateDay.textContent = dayjs().tz(selectedTimezone).format('dddd, DD MMMM, YYYY');
        MicroModal.close('modal-1');
    }
    timezoneSelector.value = ""
});



MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => { 
        console.info(`${modal.id} is hidden`)
        timezoneSelector.value = ""
    }, // [2]
    openTrigger: 'data-micromodal-trigger', // [3]
    closeTrigger: 'data-micromodal-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });