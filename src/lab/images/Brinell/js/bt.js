var flag=0; var repeat=0; var a; var firsttime=false; var hbw1,hbw2,ad1,ad2,avg; var i=0; var count1=0,count2=0;
//check for type of device
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var steel= [[10,3000,30,5.07,5.07,5.07,0.507,138.41],
            [10,3000,30,4.52,4.52,4.52,0.452,176.96],
		    [10,3000,30,5.04,5.04,5.04,0.504,140.2],
		    [10,3000,30,4.6,4.6,4.6,0.46,170.49],
		    [10,3000,30,4.7,4.7,4.7,0.47,162.85],
		    [10,3000,30,6,6,6,0.6,95.54],
		    [10,3000,30,5.9,5.9,5.9,0.59,99.21],
		    [10,3000,30,4.67,4.67,4.67,0.467,165.09],
		    [10,3000,30,4.74,4.74,4.74,0.474,159.94],
		    [10,3000,30,4.77,4.77,4.77,0.477,157.79]];

var iron=[[10,3000,30,5.8,5.8,5.8,0.58,103.07],
          [10,3000,30,6,6,6,0.6,95.54],
          [10,3000,30,5.53,5.6,5.565,0.5565,112.96],
          [10,3000,30,6.5,6.3,6.4,0.64,82.5],
          [10,3000,30,5.72,5.72,5.72,0.572,106.31],
          [10,3000,30,5.73,5.73,5.73,0.573,105.9],
          [10,3000,30,5.9,5.9,5.9,0.59,99.21],
          [10,3000,30,5.92,5.92,5.92,0.592,98.46],
          [10,3000,30,6.03,6.03,6.03,0.603,94.47],
          [10,3000,30,5.7,5.7,5.7,0.577,107.14]];

var brass=[[10,1000,10,3.54,3.54,3.54,0.354,98.36],
           [10,1000,10,3.65,3.65,3.65,0.365,92.32],
		   [10,1000,10,3.46,3.46,3.46,0.346,103.12],
		   [10,1000,10,3.37,3.37,3.37,0.337,108.89],
		   [10,1000,10,3.79,3.79,3.79,0.379,85.38],
		   [10,1000,10,3.41,3.41,3.41,0.341,106.27],
		   [10,1000,10,3.33,3.33,3.33,0.333,111.6],
		   [10,1000,10,3.44,3.44,3.44,0.334,104.36],
		   [10,1000,10,3.48,3.48,3.48,0.348,101.9]];

var alum=[[10,500,5,2.57,2.57,2.57,0.257,94.82],
          [10,500,5,2.6,2.6,2.6,0.26,92.6],
          [10,500,5,2.8,2.8,2.8,0.28,79.62],
          [10,500,5,2.81,2.81,2.81,0.281,79.04],
          [10,500,5,2.62,2.62,2.62,0.262,91.17],
          [10,500,5,2.63,2.63,2.63,0.263,90.46],
          [10,500,5,2.67,2.67,2.67,0.267,87.72],
          [10,500,5,2.68,2.68,2.68,0.268,87.06],
          [10,500,5,2.79,2.79,2.79,0.279,80.2],
          [10,500,5,2.65,2.65,2.65,0.265,89.08]];

var st = 0; var ir = 0;	var br = 0; var alu = 0;

function navNext()
{
     for (temp = 0; temp <= 5 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}

function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

var looper;
var degrees = 0;
function rotateAnimation(el,speed){
    var elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+degrees+"deg)";
    } else {
        elem.style.transform = "rotate("+degrees+"deg)";
    }
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }
}

function checkval()
{
	n=document.getElementById('text').value;
	document.getElementById('5-10').style.visibility="visible";
	document.getElementById('5-11').style.visibility="visible";
	if(n==="")
	{
		document.getElementById('5-11').innerHTML="You have not entered any value";
	}
	else 
	{
		document.getElementById('5-11').innerHTML="Entered HBW = "+n;
	}
	if(flag==1)
	{
	document.getElementById('5-10').innerHTML="Actual HBW = "+ir[7]+" kg/mm<sup>2</sup>";
	document.getElementById('5-9').innerHTML=ir[7];
	}
	if(flag==2)
	{
	document.getElementById('5-10').innerHTML="Actual HBW = "+st[7]+" kg/mm<sup>2</sup>";
	document.getElementById('5-9').innerHTML=st[7];
	}
	if(flag==3)
	{
	document.getElementById('5-10').innerHTML="Actual HBW = "+br[7]+" kg/mm<sup>2</sup>";
	document.getElementById('5-9').innerHTML=br[7];
	}
	if(flag==4)
	{
	document.getElementById('5-10').innerHTML="Actual HBW = "+alu[7]+" kg/mm<sup>2</sup>";
	document.getElementById('5-9').innerHTML=alu[7];
	}
	document.getElementById('nextButton').style.visibility="visible";
	document.getElementById('f1').style.visibility="hidden";
	document.getElementById('HBW').style.visibility="hidden";
	document.getElementById('di').style.visibility="hidden";
}

