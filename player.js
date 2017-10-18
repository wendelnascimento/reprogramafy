var botaoPlay = document.querySelector('.botao-play');
var audio = document.querySelector('#player audio');
var duracao = document.querySelector('.duracao');
var tempoAtual = document.querySelector('.tempo-atual');

botaoPlay.onclick = function() {
    if(audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
}

audio.onloadeddata = function() {
  duracao.innerText = '00:' + Math.round(audio.duration);
}

audio.ontimeupdate = function(e) {
  var larguraBarra = (audio.currentTime / audio.duration) * 100;
  var barra = document.querySelector('.tocado');
  barra.style.width = larguraBarra + '%';
  
  // Arredonda o valor do tempo atual
  var duracaoAtual = Math.round(audio.currentTime);
  
  // O CÓDIGO ABAIXO É SÓ PRA TRANSFORMAR 00:1 em 00:01
  // transform em string
  //Com o tempo atual em string a gente coloca  o 0 no começo
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  duracaoAtual = duracaoAtual.toString().padStart(2, '0');

  tempoAtual.innerText = '00:' + duracaoAtual;
}
