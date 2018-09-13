//Problem- Array consists of fruits and thier count, the program should return count of only apple's by doubling it.

var fruits=[
{
	Name :"Mango",
	Count:15
},
{
	Name : "Apple",
	Count:36
},
{
	Name :"Kiwi",
	Count:10
}
];
var fruitCount=fruits.filter((fruit)=>{return fruit.Name === 'Apple';
					}).map((fruit) =>{return fruit.Count*2;
					}).reduce((sum,fruit) => { return sum + fruit.Count;
					});
console.log(fruitCount);
//Expexted Ouput - 72