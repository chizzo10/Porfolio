import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../Model/education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = 'https://ideal-kerianne-chizzo10.koyeb.app/educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.URL + `detail/${id}`);
  }

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}