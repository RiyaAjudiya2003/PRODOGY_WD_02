const playbtn = document.querySelector(".play");
const lapbtn = document.querySelector(".lap");
const resetbtn = document.querySelector(".reset");
const pausebtn = document.querySelector(".pause");
const time = document.querySelector(".inner-circle");
const lapElements = [
    document.getElementById("lap1"),
    document.getElementById("lap2"),
    document.getElementById("lap3"),
    document.getElementById("lap4"),
    document.getElementById("lap5")
];

let seconds = 0;
let interval = null;
let ctr=0;

playbtn.addEventListener("click",play);
lapbtn.addEventListener("click", lap);
resetbtn.addEventListener("click", reset);
pausebtn.addEventListener("click",pause);

function timer() {
    seconds++;


    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;

    if(mins < 10)
        mins = '0' + mins;

    if(hrs < 10)
        hrs = '0' + hrs;

    time.innerHTML = `${hrs} : ${mins} : ${sec}`;
}

function play() {
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
}

function lap() {
    ctr++;
    let lapIndex = ctr % 5; // Calculate which lap element to update
    lapElements[lapIndex].innerHTML = `Lap ${ctr}: ${time.innerHTML}`;
}

function pause() {
    clearInterval(interval);
    interval = null;
}
function reset() {
    pause();
    seconds = 0;
    ctr=0;
    time.innerHTML = "00 : 00 : 00";
}
