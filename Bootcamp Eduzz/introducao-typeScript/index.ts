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

function preencheList<T>(array: any[], valor: T) {
  return array.map(() => valor);
}

preencheList(['A', 'B', 'C'], 'd');

//Condicionais no typescript

interface IUsuario {
  id: string;
  email: string;
}
interface IAdmin {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    //redirecionar para a área de Administrador
  } else {
    //redirecionar para a área de usuário
  }
}

//Variáveis com propriedade readonly e private

interface SuperHeroi {
  nome: string;
  forca: number;
  voa?: boolean;
}

type SuperHeroiLeitura = {
  +readonly [K in keyof SuperHeroi]: SuperHeroi[K];
};

class MyHero implements SuperHeroiLeitura {
  nome;
  forca;

  constructor(nome, forca) {
    this.nome = nome;
    this.forca = forca;
  }
}

const heroi = new MyHero('Super Choque', 50);
