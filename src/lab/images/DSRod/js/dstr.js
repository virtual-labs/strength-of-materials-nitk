//on click of next button
var repeat =0;
var result=0;
var en2,en2,en3,p1,p2,p3;

function navNext()
{

    for (temp = 0; temp <= 4; temp++) 
    { 
        document.getElementById ('canvas'+temp).style.visibility="hidden";
    }
    simsubscreennum+=1;
    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if(document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function checkInputValid(e) {
	e.value = e.value.match(/\d*(\.\d*)?/)[0];
}
function checkValue() 
{
	en1=$('#i31').val();
	en2=$('#i32').val();
	en3=$('#i33').val();
	p1=((values1[3]-en1)/values1[3])*100;
	p2=((values2[3]-en2)/values2[3])*100;
	p3=((values3[3]-en3)/values3[3])*100;
	document.getElementById('lastform').style.visibility="hidden";
	document.getElementById('last').style.visibility="visible";
	document.getElementById('r1a').innerHTML=values1[0];
	document.getElementById('r1b').innerHTML=values1[1];
	document.getElementById('r1c').innerHTML=values1[2];
	document.getElementById('ra1').innerHTML=values1[3];
	document.getElementById('re1').innerHTML=en1;
	document.getElementById('rp1').innerHTML=p1.toFixed(2);
	document.getElementById('r2a').innerHTML=values2[0];
	document.getElementById('r2b').innerHTML=values2[1];
	document.getElementById('r2c').innerHTML=values2[2];
	document.getElementById('ra2').innerHTML=values2[3];
	document.getElementById('re2').innerHTML=en2;
	document.getElementById('rp2').innerHTML=p2.toFixed(2);
	document.getElementById('r3a').innerHTML=values3[0];
	document.getElementById('r3b').innerHTML=values3[1];
	document.getElementById('r3c').innerHTML=values3[2];
	document.getElementById('ra3').innerHTML=values3[3];
	document.getElementById('re3').innerHTML=en3;
	document.getElementById('rp3').innerHTML=p3.toFixed(2);
	document.getElementById('avg').innerHTML="<b>Average Double Shear Strength</b> ="+avg.toFixed(2)+" N/mm<sup>2</sup>";
}

// $(function()
// {
	// $('input').on('input', function() {
		// this.value = this.value.match(/\d*(\.\d*)?/)[0];
	// });
	// $('#check').on('click',function()
	// {	
		// en1=$('#i31').val();
		// en2=$('#i32').val();
		// en3=$('#i33').val();
		// p1=((values1[3]-en1)/values1[3])*100;
		// p2=((values2[3]-en2)/values2[3])*100;
		// p3=((values3[3]-en3)/values3[3])*100;
		// $('#lastform').hide();
		// document.getElementById('last').style.visibility="visible";
		// document.getElementById('r1a').innerHTML=values1[0];
		// document.getElementById('r1b').innerHTML=values1[1];
		// document.getElementById('r1c').innerHTML=values1[2];
		// document.getElementById('ra1').innerHTML=values1[3];
		// document.getElementById('re1').innerHTML=en1;
		// document.getElementById('rp1').innerHTML=p1.toFixed(2);
		// document.getElementById('r2a').innerHTML=values2[0];
		// document.getElementById('r2b').innerHTML=values2[1];
		// document.getElementById('r2c').innerHTML=values2[2];
		// document.getElementById('ra2').innerHTML=values2[3];
		// document.getElementById('re2').innerHTML=en2;
		// document.getElementById('rp2').innerHTML=p2.toFixed(2);
		// document.getElementById('r3a').innerHTML=values3[0];
		// document.getElementById('r3b').innerHTML=values3[1];
		// document.getElementById('r3c').innerHTML=values3[2];
		// document.getElementById('ra3').innerHTML=values3[3];
		// document.getElementById('re3').innerHTML=en3;
		// document.getElementById('rp3').innerHTML=p3.toFixed(2);
		// document.getElementById('avg').innerHTML="<b>Average Double Shear Strength</b> ="+avg.toFixed(2)+" N/mm<sup>2</sup>";
	// });
// });

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	if (simsubscreennum==1)
	{  
		if(result==0)
		{
			values1 = vals[Math.floor(Math.random()*vals.length)]; 
		}
		else if(result==1)
		{
			do{
               values2 = vals[Math.floor(Math.random()*vals.length)]; 
			}while(values1==values2);
		}
		else if(result==2)
		{
			do{
               values3 = vals[Math.floor(Math.random()*vals.length)]; 
			}while(values1==values3 || values2==values3);			      
		}
		document.getElementById('nextButton').style.visibility="hidden";
        refresh(); 
	    repeat=repeat+1;
	    document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(repeat>1 && repeat<=3)
		{
			 
			document.getElementById('obs').style.visibility="hidden";
			document.getElementById('canvas4').style.visibility="hidden";
			document.getElementById('mrod1').style.visibility="visible";
			document.getElementById('mov').style.visibility="visible";
			document.getElementById('v1-1').style.visibility="visible";
		}	
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top:150px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('mrod1').onclick=function(){step1();}
		},700);
    }
	else if (simsubscreennum==2)
	{
		refresh();
		if(repeat>1 && repeat<=3)
		{
			
			document.getElementById('zoom').style.visibility="visible";
			document.getElementById('mov').style.visibility="hidden";
			document.getElementById('mrod1').style.visibility="hidden";
		}
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('v1-1').style.visibility="hidden";
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 120px; top:390px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById('zoom').onclick=function(){step2();}
		},700);	
    }
	else if (simsubscreennum==3)
	{
		refresh();
		if(repeat>1 && repeat<=3)
		{ 
			document.getElementById('zimg').style.visibility="visible";
			document.getElementById('drod').style.visibility="visible";
			document.getElementById('drodLeft').style.visibility="visible";
			document.getElementById('drod2').style.visibility="visible";
			document.getElementById('drod2Left').style.visibility="visible";
			document.getElementById('v3-1').style.visibility="visible";
			document.getElementById('mot2').style.visibility="visible";
			document.getElementById('mot1').style.visibility="visible";
			document.getElementById('red').style.visibility="visible";
			document.getElementById('green').style.visibility="visible";
		 }
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('zoom').style.visibility="hidden";
		// document.getElementById('mld2').style.visibility="hidden";
		document.getElementById('mld1').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 45px; top:290px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('green').onclick=function(){step3();}
		
	}
	else if (simsubscreennum==4)
	{
		refresh();
		if(repeat>1 && repeat<=3)
		{
			document.getElementById('obs').style.visibility="visible";
		}
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('zimg').style.visibility="hidden";
		document.getElementById('drod').style.visibility="hidden";
		document.getElementById('drodLeft').style.visibility="hidden";
		document.getElementById('drod2').style.visibility="hidden";
		document.getElementById('drod2Left').style.visibility="hidden";
		document.getElementById('mot2').style.visibility="hidden";
		document.getElementById('mot1').style.visibility="hidden";
		document.getElementById('red').style.visibility="hidden";
		document.getElementById('green').style.visibility="hidden";
		document.getElementById('v3-1').style.visibility="hidden";
		if(result==0)
		{
			document.getElementById('r1').innerHTML=values1[0];
			document.getElementById('r2').innerHTML=values1[1];
			document.getElementById('r3').innerHTML=values1[2];
			document.getElementById('r4').innerHTML=values1[3];
		}
		else if(result==1)
		{
			document.getElementById('r1').innerHTML=values2[0];
			document.getElementById('r2').innerHTML=values2[1];
			document.getElementById('r3').innerHTML=values2[2];
			document.getElementById('r4').innerHTML=values2[3];
		}
		else if(result==2)
		{
			document.getElementById('r1').innerHTML=values3[0];
			document.getElementById('r2').innerHTML=values3[1];
			document.getElementById('r3').innerHTML=values3[2];
			document.getElementById('r4').innerHTML=values3[3];
		}
		 
		lnt++;
		result++;
		if(repeat>=1 && repeat<3)
		{
			simsubscreennum=0;
			document.getElementById("nextButton").style.visibility="visible";
		}
		else if(repeat==3)
		{
			simsubscreennum=4;
			document.getElementById("nextButton").style.visibility="visible";	
		}	
	}
	else if (simsubscreennum==5)
	{
		 
		avg=(values1[3]+values2[3]+values3[3])/3.0;	
		document.getElementById('lastform').style.visibility="visible";
		document.getElementById('canvas4').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('trial').style.visibility="hidden";
		document.getElementById('obs').style.visibility="hidden";
		document.getElementById('r11').innerHTML=values1[0];
		document.getElementById('r12').innerHTML=values1[1];
		document.getElementById('r13').innerHTML=values1[2];
		document.getElementById('r21').innerHTML=values2[0];
		document.getElementById('r22').innerHTML=values2[1];
		document.getElementById('r23').innerHTML=values2[2];
		document.getElementById('r31').innerHTML=values3[0];
		document.getElementById('r32').innerHTML=values3[1];
		document.getElementById('r33').innerHTML=values3[2];
	}	
}
    
