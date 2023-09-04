import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url === 'www.fakeurl.com/getUsername') {
      return of(new HttpResponse({status: 200, body: JSON.stringify({username: 'darkray16'})}));
    } else if (request.url === 'www.fakeurl.com/getPassword') {
      return of(new HttpResponse({status: 200, body: JSON.stringify({password: 'dummypassword'})}));
    }
    return next.handle(request);
  }
}
