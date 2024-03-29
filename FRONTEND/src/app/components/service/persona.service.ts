import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://ideal-kerianne-chizzo10.koyeb.app/personas/';


constructor(public httpClient: HttpClient) { }

public lista(): Observable<persona[]>{
  return this.httpClient.get<persona[]>(this.URL + 'lista');
}

public detail(id:number):Observable<persona>{
  return this.httpClient.get<persona>(this.URL + `detail/${id}`);
}



public update(id: number, Persona:persona):Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}



}