# node-Exploring
Exploring few concepts in node

Filter()-This method is used to impose certain comditions in existing data array and to create a new array with all elements that pass the test.
Syntax- var newArr = oldArr.filter(callback(element[,index[,array])[,thisArg]).

Parameters:
callback - A callback is a function that is executed after another has finished executing. Any function that is passed as an argument is called a callback function.
Here callback is a deciding function , that test each element of the array.Return true to keep element in false otherwise. It accepts  three arguments.
1) Element- This is the current element which is being processed.
2) Index- The Index of the current element being called upon.
3) Array- The data array where the filter option was called upon.
thisArg - optional value. If you pass it, then when the runtime invokes your callback, it'll set this to whatever that value is.
Return value - It returns a new array that pass this test, if no elements pass empty array is defined.

Description - 
-Filter doesn't mutate the array on which it is called.
-Filter range will be set before first invocation of callback, if existing value of the array changed or deleted callback function takes the value at the time filter visit them.
-Parameters which are deletd are not visited.

Map()- This method is used to apply function on evry elemnt of the array, a new array is created finally.
Syntax- var newArr = oldArr.map(callback(currentvalue[,index[,array])[,thisArg]).

Parameters:
callback- This is the function that is aplied on the data to get a new array, it has three parameters.
1) Element- This is the current element which is being processed.
2) Index- The Index of the current element being called upon.
3) Array- The data array where the filter option was called upon.
thisArg - optional value. If you pass it, then when the runtime invokes your callback, it'll set this to whatever that value is.
Return value - A new array, each being the result of callback function.

Description-
-Callback is invoked only for the indexes, which have assigned values including undefined.
-Map range will be set before first invocation of callback, if a new value is appended later it will not be beinvoked by callback function.
-Map do not mutate the function, but callback function if invoked may do so.

Reduce()- This method is used to apply a function to each element in the array and reduce it to a single value.
Syntax- var result = Arr.reduce(callback[,IntialVal])

Parameters-
Callback- This is function which eexute on each element of the array. It has four arguments
1) Accumulator- The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue.
2) Current value- This is the current element which is being processed.
3) Current Index- The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
4) Array- This the source array on which reduce is called upon.
Intial Value-Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce function on an empty array without an initial value is an error.
Return Value- The value that results from the reduction.

Description-
-The intial value in accumulator will be equal to intial value if provided,if nointial vslue provided it will be equal to first value in the array.
-If the intial value is provided and array is empty, the solo value will be returned without calling callback.

