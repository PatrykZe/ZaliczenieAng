import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../user-info-service.service';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent implements OnInit {
  public data = [];
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
