import { Faker, faker, pt_BR } from '@faker-js/faker';
import { Status } from './Status';
import { Atributos } from './Atributos';

export class Personagem {
    nome: string = "";
    raca: string = "";
    classe: string = "";
    status: Status = new Status();
    atributos: Atributos = new Atributos();

    treinarAtaque(numHoras: number): string {
        
        this.status.energia -= Util.randomizar(15, 30) * numHoras;
        const morreu: boolean = this.status.energia < 0;
        if (morreu) {
            throw new Error(`${this.nome} morreu!`)
        }
        this.atributos.ataque = 10 + (this.atributos.ataque * 1.1) * numHoras;
        return (`${this.nome} treinou ataque por ${numHoras} horas e agora tem ${this.atributos.ataque} de ataque!`);
        
    }

    treinarDefesa(numHoras: number): string {
        this.status.energia -= Util.randomizar(15, 30) * numHoras;
        const morreu: boolean = this.status.energia < 0;
        if (morreu) {
            throw new Error(`${this.nome} morreu!`)
        }
        this.atributos.defesa = 10 + (this.atributos.defesa * 1.1) * numHoras;
        return (`${this.nome} treinou defesa por ${numHoras} horas e agora tem ${this.atributos.defesa} de defesa!`);
    }

    descansar(numHoras: number): string {
        this.status.energia += Util.randomizar(10, 20) * numHoras;
        if (this.status.energia > 100) {
            const energiaExcedente = this.status.energia - 100;
            this.status.energia = 100;
            const percentualPerda = energiaExcedente / 100;
            this.atributos.defesa -= this.atributos.defesa * percentualPerda;
            this.atributos.ataque -= this.atributos.ataque * percentualPerda;
        }
        return (`${this.nome} descansou por ${numHoras} horas e agora tem ${this.status.energia} de energia!`);
    }
    desafiar(nivel: number): string {
        let mensagem: string = '';
        const fakerBR = new Faker({
            locale: [pt_BR],
        });        
        const personagemDesafiado: Personagem = new Personagem();
        personagemDesafiado.nome = fakerBR.person.firstName();
        personagemDesafiado.status.energia = 100;
        personagemDesafiado.atributos.defesa = Util.randomizar(110, 150) * nivel;
        personagemDesafiado.atributos.ataque = Util.randomizar(120, 200) * nivel;
        while (true) {
            const dado = Util.randomizar(1, 2);
            if (dado === 1) {
                this.status.energia -= Math.max(1, personagemDesafiado.atributos.ataque - this.atributos.defesa);
                console.log(`${this.nome} atacou ${personagemDesafiado.nome} e causou ${Math.max(1, personagemDesafiado.atributos.ataque - this.atributos.defesa)} de dano!`);
    
            } if (dado === 2) {
                personagemDesafiado.status.energia -= Math.max(1, this.atributos.ataque - personagemDesafiado.atributos.defesa);
                console.log(`${personagemDesafiado.nome} atacou ${this.nome} e causou ${Math.max(1, this.atributos.ataque - personagemDesafiado.atributos.defesa)} de dano!`);
            }
            if(personagemDesafiado.status.energia <= 0){
                this.status.xp += nivel * 2;
                mensagem = (`${this.nome} venceu ${personagemDesafiado.nome} e ganhou ${nivel * 2} de XP!`);
                break;
            }
            if(this.status.energia <= 5) {
                this.status.xp -= this.status.xp * 0.1; 
                mensagem = (`${this.nome} perdeu para ${personagemDesafiado.nome} e perdeu 10% de XP!`);  
                break;
            }
        }
        return mensagem;
    }
}

