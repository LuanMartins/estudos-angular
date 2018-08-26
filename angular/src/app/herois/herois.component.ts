import { Component, OnInit } from '@angular/core';

import {Heroi} from '../Heroi';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  heroi: Heroi = {
    id: 1,
    nome: 'Windstorm'
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
