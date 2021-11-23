import { Component, OnInit } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  venda = {};
  item: any = {};
  clientes!: Array<any>; 
  produtos!: Array<any>;
  itens!: Array<any>;

  constructor(private vendaServide: VendasService) { }

  ngOnInit(): void {
    this.vendaServide.listarClientes().subscribe(response => this.clientes = response);

    this.vendaServide.listarProdutos().subscribe(response => this.produtos = response);

    this.vendaServide.listarItens().subscribe(response => this.produtos = response);
  }

  incluirItem(){
    this.item.total = (this.item.produto.valor * this.item.quantidade);

    this.item.push(this.item);

    this.item = {};
  }

}
