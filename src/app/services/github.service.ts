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
          return {
            url: repo.html_url,
            name: repo.name,
            lastUpdate: repo.updated_at,
            description: repo.description,
          }
        });
      })
    )
  }
}
