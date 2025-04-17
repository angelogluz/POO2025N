import { VALOR_INVALIDO } from "./constantes";
import { ContaBancaria } from "./ContaBancaria";

describe("Quando tentar sacar", () => {

    it("Não deve ser possível sacar um valor maior do que o saldo", () => {
        // Cenário
        const conta = new ContaBancaria();
        conta.numero = "000340";
        conta.saldo = 100;

        // Execução
        conta.sacar(200);

        //Validação
        expect(conta.saldo).toBe(100);

    });

    it("Deve ser possível sacar um valor menor do que o saldo", () => {
        // Cenário
        const conta = new ContaBancaria();
        conta.numero = "000340";
        conta.saldo = 100;

        // Execução
        conta.sacar(50);

        // Validação
        expect(conta.saldo).toBe(50);
    });

    it("Deve ser possível sacar um valor igual ao saldo", () => {
        //Cenario
        const conta = new ContaBancaria();
        conta.numero = "000340";
        conta.saldo = 100;

        //Execução
        conta.sacar(100);

        //Validação
        expect(conta.saldo).toBe(0);
    })

    it("Deve gerar um erro ao tentar sacar um valor negativo", () => {
        // Cenário
        const conta = new ContaBancaria();
        conta.numero = "000340";
        conta.saldo = 100;

        // Execução e validação
        expect(() => conta.sacar(-50))
            .toThrow(new Error(VALOR_INVALIDO));

    })
})

describe("Quando tentar depositar", () => {
    it("Não deve ser possível depositar um  valor negativo", () => {
        const conta = new ContaBancaria();
        conta.numero = "000340";
        conta.saldo = 100;

        expect(() => conta.depositar(-10)).toThrow(new Error(VALOR_INVALIDO));
        expect(conta.saldo).toBe(100);


    })

})