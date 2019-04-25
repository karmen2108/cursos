import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
const routes: Routes = [
  
  { path: 'list-cursos', component: ListCursosComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
