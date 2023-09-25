import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './components/receta/receta.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { MainComponent } from './components/main/main.component';
import { RecetasListComponent } from './components/recetas-list/recetas-list.component';
import { AuthGuard } from './guards-auth.guard';

const routes: Routes = [
  { path: 'receta', component: RecetaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'ingrediente', component: IngredienteComponent },
  { path: 'recetas-list', component: RecetasListComponent, canActivate: [AuthGuard], data: { roles: ['USER'] }},
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

