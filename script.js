const styleButton = document.getElementById("style-button");
const main = document.querySelector('.main');
const texts = document.querySelectorAll('.text');
const pointers = document.querySelectorAll('.pointer');
const hourPointer = document.getElementById('hour');
const dayLabel = document.querySelector('.day');
const monthLabel = document.querySelector('.month');
const numericDayLabel = document.querySelector('.numeric-date');
const time = document.getElementById('time');

updateLabels();
updateHour();
updateClock();

const updateTime = setInterval(updateHour, 1000);

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
    const hourDegree = +createNewDate().toLocaleString('nl-NL', {hour: 'numeric'})*15;
    console.log(hourPointer);
    hourPointer.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
}