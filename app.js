let q = document.getElementById("Q");
let w = document.getElementById("W");
let e = document.getElementById("E");
let a = document.getElementById("A");
let s = document.getElementById("S");
let d = document.getElementById("D");
let z = document.getElementById("Z");
let x = document.getElementById("X");
let c = document.getElementById("C");


let drumq = document.getElementById("drumQ");
let drumw = document.getElementById("drumW");
let drume = document.getElementById("drumE");
let druma = document.getElementById("drumA");
let drums = document.getElementById("drumS");
let drumd = document.getElementById("drumD");
let drumz = document.getElementById("drumZ");
let drumx = document.getElementById("drumX");
let drumc = document.getElementById("drumC");

let power = document.getElementById("power");

const drumpad = [{drum: q, mousedrum: drumq, heaterSource : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", smoothSource : "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", name: "Heater 1", name1: "Chrod 1"},
    {drum: w, mousedrum: drumw, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", name: "Heater 2", name1: "Chrod 2"},
    {drum: e, mousedrum: drume, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", name: "Heater 3", name1: "Chrod 3"},
    {drum: a, mousedrum: druma, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", name: "Heater 4", name1: "Shaker" },
    {drum: s, mousedrum: drums, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", name: "Clap", name1: "Open HH"},
    {drum: d, mousedrum: drumd, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", name: "Open-HH", name1: "Closed-HH"},
    {drum: z, mousedrum: drumz, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", name: "Kick-n'-Hat", name1: "Punchy Kick"},
    {drum: x, mousedrum: drumx, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", name: "Kick", name1: "Sided Stick"},
    {drum: c, mousedrum: drumc, heaterSource: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", smoothSource: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", name: "Closed-HH", name1: "Snare"}];


const downandon = function() {
    if(power.innerHTML === "POWER ON") {
        power.innerHTML = "POWER OFF";
    }
    else if(power.innerHTML === "POWER OFF") {
        power.innerHTML = "POWER ON";
        document.getElementById("display").innerHTML = "";

    }
}

const changemode = function() {
    let i = document.getElementById("bank");
    if ((i.innerHTML === "Heater Kit") && (power.innerHTML === "POWER OFF")) {
        i.innerHTML = "Smooth Piano Kit";
        document.getElementById("display").innerHTML = "Smooth Piano Kit";
        document.getElementById("bank").style.float = "right";

    }
    else {
        if(power.innerHTML === "POWER OFF") {
            i.innerHTML = "Heater Kit";
            document.getElementById("display").innerHTML = "Heater Kit";
            document.getElementById("bank").style.float = "left";

        }
    }

};

const clickbutton = function(number) {

    if ((document.getElementById("bank").innerHTML === "Heater Kit") && (power.innerHTML === "POWER OFF")) {
        drumpad[Number(number)].drum.setAttribute("src", drumpad[Number(number)].heaterSource);
        drumpad[Number(number)].drum.play();
        document.getElementById("display").innerHTML = drumpad[Number(number)].name;

    }
    else if ((document.getElementById("bank").innerHTML === "Smooth Piano Kit") && (power.innerHTML === "POWER OFF")) {
        drumpad[Number(number)].drum.setAttribute("src", drumpad[Number(number)].smoothSource);
        drumpad[Number(number)].drum.play();
        document.getElementById("display").innerHTML = drumpad[Number(number)].name1;

    } else if (power.innerHTML === "POWER ON") {
        drumpad[Number(number)].drum.setAttribute("src", "#");
        document.getElementById("display").innerHTML = "";


    }

}
const mousedown = function (down) {
    drumpad[Number(down)].mousedrum.style.backgroundColor = "yellow";
}
const mouseup =function (up) {
    drumpad[Number(up)].mousedrum.style.backgroundColor = "lightcyan";
}


const clickdown = function(event) {

    if (event.keyCode === 81) {

        clickbutton("0");
    }
    else if (event.keyCode === 87) {

        clickbutton("1");
    }
    else if (event.keyCode === 69) {

        clickbutton("2");
    }
    else if (event.keyCode === 65) {

        clickbutton("3");
    }
    else if (event.keyCode === 83) {

        clickbutton("4");
    }
    else if (event.keyCode === 68) {

        clickbutton("5");
    }
    else if (event.keyCode === 90) {

        clickbutton("6");
    }
    else if (event.keyCode === 88) {

        clickbutton("7");
    }
    else if (event.keyCode === 67) {

        clickbutton("8");
    }
};

