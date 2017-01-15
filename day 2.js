/*Task 

Declare  variables: one of type int, one of type double, and one of type String.
Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
Use the  operator to perform the following operations: 
Print the sum of  plus your int variable on a new line.
Print the sum of  plus your double variable to a scale of one decimal place on a new line.
Concatenate  with the string you read as input and print the result on a new line.

Input Format

The first line contains an integer that you must sum with . 
The second line contains a double that you must sum with . 
The third line contains a string that you must concatenate with .

Output Format

Print the sum of both integers on the first line, the sum of both doubles (scaled to 1 decimal place) on the second line, and then the two concatenated strings on the third line.
*/

//provided code:

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
	input_stdin += data;
});

process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split("\n");
	main();
});

// Reads complete line from STDIN
function readLine() {
	return input_stdin_array[input_currentline++];
}

function main() {
	var i = 4
	var d = 4.0
	var s = "HackerRank "
// end of provided code
///////////////////////////////////////////////////////////////////

//doing it step by step as specified in the challenge:

	// Declare second integer, double, and String variables.
	var newI;
	var newD;
	var newS;

	// Read and save an integer, double, and String to your variables.
	var newI = parseInt(readLine());
	var newD = parseFloat(readLine());
	var newS = readLine();

	// Print the sum of both integer variables on a new line.
	console.log(i + newI);

	// Print the sum of the double variables on a new line.
	console.log((d + newD).toFixed(1));

	// Concatenate and print the String variables on a new line
	// The 's' variable above should be printed first.
	console.log((s + newS))


	/* the way I would do it, ideally:

	console.log((i + parseInt(readLine()))
	                  + "\n"
	                  + (d + parseFloat(readLine())).toFixed(1)
	                  + "\n"
	                  + (s + readLine()))
	*/
}