window.addEventListener("DOMContentLoaded", () => {

    //timer
    const deadline = new Date(Date.parse(new Date()) + 1800 * 1000);

    function setTimer(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date),

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




    //slider


    const slideFild = document.querySelector('.offer_slide_inner');
    const slideWraper = document.querySelector('.offer_slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const nextArrow = document.querySelector('#next');
    const prevArrow = document.querySelector('#back');
    const width = window.getComputedStyle(slideWraper).width;


    let offset = 0;


    slideFild.style.width = 100 * slides.length + '%';

    nextArrow.addEventListener("click", () => {

        if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slideFild.style.transform = `translateX(-${offset}px)`;


    });

    prevArrow.addEventListener("click", () => {
        if (offset == 0) {
            offset = (+width.replace(/\D/g, '') * (slides.length - 1));
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        slideFild.style.transform = `translateX(-${offset}px)`;


    });



//modal

const but = document.querySelector('.buttonOrder');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

function openModal () {
    modal.classList.remove('hide');
    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
}

but.addEventListener("click", () => {
    openModal();
    form.reset();
});

setInterval(closeModal, 3000);






});