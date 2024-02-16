function whiteBackground() {
    const element = document.getElementsByTagName("body")[0];
    if (element.style.backgroundColor != "white") {
        element.style.backgroundColor = "white";
    }
    if (element.style.color != "black") {
        element.style.color = "black";
    }
    //console.log("Background set to white")
}

function blackBackground() {
    const element = document.getElementsByTagName("body")[0];
    if (element.style.backgroundColor != "black") {
        element.style.backgroundColor = "black";
    }
    if (element.style.color != "white") {
        element.style.color = "white";
    }
    //console.log("Background set to black")
}

function getCurrentTime() {
    const now = new Date();
    return now;
}

function padWithLeadingZero(i) {
    // Add a leading 0 to a number if it is less than 10, e.g. 9 becomes 09
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeToStr(time) {
    // Convert time to string in format hh:mm:ss
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = padWithLeadingZero(hours);
    minutes = padWithLeadingZero(minutes);
    seconds = padWithLeadingZero(seconds);

    const clockStr = `${hours}:${minutes}:${seconds}`;
    return clockStr;
}

function isItTime(now, time) {
    if (now >= time) {
        return true;
    } else {
        return false;
    }
}

function updateTime() {
    const eightForty = "08:40:00"
    const now = getCurrentTime();
    const clockStr = timeToStr(now);
    if (isItTime(clockStr, eightForty)) {
        whiteBackground();
    } else {
        blackBackground();
    }
    document.getElementById("clock").textContent = clockStr;
    setTimeout(updateTime, 10);
}