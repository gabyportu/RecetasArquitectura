import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class GuardsService extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }
    return true;
  }
}
