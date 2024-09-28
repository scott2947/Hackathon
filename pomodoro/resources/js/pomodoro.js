var cat_video_present = true;

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
    if (cat_video_present == false) {
        document.getElementById('video-for-cats').innerHTML = "<iframe class='video' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/Kr1XVY3dLUg?autoplay=1'></iframe>";
        cat_video_present = true;
    } else {
        document.getElementById('video-for-cats').innerHTML = "";
        cat_video_present = false;
    }
    
    timer = document.getElementById('timer');
    while (duration >= 0) {
        timer.innerHTML = converter(duration);
        await delay(1000);
        duration--;
    }
    var buttonContinue = document.getElementById('continue');
    buttonContinue.innerHTML = "CONTINUE";
}

cleanup = function() {
    var boxes = document.getElementById('pomodoroBoxes');
    boxes.remove();
    // var buttonContinue = document.getElementById('continue');
    // buttonContinue.innerHTML = "CONTINUE";
}

var breakWork = 0; // 0 = work, 1 = break
var cycle = 1;
var type;

continueButton = function() {
    var buttonContinue = document.getElementById('continue');
    buttonContinue.innerHTML = "";
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
    } else if (type === 4 && cycle === 16) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    } else if (type === 5 && cycle === 20) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    } else if (type === 6 && cycle === 24) {
        var buttonContinue = document.getElementById('continue');
        buttonContinue.remove();
    }
}

sixHour = function() {
    cleanup();
    type = 6;
    continueButton();
}
fiveHour = function() {
    cleanup();
    type = 5;
    continueButton();
}
fourHour = function() {
    cleanup();
    type = 4;
    continueButton();
}
threeHour = function() {
    cleanup();
    type = 3;
    continueButton();
}
twoHour = function() {
    cleanup();
    type = 2;
    continueButton();
}
oneHour = function() {
    cleanup();
    type = 1;
    continueButton();
}