import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { RecetaComponent } from './components/receta/receta.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { RecetasListComponent } from './components/recetas-list/recetas-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'ArquitecturaEjemplo',
        clientId: 'recetas-web'
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

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
    MainComponent,
    RecetasListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

