import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  baseURL = 'https://rickandmortyapi.com/api';
  searchName = '';
  constructor(private http: HttpClient) {}

  getAll(arrayPersonajes?:number[]): Observable<any> {
    if(!arrayPersonajes) {
    return this.http.get<any>(this.baseURL+'/character');
    }

    else {
      return this.http.get<any>(this.baseURL+'/character/'+arrayPersonajes);
    }
  }

  get(id: any): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.baseURL}/character/${id}`);
  }

  findByName(name: any): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(
      `${this.baseURL}/character/?name=${name}`
    );
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseURL);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  search(name:string) :Observable<any> {
    return this.http.get(this.baseURL+'/character/?name='+name);
  }
}
