var employeeDetails = [{ "name":"A", "salary":15000 }, { "name":"B", "salary":200000 }];

employeeDetails.map((Employee, key, array) =>{
  array[key].salary *= 2;                       //mutating the calling array
});

console.log(employeeDetails);
//Expected output - [{ "name":"A", "salary":30000 }, { "name":"B", "salary":400000 }]