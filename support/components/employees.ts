import supertest from 'supertest';
import { endpoints } from '../../config';
import { Server } from '../server';
import { Helper } from '../../utils/helper';
import { DataTable } from '@cucumber/cucumber';

export class Employees extends Server{

  constructor(employeeServer: supertest.SuperTest<supertest.Test>) {
    super(employeeServer);
  }

  public async createEmployeeProfile(table: DataTable) {
    const userInfo = table.hashes()[0]
    const body = {
        name: userInfo['name'],
        salary: userInfo['salary'],
        age: userInfo['age']
    }
    return this.post(endpoints.employeeServer.create, body);
  }

  public async getEmployeeById(id: string) {
    return this.get(Helper.formatEndpoint(endpoints.employeeServer.employee, {id: id}));
  }
}
