const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

const vid_select = document.getElementById('')

function selectVid() {
    player.src = this.getAttribute('data-video-url');
    player.load();
    player.play();
}

var videoPlayOnSelect = document.querySelectorAll("button"),
    player = document.getElementById("player");

for (var i = 0; i < videoPlayOnSelect.length; i++) {
    videoPlayOnSelect[i].addEventListener("click", selectVid);
}

///// // scroll fade
const fadeElements = document.querySelectorAll(".section_content");
const fadeJobs = document.querySelectorAll(".job_content");

revealOnScroll = () => {
    let windowHt = window.innerHeight;
    fadeElements.forEach(element => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.3) {
            element.classList.add("scroll_fade");
        }
        if (elementPos > windowHt / 1.3) {
            element.classList.remove("scroll_fade");
        }
    });
    fadeJobs.forEach(element => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.2) {
            element.classList.add("scroll_fade");
        }
        if (elementPos > windowHt / 1.2) {
            element.classList.remove("scroll_fade");
        }
    });
}

document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// /////skills progress bars


const percent = 0;

function skillChoice() {
    clearInterval();
    let counter = 0;

    let percent = document.querySelector('[name="skill"]:checked').value;
    skill_percent = document.querySelector(".skills__graph");

    setInterval(() => {
        if (counter == (10 * percent) || counter == 100) {
            clearInterval();
            return;
        }
        counter++

        skill_percent.textContent = skill_percent.style.background = `conic-gradient(#02ffdd ${counter * 3.6}deg, transparent 0deg)`;
        skill_percent.textContent = skill_percent.style.lineHeight = 11;
        skill_percent.innerHTML = counter + "%";
    }, percent);
    return;
}



