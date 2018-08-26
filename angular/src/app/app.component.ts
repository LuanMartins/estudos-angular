//  Importando o componente do pacote "@angular/core"
import { Component } from '@angular/core';

/* 
  A tag @Component tem o objetivo de informar para o navegador que essa classe é
  um componente. É conhecido como Decorator.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Titulo do componente
  title = 'Tour Of Heroes';
}
