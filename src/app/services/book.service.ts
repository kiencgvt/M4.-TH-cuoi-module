import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.url_api);
  }

  getBookDetail(id: any): Observable<any> {
    return this.http.get(environment.url_api + id);
  }

  addBook(data: any): Observable<any> {
    return this.http.post(environment.url_api, data);
  }

  editBook(data: any, id: any): Observable<any> {
    return this.http.put(environment.url_api + id, data);
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete(environment.url_api + id);
  }
}
