import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');

startButtonEnabeld(startButton, false);

let userSelectedDate = '';
const currentDate = new Date();

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = new Date(selectedDates[0]);
    if (userSelectedDate <= currentDate) {
      iziToast.error({
        message: 'Please choose a date in the future',
        timeout: 2000,
        color: 'red',
        position: 'topRight',
        transitionIn: 'fadeInDown',
        progressBar: false,
        icon: 'material-icons',
      });
      startButtonEnabeld(startButton, false);
    } else {
      startButtonEnabeld(startButton, true);
    }
  },
});

function startButtonEnabeld(startButton, condition = false) {
  if (condition === false) {
    startButton.setAttribute('disabled', 'true');
  } else {
    startButton.removeAttribute('disabled');
  }
}
