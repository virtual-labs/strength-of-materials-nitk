var simsubscreennum=0; var temp=0; var lnt=0; var f=0; var flag=0; var count=0; var count1=0; var repeat=0; var st,br,al,r1,r2,avg=0;

var steel=[[0.275,	0.276,	0.2755,	732.8039104],
           [0.269,	0.269,	0.269,	768.6460939],
           [0.271,	0.272,	0.2715,	754.5557217],
           [0.273,	0.274,	0.2735,	743.5605212],
           [0.276,	0.275,	0.2755,	732.8039104]];

var brass=[[0.46,	0.46,	0.46,	175.2362949],
           [0.462,	0.462,	0.462,	173.7223815],
           [0.47,	0.47,	0.47,	167.8587596],
           [0.44,	0.45,	0.445,	187.2490847],
           [0.463,	0.463,	0.463,	172.9727712]];

var alum=[[0.362,	0.362,	0.362,	141.4791978],
          [0.36,	0.36,	0.36,	143.0555556],
          [0.367,	0.367,	0.367,	137.6504392],
          [0.359,	0.36,	0.3595,	143.4537615],
          [0.361,	0.362,	0.3615,	141.8708356]];

var count4=0,count2=0,count3=0;
//check for type of device
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	
function navNext()
{
	for(temp=0;temp<=8;temp++)
	{
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

function animateArrow()
{
	if(document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";		
}

function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}

function animateMsg()
{
	if(document.getElementById('p4-2').style.visibility=="hidden")
		document.getElementById('p4-2').style.visibility="visible";
	else
		document.getElementById('p4-2').style.visibility="hidden";
}

function StopMsg()
{
	clearInterval(myMsg);
	document.getElementById('p4-2').style.visibility="hidden";
}

function matAl()
{
	flag=1;
	document.getElementById('1-2').style.color="#FC0D05";
	document.getElementById('1-3').style.color="#000000";
	document.getElementById('1-4').style.color="#000000";
    document.getElementById('1-6').innerHTML=document.getElementById('1-2').innerHTML;
    document.getElementById('1-8').innerHTML="10kg";
    document.getElementById('nextButton').style.visibility="visible";	
}
function matBr()
{
    flag=2;
	document.getElementById('1-2').style.color="#000000";
	document.getElementById('1-4').style.color="#000000";
    document.getElementById('1-3').style.color="#FC0D05";
	document.getElementById('1-6').innerHTML=document.getElementById('1-3').innerHTML;
	document.getElementById('1-8').innerHTML="20kg";
    document.getElementById('nextButton').style.visibility="visible";	
}
function matMs()
{
	flag=3;
	document.getElementById('1-2').style.color="#000000";
	document.getElementById('1-3').style.color="#000000";
	document.getElementById('1-4').style.color="#FC0D05";
	document.getElementById('1-6').innerHTML=document.getElementById('1-4').innerHTML;
	document.getElementById('1-8').innerHTML="30kg";
	document.getElementById('nextButton').style.visibility="visible";
}


 var looper;
     var degrees = 0;
    function rotateAnimation(el,speed){
        var elem = document.getElementById(el);
        if(navigator.userAgent.match("Chrome"))
		{
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";
        } 
		else if(navigator.userAgent.match("Firefox"))
		{
            elem.style.MozTransform = "rotate("+degrees+"deg)";
        } 
		else if(navigator.userAgent.match("MSIE"))
		{
            elem.style.msTransform = "rotate("+degrees+"deg)";
        }
		else if(navigator.userAgent.match("Opera"))
		{
            elem.style.OTransform = "rotate("+degrees+"deg)";
        } 
		else 
		{
            elem.style.transform = "rotate("+degrees+"deg)";
        }
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	if(degrees < 262 && count==0)
	{
		degrees++;
    }
	// if(degrees == 262)
	// {
		// StopMsg();
		// document.getElementById('p4-2').style.visibility="hidden";
		// // document.getElementById('nextButton').style.visibility="visible";
		// //rotateAnimation1("4-3",20);
	// }
	
	   	document.getElementById("p4-1").innerHTML = "Time up to which load has to be applied = "+Math.round(degrees/8.73)+ " sec" ;
    }


	
	var looper1;
     var degrees1 = 0;
    function rotateAnimation1(el,speed){
        var elem1 = document.getElementById(el);
        if(navigator.userAgent.match("Chrome"))
		{
            elem1.style.WebkitTransform = "rotate("+degrees1+"deg)";
        } 
		else if(navigator.userAgent.match("Firefox"))
		{
            elem1.style.MozTransform = "rotate("+degrees1+"deg)";
        } 
		else if(navigator.userAgent.match("MSIE"))
		{
            elem1.style.msTransform = "rotate("+degrees1+"deg)";
        }
		else if(navigator.userAgent.match("Opera"))
		{
            elem1.style.OTransform = "rotate("+degrees1+"deg)";
        } 
		else 
		{
            elem.style.transform = "rotate("+degrees1+"deg)";
        }
    looper1 = setTimeout('rotateAnimation1(\''+el+'\','+speed+')',speed);
	if(degrees1< 262 && count1==0)
	{
		degrees1++;
    }
	// if(degrees1 == 262)
	// {
		// StopMsg();
		// document.getElementById('p4-2').style.visibility="hidden";
		// rotateAnimation1("4-3",20);
	// }
	
	   	document.getElementById("p4-3").innerHTML = "Time up to which load has to be applied = "+Math.round(degrees1/8.73)+ " sec" ;
    }
	
	
	
	// rotates the needle clockwise
// function rotateImage() {
// $('#4-3').animate({ transform: t }, {
	// duration:7500,
// step: function(t,fx) {
// $(this).css({
// '-webkit-transform':'rotate('+t+'deg)',
// '-moz-transform':'rotate('+t+'deg)',
// 'transform':'rotate('+t+'deg)'
// });
// }
// });
// }

function load()
{
	
}

	
function random()
{
	st = steel[Math.floor(Math.random() * steel.length)];
	br = brass[Math.floor(Math.random() * brass.length)];
	al = alum[Math.floor(Math.random()* alum.length)];
	if(r1==st||r1==br||r1==al)
	{
		random();
	}
}

function refresh()
{
	document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = _______";
	document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = _______";
}

function magic()
{
	if(simsubscreennum==1)
	{
		document.getElementById('1-6').style.color="#FC0D05";
	    document.getElementById('1-8').style.color="#FC0D05";
		document.getElementById('al1-1').onclick=function(){matAl();};
		document.getElementById('1-2').onclick=function(){matAl();};
		document.getElementById('br1-1').onclick=function(){matBr();};
		document.getElementById('1-3').onclick=function(){matBr();};
		document.getElementById('ms1-1').onclick=function(){matMs();};
		document.getElementById('1-4').onclick=function(){matMs();};
	}
	if(simsubscreennum==2)
	{
		repeat++;
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(flag==1)
		{
			document.getElementById('2-2a').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('2-2b').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('2-2m').style.visibility="visible";
		}
		
		if(repeat==2)
		{
			document.getElementById('2-4').style="position:absolute; left:299px; top:382px;";
			document.getElementById('2-3').style.visibility="visible";
			if(flag==1)
				document.getElementById('2-2a').style="position:absolute; left:297px; top:270px;";
			if(flag==2)
			    document.getElementById('2-2b').style="position:absolute; left:297px; top:270px;";
			if(flag==3)
				document.getElementById('2-2m').style="position:absolute; left:297px; top:270px;";
		}
		
		setTimeout(function()
		{
			myInt=setInterval(function(){animateArrow();},500);
			document.getElementById('arrow1').style="visibility:visible; position:absolute; left:300px; top:420px; height:30px; z-index:10; ";
			document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(180deg)";
			document.getElementById('arrow1').style.transform="rotate(180deg)";
			var elmt = document.getElementById('p2-2');
			if(isMobile) 
			{
				elmt.innerHTML = "Click on the wheel to<br/> adjust specimen height";
				moveWheelonClick();
			} 
			else 
			{
				elmt.innerHTML = "Hover the mouse cursor on the <br/>wheel to adjust specimen height";
				moveWheelonHover();
			}
			document.getElementById('p2-2').style.visibility="visible";
		},700);
	}
	if(simsubscreennum==3)
	{
		document.getElementById('p2-1').style.visibility="hidden";
		document.getElementById('2-2a').style.visibility="hidden";
		document.getElementById('2-2b').style.visibility="hidden";
		document.getElementById('2-2m').style.visibility="hidden";
		document.getElementById("loadtext").innerHTML="Load applied : ";
		myInt=setInterval(function(){animateArrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:620px; top:380px; height:30px; z-index:10;";
		document.getElementById('arrow1').WebkitTransform="rotate(180deg)";
		document.getElementById('arrow1').msTransform="rotate(180deg)";
		document.getElementById('arrow1').transform="rotate(180deg)";
		document.getElementById('3-1').style.visibility="visible";
		if(flag==1)
			document.getElementById('3-3a').style.visibility="visible";
		if(flag==2)
			document.getElementById('3-3b').style.visibility="visible";
		if(flag==3)
			document.getElementById('3-3m').style.visibility="visible";
	}
	if(simsubscreennum==4)
	{
		if(flag==1)
	{
		// document.getElementById("loadtext").style.visibility="hidden";
		document.getElementById("3-10").style.visibility="hidden";
	}
	if(flag==2)
	{
		// document.getElementById("loadtext").innerHTML="Load applied : 20kg";
		document.getElementById("3-20").style.visibility="hidden";
	}
	if(flag==3)
	{
		// document.getElementById("loadtext").innerHTML="Load applied : 30kg";
		document.getElementById("3-30").style.visibility="hidden";
	}
	
		document.getElementById('trial').style="visibility:visible ;left:700px; top:50px; position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById('3-2').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('3-3a').style.visibility="hidden";
			document.getElementById('4-6al').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('3-3b').style.visibility="hidden";
			document.getElementById('4-6br').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('3-3m').style.visibility="hidden";
			document.getElementById('4-6ms').style.visibility="visible";
		}
		if(repeat==1)
		{
				document.getElementById('4-3').style.visibility="visible";
		}
		if(repeat==2)
		{
				document.getElementById('4-31').style.visibility="visible";
		}
		document.getElementById("p4-1").innerHTML = " ";
		document.getElementById('4-5').style.visibility="visible";
		myInt=setInterval(function(){animateArrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:360px; top:320px; height:30px; z-index:10;";
		document.getElementById('arrow1').WebkitTransform="rotate(0deg)";
		document.getElementById('arrow1').msTransform="rotate(0deg)";
		document.getElementById('arrow1').transform="rotate(0deg)";
			document.getElementById('4-5').onclick=function(){
			document.getElementById('4-5').style.visibility="hidden";
			myStopFunction();
			myMsg=setInterval(function(){animateMsg();},500);
			document.getElementById('p4-2').style="visibility:visible; position:absolute; left:300px; top:250px; font-size:13px; color:#FC0D05;";
			if(repeat==1)
			{
			    document.getElementById('4-3').style.transformOrigin="100% 10%";
			    rotateAnimation("4-3",60);
			}
			if(repeat==2)
			{
				document.getElementById('4-31').style.transformOrigin="100% 10%";
			    rotateAnimation1("4-31",60);
			}
			
			document.getElementById('4-4').onclick=function(){
			    count=1;
				if(repeat==2)
					count1=1;
				StopMsg();
				document.getElementById('p4-2').style.visibility="hidden";
				document.getElementById('nextButton').style.visibility="visible";
			}
		}
		
	}
	if(simsubscreennum==5)
	{
		document.getElementById('trial').style="visibility:visible ;left:700px; top:100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('p4-1').style.visibility="hidden";
		if(repeat==1)
			document.getElementById('4-3').style.visibility="hidden";
		if(repeat==2)
			document.getElementById('4-31').style.visibility="hidden";
		if(flag==1)
		{
		    document.getElementById('5-1al').style.visibility="visible";
		    document.getElementById('4-6al').style.visibility="hidden";
		}
	    if(flag==2)
		{
		    document.getElementById('5-1br').style.visibility="visible";
		    document.getElementById('4-6br').style.visibility="hidden";
		}
	    if(flag==3)
		{
		    document.getElementById('5-1ms').style.visibility="visible";
		    document.getElementById('4-6ms').style.visibility="hidden";
		}
		myInt=setInterval(function(){animateArrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:365px; top:440px; height:30px; z-index:10";
		document.getElementById('arrow1').style.WebkitTransform="rotate(0deg)";
		document.getElementById('arrow1').style.msTransform="rotate(0deg)";
		document.getElementById('arrow1').style.transform="rotate(0deg)";
		// document.getElementById('5-3').onclick=function(){
			// myStopFunction();
			// document.getElementById('5-4').style.visibility="visible";
			// document.getElementById('nextButton').style.visibility="visible";
		// }
		$(document).ready(function(){
			$("#5-3").click(function(){
				myStopFunction();
				$("#5-4").fadeIn(2000);
				setTimeout(function(){ 
				    document.getElementById('nextButton').style.visibility="visible";
				},2500);
			});
		});
	}
	if(simsubscreennum==6)
	{
		random();
		refresh();
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('5-4').style.display="none";
		if(flag==1)
		{
		    document.getElementById('5-1al').style.visibility="hidden";
		    document.getElementById('6-1al').style.visibility="visible";
		    document.getElementById('6-8g').style.visibility="visible";
		    document.getElementById('6-7g').style.visibility="visible";
		}
	    if(flag==2)
		{
		    document.getElementById('5-1br').style.visibility="hidden";
		    document.getElementById('6-1br').style.visibility="visible";
		    document.getElementById('6-8y').style.visibility="visible";
		    document.getElementById('6-7y').style.visibility="visible";
		}
	    if(flag==3)
		{
		    document.getElementById('5-1ms').style.visibility="hidden";
		    document.getElementById('6-1ms').style.visibility="visible";
		    document.getElementById('6-8g').style.visibility="visible";
		    document.getElementById('6-7g').style.visibility="visible";
		}

		document.getElementById('6-6').style.visibility="visible";
		document.getElementById('6-5').style.left="-20px";
	    myInt=setInterval(function(){animateArrow();},500);
		document.getElementById('arrow1').style="position:absolute; visibility:visible; left:480px; top:260px; height:30px; z-index:10";
		document.getElementById('arrow1').WebkitTransform="rotate(deg)";
		// Syntax for IE9
		document.getElementById('arrow1').msTransform="rotate(0deg)";
		// Standard syntax
		document.getElementById('arrow1').transform="rotate(0deg)";
		
		var elmt = document.getElementById('p6-2');
		if(isMobile) 
		{
			elmt.innerHTML = "Click on the knob to measure </br>Indentation diagonal length";
			document.getElementById('6-5').style.left="-20px";
			moveKnobinXonClick();
		} 
		else 
		{
			elmt.innerHTML = "Hover the mouse on the knob to<br/> measure Indentation diagonal<br> length";
			document.getElementById('6-5').style.left="-20px";
			moveKnobinXHover();
		}
		document.getElementById('p6-2').style.visibility="visible";
	}
	if(simsubscreennum==7)
	{
		refresh();
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('6-61').style.visibility="hidden";
		if(flag==1)
		{
		    document.getElementById('7-1al').style.visibility="visible";
			document.getElementById('7-8g').style.visibility="visible";
		    document.getElementById('7-7g').style.visibility="visible";
		    document.getElementById('6-1al').style.visibility="hidden";
		    document.getElementById('6-8g').style.visibility="hidden";
		    document.getElementById('6-7g').style.visibility="hidden";
		}
	    if(flag==2)
		{
			document.getElementById('7-1br').style.visibility="visible";
			document.getElementById('7-8y').style.visibility="visible";
		    document.getElementById('7-7y').style.visibility="visible";
		    document.getElementById('6-1br').style.visibility="hidden";
		    document.getElementById('6-8y').style.visibility="hidden";
		    document.getElementById('6-7y').style.visibility="hidden";
		}
	    if(flag==3)
		{
			document.getElementById('7-1ms').style.visibility="visible";
			document.getElementById('7-8g').style.visibility="visible";
		    document.getElementById('7-7g').style.visibility="visible";
		    document.getElementById('6-1ms').style.visibility="hidden";
		    document.getElementById('6-8g').style.visibility="hidden";
		    document.getElementById('6-7g').style.visibility="hidden";
		}
		document.getElementById('7-6').style.visibility="visible";
		document.getElementById('7-5').style.top="135px";
		myInt=setInterval(function(){animateArrow();},500);
		document.getElementById('arrow1').style="position:absolute; visibility:visible; left:240px; top:100px; height:30px; z-index:10";
		document.getElementById('arrow1').WebkitTransform="rotate(0deg)";
		// Syntax for IE9
		document.getElementById('arrow1').msTransform="rotate(0deg)";
		// Standard syntax
		document.getElementById('arrow1').transform="rotate(0deg)";
		
		
		var elmt = document.getElementById('p7-2');
		if(isMobile) 
		{
			elmt.innerHTML = "Click on the knob to measure </br>Indentation diagonal length";
			document.getElementById('7-5').style.top="135px";
			moveKnobinYonClick();
		} 
		else 
		{
			elmt.innerHTML = "Hover the mouse on knob<br/> to measure Indentation</br> diagonal length";
			document.getElementById('7-5').style.top="135px";
			moveKnobinYHover();
		}
		document.getElementById('p7-2').style.visibility="visible";
	}
	if(simsubscreennum==8)
	{
		document.getElementById('7-61').style.visibility="hidden";
		document.getElementById('2').innerHTML=load;
	
        if(flag==1)
		{
		    document.getElementById('7-1al').style.visibility="hidden";
			document.getElementById('7-8g').style.visibility="hidden";
		    document.getElementById('7-7g').style.visibility="hidden";
			document.getElementById('1').innerHTML="Aluminium";
			document.getElementById('2').innerHTML="10";
			document.getElementById('3').innerHTML=al[0];
			document.getElementById('4').innerHTML=al[1];
			document.getElementById('5').innerHTML=al[2];
			document.getElementById('6').innerHTML=al[3].toFixed(2);
		}
	    if(flag==2)
		{
			document.getElementById('7-1br').style.visibility="hidden";
			document.getElementById('7-8y').style.visibility="hidden";
		    document.getElementById('7-7y').style.visibility="hidden";
			document.getElementById('1').innerHTML="Brass";
			document.getElementById('2').innerHTML="20";
			document.getElementById('3').innerHTML=br[0];
			document.getElementById('4').innerHTML=br[1];
			document.getElementById('5').innerHTML=br[2];
			document.getElementById('6').innerHTML=br[3].toFixed(2);
		}
	    if(flag==3)
		{
			document.getElementById('7-1ms').style.visibility="hidden";
			document.getElementById('7-8g').style.visibility="hidden";
		    document.getElementById('7-7g').style.visibility="hidden";
			document.getElementById('1').innerHTML="Mild Steel";
			document.getElementById('2').innerHTML="30";
			document.getElementById('3').innerHTML=st[0];
			document.getElementById('4').innerHTML=st[1];
			document.getElementById('5').innerHTML=st[2];
			document.getElementById('6').innerHTML=st[3].toFixed(2);
		}
		if(repeat<2)
		{
			count2=0,count3=0,count4=0;
			document.getElementById('nextButton').style.visibility="visible";
			simsubscreennum=1;
		}
		if(repeat==1)
	    {
		    if(flag==1)
				r1=al;
		    if(flag==2)
				r1=br;
		    if(flag==3)
				r1=st;
	    }
	    if(repeat==2)
	    {
		    if(flag==1)
				r2=al;
		    if(flag==2)
				r2=br;
		    if(flag==3)
				r2=st;
		}
		var sumVal = (r1[3]+r2[3])/2;
	    avg=(sumVal).toFixed(2);
		if(repeat==2)
		{
			setTimeout(function(){
				document.getElementById('trial').style.visibility="hidden";
				document.getElementById('tab1').style.visibility="hidden";
				document.getElementById('tab2').style.visibility="visible";
                document.getElementById('12').innerHTML=document.getElementById('1').innerHTML;	
                document.getElementById('13').innerHTML=document.getElementById('2').innerHTML;				
                document.getElementById('14').innerHTML=r1[2];				
                document.getElementById('15').innerHTML=r1[3].toFixed(2);	
                document.getElementById('24').innerHTML=r2[2];				
                document.getElementById('25').innerHTML=r2[3].toFixed(2);
                document.getElementById('16').innerHTML=avg;
			},1800);
		}
	}
}

function moveWheelonHover()
{
	//count4=0;
	$('#2-3').mousemove(function()
	{
		//count4++;
		myStopFunction();
		$('#2-3').off("mousemove");
		//var element=document.getElementById('2-4');
		//element.style.left=parseFloat(element.style.left)+0.10+'px';
		document.getElementById('2-4').style.animation="moveWheel 1s forwards";
		setTimeout(function(){		
			if(flag==1)
				var specimen=document.getElementById('2-2a');
			if(flag==2)
				var specimen=document.getElementById('2-2b');
			if(flag==3)
				var specimen=document.getElementById('2-2m');
			specimen.style.animation="moveST 1s forwards";

			//image.style.top=parseFloat(image.style.top)+-0.05+'px';
			// if(document.getElementById('2-4').style.left=="311px" || count4==120)
			// {
			setTimeout(function(){
				document.getElementById('p2-2').style.visibility="hidden";
				document.getElementById('p2-1').style.visibility="visible";
				document.getElementById('2-3').style.visibility="hidden";
				setTimeout(function(){
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
		},200);
	});
}
function moveWheelonClick()
{
	//count4=0;
	$('#2-3').click(function()
	{
		//count4++;
		myStopFunction();
		$('#2-3').off('click');
		document.getElementById('2-4').style.animation="moveWheel 1s forwards";
		// var element=document.getElementById('2-4');
		// element.style.left=parseFloat(element.style.left)+4.0+'px';
		// var position = $(element).offset();  //builtin function to find the HTML element's position 
		setTimeout(function(){
			if(flag==1)
				var specimen=document.getElementById('2-2a');
			if(flag==2)
				var specimen=document.getElementById('2-2b');
			if(flag==3)
				var specimen=document.getElementById('2-2m');
			specimen.style.animation="moveST 1s forwards";
			//image.style.top=parseFloat(image.style.top)+-1.8+'px';
			// if(document.getElementById('2-4').style.left=="311px" || count4==3)
			// {
			setTimeout(function(){
				document.getElementById('p2-2').style.visibility="hidden";
				document.getElementById('p2-1').style.visibility="visible";
				document.getElementById('2-3').style.visibility="hidden";
				setTimeout(function(){
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
		},200);
	});
}

function moveKnobinXHover()
{
	//count2=0;
	$('#6-6').mousemove(function()
	{
		//count2++;
		//var elem=document.getElementById('6-5');
		//elem.style.left=parseFloat(elem.style.left)+0.5+'px';
		myStopFunction();
		$('#6-6').off('mousemove');  
		document.getElementById('6-5').style.animation="moveKnobX 1.5s forwards";
		// if(document.getElementById('6-5').style.left=="5px" || count2==50)
		// {
		setTimeout(function(){
			document.getElementById('p6-2').style.visibility="hidden";
			document.getElementById('6-6').style.visibility="hidden";
			document.getElementById('6-61').style.visibility="visible";
			if(flag==1)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+al[0]+"mm";
			}
			if(flag==2)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+br[0]+"mm";
			}
			if(flag==3)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+st[0]+"mm";
			}
			setTimeout(function(){
				document.getElementById('nextButton').style.visibility="visible";
			},200);
		},1500);
	});
}

function moveKnobinXonClick()
{
	//count2=0;
	$('#6-6').click(function()
	{
		//count2++;
		myStopFunction();
		$('#6-6').off('click');
		document.getElementById('6-5').style.animation="moveKnobX 1.5s forwards";
		// var elem=document.getElementById('6-5');
		// elem.style.left=parseFloat(elem.style.left)+8.33+'px';
		// if(document.getElementById('6-5').style.left=="5px" || count2==3)
		// {
		setTimeout(function(){
			document.getElementById('p6-2').style.visibility="hidden";
			document.getElementById('6-6').style.visibility="hidden";
			document.getElementById('6-61').style.visibility="visible";
			if(flag==1)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+al[0]+"mm";
			}
			if(flag==2)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+br[0]+"mm";
			}
			if(flag==3)
			{
				document.getElementById('p6-1').innerHTML="Indentation diagonal length in X-direction = "+st[0]+"mm";
			}
			document.getElementById('nextButton').style.visibility="visible";
		},1500);
	});
}

function moveKnobinYHover()
{
	//count3=0;
	$('#7-6').mousemove(function()
	{
		myStopFunction();
		//count3++;
		// var elem1=document.getElementById('7-5');
		// elem1.style.top=parseFloat(elem1.style.top)+-2.25+'px';
		// var pos1=$(elem1).offset();

		// if(document.getElementById('7-5').style.top=="105.75px" || count3==15)
		// {
		$('#7-6').off('mousemove');
		document.getElementById('7-5').style.animation="moveKnobY 1.5s forwards";
		setTimeout(function(){
			document.getElementById('p7-2').style.visibility="hidden";
			document.getElementById('7-6').style.visibility="hidden";
			document.getElementById('7-61').style.visibility="visible";
			if(flag==1)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+al[1]+"mm";
			}
			if(flag==2)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+br[1]+"mm";
			}
			if(flag==3)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+st[1]+"mm";
			}				
			document.getElementById('nextButton').style.visibility="visible";
		},1500);
	});
}

function moveKnobinYonClick()
{
	// count3=0;
	$('#7-6').click(function()
	{
		myStopFunction();
		document.getElementById('7-5').style.animation="moveKnobY 1.5s forwards";
		// count3++;
		// var elem1=document.getElementById('7-5');
		// elem1.style.top=parseFloat(elem1.style.top)+-10+'px';
		// var pos1=$(elem1).offset();
		// if(document.getElementById('7-5').style.top=="105.75px" || count3==3)
		// {
		$('#7-6').off('click');
		setTimeout(function(){
			document.getElementById('p7-2').style.visibility="hidden";
			document.getElementById('7-6').style.visibility="hidden";
			document.getElementById('7-61').style.visibility="visible";
			if(flag==1)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+al[1]+"mm";
			}
			if(flag==2)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+br[1]+"mm";
			}
			if(flag==3)
			{
				document.getElementById('p7-1').innerHTML="Indentation diagonal length in Y-direction = "+st[1]+"mm";
			}				
			document.getElementById('nextButton').style.visibility="visible";
		},1500);
	});
}

function refresh(){
	document.getElementById('2-4').style.animation="";
	document.getElementById('2-2a').style.animation="";
	document.getElementById('2-2b').style.animation="";
	document.getElementById('2-2m').style.animation="";
	document.getElementById('7-5').style.animation="";
	document.getElementById('6-5').style.animation="";
}