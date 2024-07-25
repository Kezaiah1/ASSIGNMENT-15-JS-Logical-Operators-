/*LOGICAL OPERATORS:
&& (AND), || (OR) are types of logical operators.
They give us the ability to check more than 1 condition concurrently.
&& AND (BOTH conditions must be true)
|| OR (EITHER conditions can be true)
*/
let temp = 15;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
    console.log('THE WEATHER IS GOOD!');
}

else {
    console.log('THE WEATHER IS BAD!');
}