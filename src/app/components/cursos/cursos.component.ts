import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { NgForm } from '@angular/forms';
import {Curso} from '../../models/curso'
import { from } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursoServ: CursosService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  
  ngOnInit() {
  }

  onSaveCurso(cursoForm: NgForm): void {
    if (cursoForm.value.id == null) {
      // New 
      
      this.cursoServ.addCurso(cursoForm.value);
    } else {
      // Update
      this.cursoServ.updateCurso(cursoForm.value);
    }
    cursoForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
