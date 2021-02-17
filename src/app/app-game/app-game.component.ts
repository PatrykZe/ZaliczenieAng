import { getLocaleDateFormat } from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
// import { time } from 'console';
import {TetrisCoreModule} from 'ngx-tetris';


export enum GameState {
    Paused = 0,
    Started = 1,
    Over = 2
}


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



  refresh(): void {
    window.location.reload();
  }

  
 

  constructor() { }

  ngOnInit(): void {
  }

}

