const styleButton = document.getElementById("style-button");
const main = document.querySelector('.main');
const texts = document.querySelectorAll('.text');
const pointers = document.querySelectorAll('.pointer');
const hourPointer = document.getElementById('hour');
const minPointer = document.getElementById('minute');
const secPointer = document.getElementById('second');
const dayLabel = document.querySelector('.day');
const monthLabel = document.querySelector('.month');
const numericDayLabel = document.querySelector('.numeric-date');
const time = document.getElementById('time');

updateLabels();
updateHour();
updateClock();

const updateTime = setInterval(updateHour, 1000);
const updateClockTimer = setInterval(updateClock, 1000);

styleButton.addEventListener('click', () =>{
    styleButton.classList.toggle('light');
    main.classList.toggle('light');
    pointers.forEach(pointer => pointer.classList.toggle('light'));
    texts.forEach(text => text.classList.toggle('light'));
});


function updateLabels(){
    dayLabel.textContent = createNewDate().toLocaleDateString('en-US', { weekday: 'long' }); 
    monthLabel.textContent = createNewDate().toLocaleDateString('en-US', {month: 'short' });
    numericDayLabel.textContent = createNewDate().toLocaleDateString('en-US', { day: 'numeric' });
}

function updateHour(){
    const hour = createNewDate().toLocaleString('nl-NL', {hour: 'numeric', minute:'2-digit', hour12:true}).toUpperCase();
    time.textContent = hour;   

}

function createNewDate(){
    const currentdate = new Date();
    return currentdate;
}

function updateClock(){
    const time = createNewDate();
    const hourDegree = +time.toLocaleString('nl-NL', {hour: 'numeric'})*30;
    const minuteDegree = +time.toLocaleString('nl-NL', {minute:'2-digit'})*6;
    const secondsDegree = +time.toLocaleString('nl-NL', {second: 'numeric'})*6;
    hourPointer.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
    minPointer.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
    secPointer.style.transform = `translate(-50%, -100%) rotate(${secondsDegree}deg)`;
}
