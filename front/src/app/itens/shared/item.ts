export class Item {
    venda: any = null;
    produto: any;
    quantidade!: number;
    total!: number;

    Item(venda: any, produto: any, quantidade: any, total: any){
        this.produto = produto;
        this.venda = venda;
        this.quantidade = quantidade;
        this.total = total;
    }
}


