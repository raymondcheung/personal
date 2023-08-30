import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    protected http: HttpClient
  ) { }

  public isLoggedIn() {
    return true;
  }

  public login(username: string, password: string): Observable<boolean> {
    return forkJoin([
      this.http.get('www.fakeurl.com/getUsername'),
      this.http.get('www.fakeurl.com/getPassword')]
    ).pipe(map(([res1, res2]: [any, any]) => {
        if (res1?.body?.username === username && res2?.body?.password === password) {
          return true;
        }
        return false;
    }));
  }
}
