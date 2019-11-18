import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
     

  ngOnInit() {
   //Snapshot- tira uma "foto" da rota permitindo acssar seus parâmetros 
    console.log('id recuperado da rota: ',this.route.snapshot.params['id'])//captura e ajusta a rota automaticamente

    //subscrible ele observa e  permite encaminhar uma função de Call Back, algo que será feito quando as rotas forem modificadas 
    //this.route.params.subscribe((parametro: any )) => {
    //console.log(parametro.id)//objeto literal 

    }
  }


