// complete the solution by transforming the 
  // string roman numeral into an integer
  //symbols assigned to numbers
const romanObject = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  };
const R = "MMLMMCIX";
function solution (R) {
  

  
  //symbol var to one object
  //create var (R) assigned to an empty string
  
  //create function that
    //reads the object
    //has statement that includes missing symbols
  //returns the integer from our roman numerals
    
    let accumulator = 0;
    
    for(let i=0; i<R.length; i++){
      
      if(R[i] === "I" && R[i+1] === "V"){
        accumulator +=4;
        i++;
      }
      else if(R[i] === "I" && R[i+1] === "X"){
        accumulator +=9;
        i++;
    }
      else if(R[i] === "X" && R[i+1] === "L"){
        accumulator +=40;
        i++;
  }
      else if(R[i] === "X" && R[i+1] === "C"){
        accumulator +=90;
        i++;
  }
      else if(R[i] === "C" && R[i+1] === "D"){
        accumulator +=400;
        i++;
  }
      else if(R[i] === "C" && R[i+1] === "M"){
        accumulator +=900;
        i++;
  }
      else {
        accumulator += romanObject[R[i]];
      }
    }
	return accumulator;
}