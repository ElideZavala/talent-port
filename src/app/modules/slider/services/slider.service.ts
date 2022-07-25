// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment"


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  constructor(
    private http: HttpClient
  ) { }
  
  // Consumir WS o API REST por POST
  public PostRequest(endPoint: string, Tipo: string, data: any){
    // Ruta para consumir WS o API REST
    let serverName: string = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = environment.API;
        break;
      // case 'WS':
      //   serverName = environment.WS;
      //   break;
    }
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');    
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    headers.append('Accept','application/json');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let body = new HttpParams();
    for(let key in data){
      if(typeof data[key] !== 'function'){
        body = body.set(key, data[key]);
      }
    }
    return this.http.post((serverName + endPoint), body, { headers: headers });
  }
}
