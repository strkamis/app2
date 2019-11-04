import { HttpClient } from '@angular/common/http'; //importar desse jeito, lembrar de quando for se referir a esse importe ser httpclient
import { Injectable} from '@angular/core';
import{ Oferta} from './shared/oferta.model';


@Injectable()
export class OfertasService{
    
    constructor(private http: HttpClient){}
    
public getOfertas(): Promise<Oferta[]> 
{
    //efetuar uma requisição http
    return this.http.get('http://localhost:3000/ofertas?destaque=true')//observable
    .toPromise()  //para converter esse observable para uma promise 
    .then((resposta: any) => resposta)
    //retornar uma promise Oferta[]
    }
}