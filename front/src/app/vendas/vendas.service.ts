import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listar() : Observable<any> {
    return this.http.get<any>(`${this.api}/vendas`);
  }

  listarClientes(): Observable<any>{
    return this.http.get<any>(`${this.api}/clientes`);
  }

  listarProdutos(): Observable<any>{
    return this.http.get<any>(`${this.api}/produtos`);
  }

  listarItens(): Observable<any>{
    return this.http.get<any>(`${this.api}/itens`);
  }

  produtoById():Observable<any>{
    return this.http.get<any>(`${this.api}/produtos`)
  }

  cadastroVenda(venda: any): Observable<any>{
    return this.http.post<any>(`${this.api}/vendas/cadastroVenda`, venda);
  }

}
