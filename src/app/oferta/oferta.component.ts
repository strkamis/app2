import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[ OfertasService],
})
export class OfertaComponent implements OnInit {

    public oferta: Oferta
  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) { }
     

  ngOnInit() {
   //Snapshot- tira uma "foto" da rota permitindo acssar seus parâmetros 
    //console.log('id recuperado da rota: ',this.route.snapshot.params['id'])//captura e ajusta a rota automaticamente
    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id'])
    .then(( oferta: Oferta)=> {
      console.log(oferta)
      this.oferta= oferta
    })


    //subscrible ele observa e  permite encaminhar uma função de Call Back, algo que será feito quando as rotas forem modificadas 
    //this.route.params.subscribe((parametro: any )) => {
    //console.log(parametro.id)//objeto literal 

    }
  }


