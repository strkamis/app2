import { Component, OnInit } from '@angular/core';
import {OfertasService} from "../ofertas.service"
import { from } from 'rxjs';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]

})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas()
  this.ofertasService.getOfertas2()//ele não retorna mais em array de ofertas e sim uma promessa 
    .then(( ofertas: Oferta[])=>{
      this.ofertas = ofertas
    })// retorna o resolve de ofertas.service.ts

  }
}
