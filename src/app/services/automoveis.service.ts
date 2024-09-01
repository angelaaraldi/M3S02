import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomoveisService {
  httpClient = inject(HttpClient);
  pathUrl = "http://localhost:8080";
  list() {
    return this.httpClient.get(`${this.pathUrl}/automoveis`);
  }
  detail(id: number) {
    return this.httpClient.get(`${this.pathUrl}/automoveis/${id}`);
  }
}
