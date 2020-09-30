import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 0;
  nome = 'Welder';
  adicionado = false;
  funcionarios = [];

  adicionar(){
    console.log(`Adicionando ${this.nome}`);
    this.adicionado =  true;

    //this.funcionarios.push(this.nome);
    this.funcionarios.push({
      id:  ++this.ultimoId,
      nome: this.nome
    });
  }
     

}
