import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetaComponent } from './components/receta/receta.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'receta', component: RecetaComponent },
  { path: 'ingrediente', component: IngredienteComponent },
  { path: '', component: MainComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    IngredienteComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

