import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDate);

    const daysData = document.querySelector('[data-days]');
    const hrs = document.querySelector('[data-hours]');
    const min = document.querySelector('[data-minutes]');
    const secs = document.querySelector('[data-seconds]');
    const startBtn = document.querySelector('[data-start]');
    startBtn.disabled = false;

    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      const countdownInterval = setInterval(updateCountdown, 1000);

      function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = selectedDate.getTime() - currentDate.getTime();

        if (timeDifference <= 0) {
          clearInterval(countdownInterval);
          window.alert('Please choose a date in the future');
          return;
        } else {
          const { days, hours, minutes, seconds } = convertMs(timeDifference);

          daysData.textContent = addZero(days);
          hrs.textContent = addZero(hours);
          min.textContent = addZero(minutes);
          secs.textContent = addZero(seconds);
        }
      }
    });
  },
};

flatpickr('#datetime-picker', options);

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
