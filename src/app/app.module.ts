import { BlocklyEditorComponent } from './blocky-editor.component';
import { MonacoEditorComponent } from './monaco-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent
    // BlocklyEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, MonacoEditorComponent] // , BlocklyEditorComponent]
})
export class AppModule { }
