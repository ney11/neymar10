//How to check an object is array or not
var a = 2;
function greet(){
	if(Object.prototype.toString.call(a)==='[object Array]'){
		console.log('Array');
	}
	else
		console.log('not array');
}
greet();