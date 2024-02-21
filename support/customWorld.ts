import { setWorldConstructor } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { Pickle } from '@cucumber/messages';

class CustomWorld {
  accessToken: string;
  statusCode: number;
  adminToken: string;
  email: string;
  userId: string;
  processId: string;
  taskId: string;
  applicationId: string;
  servers: { [key: string]: string };
  feature: messages.Pickle;
  startTime: Date;

  constructor() {
    this.accessToken = '';
    this.statusCode = 0;
    this.adminToken = '';
    this.email = '';
    this.userId = '';
    this.processId = '';
    this.taskId = '';
    this.applicationId = '';
    this.servers = {};
    this.feature = new Pickle();
    this.startTime = new Date();
  }
}

setWorldConstructor(CustomWorld);
