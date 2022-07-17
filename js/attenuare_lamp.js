const turn_on_off_switch = document.getElementById('lamp_switch')
const wanted_lamp = document.getElementById('wanted_lamp')
const wanted_background = document.getElementById('wanted_background')
const wanted_title = document.getElementById('title_project')
const sound_click = document.getElementById('lamp_sound')
const broken_sound = document.getElementById('broken_lamp')
const repair_sound = document.getElementById('repair_lamp')


function on_lamp() {
    if (!verify_broken_lamp()) {
        wanted_lamp.src = './img/lamp_on.png';
        wanted_background.background = './img/background_on.jpg';
        wanted_title.style.color = 'black';
    }
}

function off_lamp() {
    if (!verify_broken_lamp()) {
        if (!turn_on_off_switch.checked){
            wanted_lamp.src = './img/lamp_off.png';
            wanted_background.background = './img/background_off.jpg';
            wanted_title.style.color = 'white';
        }
    }
}

function broken_lamp() {
    wanted_lamp.src = './img/broken_lamp.png';
    wanted_background.background = './img/background_off.jpg';
    wanted_title.style.color = 'white';
    broken_sound.play()
    turn_on_off_switch.checked = false
}

function verify_broken_lamp() {
    return wanted_lamp.src.indexOf('broken_lamp') > -1;
}

function lamp_operations() {
    if (!verify_broken_lamp()) {
        if (turn_on_off_switch.checked) {
            sound_click.play();
            wanted_lamp.src = './img/lamp_on.png';
            wanted_background.background = './img/background_on.jpg';
            wanted_title.style.color = 'black';
        } else {
            sound_click.play();
            wanted_lamp.src = './img/lamp_off.png';
            wanted_background.background = './img/background_off.jpg';
            wanted_title.style.color = 'white';
        }
    }
}

function repair_lamp() {
    if (verify_broken_lamp()) {
        wanted_lamp.src = './img/lamp_off.png';
        wanted_title.style.color = 'white';
        turn_on_off_switch.checked = false;
        repair_sound.play();
    }
}

turn_on_off_switch.addEventListener('click', lamp_operations)
wanted_lamp.addEventListener('mouseover', on_lamp)
wanted_lamp.addEventListener('mouseleave', off_lamp)
wanted_lamp.addEventListener('dblclick', broken_lamp)
wanted_lamp.addEventListener('click', repair_lamp)