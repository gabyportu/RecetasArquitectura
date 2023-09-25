import { Component, OnInit, inject } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';
import { Subscription } from 'rxjs';
import { RecetaState, RecetasRepository } from 'src/app/stores/recetas.repository';



@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit{

  constructor(public recetasRepo: RecetasRepository){}

  ngOnInit(): void {
    console.log("ngOnInit RecetaComponent");  
  }

  addReceta(receta: string, ingrediente: number){
    this.recetasRepo.addReceta(receta, ingrediente);
  }

  delateReceta(id: string){
    this.recetasRepo.delateReceta(id);
  }

  editReceta(id: string, nuevoTitulo: string){
    this.recetasRepo.editReceta(id, nuevoTitulo);
  }
  
  /*recetas: Receta[] = [];
  sub: Subscription | null = null;

  constructor(private recetaService: RecetasService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.recetaService.getRecetas().subscribe((recetas: Receta[])=>{
      console.log(recetas);
      this.recetas = recetas;
    });
  }*/

}
