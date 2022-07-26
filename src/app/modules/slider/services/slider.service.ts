// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment"


@Injectable({
  providedIn: 'root'
})

export class SliderService {
  private apiUrl: string = environment.API;

  constructor(
    private http: HttpClient
  ) { }

  getSlider(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.apiUrl}/slider`, { observe: 'response' });
  }
}
