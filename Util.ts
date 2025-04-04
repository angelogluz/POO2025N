class Util {
    fazNada() {

    }
    static randomizar(base: number, limite: number) {
        return Math.round(base + Math.random() * limite - base)
    }
}