export const endpoints = {
  userServer: {
    users: '/api/users',
    user: '/api/users/{id}',
    register: '/api/register',
    login: '/api/login'
  },
  employeeServer: {
    employees: '/api/v1/employees',
    employee: '/api/v1/employee/{id}',
    create: '/api/v1/create',
    update: '/api/v1/update/{id}',
    delete: '/api/v1/delete/{id}'
  }
};
