converter = function(time) {
    var minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var seconds = time % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

countdown = async function(duration) {
    timer = document.getElementById('timer');
    while (duration >= 0) {
        timer.innerHTML = converter(duration);
        await delay(1000);
        duration--;
    }
}

cleanup = function() {
    var boxes = document.getElementById('pomodoroBoxes');
    boxes.remove();
    var buttonContinue = document.getElementById('continue');
    buttonContinue.innerHTML = "CONTINUE";
}

var breakWork = 0; // 0 = work, 1 = break
var cycle = 1;
var type; // 3 for 3 hour, 2 for 2 hour, 1 for 1 hour

continueButton = function() {
    if (breakWork === 0) {
        countdown(10);
        breakWork = 1;
    } else if (breakWork === 1 && cycle % 6 !== 0) {
        countdown(3);
        breakWork = 0;
    } else {
        countdown(15);
        breakWork = 0;
    }
    cycle++;
    if (type === 1 && cycle === 4) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    } else if (type === 2 && cycle === 8) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    } else if (type === 3 && cycle === 12) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    }
}

threeHour = function() {
    cleanup();
    type = 3;
    continueButton();
}