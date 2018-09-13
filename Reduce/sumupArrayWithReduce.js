var values= [4,5,12,34,87,94];
var count = values.reduce((accumulator,currentvalue) => {return accumulator + currentvalue},150); //Intial value is 150, summing up allvalues in array
console.log(count);
//Expected output 386