import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friden } from '../interfaces/fridens.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FridensService {

  constructor(private http: HttpClient) {}
  
  getFridens(): Observable<Friden[]>{
    return this.http.get<Friden[]>('http://localhost:3000/fridens')
   }
}