function flag1()
{
	document.getElementById('p2').style.color="#FC0D05";
	flag=1;
	document.getElementById('tab1').style.visibility="visible";
	document.getElementById('cm1-1').style.visibility="visible";
	document.getElementById('1-1').style.visibility="hidden";
    document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p').style.visibility="visible";
	document.getElementById('p1-2').style.visibility="visible";
	document.getElementById('p3').style.visibility="hidden";
	document.getElementById('p4').style.visibility="hidden";
	document.getElementById('p5').style.visibility="hidden";
    document.getElementById('al').style.visibility="hidden";
	document.getElementById('br').style.visibility="hidden";
	document.getElementById('ms').style.visibility="hidden";
	document.getElementById('p1').style.visibility="hidden";
    setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},300);
}

function flag2()
{
	document.getElementById('p3').style.color="#FC0D05";
	flag=2;
	document.getElementById('tab1').style.visibility="visible";
	document.getElementById('cm1-1').style.visibility="visible";
	document.getElementById('1-1').style.visibility="hidden";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-3').style.visibility="visible";
	document.getElementById('p').style.visibility="visible";
	document.getElementById('p21').style.visibility="visible";
	document.getElementById('ms2').style.visibility="visible";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('p3').style.visibility="hidden";
	document.getElementById('p4').style.visibility="hidden";
	document.getElementById('p5').style.visibility="hidden";
	document.getElementById('al').style.visibility="hidden";
	document.getElementById('br').style.visibility="hidden";
	document.getElementById('ci').style.visibility="hidden";
	document.getElementById('ms').style.visibility="hidden";
	document.getElementById('p1').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},300);
}

function flag3()
{
	flag=3;
	document.getElementById('tab1').style.visibility="visible";
    document.getElementById('br1-1').style.visibility="visible";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-4').style.visibility="visible";
	document.getElementById('p').style.visibility="visible";
	document.getElementById('p22').style.visibility="visible";
	document.getElementById('br2').style.visibility="visible";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('p3').style.visibility="hidden";
	document.getElementById('1-1').style.visibility="hidden";
	document.getElementById('p4').style.visibility="hidden";
	document.getElementById('p5').style.visibility="hidden";
    document.getElementById('al').style.visibility="hidden";
	document.getElementById('br').style.visibility="hidden";
	document.getElementById('ci').style.visibility="hidden";
	document.getElementById('ms').style.visibility="hidden";
	document.getElementById('p1').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},300);
}

function flag4()
{
	flag=4;
	document.getElementById('tab1').style.visibility="visible";
	document.getElementById('al1-1').style.visibility="visible";
	document.getElementById('p1-1').style.visibility="visible";
	document.getElementById('p1-5').style.visibility="visible";
	document.getElementById('p').style.visibility="visible";
    document.getElementById('p23').style.visibility="visible";
	document.getElementById('al2').style.visibility="visible";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('p3').style.visibility="hidden";
	document.getElementById('1-1').style.visibility="hidden";
	document.getElementById('p4').style.visibility="hidden";
	document.getElementById('p5').style.visibility="hidden";
	document.getElementById('al').style.visibility="hidden";
	document.getElementById('br').style.visibility="hidden";
	document.getElementById('ci').style.visibility="hidden";
	document.getElementById('ms').style.visibility="hidden";
	document.getElementById('p1').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
    },300);
}

function touchScroll(event)
{
    myStopFunction();
	var element = document.getElementById("4-21");
    element.style.left = parseFloat(element.style.left) + 0.50 + 'px';
	var position = $(element).offset();           //builtin function to find the HTML element's position 
	if(position.left>=54)
	{
		document.getElementById('4-8').style.visibility="hidden";
	    document.getElementById('4-41').style.visibility="hidden";
		document.getElementById('4-42').style.visibility="visible";
		if(flag==1)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
		if(flag==2)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
		if(flag==3)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
		if(flag==4)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
		setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
		},200);
	}
}

