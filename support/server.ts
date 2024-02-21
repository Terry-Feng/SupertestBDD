import supertest from 'supertest';

export class Server {
  private server: supertest.SuperTest<supertest.Test>;
  private STATUS_OK = 200;
  private STATUS_CREATED = 201;

  constructor(server: supertest.SuperTest<supertest.Test>, token?: string) {
    this.server = server;
  }

  public async get(path: string, query?: any) {
    if (query) {
      return this.server
      .get(path)
      .query(query)
      .expect(this.STATUS_OK);
    } else {
      return this.server
      .get(path)
      .expect(this.STATUS_OK);
    }
  }
 
  public async post(path: string, body?: any, status = this.STATUS_OK) {
    return this.server
      .post(path)   
      .send(body)
      .expect(status);
  }

  public async patch(path: string, body?: any) {
    return this.server
      .patch(path)      
      .send(body)
      .expect(this.STATUS_OK);
  }

  public async put(path: string, body?: any) {
    return this.server
      .put(path)     
      .send(body)
      .expect(this.STATUS_OK);
  }
}
