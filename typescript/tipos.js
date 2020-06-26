"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = "Joel Maykon";
//Array
var idades = [12, 23, 42];
var idades2 = [123, 22, 12, 2];
//Tuple
var jogadores;
jogadores = ["jg01", "jg02", "jg03"];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoApi = ["valor01", 1, false];
var retornoApiSecodary = {
    asd: "asdpk",
    valor: 123,
};
//Void
function printScreen(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function create(obj) {
    // ...
}
create({ prop: 1 });
//Never
function loopInfinity() {
    while (true) { }
}
function error(msg) {
    throw new Error(msg);
}
// é do tipo never por causa do return ser uma function do tipo never
function fail() {
    return error("Not found");
}
// Union Types
function displayValue(value) {
    console.log("O valor \u00E9 " + value);
}
displayValue("10");
displayValue(10);
var numberValue = 10;
displayValue(numberValue);
var numberValueString = "10";
displayValue(numberValueString);
var works = [
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
function getWorks(works) {
    for (var _i = 0, works_1 = works; _i < works_1.length; _i++) {
        var work = works_1[_i];
        console.log("Name work: " + work.name);
    }
}
getWorks(works);
// Type null
var altura = 1.6;
altura = null;
var contact = {
    name: "Joel Maykon",
    phone: "002-292929",
    phoneSecondary: null,
};
/* omitido o campo phoneSecondary sem dar erro
 *  por causa do ? na propriedade do type Contact
 */
var contact2 = {
    name: "Joel Maykon",
    phone: "002-292929",
};
// Type Assertion: definido o tipo da variável
var age = 25;
console.log(age, "type: " + typeof age);
var ageString = age.toString();
console.log(ageString, "type: " + typeof ageString);
