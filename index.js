/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 18;

if(votingAge >= 18) {
  console.log(true);
} 



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

let a = 2;
let b = 1;

if ( a !== b ) {
   a = b;
   console.log(a);
}


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

let str = "1999";
let num = Number(str);
console.log(num);
// return num;



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a,b){
    return a * b;
  }

multiply(2,3);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(years){
  const dogAge = 7;
  return years * dogAge;
}

dogYears(2);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){

    if (age >= 1) {
      if(weight <= 5) {
      
        return weight * 0.05;
      } else if( weight >= 6 && weight <=10) {
        return weight * 0.04;
     
      } else if(weight >= 11 && weight <= 15) {
        return weight * 0.03;
      } else if (weight > 15) {
        return weight * 0.02;
      }
    } else {
        if(age > 2/12 && age < 4/12) {
          return weight * 0.10
        } else if(age > 4/12 && age <7/12) {
          return eight * 0.05;
        } else if(age > 7/12 && age < 1) {
          return weight * 0.04;
        }
    }
  }

  hungryDog(15,1);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below
   - win should return "you win!"
   - lose should return "you lose!"
   -tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

let randomComputerChoice = Math.floor(Math.random() * 3);
let computerChoice;
if(randomComputerChoice === 0){
  computerChoice = 'paper';
}else if(randomComputerChoice === 1){
  computerChoice = 'rock';
}else{
  computerChoice = 'paper';
}

function game(user, computerChoice){

  if((user === 'scissors' && computerChoice === 'paper') || (user === 'paper' && computerChoice === 'rock') || (user === 'rock' && computerChoice === 'scissors')){
    return 'you win!'
  }else if((user === 'scissors' && computerChoice === 'rock') || (user === 'paper' && computerChoice === 'scissors') || (user === 'rock' && computerChoice === 'paper')){
    return 'you lose!'
  }else if(user === computerChoice){
    return "it's a tie"
  }
}
game('paper')

  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(kilo){
    let miles = 0.621371;
    return kilo * miles;
  }
miles(5);


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){
  return cm /30.48;
}
  feet(5);
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(numBottles){
  while (numBottles > 0){
     return  `${numBottles} bottles of soda on the wall, ${numBottles} bottles of soda, take one down pass it around ${numBottles - 1} bottles of soda on the wall`;
     numBottles--;
  if (numBottles === 0){
    break;
    }
  }
}

  console.log(annoyingSong(10));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(score){
    if(score >= 90 && score <=100) {
      return 'you got a A';
    } else if( score >=80 && score <=89){
      return 'you got a B';
    } else if(score >=70 && score <=79) {
      return 'you got a C';
    }else if(score >=60 && score <=69) {
      return 'you got a D';
    } else if(score < 60){
      return 'you got a F';
    }
  }
  
  grade(50);
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(str) {

  let casea = str.toLowerCase();
  let vows = ['a','e','i','o','u'];
  let vowCount = 0;
  for (let i = 0; i < casea.length; i++) {
    if(vows.includes(casea[i])) {
     vowCount++;
    }

  }
  return vowCount;

}

console.log(vowelCounter("vanessa"))


/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
// export default{
//     foo,
//     multiply,
//     dogYears,
//     hungryDog,
//     game,
//     miles,
//     feet,
//     annoyingSong,
//     grade
// }
