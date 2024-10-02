window.addEventListener("load",addListener);
var firstnum, lastnum, valuenum, newinput = false, operation = "";
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
	document.getElementById("btnlog").addEventListener("click",logorithm);
	document.getElementById("btnln").addEventListener("click",natlog);
	document.getElementById("btnsin").addEventListener("click",Sine);
	document.getElementById("btncos").addEventListener("click",Cosine);
	document.getElementById("btntan").addEventListener("click",Tangent);
	document.getElementById("btnroot").addEventListener("click",Sqroot);
	document.getElementById("btngle").addEventListener("click",Inequality);
	document.getElementById("btnfactorial").addEventListener("click", Factorial);
	document.getElementById("btnrad").addEventListener("click", Radical);
	document.getElementById("btndeg").addEventListener("click", Degree);
	document.getElementById("btnequal").addEventListener("click",Result);
}

function Deci()
{
	inputnum = "."
	numOutput()
}

function pi()
{
	inputnum = Math.PI
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
	document.getElementById("txtnum1").value += inputnum;
}

function setval()
{
	valuenum = document.getElementById("txtnum1").value;
	lastnum = 0
	lastnum = parseFloat(lastnum) + parseFloat(valuenum);
}

function Result()
{
	if(operation == "add")
	{
		setval()
		sum = parseFloat(firstnum) + parseFloat(lastnum);
		document.getElementById("txtnum1").value = sum;
	}
	
	if(operation == "sub")
	{
		setval()
		diff = parseFloat(firstnum) - parseFloat(lastnum);
		document.getElementById("txtnum1").value = diff;
	}
	
	if(operation == "Multi")
	{
		setval()
		product = parseFloat(firstnum) * parseFloat(lastnum);
		document.getElementById("txtnum1").value = product;
	}
	
	if(operation == "Div")
	{
		setval()
		quotient = parseFloat(firstnum) / parseFloat(lastnum);
		document.getElementById("txtnum1").value = quotient;
	}
	
	if(operation == "power")
	{
		setval()
		exponent = parseFloat(firstnum) ** parseFloat(lastnum);
		document.getElementById("txtnum1").value = exponent;
	}
	
	if(operation == "ExP")
	{
		setval()
		Powerof = 10 ** parseFloat(lastnum);
		EXPresult = parseFloat(firstnum) * parseFloat(Powerof);
		document.getElementById("txtnum1").value = EXPresult;
	}
	
	if(operation == "inequality")
	{
		setval()
		if(firstnum != lastnum)
		{
			if(firstnum < lastnum)
			{
			document.getElementById("txtnum1").value = firstnum + " < " + lastnum;
			}
		
			if(firstnum > lastnum)
			{
			document.getElementById("txtnum1").value = firstnum + " > " + lastnum;
			}
		
		}
		else
		{
			document.getElementById("txtnum1").value = firstnum + " = " + lastnum;
		}
		
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

function logorithm()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.log10(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function natlog()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.log(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function Sine()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.sin(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function Cosine()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.cos(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function Tangent()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.tan(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function Percent()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) / 100;
	document.getElementById("txtnum1").value = firstnum;
}

function squaring()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) ** 2;
	document.getElementById("txtnum1").value = firstnum;
}

function Sqroot()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = Math.sqrt(valuenum);
	document.getElementById("txtnum1").value = firstnum;
}

function inverse()
{
	valuenum = document.getElementById("txtnum1").value;
	firstnum = parseFloat(valuenum) * -1;
	document.getElementById("txtnum1").value = firstnum;
}

function Radical()
{
	valuenum = document.getElementById("txtnum1").value;
	radi = Math.PI / 180
	firstnum = parseFloat(valuenum) * radi;
	document.getElementById("txtnum1").value = firstnum;
}

function Degree()
{
	valuenum = document.getElementById("txtnum1").value;
	Degr = 180 / Math.PI
	firstnum = parseFloat(valuenum) * Degr;
	document.getElementById("txtnum1").value = firstnum;
}

function Factorial()
{
	valuenum = document.getElementById("txtnum1").value;
    rval= 1;
    for (i = 1; i <= valuenum; i++)
        rval = rval * i;
    document.getElementById("txtnum1").value = rval;
}



function Inequality()
{
	newinput = true;
	operation = "inequality";
	checkNewinput()
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

