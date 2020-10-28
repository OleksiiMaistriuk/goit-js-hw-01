let bestEmployee = "";
let maxTasks = 0;
const keys = Object.keys(employees);
for (let i = 0; i < keys.length; i += 1) {
  const key = keys[i];
  const value = employees[key];
  if (value > maxTasks) {
    maxTasks = value;
    bestEmployee = key;
  }
}
return bestEmployee;
