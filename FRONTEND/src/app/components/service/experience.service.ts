import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../Model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  expURL = 'ideal-kerianne-chizzo10.koyeb.app/explab/'
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.expURL + `detail/${id}`);
  }
  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.expURL  + 'create', experience);
  }
  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);  
}
}