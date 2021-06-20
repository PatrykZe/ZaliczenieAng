import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HotkeyModule} from 'angular2-hotkeys';
import { AppComponent } from './app.component';
import { AppGameComponent } from './app-game/app-game.component';
import { TetrisCoreComponent } from './tetris-core/tetris-core.component';

import {TetrisCoreModule} from 'ngx-tetris';
import { RouterModule } from '@angular/router';
import { PalyerDataService} from '../palyer-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserScoreComponent } from './user-score/user-score.component';
import { SortPipe } from './sort.pipe';
// import {UserInfoService} from '../user-info-service.service';
@NgModule({
  declarations: [
    AppComponent,
    AppGameComponent,
    TetrisCoreComponent,
    UserScoreComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    TetrisCoreModule,
    RouterModule.forRoot([
	      { path: 'Intro', component: TetrisCoreComponent },
        { path: 'Game/:color', component: AppGameComponent },
        { path: '**', redirectTo: 'Intro' },
        
      ]),
  
  ],
  providers: [PalyerDataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }