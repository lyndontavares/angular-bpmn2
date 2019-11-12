import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../security';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends ResourceService<User> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'users',
      messageService);
  }
}

export class User {
  id: number;
  login: string;
  alias: string;
  senha: Date;
  authorities: Array<Authority>;
}

export class Authority {
  authority: string;
}


// usando json-server
// npm install -g json-server
// json-server --watch db.json
