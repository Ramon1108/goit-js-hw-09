import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const daysData = document.querySelector('[data-days]');
const hrs = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const secs = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let countdownInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    const timeDifference = selectedDate.getTime() - Date.now();

    if (timeDifference <= 0) {
      alert('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;

    console.log(selectedDate);
  },
};

const datePick = flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  countdownInterval = setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  const selectedDate = datePick.selectedDates[0];
  const timeDifference = selectedDate.getTime() - Date.now();

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  objValue(daysData, hrs, min, secs, days, hours, minutes, seconds);
}

function objValue(day, hour, min, sec, days, hours, minutes, seconds) {
  day.textContent = addZero(days);
  hour.textContent = addZero(hours);
  min.textContent = addZero(minutes);
  sec.textContent = addZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return value.toString().padStart(2, '0');
}
