
const startBtn = document.querySelector('.button_start')
const pauseBtn = document.querySelector('.button_pause')
const resetBtn = document.querySelector('.button_reset')
const timerMinutes = document.querySelector('.minutes')
const timerSecond = document.querySelector('.seconds')
const hundredthsSecond = document.querySelector('.hundredths-seconds')


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () =>{
  milliseconds++;
  hundredthsSecond.innerHTML = milliseconds;
//--------усоловие предотвращающее проскакивание  100
 if(milliseconds <= 99){
  hundredthsSecond.innerHTML = milliseconds;
 }
 if(milliseconds == 100){
  hundredthsSecond.innerHTML = '00'
 }
//--------
  if(milliseconds > 99){
    seconds++
    timerSecond.innerHTML = '0' + seconds;
    milliseconds = 0;
  }
  if(seconds > 9){
  timerSecond.innerHTML = seconds;
  }
  if(seconds > 99){
    minutes++;
    timerMinutes.innerHTML = '0' + minutes;

    seconds = 0;
    timerSecond.innerHTML = '0' + seconds;
  }
  if(minutes > 9){
    timerMinutes.innerHTML = minutes;
  }
};

startBtn.addEventListener('click', ()=>{
  
  startBtn.setAttribute('disabled', 'true')
  interval = setInterval(startTimer, 10)
  pauseBtn.removeAttribute('disabled', 'false')
})
resetBtn.addEventListener('click',()=>{
  startBtn.removeAttribute('disabled', 'false')
  pauseBtn.removeAttribute('disabled', 'false')
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
   timerMinutes.innerHTML = '00';
   timerSecond.innerHTML = '00';
   hundredthsSecond.innerHTML = '00'
})
pauseBtn.addEventListener('click',()=>{
  startBtn.removeAttribute('disabled', 'false')
  pauseBtn.setAttribute('disabled', 'true')
  clearInterval(interval);
})


