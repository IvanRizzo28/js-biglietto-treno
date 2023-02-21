let chilometri=0,eta=0;
const prezzo=0.21;

while(chilometri<=0 || eta<=0){
    chilometri=Number(prompt("inserisci i chilometri da percorrere"));
    eta=parseInt(prompt("inserisci la tua età"));
}

let prezzoBiglietto=prezzo*chilometri;
//console.log(prezzoBiglietto);
let sconto=1; //sconto=1 prezzo pieno //sconto=0.8 sconto del 20% //sconto=0.6 sconto del 40%

if(eta<18) {
    sconto=0.8;
    console.log("minorenne");
}
else if(eta>=65) {
    sconto=0.6;
    console.log("over 65");
}

prezzoBiglietto=prezzoBiglietto * sconto;

console.log("Il prezzo del biglietto è di: "+prezzoBiglietto.toFixed(2)+"€");