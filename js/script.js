// --------Chargement des objets du DOM

let buttonEqual = document.getElementById('equal');
let inputScreen = document.getElementById('input-screen');
let resultScreen = document.getElementById('result-screen');
let myList = document.getElementById('list');
let son = document.getElementById("monSon");
let arrow = document.getElementById('rotate-up');
let menu = document.getElementById('menu');
let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');
let point = document.getElementById('point');
let factoriel = document.getElementById('factoriel');
let round = document.getElementById('round');
let boutons = document.getElementsByTagName("button");
let numberButtons = document.getElementsByClassName('number');
let oparatorButtons = document.getElementsByClassName('operator');

// --------variables locals
let resultat = "";
let lastIsOperator = false;
let lastIsPoint = false;

// assignation des events handlers
for (let i = 0; i < boutons.length; i++) {
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

        let newLi = document.createElement('li');
        newLi.innerText=resultat+'='+show();
        resultat=show();
        menu.insertBefore(newLi,menu.firstChild);
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
        lastIsPoint=false;
        lastIsOperator=false;
    }
)

clear.addEventListener(
    "click",
    ()=>{
        inputScreen.innerText=resultat=""
        resultScreen.innerText="0";
    }
)

point.addEventListener(
    'click',
    ()=>{
        if (!lastIsPoint) {
            resultat+=".";
            inputScreen.innerText=resultat;
            lastIsPoint=true;
            lastIsOperator=false;    
        }
    }
)

factoriel.addEventListener(
    'click',
    ()=>{
        resultat=resultat.slice(0,-1);
        inputScreen.innerText=resultScreen.innerText=resultat=String(factorielle(eval(resultat)));
    }
)

round.addEventListener(
    'click',
    ()=>{
        let nombre = parseFloat(resultat);
        let arrondiInf = Math.floor(nombre);
        let arrondiSup = Math.ceil(nombre);
        if (nombre-arrondiInf<0.5)
            inputScreen.innerText=resultScreen.innerText=resultat=arrondiInf;
        else
            inputScreen.innerText=resultScreen.innerText=resultat=arrondiSup;
    }
)
// -----------Fonctions

function jouerSon(event) {
    son.play();
}

function factorielle(n){
    if(n===0)
        return 1;

    return n*factorielle(n-1);
}       

function getNumber(event){
    lastIsOperator=false;
    lastIsPoint=false;
    resultat +=event.target.innerText;
    inputScreen.innerText = resultat;
}

function getOperator(event){
    if (!lastIsOperator) {
        resultat +=event.target.innerText;
        inputScreen.innerText = resultat;
        lastIsOperator=true;
        lastIsPoint=false;    
    }
}

function show(){
    return String(eval(resultat));
}