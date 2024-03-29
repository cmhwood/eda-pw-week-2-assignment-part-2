// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane'
// We use a conditional to check if name exactly matches 'Mary'. If there is a match, we console log 'Hi, Mary!'
// It does not match, and there are no other if conditionals so we move to the else conditional.
// In the else conditional, if the name is anything other than 'Mary'. No match so we console log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable of secret.
// We declare a variable of code and assign it the number 123
// We use a conditional to check of the number exactly matches 123. It does, so the variable secret is now 'super'
// and the code is multiplied by two:
// secret = 'super'
// code = 246
// The next conditional check if the code is greater than 250. It is not.
// Since the code is less than 250, we console log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable of isStudent and assign it with boolean true
// We declare a vairable of age and assign it a number 34
// We declare a variable of zip and assign it a number 55407
// We use optional if...else statements to create an else if clause
// We check isStudent true AND zip is greater than 80000. The zip is not greater than 80000, so we do not console log `You're a student on the West Coast!` and move on
// We check isStudent false OR age is less than 30. Both are false, so we do not console log 'What are your hobbies?' and move on
// We check isStudent true. It is true, so we console log 'Welcome to Prime!'. We do not continue
// Since we found a true statement, we do not console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX 
// let colorOne = 'blue';
// let colorTwo = 'red';
// let colorThree;

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX I would use a third varialbe colorThree, so:
// if (mix === true) {
// colorThree = 'purple';
// OR also change colorTwo to purple at the same time

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

// FIX In the code the pipes || indicate an OR conditional rather than AND. The description states "if temp is higher than 39 and if time is greater or equal to  4". Should be changed to "if temp is higher than 39 or if time is greater or equal to  4"

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX In my mind, I would reverse the if statement to make it less confusing to start
// if (age >= minAge)
// Also, the conditional should show console log 'entry' because the age is greater than minAge. Then 'no entry' would be the else conditional

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
