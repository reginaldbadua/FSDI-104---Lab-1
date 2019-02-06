/*
var score = [80, 72, 91];

alert (score.length ); 

for (let i = 0; i < score.length; i++) {

  // function sum(a, b) {
	// let x;
	// x=a+b;
  // return x;;
}
var average =
*/
var score = [80, 72, 91];

alert (score.length );

let sum = 0;
for (let i = 0; i < score.length; i++) {
      sum = sum + score[i];   
}
var average = sum / score.length;  
alert(average);
