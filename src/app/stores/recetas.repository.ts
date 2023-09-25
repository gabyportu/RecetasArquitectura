import { addEntities, deleteEntities, selectActiveId, selectAllEntities, setEntities, withEntities} from "@ngneat/elf-entities";
import { withProps, createStore, setProp, setProps, select } from "@ngneat/elf";
import {v4 as uuid} from 'uuid';
import { Receta } from "../modelo/receta";
import { Ingrediente } from "../modelo/ingrediente";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { joinRequestResult } from "@ngneat/elf-requests";

export interface RecetaState{
  id: string;
  title: string;
  id_ingrediente: number;
}

export interface RecetasProps{
  filter: 'ALL' | 'COMPLETED' | 'ACTIVE';
}

const store = createStore(
  {name: 'recetas'},
  withEntities<RecetaState>(),
  withProps<RecetasProps>({filter: 'ALL'})
);

@Injectable({providedIn: 'root'})
export class RecetasRepository{

  recetas$ = store.pipe(selectAllEntities());
  getRecetasProps(){
    return store.pipe(selectAllEntities());
  }

  addReceta(receta: string, ingrediente: number){
    store.update(addEntities({id: uuid(), title: receta, id_ingrediente: ingrediente}));
  }

  setRecetas(recetas: RecetaState[]){
    store.update(addEntities(recetas));
  }

  delateReceta(id: string){
    store.update(deleteEntities([id]));
  }
  editReceta(id: string, nuevoTitulo: string){
    store.update(setEntities([{id, title: nuevoTitulo, id_ingrediente: 1}]));
  }
}


