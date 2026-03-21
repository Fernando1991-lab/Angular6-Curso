import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes = [];
  cliente = "";
  addCliente(){
    //o this é necessário pois clientes e cliente foram declaradas fora do método addCliente, ou seja, são propriedades da classe AppComponent
    this.clientes.push(this.cliente);

  }

  constructor() { }

  ngOnInit() {
  }

}
