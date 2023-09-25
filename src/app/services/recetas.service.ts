import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Receta } from '../modelo/receta';
import { RecetasRepository } from '../stores/recetas.repository';
import { RecetaComponent } from '../components/receta/receta.component';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private apiUrl = 'http://localhost:4200/recetas';

  constructor(private http: HttpClient, private recetaRepo: RecetasRepository){ }

  getRecetas(){
    return this.http.get<Receta>(`${this.apiUrl}/recetas`);
  }

  /*addRecetas(receta: Receta){
    return this.http.post<Receta>('${this.apiUrl}/recetas', receta);
  }*/

  addRecetas(receta: Receta): Observable<Receta>{
    return this.http.post<Receta>(`${this.apiUrl}/recetas`, receta);
  }
  

  eliminarReceta(id: string){
    return this.http.delete<Receta>(`${this.apiUrl}/recetas/${id}`);
  }

}

