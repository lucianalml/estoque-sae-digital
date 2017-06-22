
export class Produto {
    constructor(public id?: string,
        public nome?: string
    ) {}

    static fromJSON(json: any): Produto {
        let produto = Object.create(Produto.prototype);
        Object.assign(produto, json);
        return produto;
    }

}