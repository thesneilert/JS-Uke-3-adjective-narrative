const output = document.getElementById("storyOutput");
let valgfrittOrd1 = "____";
let valgfrittOrd2 = "____";
let valgfrittOrd3 = "____";
let valgfrittOrd4 = "____";
let valgfrittOrd5 = "____";
buildStory();   

function buildStory(){
    output.innerHTML = `
    En dag hadde Eilert en ${valgfrittOrd1} idè, han skulle lage en ${valgfrittOrd2} adjektivhistorie.<br>
    Kanskje ble det ikke fullt en så ${valgfrittOrd3} historie, men du fikk hvertfall satt inn dine egne ${valgfrittOrd4} ord.<br>
    Faktisk var det ikke dine helt egne ord heller, for Eilert ga deg kun tre ${valgfrittOrd5} valgmuligheter.
    `;
}

function valgfrittOrdClick1(choice){
    valgfrittOrd1 = choice.innerHTML;
    buildStory(); 
}    

function valgfrittOrdClick2(choice){
    valgfrittOrd2 = choice.innerHTML;
    buildStory(); 
}

function valgfrittOrdClick3(choice){
    valgfrittOrd3 = choice.innerHTML;
    buildStory(); 
}

function valgfrittOrdClick4(choice){
    valgfrittOrd4 = choice.innerHTML;
    buildStory(); 
}
function valgfrittOrdClick5(choice){
    valgfrittOrd5 = choice.innerHTML;
    buildStory(); 
}