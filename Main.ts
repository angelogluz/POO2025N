import { Personagem } from "./Personagem";
import { Faker, faker, pt_BR } from '@faker-js/faker';
import prompt from "prompt-sync";

const teclado = prompt();

const opt = +teclado("Digite uma opção");

export const fakerBR = new Faker({
    locale: [pt_BR],
  });

for (let index = 0; index < 10; index++) {
    console.log(fakerBR.commerce.product());
    console.log(fakerBR.person.fullName());
}

const nome:string = "Angelo";

const boneco: Personagem = new Personagem();
boneco.nome = "Edécio";
boneco.armadura = 10;
boneco.classe =  "Mago";
boneco.defesa = 5;
boneco.ataque = 60;
boneco.energia = 80;
boneco.raca = "Morto-vivo";



const boneco2 = {...boneco};
boneco2.nome = "Gladimir";

const boneco3 = new Personagem();
boneco3.nome = "Bruna";

console.log(boneco.nome); // Edécio
console.log(boneco.energia); //80
console.log(boneco2.nome); // Gladimir
console.log(boneco2.energia); // 80
console.log(boneco3.nome); // Bruna
console.log(boneco3.energia); // 0

function treinarAtaque(person: Personagem, numHoras: number){

    person.energia -= randomizar(15,30) * numHoras;
    const morreu: boolean = person.energia < 0;
    if(morreu){
        throw new Error(`${person.nome} subiu!`)
    }
    person.ataque = 10 + (person.ataque * 1.1) * numHoras;
}

function randomizar(base: number, limite: number){
    return Math.round(base + Math.random()*limite-base)
}

console.log(boneco);
treinarAtaque(boneco,2)
console.log(boneco);