function touchScroll2(event)
{
	myStopFunction();
	var element = document.getElementById("4-21");
	element.style.left = parseFloat(element.style.left) + 0.35 + 'px';
	var position = $(element).offset();           //builtin function to find the HTML element's position 
	if(position.left>=54)
	{
		document.getElementById('4-8').style.visibility="hidden";
		document.getElementById('4-41').style.visibility="hidden";
		document.getElementById('4-42').style.visibility="visible";
		if(flag==1)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
		if(flag==2)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
		if(flag==3)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
		if(flag==4)
			document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
		setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
		},200);
	}
}

function magic()
{
	if (simsubscreennum==1)
	{  
         // Cast Iron
         document.getElementById('ci').onclick=function(){flag1();}
         document.getElementById('p2').onclick=function(){flag1();}
		 // Mild steel
		 document.getElementById('ms').onclick=function(){flag2();}
		 document.getElementById('p3').onclick=function(){flag2();}
		 // Brass
		 document.getElementById('br').onclick=function(){flag3();}
		 document.getElementById('p4').onclick=function(){flag3();}
		 // Aluminium
		 document.getElementById('al').onclick=function(){flag4();}
		 document.getElementById('p5').onclick=function(){flag4();}
	}
 	else if (simsubscreennum==2)
	{ 
        refresh();
   
		repeat++;
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		if(repeat==2)
		{
			document.getElementById('5-10').style.visibility="hidden";
            document.getElementById('5-11').style.visibility="hidden";
            document.getElementById('2-2').style.visibility="visible";
		}
		document.getElementById('2-6').style.visibility="hidden";
		if(flag==1)
		{	 
			 document.getElementById('tab1').style.visibility="hidden";
			 document.getElementById('cm1-1').style.visibility="hidden";
			 document.getElementById('p1-1').style.visibility="hidden";
			 document.getElementById('p').style.visibility="hidden";
			 document.getElementById('p1-2').style.visibility="hidden";
			 document.getElementById('2-1ci').style.visibility="visible";
       }
		else if(flag==2)
		{
			 document.getElementById('tab1').style.visibility="hidden";
			 document.getElementById('cm1-1').style.visibility="hidden";
			 document.getElementById('p1-1').style.visibility="hidden";
			 document.getElementById('p1-3').style.visibility="hidden";
			 document.getElementById('p').style.visibility="hidden";
			 document.getElementById('p21').style.visibility="hidden";
			 document.getElementById('ms2').style.visibility="hidden";
			 document.getElementById('2-1ms').style.visibility="visible";
		}
        else if(flag==3)
		{
			 document.getElementById('tab1').style.visibility="hidden";
			 document.getElementById('br1-1').style.visibility="hidden";
			 document.getElementById('p1-1').style.visibility="hidden";
			 document.getElementById('p1-4').style.visibility="hidden";
			 document.getElementById('p').style.visibility="hidden";
			 document.getElementById('p22').style.visibility="hidden";
		     document.getElementById('br2').style.visibility="hidden";
             document.getElementById('2-1br').style.visibility="visible";
		}
        if(flag==4)
		{
			 document.getElementById('tab1').style.visibility="hidden";
			 document.getElementById('al1-1').style.visibility="hidden";
			 document.getElementById('p1-1').style.visibility="hidden";
			 document.getElementById('p1-5').style.visibility="hidden";
			 document.getElementById('p').style.visibility="hidden";
			 document.getElementById('p23').style.visibility="hidden";
			 document.getElementById('al2').style.visibility="hidden";
			 document.getElementById('2-1al').style.visibility="visible";
		}
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:410px; top:418px;  height: 20px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('2-66').onclick=function(){step2();}
    }
	
	else if (simsubscreennum==3)
	{
		myStopFunction();
        
        if(flag==1)
			document.getElementById('3-1ci').style.visibility="visible";
		if(flag==2)
			document.getElementById('3-1ms').style.visibility="visible";
		if(flag==3)
			document.getElementById('3-1br').style.visibility="visible";
		if(flag==4)
			document.getElementById('3-1al').style.visibility="visible";
		
		if(repeat>1)
		{
		document.getElementById('3-2on').style.visibility="visible";
		document.getElementById('3-3un').style.visibility="visible";
		}
		document.getElementById('2-2').style.visibility="hidden";
		document.getElementById('x').style.visibility="hidden";
		document.getElementById('2-6').style.visibility="hidden";
		document.getElementById('2-81').style.visibility="hidden";
		document.getElementById('2-82').style.visibility="hidden";
		document.getElementById('2-9ci').style.visibility="hidden";
		document.getElementById('2-9ms').style.visibility="hidden";
		document.getElementById('2-9br').style.visibility="hidden";
		document.getElementById('2-9al').style.visibility="hidden";
		document.getElementById('2-9ci2').style.visibility="hidden";
		document.getElementById('2-9ms2').style.visibility="hidden";
		document.getElementById('2-9br2').style.visibility="hidden";
		document.getElementById('2-9al2').style.visibility="hidden";
		document.getElementById('2-1ci').style.visibility="hidden";
		document.getElementById('2-1ms').style.visibility="hidden";
		document.getElementById('2-1br').style.visibility="hidden";
		document.getElementById('2-1al').style.visibility="hidden";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 495px; top:308.5px; height: 20px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(205deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(205deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(205deg)";
		 document.getElementById('3-2on').onclick=function(){step3();}
    }
	else if (simsubscreennum==4)
	{ 
        myStopFunction();
		document.getElementById('4-6').innerHTML="Measured Diameter : ";
        st = steel[Math.floor(Math.random() * steel.length)];
        ir = iron[Math.floor(Math.random() * iron.length)];	     
        br = brass[Math.floor(Math.random() * brass.length)];
        alu = alum[Math.floor(Math.random() * alum.length)];
        
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:303px;  height: 25px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		
		var elmt = document.getElementById('4-8');
		if(isMobile) 
		{
			elmt.innerHTML = "Click on the knob <br/>to measure the<br/>Impression diameter";
			moveKnobonClick();
		} 
		else 
		{
			elmt.innerHTML = "Move the mouse cursor on <br/>the knob to measure the<br/>Impression diameter";
			moveKnobonHover();
		}
		document.getElementById('4-8').style.visibility="visible";
		
        if(flag==1)
		{
			document.getElementById('3-1ci').style.visibility="hidden";
			document.getElementById('4-5ci').style.visibility="visible";
			document.getElementById('grey').style.visibility="visible";
			document.getElementById('4-3').style.visibility="visible";
		}
		if(flag==2)
		{
			document.getElementById('3-1ms').style.visibility="hidden";
			document.getElementById('4-5ms').style.visibility="visible";
		    document.getElementById('grey').style.visibility="visible";
			document.getElementById('4-3').style.visibility="visible";
		}
		if(flag==3)
		{
			document.getElementById('3-1br').style.visibility="hidden";
			document.getElementById('4-5br').style.visibility="visible";
			document.getElementById('yellow').style.visibility="visible";
			document.getElementById('4-3y').style.visibility="visible";
		}
		if(flag==4)
		{
			document.getElementById('3-1al').style.visibility="hidden";	
            document.getElementById('4-5al').style.visibility="visible";			
		    document.getElementById('grey').style.visibility="visible";
			document.getElementById('4-3').style.visibility="visible";
     	}
		
        document.getElementById('3-2off').style.visibility="hidden";
        document.getElementById('3-3un').style.visibility="visible";
        document.getElementById('3-3un').style.visibility="hidden";
		if(repeat>1 && repeat<=2)
		{
			refresh();
			document.getElementById('4-1').style.visibility="visible";
		}
        
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 document.getElementById('yellow').style.visibility="hidden";
		 document.getElementById('grey').style.visibility="hidden";
		 document.getElementById('4-5ci').style.visibility="hidden";
		 document.getElementById('4-5ms').style.visibility="hidden";
		 document.getElementById('4-5br').style.visibility="hidden";
		 document.getElementById('4-5al').style.visibility="hidden";
		 document.getElementById('4-3').style.visibility="hidden";
		 document.getElementById('4-3y').style.visibility="hidden";
		 document.getElementById('3-3').style.visibility="hidden";
		 document.getElementById('4-42').style.visibility="hidden";
		 document.getElementById('4-41').style.visibility="hidden";
		 document.getElementById('4-21').style.visibility="hidden";
		 document.getElementById('4-2').style.visibility="hidden";
		 document.getElementById('4-4').style.visibility="hidden";
	
		if(repeat==2)
		{
    		 document.getElementById('step5-1').style.visibility="visible";
     		 document.getElementById('4-2').style.visibility="hidden";
		}
		 document.getElementById('4-1').style.visibility="hidden";

		 if(flag==1)
		 {
			 document.getElementById('5-1').innerHTML="Cast Iron";
			 document.getElementById('5-2').innerHTML=ir[0];
			 document.getElementById('5-3').innerHTML=ir[1];
			 document.getElementById('5-4').innerHTML=ir[2];
			 document.getElementById('5-5').innerHTML=ir[3];
			 document.getElementById('5-6').innerHTML=ir[4];
			 document.getElementById('5-7').innerHTML=ir[5];
			 document.getElementById('5-8').innerHTML=ir[6];
			 document.getElementById('5-9').innerHTML=ir[7];
			 if(repeat==1)
			 {
				 hbw1=ir[7];
				 ad1=ir[5];
			 }
			 if(repeat==2)
			 {
				 hbw2=ir[7];
				 ad2=ir[5];
			 }
		 }
		 if(flag==2)
		 {
			 document.getElementById('5-1').innerHTML="Mild Steel";
			 document.getElementById('5-2').innerHTML=st[0];
			 document.getElementById('5-3').innerHTML=st[1];
			 document.getElementById('5-4').innerHTML=st[2];
			 document.getElementById('5-5').innerHTML=st[3];
			 document.getElementById('5-6').innerHTML=st[4];
			 document.getElementById('5-7').innerHTML=st[5];
			 document.getElementById('5-8').innerHTML=st[6];
			 document.getElementById('5-9').innerHTML=st[7];
			 if(repeat==1)
			 {
				 hbw1=st[7];
				 ad1=st[5];
			 }
			 if(repeat==2)
			 {
				 hbw2=st[7];
				 ad2=st[5];
			 }
		 }
		 if(flag==3)
		 {
			 document.getElementById('5-1').innerHTML="Brass";
			 document.getElementById('5-2').innerHTML=br[0];
			 document.getElementById('5-3').innerHTML=br[1];
			 document.getElementById('5-4').innerHTML=br[2];
			 document.getElementById('5-5').innerHTML=br[3];
			 document.getElementById('5-6').innerHTML=br[4];
			 document.getElementById('5-7').innerHTML=br[5];
			 document.getElementById('5-8').innerHTML=br[6];
			 document.getElementById('5-9').innerHTML=br[7];
			 if(repeat==1)
			 {
				 hbw1=br[7];
				 ad1=br[5];
			 }
			 if(repeat==2)
			 {
				 hbw2=br[7];
				 ad2=br[5];
			 }
		 }
		 if(flag==4)
		 {
			 document.getElementById('5-1').innerHTML="Aluminium";
			 document.getElementById('5-2').innerHTML=alu[0];
			 document.getElementById('5-3').innerHTML=alu[1];
			 document.getElementById('5-4').innerHTML=alu[2];
			 document.getElementById('5-5').innerHTML=alu[3];
			 document.getElementById('5-6').innerHTML=alu[4];
			 document.getElementById('5-7').innerHTML=alu[5];
			 document.getElementById('5-8').innerHTML=alu[6];
			 document.getElementById('5-9').innerHTML=alu[7];
			 if(repeat==1)
			 {
				 hbw1=alu[7];
				 ad1=alu[5];
			 }
			 if(repeat==2)
			 {
				 hbw2=alu[7];
				 ad2=alu[5];
			 }
		 }
		  var avg=((hbw1+hbw2)/2).toFixed(2);

		 setTimeout(function(){
		 if(repeat==2)
		 {
			 document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('trial').style.visibility="hidden";
			 document.getElementById('51').style.visibility="hidden";
			 document.getElementById('52').style.visibility="hidden";
			 document.getElementById('tab5').style.visibility="hidden";
			 document.getElementById('HBW').style.visibility="hidden";
			 document.getElementById('di').style.visibility="hidden";
			 document.getElementById('tab2').style.visibility="visible";
			 if(flag==1)
			 {
				 document.getElementById('12').innerHTML="Cast Iron";
				 document.getElementById('13').innerHTML="10";
				 document.getElementById('14').innerHTML="3000";
				 
			 }
			 if(flag==2)
			 {
				 document.getElementById('12').innerHTML="Mild Steel";
			     document.getElementById('13').innerHTML="10";
				 document.getElementById('14').innerHTML="3000";
			 }
			 if(flag==3)
			 {
				 document.getElementById('12').innerHTML="Brass";
				 document.getElementById('13').innerHTML="10";
				 document.getElementById('14').innerHTML="1000";
			 }
			 if(flag==4)
			 {
				 document.getElementById('12').innerHTML="Aluminium";
				 document.getElementById('13').innerHTML="10";
				 document.getElementById('14').innerHTML="500";
			 }
			 document.getElementById('15').innerHTML=ad1;
			 document.getElementById('19').innerHTML=ad2;
			 document.getElementById('16').innerHTML=hbw1;
			 document.getElementById('20').innerHTML=hbw2;
			 document.getElementById('17').innerHTML=avg;
		 }
		 },2000);
		 if(repeat<2 && repeat>=1)
		 {
			 i++;
			 simsubscreennum=1;
			 setTimeout(function(){
			 document.getElementById('nextButton').style.visibility="visible";
			 },2000);
		 }
	}
	
}
    
function step2()
{
	myStopFunction();
	document.getElementById('2-6').style.visibility="visible";
	
	if(repeat==1)
	{
		document.getElementById('2-9').style.visibility="visible";
		document.getElementById('2-8').style.visibility="visible";
		if(flag==1)
			document.getElementById('2-9ci').style.visibility="visible";
		if(flag==2)
			document.getElementById('2-9ms').style.visibility="visible";
		if(flag==3)
			document.getElementById('2-9br').style.visibility="visible";
		if(flag==4)
			document.getElementById('2-9al').style.visibility="visible";
	}
	if(repeat==2)
	{
		document.getElementById('2-91').style.visibility="visible";
		document.getElementById('2-82').style.visibility="visible";
		if(flag==1)
			document.getElementById('2-9ci2').style.visibility="visible";
		if(flag==2)
			document.getElementById('2-9ms2').style.visibility="visible";
		if(flag==3)
			document.getElementById('2-9br2').style.visibility="visible";
		if(flag==4)
		document.getElementById('2-9al2').style.visibility="visible";
	}
	
	var elmt = document.getElementById('p2-1');
	if (isMobile) 
	{
		elmt.innerHTML = "Click on the wheel to till the<br/> specimen height is adjusted";
		moveWheelonClick();
	} 
	else 
	{
		elmt.innerHTML = "Move the mouse cursor <br/>on the wheel to adjust <br/>specimen height";
		moveWheelonHover();
	}
	document.getElementById('p2-1').style.visibility="visible";
}
	
function moveWheelonHover()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:435px;  height: 25px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		if(repeat==1)
		{
			$('#2-9').mousemove(function()
			{
				myStopFunction();
				if(flag==1)
					var specimen=document.getElementById('2-9ci');
				if(flag==2)
					var specimen=document.getElementById('2-9ms');
				if(flag==3)
					var specimen=document.getElementById('2-9br');
				if(flag==4)
					var specimen=document.getElementById('2-9al');
				
				document.getElementById('2-8').style.animation="moveWheel 1s forwards";
				specimen.style.animation="moveST 1s forwards";
				
				setTimeout(function(){
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-8').style.visibility="hidden";
					document.getElementById('2-9').style.visibility="hidden";
					document.getElementById('2-81').style.visibility="visible";
					document.getElementById('x').style.visibility="visible";
					setTimeout(function(){
						document.getElementById('nextButton').style.visibility="visible";
					},200);
				},1000);
				//move the wheel and supporting table on hover
				// count1++;
				// myStopFunction();
				// var element = document.getElementById("2-8");
				// element.style.left = parseFloat(element.style.left) + 0.15 + 'px';
				// var pos = $(element).offset();           //builtin function to find the HTML element's position 
				// console.log(pos);
	
				// image.style.top=parseFloat(image.style.top)+-0.20+'px';
				// if(image.style.top=="196px" || count1==60)
				// {
					// document.getElementById('p2-1').style.visibility="hidden";
					// document.getElementById('2-8').style.visibility="hidden";
					// document.getElementById('2-9').style.visibility="hidden";
					// document.getElementById('2-81').style.visibility="visible";
					// document.getElementById('x').style.visibility="visible";
					// setTimeout(function(){
						// document.getElementById('nextButton').style.visibility="visible";
					// },200);			
				// }
			});
		}
		if(repeat==2)
		{
			count1=0;
			$('#2-91').mousemove(function() 
			{
				count1++;
				myStopFunction();
				// var element = document.getElementById("2-82");
				// element.style.left = parseFloat(element.style.left) + 0.15 + 'px';
				// var pos = $(element).offset();           //builtin function to find the HTML element's position 
				// document.getElementById('p2-1').style.visibility="hidden";
				if(flag==1)
					var specimen=document.getElementById('2-9ci2');
				if(flag==2)
					var specimen=document.getElementById('2-9ms2');
				if(flag==3)
					var specimen=document.getElementById('2-9br2');
				if(flag==4)
					var specimen=document.getElementById('2-9al2');
				
				document.getElementById('2-82').style.animation="moveWheel 1s forwards";
				specimen.style.animation="moveST 1s forwards";
				
				setTimeout(function(){
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-82').style.visibility="hidden";
					document.getElementById('2-91').style.visibility="hidden";
					document.getElementById('2-81').style.visibility="visible";
					document.getElementById('x').style.visibility="visible";
					setTimeout(function(){
						document.getElementById('nextButton').style.visibility="visible";
					},200);
				},1000);
	
				// image.style.top=parseFloat(image.style.top)+-0.20+'px';					
				// if(image.style.top=="196px" || count1==60)
				// {
					// document.getElementById('2-82').style.visibility="hidden";
					// document.getElementById('2-91').style.visibility="hidden";
					// document.getElementById('2-81').style.visibility="visible";
					// document.getElementById('x').style.visibility="visible";
					// document.getElementById('nextButton').style.visibility="visible";
				// }
			});
		}
	},1000);	
}
function moveWheelonClick()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:435px;  height: 25px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		if(repeat==1)
		{
			$('#2-9').click(function()
			{
				//count1++;
				myStopFunction();
				// var element = document.getElementById("2-8");
				// element.style.left = parseFloat(element.style.left) + 0.15 + 'px';
			   // var pos = $(element).offset();           //builtin function to find the HTML element's position             
				if(flag==1)
					 var specimen=document.getElementById('2-9ci');
				if(flag==2)
					 var specimen=document.getElementById('2-9ms');
				if(flag==3)
					 var specimen=document.getElementById('2-9br');
				if(flag==4)
					 var specimen=document.getElementById('2-9al');
	
				document.getElementById('2-8').style.animation="moveWheel 1s forwards";
				specimen.style.animation="moveST 1s forwards";
				// image.style.top=parseFloat(image.style.top)+-2.40+'px';
								
				// if(image.style.top=="196px" || count1==5)
				// {
				setTimeout(function(){
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-8').style.visibility="hidden";
					document.getElementById('2-9').style.visibility="hidden";
					document.getElementById('2-81').style.visibility="visible";
					document.getElementById('x').style.visibility="visible";
					setTimeout(function(){
						document.getElementById('nextButton').style.visibility="visible";
					},200);			
				},1000);			
				//}
			});
		}
		if(repeat==2)
		{
			//count1=0;
			$('#2-91').click(function() 
			{
				//count1++;
				myStopFunction();
				// var element = document.getElementById("2-82");
				// element.style.left = parseFloat(element.style.left) + 0.15 + 'px';
				// //var pos = $(element).offset();           //builtin function to find the HTML element's position 
				// document.getElementById('p2-1').style.visibility="hidden";
				if(flag==1)
					var specimen=document.getElementById('2-9ci2');
				if(flag==2)
					var specimen=document.getElementById('2-9ms2');
				if(flag==3)
					var specimen=document.getElementById('2-9br2');
				if(flag==4)
					var specimen=document.getElementById('2-9al2');
	
				//image.style.top=parseFloat(image.style.top)+-2.40+'px';
				document.getElementById('2-82').style.animation="moveWheel 1s forwards";
				specimen.style.animation="moveST 1s forwards";
									
				// if(image.style.top=="196px" || count1==5)
				// {
				setTimeout(function(){
					document.getElementById('p2-1').style.visibility="hidden";
					document.getElementById('2-82').style.visibility="hidden";
					document.getElementById('2-91').style.visibility="hidden";
					document.getElementById('2-81').style.visibility="visible";
					document.getElementById('x').style.visibility="visible";
					setTimeout(function(){
						document.getElementById('nextButton').style.visibility="visible";
					},200);
				},1000);
				// }
			});
		}
	},1000);
}

