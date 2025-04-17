import { VALOR_INVALIDO } from "./constantes";

export class ContaBancaria{

    saldo: number = 0;
    numero: string = '';


    depositar(arg0: number): void {
        
        if(arg0 < 0){
            throw new Error(VALOR_INVALIDO);
        }
        this.saldo += arg0;
    }

    
    constructor(){
        
    }

    sacar(valor: number): void{
        if(valor <= 0){
            throw new Error(VALOR_INVALIDO);
        }

        const valorValido = valor <= this.saldo;
        if(valorValido){
            this.saldo -= valor;
        }

    }
  
}