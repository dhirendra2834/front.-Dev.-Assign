let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');
let count = document.getElementById('count');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let timer; // Declare the timer variable to control the stopwatch
let timerActive;

start.addEventListener('click', () => {
    timerActive = true;
    stopWatch();
});

stop.addEventListener('click', () => {
    timerActive = false;
});

reset.addEventListener('click', () => {
    timerActive = false;
    hr.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    count.innerHTML = '00';
});

function stopWatch() {
    if (timerActive) {
        count.innerHTML++;

        if (count.innerHTML == 100) {
            sec.innerHTML++;
            count.innerHTML = '00';
        }

        if (sec.innerHTML == 60) {
            min.innerHTML++;
            sec.innerHTML = '00';
        }

        if (min.innerHTML == 60) {
            hr.innerHTML++;
            min.innerHTML = '00';
        }

        // Add leading zero if needed
        hr.innerHTML = ('0' + hr.innerHTML).slice(-2);
        min.innerHTML = ('0' + min.innerHTML).slice(-2);
        sec.innerHTML = ('0' + sec.innerHTML).slice(-2);
        setTimeout(stopWatch, 10);
    }
}
