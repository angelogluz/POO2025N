import { Personagem } from "../models/Personagem";
import { Faker, faker, pt_BR } from '@faker-js/faker';
import prompt from "prompt-sync";

const teclado = prompt();

const opt = +teclado("Digite uma opção");

export const fakerBR = new Faker({
    locale: [pt_BR],
});

const heroi: Personagem = new Personagem();
heroi.nome = "Edécio";
heroi.atributos.armadura = 10;
heroi.classe = "Mago";
heroi.atributos.defesa = 5;
heroi.atributos.ataque = 60;
heroi.status.energia = 80;
heroi.raca = "Morto-vivo";

function treinarAtaque(): void {
    const horas = +teclado("Digite o número de horas para treinar ataque");
    const mensagem = heroi.treinarAtaque(horas);
    console.log(mensagem);
}

function treinarDefesa(): void {
    const horas = +teclado("Digite o número de horas para treinar defesa");
    const mensagem = heroi.treinarDefesa(horas);
    console.log(mensagem);
}

function descansar(): void {
    const horas = +teclado("Digite o número de horas para descansar");
    const mensagem = heroi.descansar(horas);
    console.log(mensagem);
}
function desafiar(): void {
    const nivel = +teclado("Digite o nível do personagem desafiado");
    const mensagem = heroi.desafiar(nivel);
    console.log(mensagem);
}
