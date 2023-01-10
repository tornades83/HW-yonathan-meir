var mois = 1;
var montant = 0;
var loyerDu = 0;
var gift = false;
var loyer = solde;
var salaire = solde;
var solde = solde + salaire;
if (solde >= loyer) {
    var solde = solde - loyer;
} else {
    var loyerDu = loyer;
} alert("janvier")
var mois = mois ++;
var solde = solde + salaire / 2;
if (solde = loyerDu) {
    var solde = solde - loyerDu;
}
var loyer = loyer + 200;
if (solde <= loyer) {
    var solde = solde - loyer;
} else {
    var loyerDu = loyerDu + loyer;
} alert("fevrier")
var solde = solde - 500;
var mois = mois ++;
if(solde < 0){
    var gift = true;
    var montant =solde * -1;
}else{
    var montant = solde;
}alert("mars")
var solde = 0;
alert(mois , montant , loyer , gift);




