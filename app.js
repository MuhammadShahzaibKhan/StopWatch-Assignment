var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var lapContainer = document.getElementById("laps");
var startBtn;
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++
        minHeading.innerHTML =  min;
        sec = 0;
    }else if(min >= 60){
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    startBtn = document.getElementById("start").disabled = true;
}

function stop(){
    clearInterval(interval);
    startBtn = document.getElementById("start").disabled = false;
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    lapContainer.innerHTML = "";
    stop();

}

function lap(){
    if(timer){
        var li = document.createElement("li");
        li.innerHTML = hour + ":" + min + ":" + sec + ":" + msec;
        lapContainer.appendChild(li);
    }
}