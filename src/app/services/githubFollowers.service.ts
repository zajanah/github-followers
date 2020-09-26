import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class GithubFollowers extends DataService {
    constructor(http: HttpClient) {
        super('https://api.github.com/users/IDBRAHIMDEV/followers', http)
    }
}