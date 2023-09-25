import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecetaComponent } from './components/receta/receta.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { MainComponent } from './components/main/main.component';
import { RecetasListComponent } from './components/recetas-list/recetas-list.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    IngredienteComponent,
    MainComponent,
    RecetasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
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

