import supertest from 'supertest';
import { UserPlayload } from '../payloads/userPlayload';
import { endpoints } from '../../config';
import { Server } from '../server';
import { Helper } from '../../utils/helper';

export class Users extends Server{

  constructor(userServer: supertest.SuperTest<supertest.Test>) {
    super(userServer);
  }

  public async registerUser(email: string) {
    const body = UserPlayload.resigterPlayload(email);
    return this.post(endpoints.userServer.register, body);
  }

  public async getUserById(userId: string) {
    return this.get(Helper.formatEndpoint(endpoints.userServer.user, {id: userId}));
  }
}
