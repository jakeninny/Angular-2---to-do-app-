import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper';
import { Store } from '../store';
import {CanActivate, Router} from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  JWT: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private storeHelper: StoreHelper,
    private store: Store
  ) {
    this.setJwt(window.localStorage.getItem(this.JWT_KEY));
  }

  setJwt(jwt: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({Authorization: `Bearer ${jwt}`});
  }

  authenticate(path, creds) {
    return this.apiService.post(`/${path}`, creds)
    .do(res => this.setJwt(res.token))
    .do(res => this.storeHelper.update('user', res.data))
    .map(res => res.data);
  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }

  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['', 'auth']);
    }
  }
}
