//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = "Joel Maykon";

//Array
const idades: number[] = [12, 23, 42];
const idades2: Array<number> = [123, 22, 12, 2];

//Tuple
let jogadores: [string, string, string];
jogadores = ["jg01", "jg02", "jg03"];

//Enum
enum StatusAprovacao {
  Aprovado,
  Pendente,
  Rejeitado,
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoApi: any[] = ["valor01", 1, false];
const retornoApiSecodary: any = {
  asd: "asdpk",
  valor: 123,
};

//Void
function printScreen(msg: string) {
  console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function create(obj: object) {
  // ...
}
create({ prop: 1 });

//Never
function loopInfinity(): never {
  while (true) {}
}

function error(msg: string): never {
  throw new Error(msg);
}
// é do tipo never por causa do return ser uma function do tipo never
function fail(): never {
  return error("Not found");
}

// Union Types
function displayValue(value: number | string) {
  console.log(`O valor é ${value}`);
}

displayValue("10");
displayValue(10);

const numberValue: number | string = 10;
displayValue(numberValue);
const numberValueString: number | string = "10";
displayValue(numberValueString);

// Types alias

type Work = {
  name: string;
  lastName: string;
  age: number;
  date: Date;
};

type Works = Array<Work>;
const works: Works = [
  {
    name: "work-e",
    lastName: "ways",
    age: 25,
    date: new Date(),
  },
  {
    name: "work-a",
    lastName: "ways",
    age: 25,
    date: new Date(),
  },
];
function getWorks(works: Work[]) {
  for (const work of works) {
    console.log(`Name work: ${work.name}`);
  }
}
getWorks(works);

// Type null

let altura: number | null = 1.6;
altura = null;

type Contact = {
  name: string;
  phone: string;
  phoneSecondary?: string | null;
};
const contact: Contact = {
  name: "Joel Maykon",
  phone: "002-292929",
  phoneSecondary: null,
};

/* omitido o campo phoneSecondary sem dar erro
 *  por causa do ? na propriedade do type Contact
 */
const contact2: Contact = {
  name: "Joel Maykon",
  phone: "002-292929",
};

// Type Assertion: definido o tipo da variável
const age: any = 25;
console.log(age, `type: ${typeof age}`);

const ageString = (age as number).toString();
console.log(ageString, `type: ${typeof ageString}`);