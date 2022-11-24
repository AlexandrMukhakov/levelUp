
const deadline = new Date(Date.parse(new Date()) + 1800 * 1000);

function setTimer(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date);

    days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}

function zero(time) {
    return time < 10 ? `0${time}` : time;
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        setTimerint = setInterval(updClock, 1000);

    updClock();

    function updClock() {
        const t = setTimer(endtime);

        days.innerHTML = zero(t.days);
        hours.innerHTML = zero(t.hours);
        minutes.innerHTML = zero(t.minutes);
        seconds.innerHTML = zero(t.seconds);

        if (t.total <= 0) {
            clearInterval(setTimerint);
        }
    }
}

setClock('.timer', deadline);


