import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';

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
      try {
        if (res1 && res2 && JSON.parse(res1)?.username === username && JSON.parse(res2)?.password === password) {
          return true;
        }
        return false;
      } catch (error) { // most likely could not JSON.parse the responses
        return false;
      }
    }));
  }
}
