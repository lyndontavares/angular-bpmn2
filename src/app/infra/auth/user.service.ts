import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from '../security/config.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {
    const promise = this.apiService.get(this.config.getRefresh_token_url()).toPromise()
    .then(res => {
      if (res.access_token !== null) {
        return this.getMyInfo().toPromise()
        .then(user => {
          this.currentUser = user;
        });
      }
    })
    .catch(() => null);
    return promise;
  }

  resetCredentials() {
    return this.apiService.get(this.config.getReset_credentials_url());
  }

  getMyInfo() {
    return this.apiService.get(this.config.getWhoami_url()).pipe( map(user => this.currentUser = user));
  }

  getAll() {
    return this.apiService.get(this.config.getUsers_url());
  }

  getReport() {
    return this.apiService.get(this.config.getReport_url());
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

}
