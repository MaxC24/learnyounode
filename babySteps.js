console.log(sumProcessArgs(process.argv));

function sumProcessArgs(array) {
	result = 0;
	for (var i = 2 ; i <  array.length ; i ++){
		result += Number(array[i]);
	}
	return result;
}