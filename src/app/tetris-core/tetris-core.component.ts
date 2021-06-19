import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PalyerDataService, UserData} from '../../palyer-data.service';
import {ActivatedRoute} from '@angular/router';
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
  public _DATA:UserData = {name:''};

  public color: string;

    public availableColors = [
        'normal',
        'contrast'    
    ];


  constructor(private _storage: PalyerDataService, private _router: Router, public fb: FormBuilder, private _route: ActivatedRoute  ) {}
  public nameForm = this.fb.group({ 
    name: ['', [Validators.required, Validators.minLength(5)]],
    auth: ['', [Validators.required, Validators.minLength(5)]],
    color: ['blue', []]
   });

  public get Item():UserData{
    return this._DATA;
  }
   
  public addItem(){
  const playername = this.nameForm.get('name').value;
  const currentUser:UserData = {
    name:playername,
  };
  this._storage.writePlayerData(currentUser);
}

  public onClick() {
    this._router.navigate(['/Game/normal']);
  }

      

  onColorChange(event): void {
    const color = event.target.value;
    this._router.navigate(['/Game', color], {
    });
}


  ngOnInit(): void {
    
  }

}



// const regexName = new RegExp('^[A-z]{1,10}$') ;
// const CheckName: boolean = regexName.test(this.playername); 

// if(CheckName)
// {
//   console.log("Poprawne dane, Zaczynamy grę");
//   this._router.navigate(['/Game']); 

// } else {
//   this.error = true;
//   console.log("Error");
// }