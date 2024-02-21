import { After, AfterStep, Before, BeforeStep } from '@cucumber/cucumber';

Before(function (testCase) {
  this.feature = testCase.pickle.name;
  this.startTime = new Date();
  console.log('log info from scenario: ' + this.feature);
});

After(function () {
  const endTime = new Date();
  const durationInMilliseconds = endTime.getTime() - this.startTime.getTime();
  const minutes = Math.floor(durationInMilliseconds / 60000); // 1 minute = 60,000 milliseconds
  const seconds = Math.floor((durationInMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor((durationInMilliseconds % 60000));
  console.log(`Duration: ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`);
  console.log('------------------------------------------------', '\n');
});
