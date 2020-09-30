import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

// o nome Component não é obrigatório, mas pela convensão e identificação 
//fica mais indutivo o que é.
// o export é necessário pra enxergar em outro arquivo typescritp
// é necessário identificar como component.
@Component({
    selector: 'app-hello',
    template: `
        <h2>
            Hello{{nome}}
        </h2>
    `
})
export class HelloComponent {

    nome = 'Welder';
    
}
