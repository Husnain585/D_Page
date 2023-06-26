
// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const image = document.getElementById('img');


// Show The Time

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Option
const showmPm = true;    


// AM oR PM

const amPm = hour >=12 ? 'PM' : 'AM';

// 12 Hours Format

hour = hour % 12 || 12;

// Output Time

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>:</span>
${showTime ? amPm : ''}`;

setTimeout(showTime, 1000);
}

// Add Zero

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and greeting

function setBgGreeting(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('1.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Morning';
        document.body.style.color = '#fff';
    }
    else if(hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url('2.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = '#fff';
    }
    else{
        // Evening
        document.body.style.backgroundImage = "url('3.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Evening'; 
        document.body.style.color = '#fff';
    }
}

// Get Name

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name

function setName(e){
    if(e.type === 'keypress'){
        // Make Sure EnterKeypressed
        if(e.which == 13 ||  e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}


// Get Focus

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}


// Set Focus

function setFocus(e){
    if(e.type === 'keypress'){
        // Make Sure EnterKeypressed
        if(e.which == 13 ||  e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



// Run

showTime();
setBgGreeting();
getName();
getFocus();