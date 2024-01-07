
function checkOddNumber(n) {
    return n % 2 !== 0
}
function checkEvenNumber(n) {
    return n % 2 === 0
}


const printNumbers = (array, cb) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log("Even", array[i]);
        }
        else {
            console.log("Odd", array[i]);
        }
    }
}


printNumbers([1, 2, 3, 4], (x) => x % 2 !== 0); // odd numbers

printNumbers([1, 2, 3, 4], (x) => x % 2 === 0); // even numbers


/** Conditional Rendering */
function checkName(name) {
    // name = ""
    if (name === null || name === undefined || name === "") {
        console.log("name not defined!");
    } else {
        console.log(name); // Ram
    }
}
checkName("");


//   The code above is fairly common, so let’s put it to good use.

function checkName(name) {
    console.log(name || "name not defined!");
}
checkName();

/*

null, undefined, 0, false, ""

name="Ram"

name || "not defined"
"Ram" || "not defined"

name = ""
"" || "not defined" -> "not defined"

*/


const getData = (url) => {
    return fetch(url)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Callback -> Promise  (p1 = new Promise();)
/*
pending, rejected, fullfilled


*/

const getData1 = async (url) => {
    try {
      const data = await fetch(url); 
      console.log(data); // fulfilled
    } catch (err) {
      console.log(err); // rejected
    }
  };



/*

1. Client -> Counter implementation

*/

function Counter(count) {
    return count + 1
}


/*

-> task background color: task1: red, task2: green, task3: blue, task4: red
Task1
Task2
Task3
Task4


1. Why do we use react rather than other technology?.
-> Complex UI easily build
-> React virtual DOM -> DOM refresh nai kare, DOM and virtualDOM ne compare kare ane jya changes hoy tya change kare. Angular -> DOM reload
-> Library


2. React Dom
-> ReactDOM tara index.html na root div thi reference banave.
-> VirtualDOM create karva mate


3. State and props with all possibilities.

*/