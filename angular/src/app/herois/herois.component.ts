import { Component, OnInit } from '@angular/core';

import {Heroi} from '../Heroi';
import {HEROES} from '../mock-herois';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  //instancia de um heroi
  
  /*heroi: Heroi = {
    id: 1,
    nome: 'Windstorm'
  }*/

  heroiSelecionado: Heroi;
  // variavel recebendo um array de herois. tipando a o array para o tipo "any" (pode ser quakquer tipo)
  herois: Array<Heroi> = HEROES;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(heroi: Heroi): void{


    
  }
}
