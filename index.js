const employee = {
  name: 'John Doe',
  streetAddress: '123 Main St'
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => ({
  ...employee,
  [key]: value
});

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => ({
  ...Object.keys(employee).filter(k => k !== key).reduce((acc, curr) => {
    acc[curr] = employee[curr];
    return acc;
  }, {})
});

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};