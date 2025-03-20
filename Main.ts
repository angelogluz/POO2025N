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