function step3()
{
	myStopFunction();
	document.getElementById('3-2on').style.visibility="hidden";
	document.getElementById('3-2off').style.visibility="visible";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:465px; top:200px; height: 20px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById('3-3un').onclick=function(){step31();}
	},300);
}	
	
function step31()
{
	myStopFunction();
	document.getElementById('3-3un').style.visibility="hidden";
	document.getElementById('3-3').style.visibility="visible";
	document.getElementById('3-4c').style.visibility="visible";
	document.getElementById('3-4n').style.visibility="visible";
	document.getElementById('3-4n').style.transformOrigin="50% 100%";
	// document.getElementById('3-4n').style.animation="swing 50s forwards";
	degrees=0;
	rotateAnimation("3-4n",75);    //Rotate clock needle
	if(repeat==1)
	{
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:470px; top:195px; height: 20px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById('3-3').onclick=function(){step32();}
		},6800);
	}
	if(repeat==2)
	{
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:470px; top:197px; height: 20px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById('3-3').onclick=function(){step32();}
		},3400);
	}
}

function step32()
{
	myStopFunction();
	document.getElementById('3-3un').onclick="";
	document.getElementById('3-3').onclick="";
	document.getElementById('3-3un').style.visibility="visible";
	document.getElementById('3-3').style.visibility="hidden";
	document.getElementById('3-4c').style.visibility="hidden";
	document.getElementById('3-4n').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function moveKnobonHover()
{
	if(repeat==1)
	{
		document.getElementById('4-4').style.visibility="visible";
		document.getElementById('4-2').style.visibility="visible";
		$('#4-4').mousemove(function() 
		{
			//count2++;
			myStopFunction();
			document.getElementById('4-2').style.animation="moveKnob 1s forwards";

			// var element = document.getElementById("4-2");
			// element.style.left = parseFloat(element.style.left) + 1.5 + 'px';	
			// if(document.getElementById("4-2").style.left=="2.5px" || count2==15)
			// {
			setTimeout(function(){
				document.getElementById('4-8').style.visibility="hidden";
				document.getElementById('4-4').style.visibility="hidden";
				document.getElementById('4-42').style.visibility="visible";
				if(flag==1)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
				if(flag==2)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
				if(flag==3)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
				if(flag==4)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
			// }
		});
	}
	if(repeat==2)
	{
		//count2=0;
		document.getElementById('4-41').style.visibility="visible";
		document.getElementById('4-21').style.visibility="visible";
		$('#4-41').mousemove(function() 
		{
			myStopFunction();
			document.getElementById('4-21').style.animation="moveKnob 1s forwards";
			// count2++;
			// 
			// var element = document.getElementById("4-21");
			// element.style.left = parseFloat(element.style.left) + 1.5 + 'px';
			
			// if(document.getElementById("4-21").style.left=="2.5px" || count2==15)
			// {
			setTimeout(function(){
				document.getElementById('4-8').style.visibility="hidden";
				document.getElementById('4-41').style.visibility="hidden";
				document.getElementById('4-42').style.visibility="visible";
				if(flag==1)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
				if(flag==2)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
				if(flag==3)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
				if(flag==4)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
			//}
		});
	}	
}
	
function moveKnobonClick()
{
	//count2=0;
	if(repeat==1)
	{
		document.getElementById('4-4').style.visibility="visible";
		document.getElementById('4-2').style.visibility="visible";
		$('#4-4').click(function() 
		{
			//count2++;
			myStopFunction();
			document.getElementById('4-2').style.animation="moveKnob 1s forwards";
			// var element = document.getElementById("4-2");
			// element.style.left = parseFloat(element.style.left) + 7.5 + 'px';
			
			// if(document.getElementById("4-2").style.left=="2.5px" || count2==3)
			// {
			setTimeout(function(){
				document.getElementById('4-8').style.visibility="hidden";
				document.getElementById('4-4').style.visibility="hidden";
				document.getElementById('4-42').style.visibility="visible";
				if(flag==1)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
				if(flag==2)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
				if(flag==3)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
				if(flag==4)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
			//}
		});
	}
	if(repeat==2)
	{
		count2=0;
		document.getElementById('4-41').style.visibility="visible";
		document.getElementById('4-21').style.visibility="visible";
		$('#4-41').click(function() 
		{
			// count2++;
			myStopFunction();
			document.getElementById('4-21').style.animation="moveKnob 1s forwards";
			// var element = document.getElementById("4-21");
			// element.style.left = parseFloat(element.style.left) + 7.5 + 'px';
			
			// if(document.getElementById("4-21").style.left=="2.5px" || count2==3)
			// {
			setTimeout(function(){
				document.getElementById('4-8').style.visibility="hidden";
				document.getElementById('4-41').style.visibility="hidden";
				document.getElementById('4-42').style.visibility="visible";
				if(flag==1)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+ir[5];
				if(flag==2)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+st[5];
				if(flag==3)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+br[5];
				if(flag==4)
					document.getElementById('4-6').innerHTML="Measured Diameter : "+alu[5];  
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},200);
			},1000);
			// }
		});
	}	
}
	
function refresh()
{
	 document.getElementById('5-9').innerHTML="";
	 document.getElementById('4-1').innerHTML="";
	 document.getElementById('4-2').innerHTML="";
	 document.getElementById('3-4n').style.transformOrigin="";
	 document.getElementById('3-4n').style.animation="";
	 document.getElementById('2-9al').style.animation="";
	 document.getElementById('2-9br').style.animation="";
	 document.getElementById('2-9ms').style.animation="";
	 document.getElementById('2-9ci').style.animation="";
	 document.getElementById('4-6').innerHTML="";
}