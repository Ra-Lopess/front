import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import { Item } from '../itens/shared/item';
import { Venda } from '../vendas/shared/venda';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  formItem!: FormGroup;
  formVenda!: FormGroup;

  clientes: Array<any> = [];
  produtos: Array<any> = [];
  itens: Array<any> = [];
  itemVenda: Array<any> = [];
  venda: any;

  total = 0;

  @Output() vendaSalva = new EventEmitter();

  constructor(
    private VendasService: VendasService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.VendasService.listarClientes()
      .subscribe(response => this.clientes = response);

    this.VendasService.listarProdutos()
      .subscribe(response => this.produtos = response);

    

    this.novaVenda();

  }

  createItens() {
    this.formItem = this.formBuilder.group({
      produto: ['', Validators.required],
      quantidade: ['', [Validators.required, Validators.min(1)]]
    })
  }


  incluirItem() {

    let { produto, quantidade } = this.formItem.value;
    let total = produto.valor * quantidade;

    let itensTable = {
      produto,
      quantidade,
      total
    }

    let itemAux = {
      "idProduto": produto.id,
      "quantidade": quantidade
    }

    this.itemVenda.push(itemAux);

    this.itens.push(itensTable);
    this.formItem.reset(new Item());

    this.calcularTotal();

  }

  createVendas() {
    this.formVenda = this.formBuilder.group({
      idCliente: ['', Validators.required],
      frete: [0]
    })
  }

  novaVenda() {
    this.createItens();
    this.createVendas();
    this.itens = [];
    this.total = 0;
  }

  incluirVenda(frm: FormGroupDirective) {
    let { idCliente, frete } = this.formVenda.value;

    let venda = {
      idCliente,
      frete,
      'itens': this.itemVenda
    }


    this.venda = venda;

    this.VendasService.cadastroVenda(this.venda).subscribe(response => {
      frm.reset();

      this.novaVenda();

      this.vendaSalva.emit(response);
    })
    console.log(this.venda)

  }

  calcularTotal() {
    this.total = this.formVenda.value.frete;
    this.itens.forEach(item => {
      this.total += item.produto.valor * item.quantidade;
    })
  }
  

}
