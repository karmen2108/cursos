import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private afs: AngularFirestore) { 
    this.cursosCollection = afs.collection<Curso>('cursos');
    this.cursos = this.cursosCollection.valueChanges();
  }
  private cursosCollection: AngularFirestoreCollection<Curso>;
  private cursos: Observable<Curso[]>;
  private cursoDoc: AngularFirestoreDocument<Curso>;
  private curso: Observable<Curso>;
  public selectedCurso: Curso = {
    id: null
  };

  getAllCursos() {
    this.cursosCollection = this.afs.collection<Curso>('cursos');
    return this.cursos = this.cursosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Curso;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  /* getAllBooksOffers() {
    this.booksCollection = this.afs.collection('books', ref => ref.where('oferta', '==', '1'));
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  } */

  getOneCurso(idCurso: string) {
    this.cursoDoc = this.afs.doc<Curso>(`cursos/${idCurso}`);
    return this.curso = this.cursoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Curso;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addCurso(curso: Curso): void {
    this.cursosCollection.add(curso);
  }
  updateCurso(curso: Curso): void {
    let idCurso = curso.id;
    this.cursoDoc = this.afs.doc<Curso>(`cursos/${idCurso}`);
    this.cursoDoc.update(curso);
  }
  deleteCurso(idCurso: string): void {
    this.cursoDoc = this.afs.doc<Curso>(`cursos/${idCurso}`);
    this.cursoDoc.delete();
  }
}
