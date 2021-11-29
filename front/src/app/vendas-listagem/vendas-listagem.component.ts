import { Component, OnInit } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-vendas-listagem',
  templateUrl: './vendas-listagem.component.html',
  styleUrls: ['./vendas-listagem.component.scss']
})
export class VendasListagemComponent implements OnInit {

  vendas: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.vendaService.listar()
      .subscribe(response => this.vendas = response);
  }

}
