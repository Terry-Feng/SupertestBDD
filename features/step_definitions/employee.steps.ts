import { Given, When, Then, setDefaultTimeout, DataTable } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ConfigManager } from '../../config';
import supertest from 'supertest';
import configManager from '../../config/assets/configManager';
import { Users } from '../../support/components/users';
import { Employees } from '../../support/components/employees';

setDefaultTimeout(10 * 1000);
let users: Users;
let employees: Employees;
let employeeId: string = '';

Given('The {string} service is up and running', async function (country: string) {
  configManager.country = country;
  this.servers = {
    userServer: supertest(ConfigManager.config.baseURL.userServer),
    employeeServer: supertest(ConfigManager.config.baseURL.employeeServer),
  }
  users = new Users(this.servers.userServer);
  employees = new Employees(this.servers.employeeServer);
})

When('sign up with email {string}', async function (email: string) {
  const user = await users.registerUser(email);
  this.email = email;
  this.userId = user.body.id;
});

Then('The user sign up successfully', async function() {
  const userDetail = await users.getUserById(this.userId);
  expect(userDetail.body.data.email).to.equal(this.email);
})

When('create employee profile for the user with following data', async function (dataTable: DataTable) {
  const employee = await employees.createEmployeeProfile(dataTable);
  employeeId = employee.body.data.id;
});

Then('employee profile created successfully', async function() {
  // this dummy api test server won't accept more requests in a short time
  // this step will be failed
  const userDetail = await employees.getEmployeeById(employeeId);
  expect(userDetail.body.status).to.equal('success');
})

