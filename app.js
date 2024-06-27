let listaDeNumerosSorteados = [];
let tamanhoLista = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == numeroSecreto);

  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

  if (chute == numeroSecreto) {
    exibirTexto("h1", "Acertou!");
    exibirTexto("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    limparCampo();

    tentativas++;

    if (chute > numeroSecreto) {
      exibirTexto("p", "O número secreto é menor!");
    } else {
      exibirTexto("p", "O número secreto é maior!");
    }
  }
}

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTexto("h1", "Jogo do número secreto");
  exibirTexto("p", "Escolha um número entre 1 e 10");
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * tamanhoLista + 1);
  let quantidadeElementosLista = listaDeNumerosSorteados.length;

  if (quantidadeElementosLista == tamanhoLista) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function reiniciarJogo() {
  tentativas = 1;
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
