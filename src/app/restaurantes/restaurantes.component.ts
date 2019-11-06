import { Component, OnInit } from '@angular/core';
import { Oferta } from "../shared/oferta.model";
import { OfertasService } from "../ofertas.service";
import { filter } from 'minimatch';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurantes')//restorna uma promise
    .then(( ofertas: Oferta[] ) => { //retorna um array
      this.ofertas = ofertas
     
      console.log(this.ofertas)
    })

  }

}
