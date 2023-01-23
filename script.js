const valgfrittText = document.getElementById("valgfrittText")

var valgfrittArray = ["_______","_______","_______","_______","_______",]

const valgfrittMuligheter = [
    [dum, god, umulig],
    [kort, lang, ubrukelig],
    [kort, lang, ubrukelig],
    [kjipe, morsomme, middelmådige],
    [meningsløse, håpløse, adjektive]
]

function valgfrittFunksjonNavn(){
    valgfrittText.innerHTML = `<p>En dag hadde Eilert en ${valgfrittArray[0]} idè, han skulle lage en ${valgfrittArray[1]} adjektivhistorie.
    Kanskje ble det ikke fullt en så ${valgfrittArray[2]} historie, men du fikk hvertfall satt inn dine egne ${valgfrittArray[3]} ord.
    Faktisk var det ikke dine helt egne ord heller, for Eilert ga deg kun tre ${valgfrittArray[4]} valgmuligheter.<p>`
}

function valgfrittByttText(ord){

}