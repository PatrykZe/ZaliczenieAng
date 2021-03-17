import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { PalyerDataService, UserData} from '../../palyer-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tetris-core',
  templateUrl: './tetris-core.component.html',
  styleUrls: ['./tetris-core.component.css']
})


export class TetrisCoreComponent implements OnInit {

  public userName: string;
  public userAdress: string;
  public error: boolean;
  public display: boolean = false;
  public _DATA:UserData = {name:'',email:''};

  constructor(private _storage: PalyerDataService, private _router: Router) {}
  
  public get Item():UserData{
    return this._DATA;
  }
  
  public addItem(){
  const currentUser:UserData = {
    name:this._DATA.name,
    email:this._DATA.email,
  };
  this._storage.writePlayerData(currentUser);
}

  public onClick() {
  
  const regexAddress = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}');
  const regexName = new RegExp('^[A-z]{1,10}$') ;
  const CheckMail: boolean = regexAddress.test(this._DATA.email);
  const CheckName: boolean = regexName.test(this._DATA.name); 
 
  if(CheckMail && CheckName)
  {
    console.log("Poprawne dane, Zaczynamy grę");
    this._router.navigate(['/Game']); 

  } else {
    this.error = true;
    console.log("Error");
  }

}

  ngOnInit(): void {
    
  }

}
