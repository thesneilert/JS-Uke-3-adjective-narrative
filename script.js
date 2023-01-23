const output = document.getElementById("storyOutput");
let valgfrittOrd1 = "<span style='color: red;'>____</span>";
let valgfrittOrd2 = "<span style='color: blue;'>____</span>";
let valgfrittOrd3 = "<span style='color: green;'>____</span>";
let valgfrittOrd4 = "<span style='color: orange;'>____</span>";
let valgfrittOrd5 = "<span style='color: purple;'>____</span>";
buildStory();   

function buildStory(){
    output.innerHTML = `
    En dag hadde Eilert en <span style='color: red;'>${valgfrittOrd1}</span> idè, han skulle lage en <span style='color: blue;'>${valgfrittOrd2}</span> adjektivhistorie.<br>
    Kanskje ble det ikke fullt en så <span style='color: green;'>${valgfrittOrd3}</span> historie, men du fikk hvertfall satt inn dine egne <span style='color: orange;'>${valgfrittOrd4}</span> ord.<br>
    Faktisk var det ikke dine helt egne ord heller, for Eilert ga deg kun tre <span style='color: purple;'>${valgfrittOrd5}</span> valgmuligheter.
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