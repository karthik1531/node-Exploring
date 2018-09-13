var names = ['karthik', 'harish', 'karthik', 'manu', 'vivek'];

var countedNames = names.reduce((allNames, name) => { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
// Expexted output is
// { 'Karthik': 2, 'harish': 1, 'Manu': 1, 'vivek': 1 }