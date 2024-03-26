// --------Chargement des objets du DOM

var buttonEqual = document.getElementById('equal');
var inputScreen = document.getElementById('input-screen');
var resultScreen = document.getElementById('result-screen');
var myList = document.getElementById('list');
var son = document.getElementById("monSon");
var arrow = document.getElementById('rotate-up');
var menu = document.getElementById('menu');
var backspace = document.getElementById('backspace');
var clear = document.getElementById('clear');
var point = document.getElementById('point');
var boutons = document.getElementsByTagName("button");
var numberButtons = document.getElementsByClassName('number');
var oparatorButtons = document.getElementsByClassName('operator');


// assignation des events handlers
for (var i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", jouerSon);
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click",getNumber);
}

for (let i = 0; i < oparatorButtons.length; i++) {
    oparatorButtons[i].addEventListener("click",getOperator);
}

// ------Ecouteurs d'evenements

buttonEqual.addEventListener(
    "click",
    ()=>{
        resultScreen.innerHTML=show();
        inputScreen.classList.toggle('get-out');
    }
);

inputScreen.addEventListener(
    "transitionend",()=>{
        inputScreen.classList.remove('get-out');
        inputScreen.innerText=resultScreen.innerText;
    }
)

myList.addEventListener(
    "click",
    ()=>{
        arrow.classList.toggle('rotate-down');
        menu.classList.toggle('menu-visible');
    }
)

backspace.addEventListener(
    "click",
    ()=>{
        resultat=resultat.slice(0,-1);
        inputScreen.innerText=resultat;
    }
)

clear.addEventListener(
    "click",
    ()=>{
        inputScreen.innerText=resultat="0";
    }
)

point.addEventListener(
    'click',
    ()=>{
        resultat+=".";
        inputScreen.innerText=resultat;
    }
)

// -----------Fonctions
var resultat = "";

function jouerSon(event) {
    son.play();
}


function getNumber(event){
    resultat +=event.target.innerText;
    inputScreen.innerText = resultat;
}

function getOperator(event){
    resultat +=event.target.innerText;
    inputScreen.innerText = resultat;
}

function show(){
    return Number(resultat);
}