function step1()
{
	myStopFunction();
	
	document.getElementById('mrod1').style.animation = "rod-move 1.5s forwards ";
	document.getElementById('mov').style.animation = "cali-move 1.5s forwards ";
	setTimeout(function()
	{
		if(result==0)
		{
			document.getElementById('v1-1').innerHTML="Diameter="+values1[0]+"mm";
		}
		else if(result==1)
		{
			document.getElementById('v1-1').innerHTML="Diameter="+values2[0]+"mm";
		}
		else if(result==2)
		{
			document.getElementById('v1-1').innerHTML="Diameter="+values3[0]+"mm";
		} 
		document.getElementById('nextButton').style.visibility="visible";
	 },2500);
	
}	
	
function step2()
{
	myStopFunction();
	document.getElementById('zoom').style.visibility="hidden";
	document.getElementById('pc1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hand').style.visibility="visible";
	    document.getElementById('hand').style.animation = "hand-move 1.5s forwards ";
		setTimeout(function()
		{
			document.getElementById('pc1').style.visibility="hidden";
			document.getElementById('hand').style.visibility="hidden";
			document.getElementById('pc2').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('pc2').style.visibility="hidden";
				document.getElementById('mld1').style.visibility="visible";
				document.getElementById('mld1').style.animation = "zimg-move 1.0s forwards ";
				setTimeout(function()
				{
			    document.getElementById('nextButton').style.visibility="visible";
				},1000);
			},1000);
		},1200);
	},1500);	
}

