var arrNames=['hi','hello','how','are','you'];
var newWords=arrNames.filter(word=>word.length>3); // Filtering words whose length is greater than 3
console.log(newWords);
//Expexted output ['hello']