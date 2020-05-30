//on click of next button
var flag=0;
var repeat=0;
var a;
var firsttime=true;
var i=0;
var lever=0;
var lever2=0;
var fv1,fv2,fv3;

var count=0;
//check for type of device
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ci=[82,85,65,71,76,60,83,87,79,75];
// ms=[92,98,79,78,93,75,99,80,73,84];
// br=[65,76,83,85,72,73,79,78,68,80];
// al=[65,68,99,66,70,71,64,75,82,76];
// ss=[53.6,68.6,94.5,60.6,14.0,63.2,67.3,16.0,20.0,98.3];

// var ci1,ci2,ms1,ms2,br1,br2,al1,al2,ss1,ss2;

// // var ci1 = ci[Math.floor(Math.random() * ci.length)];
// // var ms1 = ms[Math.floor(Math.random() * ms.length)];
// // var br1 = br[Math.floor(Math.random() * br.length)];
// // var al1 = al[Math.floor(Math.random() * al.length)];
// // var ss1 = ss[Math.floor(Math.random() * ss.length)];

// ci1 = ci[Math.floor(Math.random() * ci.length)];
// do{
	// ci2=ci[Math.floor(Math.random() * ci.length)];
// }while(ci1==ci2);
// ms1 = ms[Math.floor(Math.random() * ms.length)];
// do{
	// ms2 = ms[Math.floor(Math.random() * ms.length)];
// }while(ms1==ms2);
// br1 = br[Math.floor(Math.random() * br.length)];
// do{
	// br2 = br[Math.floor(Math.random() * br.length)];
// }while(br1==br2);
// al1 = al[Math.floor(Math.random() * al.length)];
// do{
	// al2 = al[Math.floor(Math.random() * al.length)];
// }while(al1==al2);
// ss1 = ss[Math.floor(Math.random() * ss.length)];
// do {
  // ss2 = ss[Math.floor(Math.random() * ss.length)];
// } while(ss1 == ss2)

function navNext()
{

     for (temp = 0; temp <= 4 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}

    var looper2;
     var degrees2 = 0;
    function rotateAnimation2(el,speed){
        var elem = document.getElementById(el);
        if(navigator.userAgent.match("Chrome"))
		{
            elem.style.WebkitTransform = "rotate("+degrees2+"deg)";
        } 
		else if(navigator.userAgent.match("Firefox"))
		{
            elem.style.MozTransform = "rotate("+degrees2+"deg)";
        } 
		else if(navigator.userAgent.match("MSIE"))
		{
            elem.style.msTransform = "rotate("+degrees2+"deg)";
        }
		else if(navigator.userAgent.match("Opera"))
		{
            elem.style.OTransform = "rotate("+degrees2+"deg)";
        } 
		else 
		{
            elem.style.transform = "rotate("+degrees2+"deg)";
        }
    looper2 = setTimeout('rotateAnimation2(\''+el+'\','+speed+')',speed);
	if(lever2!=1)
	{
    degrees2++;
	}
    if(degrees2 > 359)
	{
        degrees2 = 1;
    }
	   	document.getElementById("status2").innerHTML = "Rockwell Hardness number = "+parseInt(degrees2/3.6);
    }
	
	
	//rotating pointer clockwise upto HRN value
	var looper;
    var degrees = 0;
    var t=0;
	var degrees1;
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
	
	    // if(degrees <= t)
		// {
            if(lever!=1)
			{
		     degrees++;
			}
	    // }
		if(degrees>359)
		{
			degrees=1;
		}
   	document.getElementById("status").innerHTML = "Rockwell Hardness number = "+parseInt(degrees/3.6);
   }
   
   var looper1;
     var degrees1 = 0;
    function rotateAnimation1(el,speed){
        var elem = document.getElementById(el);
        if(navigator.userAgent.match("Chrome"))
		{
            elem.style.WebkitTransform = "rotate("+degrees1+"deg)";
        } 
		else if(navigator.userAgent.match("Firefox"))
		{
            elem.style.MozTransform = "rotate("+degrees1+"deg)";
        } 
		else if(navigator.userAgent.match("MSIE"))
		{
            elem.style.msTransform = "rotate("+degrees1+"deg)";
        }
		else if(navigator.userAgent.match("Opera"))
		{
            elem.style.OTransform = "rotate("+degrees1+"deg)";
        } 
		else 
		{
            elem.style.transform = "rotate("+degrees1+"deg)";
        }
    looper1 = setTimeout('rotateAnimation1(\''+el+'\','+speed+')',speed);
    degrees1++;
    }
	
   
   
   

