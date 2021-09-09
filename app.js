document.getElementById('player').addEventListener('mouseover', sumarPuntos);

let puntos = 0;
let tiempo = 30;
let necesarios = 30;

function sumarPuntos(){
    puntos++;
    document.getElementById('puntos').innerHTML = 'Puntos <b>' + puntos + '/'+ necesarios + '<b>';
    let randNum = Math.round(Math.random()*375);
    let randNum2 = Math.round(Math.random()*375);
    document.getElementById('player').style.marginTop = randNum + 'px';
    document.getElementById('player').style.marginLeft = randNum2 + 'px';
    if (puntos == 30){
        alert('Ganaste');
    }
}

function restarTiempo(){
    tiempo--;
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + tiempo;
    if(tiempo == 0){
        alert('Perdiste');
        tiempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000)