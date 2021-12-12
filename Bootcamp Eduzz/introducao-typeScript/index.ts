// Typescript auxiliando na obrigatoriedade da typagem

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 3));

//Types - Para fazer junções das interfaces ou merges
//Interfaces - Definir contratos de estrutura de dados

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

const animal: IAnimal = {
  nome: 'Mamute',
  tipo: 'terrestre',
  domestico: false,
};

//Interface herdada

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  domestico: false,
};

//Utilização de types

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal2: IDomestico = {
  nome: 'cachorro',
  tipo: 'terrestre',
  domestico: true,
  porte: 'médio',
};

// Mostrar para o Typescript como capturar o value digitado

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

//Generic types
