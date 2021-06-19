import { Injectable } from '@angular/core';


export interface UserData {
  name: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class PalyerDataService {

  
  private _userdata:UserData[] = [];
  
  readPlayerData(): UserData[] {
    return this._userdata;
  }

  writePlayerData(data: UserData) {
    this._userdata.push(data)
  }
  
  constructor() { }
}
