import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl: string = environment.API;
  constructor(private http: HttpClient) { }

  create(data: object): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/register`, data, { observe: 'response' });
  }
}
