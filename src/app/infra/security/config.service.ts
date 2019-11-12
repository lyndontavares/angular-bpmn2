import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private _api_url = '/apidfe';
  private _refresh_token_url = this._api_url + '/auth/refresh';
  private _login_url = this._api_url + '/auth';
  private _logout_url = this._api_url + '/auth/logout';
  private _change_password_url = this._api_url + '/auth/password/change';
  private _tip_password_url = this._api_url + '/auth/password/tip';
  private _tip_autorities_url = this._api_url + '/auth/authorities';
  private _whoami_url = this._api_url + '/auth/whoami';
  private _signup_url = this._api_url + '/auth/signup';
  private _user_url = this._api_url + '/users';
  private _users_url = this._user_url + '/all';
  private _reset_credentials_url = this._user_url + '/auth/reset-credentials';
  private _foo_url = this._api_url + '/auth/foo';
  private _report_url = this._api_url + '/auth/report';
  private _foto_user_url = this._api_url + '/users/foto';
  private _image_kude_url = this._api_url + '/users/foto';
  private _check_api_url = this._api_url + '/configuracion/check';
  private _desbloqueio_api_url = this._api_url + '/configuracion/desbloqueio';

  getDesbloqueiopiUrl() {
    return this._desbloqueio_api_url;
  }

  getCheckApiUrl() {
    return this._check_api_url;
  }

  getImageKudeUrl() {
    return this._image_kude_url;
  }

  getFotoUserUrl() {
    return this._foto_user_url;
  }

  getApiUrl() {
    return this._api_url;
  }
  getPassowrdUrl() {
    return this._tip_password_url;
  }
  getTipPasswordUrl() {
    return this._tip_autorities_url;
  }
  getReset_credentials_url(): string {
      return this._reset_credentials_url;
  }
  getRefresh_token_url(): string {
      return this._refresh_token_url;
  }
  getWhoami_url(): string {
      return this._whoami_url;
  }
  getUsers_url(): string {
      return this._users_url;
  }
  getLogin_url(): string {
      return this._login_url;
  }
  getLogout_url(): string {
      return this._logout_url;
  }
  getChange_password_url(): string {
      return this._change_password_url;
  }
  getSignup_url(): string {
      return this._signup_url;
  }
  getReport_url(): string {
    return this._report_url;
  }
}
