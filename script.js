const styleButton = document.getElementById("style-button");
const main = document.querySelector('.main');
const texts = document.querySelectorAll('.text');
const dayLabel = document.querySelector('.day');
const monthLabel = document.querySelector('.month');
const numericDayLabel = document.querySelector('.numeric-date');
const time = document.querySelectorAll('.time');

const currentdate = new Date();
const day = currentdate.toLocaleDateString('en-US', { weekday: 'long' }); 
const month = currentdate.toLocaleDateString('en-US', {month: 'short' });
const date = currentdate.toLocaleDateString('en-US', { day: 'numeric' });

updateLabels();
//updateHour();

console.log(time)
const hour = currentdate.toLocaleString('nl-NL', {hour: 'numeric', minute:'2-digit', hour12:true}).toUpperCase();
time.textContent = 'faa'


styleButton.addEventListener('click', () =>{
    styleButton.classList.toggle('light');
    main.classList.toggle('light');

    texts.forEach(text => text.classList.toggle('light'));
});


function updateLabels(){
    dayLabel.textContent = day;
    monthLabel.textContent = month;
    numericDayLabel.textContent = date;
}

function updateHour(){
    const hour = currentdate.toLocaleString('nl-NL', {hour: 'numeric', minute:'2-digit', hour12:true}).toUpperCase();
    console.log(time)
    
}