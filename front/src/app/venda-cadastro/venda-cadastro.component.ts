import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from '../itens/shared/item';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  formItem!: FormGroup;

  venda: any = { itens: [] }
  item: any = {};
  clientes: Array<any> = []; 
  produtos: Array<any> = [];
  //vendas: Array<any> = [];

  constructor(private VendasService: VendasService) { }

  ngOnInit(): void {
    this.VendasService.listarClientes()
      .subscribe(response => this.clientes = response);

    this.VendasService.listarProdutos()
      .subscribe(response => this.produtos = response);

    this.createItens(new Item());

  }

  createItens(item: Item){
    this.formItem = new FormGroup({
      produto: new FormControl(item.produto),
      quantidade: new FormControl(item.quantidade)
    })
  }
  
  incluirItem(){
    //this.item.total = (this.item.produto.produto.valor * this.formItem.value.quantidade);
    this.formItem.value.total = (this.formItem.value.produto.produto.valor * this.formItem.value.quantidade);;
    
    this.venda.itens.push(this.formItem.value);
  
    this.formItem.reset(new Item());
  
  }
  
}
