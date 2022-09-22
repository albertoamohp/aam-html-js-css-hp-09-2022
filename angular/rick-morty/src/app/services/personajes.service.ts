import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personaje } from '../personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  baseURL = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getAll(): Observable<personaje[]> {
    return this.http.get<personaje[]>(this.baseURL+'/character');
  }

  get(id: any): Observable<personaje[]> {
    return this.http.get<personaje[]>(`${this.baseURL}/character/${id}`);
  }

  findByName(name: any): Observable<personaje[]> {
    return this.http.get<personaje[]>(
      `${this.baseURL}/character/?name=${name}`
    );
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseURL);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
