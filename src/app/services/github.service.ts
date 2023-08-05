import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public httpService: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this.httpService.get('https://api.github.com/users/raymondcheung/repos').pipe(
      map((res: any) => {
        return res.map((repo: any) => {
          const { name, html_url, description, updated_at } = repo;
          return {
            html_url,
            name,
            updated_at,
            description,
          }
        });
      })
    )
  }
}
