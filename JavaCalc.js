window.addEventListener("load",addListener);
var firstnum, lastnum, newinput = false, operation = "";
function addListener()
{
	document.getElementById("txtnum1").disabled = true;
	document.getElementById("btnaddition").addEventListener("click",Addition);
	document.getElementById("btnsubtraction").addEventListener("click",Subtraction);
	document.getElementById("btnmultiplication").addEventListener("click",Multiplication);
	document.getElementById("btndivision").addEventListener("click",Division);
	document.getElementById("btnclear").addEventListener("click",Clear);
	document.getElementById("btn1").addEventListener("click",Num1);
	document.getElementById("btn2").addEventListener("click",Num2);
	document.getElementById("btn3").addEventListener("click",Num3);
	document.getElementById("btn4").addEventListener("click",Num4);
	document.getElementById("btn5").addEventListener("click",Num5);
	document.getElementById("btn6").addEventListener("click",Num6);
	document.getElementById("btn7").addEventListener("click",Num7);
	document.getElementById("btn8").addEventListener("click",Num8);
	document.getElementById("btn9").addEventListener("click",Num9);
	document.getElementById("btn0").addEventListener("click",Num0);
	document.getElementById("btnperiod").addEventListener("click",Deci);
	document.getElementById("btnpi").addEventListener("click",pi);
	document.getElementById("btnexp").addEventListener("click",Exp);
	document.getElementById("btninverse").addEventListener("click",inverse);
	document.getElementById("btnpower").addEventListener("click",Exponent);
	document.getElementById("btnsquare").addEventListener("click",squaring);
	document.getElementById("btnpercent").addEventListener("click",Percent);
	document.getElementById("btnequal").addEventListener("click",Result);
}

function Deci()
{
	inputnum = "."
	numOutput()
}

function pi()
{
	inputnum = 355/113
	numOutput()
}

function Num0()
{
	inputnum = 0
	numOutput()
}

function Num1()
{
	inputnum = 1
	numOutput()
}

function Num2()
{
	inputnum = 2
	numOutput()
}

function Num3()
{
	inputnum = 3
	numOutput()
}

function Num4()
{
	inputnum = 4
	numOutput()
}

function Num5()
{
	inputnum = 5
	numOutput()
}

function Num6()
{
	inputnum = 6
	numOutput()
}

function Num7()
{
	inputnum = 7
	numOutput()
}

function Num8()
{
	inputnum = 8
	numOutput()
}

function Num9()
{
	inputnum = 9
	numOutput()
}

function numOutput()
{
	document.getElementById("txtnum1").disabled = false;
	document.getElementById("txtnum1").value += inputnum;
	document.getElementById("txtnum1").disabled = true;
}

function Result()
{
	if(operation == "add")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		sum = parseFloat(firstnum) + parseFloat(lastnum);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = sum;
		document.getElementById("txtnum1").disabled = true;
	}
	
	if(operation == "sub")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		diff = parseFloat(firstnum) - parseFloat(lastnum);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = diff;
		document.getElementById("txtnum1").disabled = true;
	}
	
	if(operation == "Multi")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		product = parseFloat(firstnum) * parseFloat(lastnum);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = product;
		document.getElementById("txtnum1").disabled = true;
	}
	
	if(operation == "Div")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		quotient = parseFloat(firstnum) / parseFloat(lastnum);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = quotient;
		document.getElementById("txtnum1").disabled = true;
	}
	
	if(operation == "power")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		exponent = parseFloat(firstnum) ** parseFloat(lastnum);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = exponent;
		document.getElementById("txtnum1").disabled = true;
	}
	
	if(operation == "ExP")
	{
		valuenum = document.getElementById("txtnum1").value;
		lastnum = 0
		lastnum = parseFloat(lastnum) + parseFloat(valuenum);
		Powerof = 10 ** parseFloat(lastnum);
		EXPresult = parseFloat(firstnum) * parseFloat(Powerof);
		document.getElementById("txtnum1").disabled = false;
		document.getElementById("txtnum1").value = EXPresult;
		document.getElementById("txtnum1").disabled = true;
	}
	
}

function checkNewinput()
{
	if (newinput == true)
	{
		valuenum = document.getElementById("txtnum1").value;
		firstnum = 0
		firstnum = parseFloat(firstnum) + parseFloat(valuenum);
		Clear()
	}
}

function Percent()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) / 100;
	document.getElementById("txtnum1").disabled = false;
	document.getElementById("txtnum1").value = firstnum;
	document.getElementById("txtnum1").disabled = true;
}

function squaring()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) ** 2;
	document.getElementById("txtnum1").disabled = false;
	document.getElementById("txtnum1").value = firstnum;
	document.getElementById("txtnum1").disabled = true;
}

function inverse()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) * -1;
	document.getElementById("txtnum1").disabled = false;
	document.getElementById("txtnum1").value = firstnum;
	document.getElementById("txtnum1").disabled = true;
}

function Exp()
{
	newinput = true;
	operation = "ExP";
	checkNewinput()
}

function Exponent()
{
	newinput = true;
	operation = "power";
	checkNewinput()
}

function Addition()
{
	newinput = true;
	operation = "add";
	checkNewinput()
}

function Subtraction()
{
	newinput = true;
	operation = "sub";
	checkNewinput()
}

function Multiplication()
{
	newinput = true;
	operation = "Multi";
	checkNewinput()
}

function Division()
{
	newinput = true;
	operation = "Div";
	checkNewinput()
}

function Clear()
{
	if (firstnum == "" || lastnum == "")
	{
		alert("Input is missing!");
	}
	else
	{
		document.getElementById("txtnum1").value = " ";
	}
}

