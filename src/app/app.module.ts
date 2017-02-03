import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RoomModalComponent } from './room-modal/room-modal.component';
import { FirstFloorComponent } from './first-floor/first-floor.component';
import { SecondFloorComponent } from './second-floor/second-floor.component';
import { EventSelectorComponent } from './event-selector/event-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomModalComponent,
    FirstFloorComponent,
    SecondFloorComponent,
    EventSelectorComponent
  ],
  entryComponents: [RoomModalComponent],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
