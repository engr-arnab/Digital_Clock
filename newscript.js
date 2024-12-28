//SECOND 

function second() {
    var secondtime = new Date().getSeconds().toString()

    if (secondtime.length == '1') {
        return 0 + secondtime
    }

    else {
        return secondtime
    }
}

function finalSecondTime() {
    var Secondtime = second()

    // console.log(time)

    document.getElementsByClassName("secboxtime")[0].innerHTML = `${Secondtime}`
}

setInterval(() => {

    finalSecondTime()

}, 1);

//MINUTE

function minute() {
    var minutetime = new Date().getMinutes().toString()

    if (minutetime.length == '1') {
        return 0 + minutetime
    }

    else {
        return minutetime
    }
}

function finalMinuteTime() {
    var Minutetime = minute()

    // console.log(time)

    document.getElementsByClassName("minboxtime")[0].innerHTML = `${Minutetime}`
}

setInterval(() => {

    finalMinuteTime()

}, 1);

//HOUR

function hour() {
    var hourtime = new Date().getHours().toString()

    if (hourtime.length == '1') {
        return 0 + hourtime
    }

    else {
        return hourtime
    }
}

function finalHourTime() {
    var Hourtime = hour()

    // console.log(time)

    document.getElementsByClassName("hourboxtime")[0].innerHTML = `${Hourtime}`
}

setInterval(() => {

    finalHourTime()

},1);

const date = new Date();
const month = date.getMonth(); // Returns the month as a zero-based value (0 for January, 1 for February, etc.)

// To get the current month's name:
const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
console.log(monthNames[month]);

document.getElementsByClassName("month")[0].innerHTML = `${monthNames[month]}`

const d = new Date();
console.log(d.getDate())

document.getElementsByClassName("date")[0].innerHTML = `${d.getDate()}`


const de = new Date();
let year = de.getFullYear();

console.log(year);

document.getElementsByClassName("year")[0].innerHTML = `${year}`
