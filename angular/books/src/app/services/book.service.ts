import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/books';

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  get(id: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}?title=${title}`);
  }
}
