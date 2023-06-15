/*we declare our function and initialize our length to 0 ,and output 
    to an empty array, length will store the length of the longest sequence 
    and output will get the actual sequence in order
*/

function longestSequence(n) {
  let Length = 0;
  let output = [];

/* we start our loop with start from 1 up to our square root of value(n)
    we itterate through them till it get to n and we give our sum=0 and 
    empty sequence to hold the values of our loop
*/

  for (let start = 1; start <= Math.sqrt(n); start++) {
    let sum = 0;
    let sequence = [];

/*we start another loop that with  i starting from start and itterate each time 
    we add the square of i to sum and push i to sequence array
*/
    for (let i = start; sum < n; i++) {
      sum += i * i;
      sequence.push(i);

/* if the sum becomes equal to n and the length of the sequence is greater than maxLength
     we update maxLength with the length of the current sequence and assign a copy of the 
     sequence array to result
*/
      if (sum === n && sequence.length > Length) {
        Length = sequence.length;
        output = sequence.slice();
        break;
      }
    }
  }

  return output;  //we return the output that will contain our sequence
}