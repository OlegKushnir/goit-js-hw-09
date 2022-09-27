import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minRef = document.querySelector('[data-minutes]');
const secRef = document.querySelector('[data-seconds]');

// console.dir(timerRef.children);
let calendar = '';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
  },
};

dateTimePicker = flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', timer);

function onStartCountdown() {
  console.log(dateTimePicker.selectedDates[0]);
  const selectedDate = dateTimePicker.selectedDates[0];
 
    const today = new Date();
    let deltaTime = (selectedDate - today) ;
      console.log('deltaTime', deltaTime);
    const sec = Number.parseInt((deltaTime%(1000*60))/1000);
    const min = Number.parseInt((deltaTime%(1000*60*60))/(1000*60));
    const hours = Number.parseInt((deltaTime%(1000*60*60*24))/(1000*60*60));
    const days = Number.parseInt(deltaTime/86400);
    
  
  return {days, hours, min, sec};
  }
function timer() {
    setInterval(()=>{
        updateTimer(onStartCountdown());
    }, 1000)
}
  function updateTimer({days, hours, min, sec}) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minRef.textContent = min;
    secRef.textContent = sec;
  }
  



