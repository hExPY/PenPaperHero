import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroViewComponent } from './hero-view/hero-view.component';
import { HeroExportComponent } from './hero-export/hero-export.component';
import { HeroImportComponent } from './hero-import/hero-import.component';


const appRoutes: Routes = [
  { path: 'export', component: HeroExportComponent },
  { path: 'view', component: HeroViewComponent},
  { path: 'import', component: HeroImportComponent },
  { path: 'create', component: HeroCreateComponent },
  { path: '**', redirectTo: "create" }
];
@NgModule({
  declarations: [
    AppComponent,
    HeroCreateComponent,
    HeroViewComponent,
    HeroExportComponent,
    HeroImportComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
