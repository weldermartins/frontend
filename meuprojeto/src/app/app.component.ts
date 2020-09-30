import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Welder';

  adicionar(){
    console.log(`Adicionando ${this.nome}`)
    
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Joao' + numero;
  }
  alterarNome(event: any){
    //console.log(event);
    this.nome = event.target.value;
  }

}
