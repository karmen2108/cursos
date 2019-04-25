import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/models/curso';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit {

  constructor(private cursosServ: CursosService) { }
  private cursos: Curso[];
  //public isAdmin: any = null;
  //public userUid: string = null;

  ngOnInit() {
    this.getListCursos();
    //this.getCurrentUser();
  }

 
  getListCursos() {
    this.cursosServ.getAllCursos()
      .subscribe(cursos => {
        this.cursos = cursos;
      });
  }

  onDeleteCurso(idCurso: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.cursosServ.deleteCurso(idCurso);
    }
  }

  onPreUpdateCurso(curso: Curso) {
    console.log('CURSO', curso);
    this.cursosServ.selectedCurso = Object.assign({}, curso);
  }

}
