import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';

/** Inject With Credentials into the request */
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  headers = new HttpHeaders()
  .append('Content-Type', 'application/json ');

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
     if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    } else {
      req = req.clone({
        headers: this.headers
      });
      return next.handle(req);
    }
  }
}
