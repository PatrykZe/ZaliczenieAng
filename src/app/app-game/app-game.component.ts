import { getLocaleDateFormat } from '@angular/common';
import {ChangeDetectionStrategy, ViewChild, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
// import { time } from 'console';
import {TetrisCoreModule} from 'ngx-tetris';
	
import { Location } from '@angular/common';
import { PalyerDataService, UserData } from '../../palyer-data.service';
import { UserScoreComponent } from '../user-score/user-score.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-app-game',
  templateUrl: './app-game.component.html',
  styleUrls: ['./app-game.component.css']
})
export class AppGameComponent implements OnInit {
  
  public state: string = "Ready";
  public points: number = 0 ;
  public time10:number;
  public time5:number;
  public time1: number; 
  public time2: number;
  public text: UserData[];
  public color: string;
  public bw = false;
  public onLineCleared() {
    this.points += 10 ;
  }
  public TimeStart() {
     this.time1 = Date.now();
     
  }
  public TimeStop() {
    this.time2 = Date.now();
    this.time10 = this.time2 - this.time1; 
  }
  Back(): void {
    this._location.back();
  }

  constructor(
      private _location: Location, 
      private _storage: PalyerDataService,
      private _route: ActivatedRoute,
      private _router: Router,
    ) {}
  

  ngOnInit(): void {
    this.text = this._storage.readPlayerData();
    this._route.params.subscribe(params => {
      this.color = params.color; 
      if (this.color == "contrast") {
      this.bw = true;
      }
     
      
    });
  }

}

