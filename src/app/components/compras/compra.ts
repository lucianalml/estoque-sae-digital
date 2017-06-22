
export class Compra {
    constructor(public id?: number,
        public quantidade?: number,
        public preco?: number,
        public produto?: number,
        public data?: Date
    ) {}

    static fromJSON(json: any): Compra {
        let compra = Object.create(Compra.prototype);
        Object.assign(compra, json);
        return compra;
    }

}