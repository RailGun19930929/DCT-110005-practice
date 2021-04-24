import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('request.headers', request.headers);
    const newRequest = Object.assign(request,
      {
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('JWTToken')}`)
      }) as HttpRequest<unknown>;
    console.log('request.headers', newRequest.headers, newRequest);
    return next.handle(request);
  }
}
