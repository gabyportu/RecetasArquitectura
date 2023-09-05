import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../modelo/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }
  getRecetas(): Observable<Receta[]>{
    return this.http.get<Receta[]>('https://api.spoonacular.com/recipes/complexSearch?apiKey=6c1c1d4e0d5c4b5f9a9b9e4e5d7e8b7f');
  } 

  getReceta(id: number): Observable<Receta>{
    return this.http.get<Receta>('https://api.spoonacular.com/recipes/'+id+'/information?apiKey=6c1c1d4e0d5c4b5f9a9b9e4e5d7e8b7f');
  }
}

