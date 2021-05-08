var haslo = "Bez pracy nie ma kołaczy";

var hasloZakodowane = "";

for(var i = 0; i< haslo.length; i++){
    if(haslo.charAt(i) == " "){
        hasloZakodowane += " ";
    }
    else{
        hasloZakodowane += "-";
    }
}

function wypiszHaslo(){
    document.getElementById("plansza").innerHTML = hasloZakodowane;
}

window.onload = wypiszHaslo;