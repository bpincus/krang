import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrainModule } from './brain/brain.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
