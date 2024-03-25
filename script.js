// --------Chargement des objets du DOM

var buttonEqual = document.getElementById('equal');
var inputScreen = document.getElementById('input-screen');
var resultScreen = document.getElementById('result-screen');
var boutons = document.getElementsByTagName("button");
for (var i = 0; i < boutons.length; i++) {
boutons[i].addEventListener("click", jouerSon);
}

// ------Ecouteurs d'evenements

buttonEqual.addEventListener("click",()=>{
    inputScreen.innerText="";
    inputScreen.classList.toggle('get-out');
    resultScreen.classList.toggle('scale');
});

inputScreen.addEventListener("transitionend",()=>{
    inputScreen.classList.remove('get-out');
    resultScreen.classList.remove('scale');
    inputScreen.innerText=resultScreen.innerText;
})

// -----------Fonctions

function jouerSon(event) {
    var bouton = event.target; 
    var son = document.getElementById("monSon");
    son.play();
}
