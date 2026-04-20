var password = "sio2024";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Mauvais mot de passe, veuillez réessayer.');
return false;
}
/*if(document.getElementById('pass1').value == password) {
    alert('Mot de passe correct, cliquez sur "OK" pour continuer');
    }*/
}