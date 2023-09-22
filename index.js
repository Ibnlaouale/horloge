const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#seconde');
const nameDate = document.querySelector(('#nameDate'))
console.log();
function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours); // Ensure correct variable name (hourHand)
    nameDate.querySelector('h4').innerHTML = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);

