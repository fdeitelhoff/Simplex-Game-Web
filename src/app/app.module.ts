import { MonacoEditorComponent } from './monaco-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { OnboardingComponent } from './onboarding/onboarding.component';

const appRoutes: Routes = [
  { path: 'tasks', component: AppComponent },
  { path: '',      component: OnboardingComponent }
];

@NgModule({
  declarations: [
    AppComponent, // , MonacoEditorComponent
    OnboardingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent] // , MonacoEditorComponent]
})
export class AppModule { }
