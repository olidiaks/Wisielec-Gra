var haslo = "Bez pracy nie ma kołaczy";

haslo = haslo.toUpperCase();

var hasloZakodowane = "";

var iloscBlendneOdpowiedzi = 0;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

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

window.onload = ()=>{
    wypiszHaslo();
    var trescDiva ="";

    for(var i = 0; i <= 34; i++){
        trescDiva += '<div class="litera" id="'+"lit" + i+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
        if((i+1) % 7 == 0) trescDiva = trescDiva + '<div style="clear: both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = trescDiva;
};

String.prototype.ustawZnak = function(miejsce, znak){
    if(miejsce > this.length - 1){
        return this.toString();
    }
    else {
        return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
    }
}

function sprawdz(nr){

    var trafiona = false;

    for(var i = 0; i < haslo.length; i++){
        if(haslo.charAt(i) == litery[nr]){
           hasloZakodowane = hasloZakodowane.ustawZnak(i,litery[nr]);
           trafiona = true;
        }
    }

    if(trafiona == true){
        document.getElementById("lit" + nr).style.backgroundColor = "#003300";
        document.getElementById("lit" + nr).style.color = "#00C000";
        document.getElementById("lit" + nr).style.border = "3px solid #00C000";
        document.getElementById("lit" + nr).style.cursor = "default";

        wypiszHaslo();
    }
    else{
        document.getElementById("lit" + nr).style.backgroundColor = "#330000";
        document.getElementById("lit" + nr).style.color = "#C00000";
        document.getElementById("lit" + nr).style.border = "3px solid #C00000";
        document.getElementById("lit" + nr).style.cursor = "default";
        document.getElementById("lit" + nr).setAttribute("onclick",";");

        iloscBlendneOdpowiedzi++;
        document.getElementById("szubieniaca").innerHTML = '<img src="img/s'+iloscBlendneOdpowiedzi+'.jpg">';
    }
    
}