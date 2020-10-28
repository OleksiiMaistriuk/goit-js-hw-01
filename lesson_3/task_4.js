const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  const values = Object.entries(employees);
  let total = 0;
  for (const key in employees) {
    total += employees[key];
  }
  return total;
};
