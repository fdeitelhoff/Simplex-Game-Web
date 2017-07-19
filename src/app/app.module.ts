import { MonacoEditorComponent } from './monaco-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent // , MonacoEditorComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent] // , MonacoEditorComponent]
})
export class AppModule { }
