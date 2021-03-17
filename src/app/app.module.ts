import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HotkeyModule} from 'angular2-hotkeys';
import { AppComponent } from './app.component';
import { AppGameComponent } from './app-game/app-game.component';
import { TetrisCoreComponent } from './tetris-core/tetris-core.component';

import {TetrisCoreModule} from 'ngx-tetris';
import { RouterModule } from '@angular/router';
import { PalyerDataService} from '../palyer-data.service';
@NgModule({
  declarations: [
    AppComponent,
    AppGameComponent,
    TetrisCoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HotkeyModule.forRoot(),
    TetrisCoreModule,
    RouterModule.forRoot([
	      { path: 'Intro', component: TetrisCoreComponent },
        { path: 'Game', component: AppGameComponent },
        { path: '**', redirectTo: 'Intro' },
        
      ]),
  
  ],
  providers: [PalyerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }