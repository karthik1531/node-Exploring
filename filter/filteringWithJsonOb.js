var studentArr = [{
	name:"Karthik",
	age:21
},
{
	name:"krish",
	age:19	
},
{
	name:"prudhvi",
	age:25
},
{
	name:"yesh",
	age:18
},
{
	name:"vivek",
	age:22
}];

function filteringFunction(data){
	if(data.age>21){
		return true;
	}
}

var filteredPeople = studentArr.filter(filteringFunction); //Filtering out people who's age greater than 21
console.log(filteredPeople);
//Expected output ['prudhvi','vivek']