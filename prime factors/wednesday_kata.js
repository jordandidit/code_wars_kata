function primeFactors(n) { //declare our function that takes (n) parameter
    let factors = []; //our array factors will store prime factors
    
    for (let i = 2; i <= n; i++) { //our loop starts from 2 to any given (n) until i is less than or equal to n
      
      while (n % i == 0) { //our while loop executes as long as n is divisable by i and there is no reminder
       
        /*if the n % i === 0 it means that i is a primefactor of n
        and then it is added to the factors array using push() method, 
        to find all factors we use n divide by i
        */
        
        factors.push(i);  
        n /= i;
        }
    }
      return factors;
  }