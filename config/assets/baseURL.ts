export interface baseURL {
  // In case of mutiple domains. 3rd party api integrated for instance
  userServer: string;
  employeeServer: string;
}

export default {
  prod: {
    nz: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
    au: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
  },
  preprod: {
    nz: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
    au: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
  },
  qa: {
    nz: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
    au: {
      userServer: 'https://reqres.in',
      employeeServer: 'https://dummy.restapiexample.com',
    },
  },
};
