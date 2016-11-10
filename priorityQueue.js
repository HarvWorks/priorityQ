// The goal is to create an arbitrary data structure that, when you call its remove method, will remove and return the minimum value.
// Think about the user experience, you know you want to insert things, you know you want to be able to remove the minimum value


// Real world example of priority queues: hospital admittance! Who gets seen first? It's not always first come first serve. The patient with chest pains will be seen before the patient with a flu.

var PriorityQ = function(){
	// I've chosen to go with an array as the underlying data structure
	this.array = [];
	// When I want to remove an item, it'll be easy to just use the array's pop method
	// This is constant time, or O(1)
	this.remove = function(){
		var min = 0;
		var result = arr[0];
		// If it is too short don't return result, end early
		if (this.array.length < 1) {
			return false;
		}
		else {
			// Find minimum
			for (var i = 1; i < arr.length; i ++){
				if ( arr[i] < arr[min]){
					min = i;
				}
			}
			// set minimum to result
			result = arr[min];
			// remove minimum
			for (i = min; i < arr.length - 1; i ++){
				arr[i] = arr[i + 1];
			}
		}
		return result;
	};
	// In order to be sure that the remove method is, in fact, removing the minimum value, I'll have to depend on my insert method to make the last value the minimum value
	// So the goal of the insert method is to keep the elements ordered
	this.insert = function(val){
		this.array.push(val);
		return this;
	};
};
// Make a new instance of PriorityQ
var newQ = new PriorityQ();

// Insert a bunch of stuff so that we have an array to work with.
newQ.insert(3).insert(-12).insert(5).insert(1).insert(27).insert(50);
// Check out the array, it should be sorted!
console.log(newQ.array);
// So when we do remove(which is really just pop) the minimum value will be removed since the array is sorted.
console.log(newQ.remove());
console.log(newQ.remove());

// Challenge:  Flip flop the time demand: Re-write the code so that inserting is constant time and removing is linear time.
