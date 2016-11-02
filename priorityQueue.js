// The goal is to create an arbitrary data structure that, when you call its remove method, will remove and return the minimum value.
// Think about the user experience, you know you want to insert things, you know you want to be able to remove the minimum value


// Real world example of priority queues: hospital admittance! Who gets seen first? It's not always first come first serve. The patient with chest pains will be seen before the patient with a flu.

var PriorityQ = function(){
	// I've chosen to go with an array as the underlying data structure
	this.array = [];
	// When I want to remove an item, it'll be easy to just use the array's pop method
	// This is constant time, or O(1)
	this.remove = function(){
		return this.array.pop();
	}
	// In order to be sure that the remove method is, in fact, removing the minimum value, I'll have to depend on my insert method to make the last value the minimum value
	// So the goal of the insert method is to keep the elements ordered
	this.insert = function(val){
		// If there is nothing in the array yet or if the value I'm inserting is less than the last element in the array, it's safe to just use the array's push method
		if(this.array.length == 0 || this.array[this.array.length-1]>val){
			this.array.push(val);
		}
		// If there is already something in the array and the value to insert is greater than the last element, then I need to find out where the value should be inserted to preserve the order
		else {
			// Assign the minimum to the last element in the array for now
			var min = this.array[this.array.length - 1];
			// Assign the index to be the position just after the last element
			var index = this.array.length;
			// Assign nextup to be whatever value is right before the index
			var nextup = this.array[index-1];
			// Now do a while loop to find the first value that is greater than the value to be inserted, but don't fall off the edge of the array
			while(nextup < val && index > 0){
				// Scootch all the values one to the right as we're looking for the first value that is larger than the value to be inserted
				this.array[index] = this.array[index-1];
				// Move index over one to the left
				index --;
				// Move nextup over on to the left
				nextup = this.array[index-1]
			}
			// When we break this while loop, either we stopped because the value to the left of our current index is greater than the value we want to insert, or because our index is 0. Either way, our current index is where we want to put our value.
			this.array[index] = val;
		}
		// And now we've inserted our new value while preserving the order of our elements.
		// How long will this take? It all depends on how long the array is and how far we have to travel along it to find our desired element. So that's linear time, or O(n).
		return this;

	}
}
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

