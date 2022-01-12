import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friden } from '../interfaces/fridens.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FridensService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}
  
  getFridens(): Observable<Friden[]>{
    return this.http.get<Friden[]>(`${this.baseUrl}/fridens`)
   }

  getFridenPorId(id: string): Observable<Friden>{
    return this.http.get<Friden>(`${this.baseUrl}/fridens/${id}`)
  }
}
