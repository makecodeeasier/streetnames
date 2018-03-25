import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddStreetComponent } from './add-street/add-street.component';
import { StreetsComponent } from './streets/streets.component';
import { StreetsService } from './services/streets.service';
import { DescriptionComponent } from './description/description.component';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

 

@NgModule({
  declarations: [
    AppComponent,
    AddStreetComponent,
    StreetsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule  
  ],
  providers: [StreetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
