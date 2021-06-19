import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const TOKEN = null;

export interface Score {
  name: string;
  score: number;
}
export interface ScoreResponse {
  data: Array<Score>;
}

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {

  constructor(private _http: HttpClient) {}

  load(): Observable <Array<Score>> {
    const URL = 'http://tetris.chrum.it/scores';
    const Options = {
      params: {
        accept: 'json',
      }
    };

    const headers = new HttpHeaders({
      "accept": "application/json"
    });

    return this._http.get<Array<Score>>(URL, {headers});
  }
}
