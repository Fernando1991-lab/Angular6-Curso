import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes = [];
  cliente: Cliente= {
    nome:"",
     idade: 0,
     valor: 0,
     data: '2018-08-08'
    };
  addCliente(){
    //Isso faz com que cada cliente seja um novo objeto, ou seja, cada cliente adicionado à lista seja um objeto diferente, e não uma referência ao mesmo objeto. Assim, quando o usuário preencher os campos de nome e idade para um cliente e clicar em "Add Cliente", um novo objeto será criado com os valores preenchidos e adicionado à lista de clientes.
    let cli = Object.assign({}, this.cliente)
    //o this é necessário pois clientes e cliente foram declaradas fora do método addCliente, ou seja, são propriedades da classe AppComponent
    this.clientes.push(cli);

  }

  constructor() { }

  ngOnInit() {
  }

}
