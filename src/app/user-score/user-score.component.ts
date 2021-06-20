import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../user-info-service.service';
import { users } from "../definitions";

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent implements OnInit {
  public data : Array<users> = [];
  public sortDirection: string = "asc";
  constructor(private _score: UserInfoService) {
    this.loadScores();
  }

  loadScores() {
    this._score.load().subscribe(result => {
      this.data = result;
    });
  }
  
  
  ngOnInit(): void {}

}
