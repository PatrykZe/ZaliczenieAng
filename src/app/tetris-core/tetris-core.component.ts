import { Output, EventEmitter, Component, OnInit } from '@angular/core';

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
  
  

public onClick() {
  
  const regexAddress = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}');
  const regexName = new RegExp('^[A-z]{1,10}$') ;
  const CheckMail: boolean = regexAddress.test(this.userAdress);
  const CheckName: boolean = regexName.test(this.userName); 
 


  if(CheckMail && CheckName)
  {
      console.log(this.userName);
      console.log(this.userAdress);
      console.log("Poprawne dane, Zaczynamy grę");
      this.display = true; 

  } else {
      console.log(this.userName);
      console.log(this.userAdress);
      this.error = true;
      console.log("Error");
  }

  

}
  

  constructor() { }

  ngOnInit(): void {
  }

}
