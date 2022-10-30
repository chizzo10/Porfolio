import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PfDataFetchService {

  //constructor(private http:HttpClient) { }

  //obtenerDatos():Observable<any>{
    //return this.http.get('./assets/data/data.json')
  //}
  // Acá en este return una vez que esté funcionando el Backend deberemos designar la url desde donde se obtendrán los datos -en lugar de 'json'.
}