function step3()
{
	myStopFunction();
	document.getElementById('green').style.visibility="hidden";
	document.getElementById('mot2').style.transformOrigin="70% 94%";
	document.getElementById('mot2').style.animation = "needle-move 3.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('drod').style.animation = "drod-move 1.5s forwards ";
		document.getElementById('drodLeft').style.animation = "drodLeft-move 1.5s forwards ";
		document.getElementById('drod2').style.animation = "drod2-move 1.5s forwards ";
		document.getElementById('drod2Left').style.animation = "drod2Left-move 1.5s forwards ";
		setTimeout(function()
		{
			if(result==0)
			{
				document.getElementById('v3-1').innerHTML="Failure Load P ="+values1[2]+"Kg";
			}
			else if(result==1)
			{
				document.getElementById('v3-1').innerHTML="Failure Load P ="+values2[2]+"Kg";
			}
			else if(result==2)
			{
				document.getElementById('v3-1').innerHTML="Failure Load P ="+values3[2]+"Kg";
			}		
		},1000);
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 45px; top:280px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('red').onclick=function()
			{
				myStopFunction();
				document.getElementById('mot2').style.animation = "needle-move 3.5s reverse ";
				document.getElementById('red').onclick="";
				document.getElementById('green').onclick="";
				document.getElementById('red').style.visibility="visible";
				document.getElementById('green').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
			}
		},2500);
	},1500);	
}
	


function refresh()
{              
		document.getElementById('mrod1').onclick="";
		document.getElementById('zoom').onclick="";
		document.getElementById('v1-1').innerHTML="";
		document.getElementById('v3-1').innerHTML="";
		document.getElementById('mov').style.transformOrigin="";
        document.getElementById('mov').style.animation = "";
		document.getElementById('hand').style.transformOrigin="";
        document.getElementById('hand').style.animation = "";
		document.getElementById('mrod1').style.transformOrigin="";
		document.getElementById('mrod1').style.animation = "";
	    document.getElementById('arrow1').style.transformOrigin="";
		document.getElementById('arrow1').style.animation = "";
	    document.getElementById('drod').style.transformOrigin="";
		document.getElementById('drod').style.animation = ""; 
	    document.getElementById('drodLeft').style.transformOrigin="";
		document.getElementById('drodLeft').style.animation = ""; 
		document.getElementById('drod2').style.transformOrigin="";
		document.getElementById('drod2').style.animation = "";
		document.getElementById('drod2Left').style.transformOrigin="";
		document.getElementById('drod2Left').style.animation = "";
	    document.getElementById('mot2').style.transformOrigin="";
		document.getElementById('mot2').style.animation = "";
		document.getElementById('mld1').style.transformOrigin="";
		document.getElementById('mld1').style.animation = "";
        // document.getElementById('mld2').style.transformOrigin="";
		// document.getElementById('mld2').style.animation = "";

	
}


	
	
