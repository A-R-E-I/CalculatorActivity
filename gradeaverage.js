window.addEventListener("load", addListener);
var coursename, grade
function addListener() 
	{
		document.getElementById("btnavg").addEventListener(click,"coursegrade");
		
	}
	
function coursegrade()
	{
		numofclass = document.getElementById("txtclassnum").value;
		switch(numofclass)
		{
			case"1":
				namegrade1()
				
			case"2":
				namegrade1()
				namegrade2()
				
			
			
		}
	}
	
function namegrade1()
{
	coursename = document.getElementById("txtcourse").value;
	grade = document.getElementById("txtgrade").value;
	document.getElementById("txtcourse").value = coursename;
	document.getElementById("txtgrade").value = grade;
	document.write(grade);
}


function namegrade2()
{
	coursename2 = document.getElementById("txtcourse").value;
	grade2 = document.getElementById("txtgrade").value;	
}