import { HttpClient } from '@angular/common/http'; //importar desse jeito, lembrar de quando for se referir a esse importe ser httpclient
import { Injectable} from '@angular/core';
import{ Oferta} from './shared/oferta.model';

import{ URL_API} from './app.api';


@Injectable()
export class OfertasService{
    private url_api = 'http://localhost:3000/ofertas' //ponto unico para modificação
    
    constructor(private http: HttpClient){}
    
    
public getOfertas(): Promise<Oferta[]> 
{
    //efetuar uma requisição http
    return this.http.get(`${URL_API}?destaque=true`)//observable
    .toPromise()  //para converter esse observable para uma promise 
    .then((resposta: any) => resposta)
    //retornar uma promise Oferta[]
    }
    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any)=>  resposta)//objeto literal
    }
    public getOfertasPorId(id: number): Promise<Oferta>{//vai retornar uma promise
    return this.http.get(`${URL_API}?id=${id}`)// filtra através dos atributos de cada objeto
    .toPromise()//converte uma observable para uma promise
    .then((resposta: any)=> { // quando estiver resolvido recebe uma resposta com base na ação
        //o metodo .ishift ele extrai a primeira posição de um array 
        return resposta[0]
    })
    }
}
