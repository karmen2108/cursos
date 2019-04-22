import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetailsCursosComponent } from './components/details-cursos/details-cursos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCursosComponent,
    CursosComponent,
    DetailsCursosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
