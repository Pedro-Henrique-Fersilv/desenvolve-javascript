function calcTempoRestante(dataFutura) {
    const dataAtual = new Date().getTime();
    const dataRestante = dataFutura - dataAtual;

    //converter tempos em segundos
    const segundo = 1000;
    const minuto = 60 * segundo
    const hora = 60 * minuto;
    const dia = 24 * hora;

    //calcular tempo restante
    const diasRestantes = Math.floor(dataRestante / dia);
    const horasRestantes = Math.floor((dataRestante % dia) / hora);
    const minutosRestantes = Math.floor((dataRestante % hora) / minuto);
    const segundosRestantes = Math.floor((dataRestante % minuto) / 1000);

    return {
        diasRestantes,
        horasRestantes,
        minutosRestantes,
        segundosRestantes
    }
}

function atualizaTemporizador(){
    const dataFutura = new Date('2024-10-08T12:00:00').getTime()
    const tempoRestante = calcTempoRestante(dataFutura);
    
    document.getElementById('dias').innerText = `${tempoRestante.diasRestantes}:`;
    document.getElementById('horas').innerText = `${tempoRestante.horasRestantes}:`;
    document.getElementById('minutos').innerText = `${tempoRestante.minutosRestantes}:`;
    document.getElementById('segundos').innerText = `${tempoRestante.segundosRestantes}`;
}

//atualiza temporizador
setInterval(atualizaTemporizador,1000)