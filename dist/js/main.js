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
    let skill_readout_label_id = document.querySelector('[name="skill"]:checked').id;
    skills__graph = document.querySelector(".skills__graph");
    skill_readout_percent = document.querySelector("#skill_readout_percent");
    skill_readout_label = document.querySelector("#skill_readout_label");

    setInterval(() => {
        if (counter == percent) {
            clearInterval();
            return;
        }
        counter++

        skill_readout_percent.textContent = skills__graph.style.background = `conic-gradient(#02ffdd ${counter * 3.6}deg, transparent 0deg)`;
        skill_readout_percent.innerHTML = counter + "%";

        document.getElementById("skill_readout_label").hidden = false;
        skill_readout_label.innerHTML = skill_readout_label_id;
    }, percent / 10);
    return;
}


// /////video section
let video = document.getElementById('video');
let vidClose = document.getElementsByClassName("video-close");
let vidPlayer = document.getElementsByClassName("video-player");
let toggle__fade = document.getElementsByClassName("toggle__fade");


function preview_select() {
    let preview = document.querySelector('[name="preview"]:checked').value;

    toggle__fade[0].style.cssText = "color: transparent; text-shadow: none";
    vidClose[0].style.cssText = "opacity: 1";
    video.style.cssText = "opacity: 1; display: visible";
    video.src = `/Portfolio2021/dist/videos/${preview}`;
   return 
};

vidClose[0].addEventListener("click", videoClose);
function videoClose() {
    video.style.cssText = "opacity: 0; display: hidden";
    vidClose[0].style.cssText = "opacity: 0";
    toggle__fade[0].style.cssText = "color: #ef7f31; text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.7), 1px -1px rgb(0, 0, 0), 2px -1px 0 rgba(27, 27, 27, 0.7), -1px 1px 0 rgba(0, 0, 0, 0.7), 1px 1px 0 rgba(39, 39, 39, 0.7)";

let reset = document.querySelector('input[type=radio][name=preview]:checked');
reset.checked = false;
};


