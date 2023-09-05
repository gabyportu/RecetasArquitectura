import { Component, OnInit, inject } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/app/modelo/receta';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit{
  recetas: Receta[] = [];
  sub: Subscription | null = null;

  constructor(private recetaService: RecetasService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.recetaService.getRecetas().subscribe((recetas: Receta[])=>{
      console.log(recetas);
      this.recetas = recetas;
    });
  }
}