// rotates the needle clockwise
// function rotateImage() {
// $('#3-1n').animate({ transform: t }, {
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

// To increment the value on some action
// var percentageVal1;
// function count() {
    // var $el = $("#status"),
        // value = t/3.6;
    
    // // evt.preventDefault();
    
    // $({percentage: 0}).stop(true).animate({percentage: value}, {
        // duration : 7800,
        // // easing: "easeOutExpo",
        // step: function () {
            // // percentage with 1 decimal;
            // percentageVal1 = Math.round(this.percentage * 10) / 10;
            
            // $el.text("Rockwell Hardness number = "+percentageVal1 );
        // }
    // }).promise().done(function () {
        // // hard set the value after animation is done to be
        // // sure the value is correct
		// value=percentageVal1.toFixed(2);
        // $el.text("Rockwell Hardness number = "+value);
    // });
// }

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
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

function flag1()
{
	flag=1;
	document.getElementById('p2').style.color="#FC0D05";
	document.getElementById('p3').style.color="#000000";
	document.getElementById('p4').style.color="#000000";
	document.getElementById('p5').style.color="#000000";
	document.getElementById('p6').style.color="#000000";
	document.getElementById('ball').style.visibility="visible";
	document.getElementById('cone').style.visibility="hidden";
	document.getElementById('p7').style.visibility="visible";
	document.getElementById('p8').style.visibility="visible";
	document.getElementById('p8').innerHTML="Ball Indentor";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p1-2').innerHTML="Cast Iron";
	document.getElementById('p1').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function flag2()
{
	flag=2;
    document.getElementById('p3').style.color="#FC0D05";
	document.getElementById('p2').style.color="#000000";
	document.getElementById('p4').style.color="#000000";
	document.getElementById('p5').style.color="#000000";
	document.getElementById('p6').style.color="#000000";
	document.getElementById('ball').style.visibility="visible";
	document.getElementById('cone').style.visibility="hidden";
	document.getElementById('p7').style.visibility="visible";
	document.getElementById('p8').style.visibility="visible";
	document.getElementById('p8').innerHTML="Ball Indentor";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p1-2').innerHTML="Mild Steel";
	document.getElementById('p1').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function flag3()
{
	flag=3;
	document.getElementById('p4').style.color="#FC0D05";
	document.getElementById('p3').style.color="#000000";
	document.getElementById('p2').style.color="#000000";
	document.getElementById('p5').style.color="#000000";
	document.getElementById('p6').style.color="#000000";
	document.getElementById('ball').style.visibility="visible";
	document.getElementById('cone').style.visibility="hidden";
	document.getElementById('p7').style.visibility="visible";
	document.getElementById('p8').style.visibility="visible";
	document.getElementById('p8').innerHTML="Ball Indentor";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p1-2').innerHTML=" Brass";
	document.getElementById('p1').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function flag4()
{
	flag=4;
	document.getElementById('p5').style.color="#FC0D05";
	document.getElementById('p3').style.color="#000000";
	document.getElementById('p4').style.color="#000000";
	document.getElementById('p2').style.color="#000000";
	document.getElementById('p6').style.color="#000000";
	document.getElementById('ball').style.visibility="visible";
	document.getElementById('cone').style.visibility="hidden";
	document.getElementById('p7').style.visibility="visible";
	document.getElementById('p8').style.visibility="visible";
	document.getElementById('p8').innerHTML="Ball Indentor";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p1-2').innerHTML=" Aluminium";
	document.getElementById('p1').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function flag5()
{
	flag=5;
	document.getElementById('p3').style.color="#000000";
	document.getElementById('p4').style.color="#000000";
	document.getElementById('p5').style.color="#000000";
	document.getElementById('p2').style.color="#000000";
	document.getElementById('p6').style.color="#FC0D05";
	document.getElementById('cone').style.visibility="visible";
	document.getElementById('ball').style.visibility="hidden";
	document.getElementById('p7').style.visibility="visible";
	document.getElementById('p8').style.visibility="visible";
	document.getElementById('p8').innerHTML="Cone Indentor";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p1-2').innerHTML=" Spring Steel";
	document.getElementById('p1').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";		
}
//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	if (simsubscreennum==1)
	{  
         
         // Cast Iron
		 
         document.getElementById('ci').onclick=function(){
			 // if(firsttime)
		     // {
			        // firsttime=false;
			         // document.getElementById('p2').style.color="#FC0D05";
			         // flag=1;
			 
				     // document.getElementById('ball').style.visibility="visible";
				     // document.getElementById('p7').style.visibility="visible";
				     // document.getElementById('p8').style.visibility="visible";
				     // document.getElementById('p8').innerHTML="Ball Indentor";
				     // document.getElementById('p1-1').style.visibility="visible";
				     // document.getElementById('p1-2').style.visibility="visible";
				     // document.getElementById('p1').style.visibility="hidden";
				     
					 // setTimeout(function(){
						 // document.getElementById('nextButton').style.visibility="visible";
					 // },200);
             // }
			 flag1();
		 }
		 document.getElementById('p2').onclick=function(){flag1();}
		 // Mild steel
		
		 document.getElementById('ms').onclick=function(){ 
		 // if(firsttime)
		 // {
			 // firsttime=false;
			 // document.getElementById('p3').style.color="#FC0D05";
			 // flag=2
			 // document.getElementById('ball').style.visibility="visible";
			 // document.getElementById('p7').style.visibility="visible";
			 // document.getElementById('p8').style.visibility="visible";
			 // document.getElementById('p8').innerHTML="Ball Indentor";
			 // document.getElementById('p1-1').style.visibility="visible";
			 // document.getElementById('p1-3').style.visibility="visible";
			 // document.getElementById('p1').style.visibility="hidden";
			 // setTimeout(function(){
				 // document.getElementById('nextButton').style.visibility="visible";
			 // },200);
		 // }
		 flag2();
		 }
		 document.getElementById('p3').onclick=function(){flag2();}
		 // Brass
		
		 document.getElementById('br').onclick=function(){
			// if(firsttime)
		     // {
			 // firsttime=false;
			 // document.getElementById('p4').style.color="#FC0D05";
			 // flag=3;
			 // document.getElementById('ball').style.visibility="visible";
			 // document.getElementById('p7').style.visibility="visible";
			 // document.getElementById('p8').style.visibility="visible";
			 // document.getElementById('p8').innerHTML="Ball Indentor";
			 // document.getElementById('p1-1').style.visibility="visible";
			 // document.getElementById('p1-4').style.visibility="visible";
			 // document.getElementById('p1').style.visibility="hidden";
			 // setTimeout(function(){
				 // document.getElementById('nextButton').style.visibility="visible";
			 // },200);
		 // }
		 flag3();
		 }
		 		 
		document.getElementById('p4').onclick=function(){flag3();}

		 // Aluminium
		 
		 document.getElementById('al').onclick=function(){
			 // if(firsttime)
		     // {
			 // firsttime=false;
			 // document.getElementById('p5').style.color="#FC0D05";
			 // flag=4;
			 // document.getElementById('ball').style.visibility="visible";
			 // document.getElementById('p7').style.visibility="visible";
			 // document.getElementById('p8').style.visibility="visible";
			 // document.getElementById('p8').innerHTML="Ball Indentor";
			 // document.getElementById('p1-1').style.visibility="visible";
			 // document.getElementById('p1-5').style.visibility="visible";
			 // document.getElementById('p1').style.visibility="hidden";
			 // setTimeout(function(){
				 // document.getElementById('nextButton').style.visibility="visible";
			 // },200);
		 //}
		 flag4();
		 }
		 document.getElementById('p5').onclick=function(){flag4();}
		 
		 // Spring Steel
		 
		 document.getElementById('ss').onclick=function(){
			 // if(firsttime)
		     // {
			 // firsttime=false;
			 // document.getElementById('p6').style.color="#FC0D05";
			 // flag=5;
			 // document.getElementById('cone').style.visibility="visible";
			 // document.getElementById('p7').style.visibility="visible";
			 // document.getElementById('p8').style.visibility="visible";
			 // document.getElementById('p8').innerHTML="Cone Indentor";
			 // document.getElementById('p1-1').style.visibility="visible";
			 // document.getElementById('p1-6').style.visibility="visible";
			 // document.getElementById('p1').style.visibility="hidden";
			 // setTimeout(function(){
				 // document.getElementById('nextButton').style.visibility="visible";
			 // },200);
		 // }
		 flag5();
		 }
		 document.getElementById('p6').onclick=function(){flag5();}
	}
 	else if (simsubscreennum==2)
	{ 
        repeat++;
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 110px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(repeat==2)
		{
			myStopFunction();
			document.getElementById('2-1').style.visibility="visible";
			document.getElementById('2-21').style.visibility="visible";
			document.getElementById('2-3').style.visibility="visible";
			document.getElementById('2-101').style.visibility="visible";

		}
        document.getElementById('p1-1').style.visibility="hidden";
        document.getElementById('p1-2').style.visibility="hidden";
        document.getElementById('p6').style.visibility="hidden";
        document.getElementById('p7').style.visibility="hidden";
        document.getElementById('p8').style.visibility="hidden";
        document.getElementById('ball').style.visibility="hidden";
        document.getElementById('cone').style.visibility="hidden";
		
		if(flag==1)
		{
			document.getElementById('2ci').style.visibility="visible";
			document.getElementById('2-1n').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('2ms').style.visibility="visible";
			document.getElementById('2-1n').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('2br').style.visibility="visible";
			document.getElementById('2-1n').style.visibility="visible";
		}
		if(flag==4)
		{
			document.getElementById('2al').style.visibility="visible";
			document.getElementById('2-1n').style.visibility="visible";
		}
		if(flag==5)
		{
			document.getElementById('2ms').style.visibility="visible";
			document.getElementById('2-1n2').style.visibility="visible";
		}
		
		setTimeout(function()
		{
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:410px; top:440px; height: 25px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
	         // document.getElementById('3-3').onclick=function(){step3();}
			 
			var elmt = document.getElementById('p2-1');
			if (isMobile) 
			{
				elmt.innerHTML = "Click on the <br/> wheel to adjust <br/>specimen height";
				moveWheelonClick();
			} 
			else 
			{
				elmt.innerHTML = "Move the mouse on the<br/> wheel to adjust <br/>specimen height";
				moveWheelonHover();
			}
			document.getElementById('p2-1').style.visibility="visible";
		},500); 
    }
	else if (simsubscreennum==3)
	{
		
		refresh();

		document.getElementById('2-4').style.visibility="hidden";
		document.getElementById('2-101').style.visibility="hidden";
		document.getElementById('2-102').style.visibility="hidden";
		document.getElementById('2-1n').style.visibility="hidden";
		document.getElementById('2-1n2').style.visibility="hidden";
		document.getElementById('2-2').style.visibility="hidden";
		document.getElementById('2ci').style.visibility="hidden";
		document.getElementById('2br').style.visibility="hidden";
		document.getElementById('2ms').style.visibility="hidden";
		document.getElementById('2al').style.visibility="hidden";
		document.getElementById('3-5').style.visibility="visible";
		// document.getElementById('3-31').style.visibility="visible";
		if(repeat==1)
		{
		if(flag==1)
		{
			document.getElementById('3ci').style.visibility="visible";
			document.getElementById('3-1n').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('3ms').style.visibility="visible";
			document.getElementById('3-1n').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('3br').style.visibility="visible";
			document.getElementById('3-1n').style.visibility="visible";
		}
		if(flag==4)
		{
			document.getElementById('3al').style.visibility="visible";
			document.getElementById('3-1n').style.visibility="visible";
		}
		if(flag==5)
		{
			document.getElementById('3ms').style.visibility="visible";
			document.getElementById('3-1n2').style.visibility="visible";
		}
		//
		
		}
	    if(repeat==2)
		{
		if(flag==1)
		{
			document.getElementById('3ci').style.visibility="visible";
			document.getElementById('3-1n1').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('3ms').style.visibility="visible";
			document.getElementById('3-1n1').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('3br').style.visibility="visible";
			document.getElementById('3-1n1').style.visibility="visible";
		}
		if(flag==4)
		{
			document.getElementById('3al').style.visibility="visible";
			document.getElementById('3-1n1').style.visibility="visible";
		}
		if(flag==5)
		{
			document.getElementById('3ms').style.visibility="visible";
			document.getElementById('3-1n21').style.visibility="visible";
		}
	}

	setTimeout(function(){
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 590px; top:304px; height: 20px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
	         document.getElementById('3-3').onclick=function(){step3();}
		},500); 
	}
	
	else if (simsubscreennum==4)
	{ 
        refresh();
        document.getElementById('status').style.visibility="hidden";
        document.getElementById('status2').style.visibility="hidden";
        document.getElementById('2-21').style.visibility="hidden";
        document.getElementById('3-5').style.visibility="hidden";
        // document.getElementById('3-6').style.visibility="hidden";
        document.getElementById('2-1').style.visibility="hidden";
        document.getElementById('3-1').style.visibility="hidden";
        document.getElementById('3-1n').style.visibility="hidden";
        document.getElementById('3-1n2').style.visibility="hidden";
        document.getElementById('3-1n1').style.visibility="hidden";
        document.getElementById('3-1n21').style.visibility="hidden";
        document.getElementById('3ci').style.visibility="hidden";
        document.getElementById('3br').style.visibility="hidden";
        document.getElementById('3ms').style.visibility="hidden";
        document.getElementById('3al').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="visible";
         
        if(flag==1 || flag==2 || flag==3 || flag==4)
		{
        	document.getElementById('2').innerHTML="100";		
        	document.getElementById('3').innerHTML="B";		
		}
		if(flag==5)
		{
		    document.getElementById('2').innerHTML="150";		
        	document.getElementById('3').innerHTML="C";		
		}

		if(flag==1)
		{
			document.getElementById('1').innerHTML="Cast Iron";
			// if(repeat==1)
			// {
			    // document.getElementById('4').innerHTML=ci1;
			// }
			// else if(repeat==2)
			// {
				// document.getElementById('4').innerHTML=ci2;
			// }
		}
		if(flag==2)
		{
			document.getElementById('1').innerHTML="Mild Steel";
			// if(repeat==1)
			// {
			    // document.getElementById('4').innerHTML=ms1;
			// }
			// else if(repeat==2)
			// {
				// document.getElementById('4').innerHTML=ms2;
			// }
		}
		if(flag==3)
		{
			document.getElementById('1').innerHTML="Brass";
			// if(repeat==1)
			// {
			    // document.getElementById('4').innerHTML=br1;
			// }
			// else if(repeat==2)
			// {
				// document.getElementById('4').innerHTML=br2;
			// }
		}
		if(flag==4)
		{
			document.getElementById('1').innerHTML="Aluminium";
			// if(repeat==1)
			// {
			    // document.getElementById('4').innerHTML=al1;
			// }
			// else if(repeat==2)
			// {
				// document.getElementById('4').innerHTML=al2;
			// }
		}
		if(flag==5)
		{
			document.getElementById('1').innerHTML="Spring Steel";
			// if(repeat==1)
			// {
			    // document.getElementById('4').innerHTML=ss1;
			// }
			// else if(repeat==2)
			// {
				// document.getElementById('4').innerHTML=ss2;
			// }
		}
		
		if(repeat==1)
		{
			fv1=parseInt(degrees/3.6);
			// document.getElementById('4').innerHTML=fv1.toFixed(2);
			document.getElementById('4').innerHTML=parseInt(degrees/3.6);
		}
		if(repeat==2)
		{
			document.getElementById('66').style.visibility="visible";
			fv2=parseInt(degrees2/3.6);
			// document.getElementById('4').innerHTML=fv2.toFixed(2);
			document.getElementById('4').innerHTML=parseInt(degrees2/3.6);
		}
		fv3=((fv1+fv2)/2).toFixed(2);
		if(repeat<2)
		 {
			 i++;
			 simsubscreennum=1;
			 document.getElementById('nextButton').style.visibility="visible";
		 }
		 if(repeat==2)
		 {
			 setTimeout(function(){
				 document.getElementById('tab').style.visibility="hidden";
				 document.getElementById('tab2').style.visibility="visible";
		if(flag==1 || flag==2 || flag==3 || flag==4)
		{
        	document.getElementById('22').innerHTML="100";		
        	document.getElementById('33').innerHTML="B";		
		}
		if(flag==5)
		{
		    document.getElementById('22').innerHTML="150";		
        	document.getElementById('33').innerHTML="C";		
		}

		if(flag==1)
		{
			document.getElementById('11').innerHTML="Cast Iron";
		}
		if(flag==2)
		{
			document.getElementById('11').innerHTML="Mild Steel";
		}
		if(flag==3)
		{
			document.getElementById('11').innerHTML="Brass";
		}
		if(flag==4)
		{
			document.getElementById('11').innerHTML="Aluminium";
		}
		if(flag==5)
		{
			document.getElementById('11').innerHTML="Spring Steel";
		}
					
        document.getElementById('44').innerHTML=fv1;
        document.getElementById('55').innerHTML=fv2;
        document.getElementById('trial').style.visibility="hidden";
        document.getElementById('status3').style.visibility="visible";
        document.getElementById('status4').style.visibility="visible";
        document.getElementById('status4').innerHTML=fv3;

		
		},750);
			 document.getElementById('nextButton').style.visibility="hidden";
		 }
	}
	
}
    
			
	function step3()
	{
		myStopFunction();
		document.getElementById('3-3').onclick="";
		document.getElementById('3-9').style.visibility="visible";
		document.getElementById('3-11').style.visibility="visible";
		if(repeat==1)
		{
			
			if(flag==5)
		{
			document.getElementById('3-10').style.visibility="visible";
			document.getElementById('3-12').style.visibility="hidden";
			document.getElementById('3-121').style.visibility="hidden";
			document.getElementById('3-101').style.visibility="hidden";
		}
		else
		{
			document.getElementById('3-12').style.visibility="visible";
			document.getElementById('3-10').style.visibility="hidden";
			document.getElementById('3-101').style.visibility="hidden";
			document.getElementById('3-121').style.visibility="hidden";
		}
         document.getElementById('3-4').style.visibility="visible";
		 setTimeout(function(){
		 document.getElementById('3-4').style.transformOrigin="0% 100%";
		 document.getElementById('3-4').style.animation="moveHand 1.5s forwards";
		 //
		  if(flag==5)
			 {
				document.getElementById('3-10').style.transformOrigin="0% 100%";
		        document.getElementById('3-10').style.animation="moveHand2 3s forwards";
			 }
			 else
			 {
			    document.getElementById('3-12').style.transformOrigin="0% 100%";
			    document.getElementById('3-12').style.animation="moveHand1 3s forwards";
			 }
		 },400);
		
		 setTimeout(function(){
			 document.getElementById('3-4').style.visibility="hidden";
		 },2200);
		}
		if(repeat==2)
		{
			if(flag==5)
		   {
			document.getElementById('3-101').style.visibility="visible";
			document.getElementById('3-121').style.visibility="hidden";
			document.getElementById('3-12').style.visibility="hidden";
			document.getElementById('3-10').style.visibility="hidden";
		   }
		   else
		   {
			document.getElementById('3-121').style.visibility="visible";
			document.getElementById('3-101').style.visibility="hidden";
			document.getElementById('3-10').style.visibility="hidden";
			document.getElementById('3-12').style.visibility="hidden";
		    }
			 document.getElementById('3-41').style.visibility="visible";
		 setTimeout(function(){
		 document.getElementById('3-41').style.transformOrigin="0% 100%";
		 document.getElementById('3-41').style.animation="moveHand 1.5s forwards";
		 //
		  if(flag==5)
			 {
				document.getElementById('3-101').style.transformOrigin="0% 100%";
		        document.getElementById('3-101').style.animation="moveHand2 3s forwards";
			 }
			 else
			 {
			    document.getElementById('3-121').style.transformOrigin="0% 100%";
			    document.getElementById('3-121').style.animation="moveHand1 3s forwards";
			 }
		 },400);
		 setTimeout(function(){
			 document.getElementById('3-41').style.visibility="hidden";
		 },2200);
		}
		 setTimeout(function(){
			 document.getElementById('3-9').style.visibility="hidden";
			 document.getElementById('3-10').style.visibility="hidden";
			 document.getElementById('3-101').style.visibility="hidden";
			 document.getElementById('3-11').style.visibility="hidden";
			 document.getElementById('3-12').style.visibility="hidden";
			 document.getElementById('3-121').style.visibility="hidden";

		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:600px; top:353px; height: 25px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('3-5').onclick=function(){step31();}
		 },4700);	 
	}	
	
	function step31()
	{
		myStopFunction();
		document.getElementById('3-5').style.visibility="hidden";
        document.getElementById('3-6').style.visibility="visible";
        document.getElementById('3-7').style.visibility="visible";
        document.getElementById('3-8').style.visibility="visible";
        document.getElementById('status5').style.visibility="visible";
		document.getElementById('3-3').onclick="";
		document.getElementById('3-8').style.transformOrigin="50% 100%";
		degrees1=0;
		rotateAnimation1("3-8",100);    //Rotate clock needle
		// if(repeat==1)
		// {
		// if(flag==1)
		// {
			// t=ci1*3.6;
			// //degrees1=t;
		// }
		// if(flag==2)
		// {
			// t=ms1*3.6;
			// //degrees1=t;
		// }
		// if(flag==3)
		// {
			// t=br1*3.6;
			// //degrees1=t;
		// }
		// if(flag==4)
		// {
			// t=al1*3.6;
			// //degrees1=t;
		// }
		// if(flag==5)
		// {
			// t=ss1*3.6;
			// //degrees1=t;
		// }
		// degrees1=t;
		// }
		
		
		// else if(repeat==2)
		// {
		// if(flag==1)
		// {
			// t=ci2*3.6;
			// //degrees1=t;
		// }
		// if(flag==2)
		// {
			// t=ms2*3.6;
			// //degrees1=t;
		// }
		// if(flag==3)
		// {
			// t=br2*3.6;
			// //degrees1=t;
		// }
		// if(flag==4)
		// {
			// t=al2*3.6;
			// //degrees1=t;
		// }
		// if(flag==5)
		// {
			// t=ss2*3.6;
			// //degrees1=t;
		// }
		// degrees1=t;
		
		// }
		
		if(repeat==1)
		{
			document.getElementById('status').style.visibility="visible";
		document.getElementById('status').innerHTML="Rockwell Hardness Number = ";
			if(flag==1 || flag==2 || flag==3 || flag==4)
		    {
		         document.getElementById('3-1n').style.transformOrigin="92.5%  17.5%";
		         rotateAnimation("3-1n",25);
				 
				 // rotateImage(); 
				 // count();
		    }
		    if(flag==5)
		    {
		         document.getElementById('3-1n2').style.transformOrigin="48% 92.5%";
		         rotateAnimation("3-1n2",25);
				  // Stop animation when button is clicked
            
				 // rotateImage2(); 
				 // count();
		    }
		// setTimeout(function(){
		     // myInt = setInterval(function(){ animatearrow(); }, 500);
		     // document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:600px; top:353px; height: 25px; z-index: 10;";
		     // document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // // Code for IE9
		     // document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // // Standard syntax
		     // document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('3-6').onclick=function(){step32();}
			 
			
		 // },9700);
		}
		 if(repeat==2)
		 {
			 document.getElementById('status2').style.visibility="visible";
		document.getElementById('status2').innerHTML="Rockwell Hardness Number = ";
			 if(flag==1 || flag==2 || flag==3 || flag==4)
		    {
		         document.getElementById('3-1n1').style.transformOrigin="92.5%  17.5%";
		         rotateAnimation2("3-1n1",25);
				 // rotateImage3(); 
				 // count();
		    }
		    if(flag==5)
		    {
		         document.getElementById('3-1n21').style.transformOrigin="48% 92.5%";
		         rotateAnimation2("3-1n21",25);
				 // rotateImage4(); 
				 // count();
		    }
		   // setTimeout(function(){
	         document.getElementById('3-6').onclick=function(){step32();}
		 // },6200);
	    }	
	}
	
    function step32()
	{
		myStopFunction();
		
		document.getElementById('3-3').onclick="";
		document.getElementById('3-5').onclick="";
		document.getElementById('3-6').onclick="";
		document.getElementById('status5').style.visibility="hidden";
		document.getElementById('3-6').style.visibility="hidden";
		document.getElementById('3-7').style.visibility="hidden";
		document.getElementById('3-8').style.visibility="hidden";
        document.getElementById('3-5').style.visibility="visible";
		if(repeat==1)
		{
			lever=1;
		if(flag==1 || flag==2 || flag==3 || flag==4)
		{
		document.getElementById('3-1n').style.transformOrigin="92.5%  17.5%";
		// rotateAnimation1("3-1n",12);
		
    	}
		if(flag==5)
		{
		document.getElementById('3-1n2').style.transformOrigin="48% 92.5%";
		// rotateAnimation1("3-1n2",12);
		
		}
		if(degrees1==0)
		{
			setTimeout(function(){
			// if(flag==1 || flag==2 || flag==3 || flag==4)
		    // {
		         // document.getElementById('3-1n').style.visibility="hidden";
		    // }
		    // if(flag==5)
		    // {
		         // document.getElementById('3-1n2').style.visibility="hidden";
		    // }	
			// document.getElementById('3-1').style.visibility="hidden";
            // document.getElementById('nextButton').style.visibility="visible";			
			},200);
		}
		document.getElementById('nextButton').style.visibility="visible";	
		}
		
		
		if(repeat==2)
		{
			lever2=1;
			
		if(flag==1 || flag==2 || flag==3 || flag==4)
		{
		document.getElementById('3-1n1').style.transformOrigin="92.5%  17.5%";
		// rotateAnimation1("3-1n1",12);
		}
		if(flag==5)
		{
		document.getElementById('3-1n21').style.transformOrigin="48% 92.5%";
		// rotateAnimation1("3-1n21",12);
		}
		if(degrees1==0)
		{
			setTimeout(function(){
			// if(flag==1 || flag==2 || flag==3 || flag==4)
		    // {
		         // document.getElementById('3-1n1').style.visibility="hidden";
		         // document.getElementById('3-1n').style.visibility="hidden";
		    // }
		    // if(flag==5)
		    // {
		         // document.getElementById('3-1n21').style.visibility="hidden";
		         // document.getElementById('3-1n2').style.visibility="hidden";
		    // }	
			// document.getElementById('3-1').style.visibility="hidden";	
			            document.getElementById('nextButton').style.visibility="visible";			

			},200);
		}
		}
		document.getElementById('nextButton').style.visibility="visible";		
	}

	function moveWheelonHover()
	{
		if(repeat==1)
		{
			$('#2-01').mousemove(function() 
			{
				count++;
				//alert(navigator.appName);
				myStopFunction();
				document.getElementById('2-2').style.transformOrigin="62% 93%";     //needle1 rotation
				document.getElementById('2-2').style.animation="swing 4s forwards";  //needle1 rotation
				var element = document.getElementById("2-10");
				element.style.left = parseFloat(element.style.left) + 0.25 + 'px';
			    //var position = $(element).offset();           //builtin function to find the HTML element's position 
			    // document.getElementById('2-5').innerHTML=+position.left;
				//console.log("element.style.left ="+element.style.left +", count="+count);
				if(document.getElementById("2-10").style.left=="410px" || count==48)
				{
					//alert("element.style.left ="+element.style.left +", count="+count);
					$('#2-01').mousemove(function(){ });
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-4').style.visibility="visible";
					document.getElementById('2-101').style.visibility="visible";
					document.getElementById('2-10').style.visibility="hidden";
					document.getElementById('nextButton').style.visibility="visible";
					
				}
			});
		}
		else if(repeat==2)
		{
			count=0;
			$('#2-01').mousemove(function() 
			{
				count++;
				// alert(navigator.appName);
				myStopFunction();
				document.getElementById('2-21').style.transformOrigin="62% 93%";     //needle1 rotation
				document.getElementById('2-21').style.animation="swing 4s forwards";  //needle1 rotation
				var element = document.getElementById("2-101");
				element.style.left = parseFloat(element.style.left) + 0.25 + 'px';
				//var position = $(element).offset();           //builtin function to find the HTML element's position 
				// document.getElementById('2-5').innerHTML=+position.left;
				if(document.getElementById("2-101").style.left=="410px" || count==48)
				{
					$('#2-01').mousemove(function(){ });
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-4').style.visibility="visible";
					document.getElementById('2-102').style.visibility="visible";
					document.getElementById('2-101').style.visibility="hidden";
					document.getElementById('nextButton').style.visibility="visible";
				}
			});
		}
	}
	
	function moveWheelonClick()
	{
		if(repeat==1)
		{
			$('#2-01').click(function() 
			{
				count++;
				//alert(navigator.appName);
				myStopFunction();
				document.getElementById('2-2').style.transformOrigin="62% 93%";     //needle1 rotation
				document.getElementById('2-2').style.animation="swing 4s forwards";  //needle1 rotation
				var element = document.getElementById("2-10");
				element.style.left = parseFloat(element.style.left) + 2.5 + 'px';
			    //var position = $(element).offset();           //builtin function to find the HTML element's position 
			    // document.getElementById('2-5').innerHTML=+position.left;
				//console.log("element.style.left ="+element.style.left +", count="+count);
				if(document.getElementById("2-10").style.left=="410px" || count==3)
				{
					//alert("element.style.left ="+element.style.left +", count="+count);
					$("#2-01").off('click');
					//$('#2-01').click(function(){ });
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-4').style.visibility="visible";
					document.getElementById('2-101').style.visibility="visible";
					document.getElementById('2-10').style.visibility="hidden";
					document.getElementById('nextButton').style.visibility="visible";
				}
			});
		}
		else if(repeat==2)
		{
			count=0;
			$('#2-01').click(function() 
			{
				count++;
				// alert(navigator.appName);
				myStopFunction();
				document.getElementById('2-21').style.transformOrigin="62% 93%";     //needle1 rotation
				document.getElementById('2-21').style.animation="swing 4s forwards";  //needle1 rotation
				var element = document.getElementById("2-101");
				element.style.left = parseFloat(element.style.left) + 2.5 + 'px';
				//var position = $(element).offset();           //builtin function to find the HTML element's position 
				// document.getElementById('2-5').innerHTML=+position.left;
				if(document.getElementById("2-101").style.left=="410px" || count==3)
				{
					//alert("element.style.left ="+element.style.left +", count="+count);
					//$('#2-01').click(function(){ });
					$("#2-01").off('click');
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-4').style.visibility="visible";
					document.getElementById('2-102').style.visibility="visible";
					document.getElementById('2-101').style.visibility="hidden";
					document.getElementById('nextButton').style.visibility="visible";
				}
			});
		}
	}
	function refresh()
	{
        //document.getElementById('arrow1').style="";
		//document.getElementById("arrow1").style.WebkitTransform = ""; 
		document.getElementById('2-2').style.transformOrigin = "";
	    document.getElementById('2-2').style.animation = ""; 
		document.getElementById('3-4').style.animation=" ";
		document.getElementById('status').innerHTML="";
		document.getElementById('3-1n2').style.transformOrigin="";
		document.getElementById('3-1n').style.transformOrigin="";
	}