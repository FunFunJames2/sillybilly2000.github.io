const yippee = document.getElementById("yippee");
const wahoo = document.getElementById("wahoo");
const moar = document.getElementById("moar");
const less = document.getElementById("less");
const mode = document.getElementById("mode");
const main = document.getElementById("body");
const counterDiv = document.getElementById("counter");
const numero = document.getElementById("numero");
const audioYippee = new Audio('audio/yippee.mp3');
const audioWahoo = new Audio('audio/wahoo.mp3');

let x = 0;
let name;
let currentMode = "dark";
numero.textContent = `el numero es ${x}`;
document.getElementById("hello");
name = window.prompt("What's your name?");
console.log(name);
hello.textContent = `hi ${name}.`;
yippee.onclick = function(){
    document.getElementById("headr").textContent = "yippee";
    audioYippee.play();
}
wahoo.onclick = function(){
    document.getElementById("headr").textContent = "wahoo";
    audioWahoo.play();

}
moar.onclick = function(){
    numero.textContent = `el numero es ${x += 1}`;
    if(x == 666){
        numero.style.color = "#FF0000"
    }
    else{
        if(currentMode == "dark"){
            numero.style.color = "#FFFFFF"
        }
        else{
            numero.style.color = "#2A2A2A"
        }
    }
}
less.onclick = function (){
    numero.textContent = `el numero es ${x -= 1}`;
    if(x == 666){
        numero.style.color = "#FF0000"
    }
    else{
        if(currentMode == "dark"){
            numero.style.color = "#FFFFFF"
        }
        else{
            numero.style.color = "#2A2A2A"
        }
    }
}
mode.onclick = function(){
    if(currentMode == "dark"){
        main.style.backgroundColor = "#FFFFFF";
        main.style.color = "#2A2A2A";
        yippee.style.color = "#2A2A2A";
        yippee.style.backgroundColor = "#FFFFFF";
        wahoo.style.color = "#2A2A2A";
        wahoo.style.backgroundColor = "#FFFFFF";
        moar.style.color = "#2A2A2A";
        moar.style.backgroundColor = "#FFFFFF";
        less.style.color = "#2A2A2A";
        less.style.backgroundColor = "#FFFFFF";
        mode.style.color = "#2A2A2A";
        mode.style.backgroundColor = "#FFFFFF";
        numero.style.color = "#2A2A2A";
        currentMode = "light";
        mode.textContent = "dark mode"
    }
    else{
        main.style.backgroundColor = "#2A2A2A";
        main.style.color = "#FFFFFF";
        yippee.style.color = "#FFFFFF";
        yippee.style.backgroundColor = "#2A2A2A";
        wahoo.style.color = "#FFFFFF";
        wahoo.style.backgroundColor = "#2A2A2A";
        moar.style.color = "#FFFFFF";
        moar.style.backgroundColor = "#2A2A2A";
        less.style.color = "#FFFFFF";
        less.style.backgroundColor = "#2A2A2A";
        mode.style.color = "#FFFFFF";
        mode.style.backgroundColor = "#2A2A2A";
        numero.style.color = "#FFFFFF";
        currentMode = "dark";
        mode.textContent = "light mode"
    }
}