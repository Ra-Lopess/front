import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  vendas!: Array<any>;
  item: any = {};
  clientes!: Array<any>; 
  produtos!: Array<any>;
  itens!: Array<any>;

  constructor(private VendasService: VendasService) { }

  ngOnInit(): void {
    this.VendasService.listarClientes().subscribe(response => this.clientes = response);

    this.VendasService.listarProdutos().subscribe(response => this.produtos = response);

    this.VendasService.listarItens().subscribe(response => this.itens = response);

    this.VendasService.listar().subscribe(response => this.vendas = response);
  }

  incluirItem(){
    this.item.total = (this.item.produto.valor * this.item.quantidade);

    this.item.push(this.item);

    this.item = {};
  }
  

}
