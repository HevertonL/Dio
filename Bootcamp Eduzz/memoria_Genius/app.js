let order = [];
let clickedOrder = [];
let score = 0;

// 0 -> Azul / 1 -> Amarelo / 2 -> verde / 3 -> vermelho

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

//Cria ordem aleatória
let randomOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//Acende a próxima cor

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

//Checa se a os botoes clicados são os mesmo da ordem gerado no jogo

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Sua pontuação é: ${score}/nVocê acertou! Iniciando próximo nível`);
    nextLevel();
  }
};

// Função para o clique do usuário

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 500);
};

//Função que retorna a cor

let createColorElement = (color) => {
  if (color == 0) {
    return blue;
  } else if (color == 1) {
    return yellow;
  } else if (color == 2) {
    return green;
  } else {
    return red;
  }
};

// Função para o próximo nível

let nextLevel = () => {
  score++;
  randomOrder();
};

//Função que termina o jogo

let gameOver = () => {
  alert(
    `Pontuação: ${score}\n GAME OVER\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

//Função de Inicio de jogo

let playGame = () => {
  alert('Bem vindo ao jogo! Iniciando novo jogo');
  score = 0;
  nextLevel();
};

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
green.onclick = () => click(2);
red.onclick = () => click(3);

playGame();
