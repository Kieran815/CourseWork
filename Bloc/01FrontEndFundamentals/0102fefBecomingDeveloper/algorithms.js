// 1. Out of the sorting algorithms introduced, or any others you have
// encountered, which is the quickest or most efficient in sorting a set of data
// and why?

// Probably QuickSort because it uses sub-groups, and that allows for multiple
// sorting actions across the array at once.

// 2. Why is Binary Search more efficient than Linear Search for most cases?

// Linear search runs through the entire list of data or results to find the
// desired object, while Binary search sorts the items from smallest to largest
// and eliminates results that are greater than the object being searched for.
// This prevents the search from running through all of the items in the list
// and reduces overall execution time.

//Code an implementation of Bubble Sort and test it on an integer array of your
// choice.

// *** use console and call bblSrt(points) to run function in chrome

 var a = [6565, 6546, 9872, 3216, 7512, 5465, 3216, 3224, 3128, 9872];

 function bblSrt(a) {
     var swapped;
     do {
         swapped = false;
         for (var i=0; i < a.length-1; i++) {
             if (a[i] > a[i+1]) {
                 var temp = a[i];
                 a[i] = a[i+1];
                 a[i+1] = temp;
                 swapped = true;
             }
         }
     } while (swapped);
 }

 bblSrt(a);
 console.log(a);
