const digToWord = "ABCDEFGH";
let res = [];

function calc(coord){
	res = [];
	const coof1 = [-2,-1,1,2];
	const coof2 = [-1,-2,2,1];
	
	const word = digToWord.indexOf(coord[0]) + 1;
	const dig = parseInt(coord[1]);
	
	cycle(word,dig,coof1,coof2);
	cycle(word,dig,coof1,coof2.reverse());
	
	return res;
}

function cycle(word,dig,coof1,coof2){
	
	for(i = 0;i < 4;i++)
	{
		if (
		word + parseInt(coof1[i]) < 1 || 
		word + parseInt(coof1[i])  > 8 || 
		dig + parseInt(coof2[i]) < 1 || 
		dig + parseInt(coof2[i]) > 8) continue;
		else
			res.push((digToWord[word + parseInt(coof1[i]) - 1]) +
					(dig + parseInt(coof2[i])));
		
	}
}

function btnClick(){
	let coord = document.getElementById("val").value;
	if (coord.isNaN) alert("Вы не ввели значение");
	else 
	{
		let res = calc(coord);
		alert("Возможные варианты хода:\n\n\n" + res);
	}
}