function colorGenerator() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}

function changeBackgroundColor() {
    const body=document.querySelector('[data-body]')
    const randomColor=colorGenerator();
    body.style.backgroundColor = randomColor
}
setInterval(changeBackgroundColor, 1000);


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function updateTime() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}


updateTime();

setInterval(updateTime, 1000);