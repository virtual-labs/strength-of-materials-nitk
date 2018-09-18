//on click of next button
var flag=0;
var repeat=0;
var a;
var firsttime=false;
var i=0;
// For mild steel
var steel= [[76.26,9.32,9.48,4.5,164],
           [76.4,9.3,9.16,2,164],
		   [75.3,9.3,9.32,5.6,164],
		   [77,9.52,9.52,4,164],
		   [75.9,9.5,9.7,5,164],
		   [76.6,9.42,9.4,4,164],
		   [75.7,9.54,9.6,4,164],
		   [75,9.3,9.4,3.34,164],
		   [76.2,9.6,9.23,5,164],
		   [75.8,9.5,9.4,5,164]];
var steelEf=[4,2,2,4,2,2,2,2,2,2];
var steelEt=[56,54,46,51,48,43,49,45,44,41];
var a=0;
var b=0;
var c=0;
var a1,a2,a3,b1,b2,b3,c1,c2,c3,d;
var EEt=0;

// For cast iron
var iron=[[75,9.5,9.44,4],
          [74.5,9.42,9.36,5.1],
          [75,9.3,9.4,4.2],
          [75,9.3,9.4,4.2],
          [75.9,9.6,9.92,5],
          [76,9.44,9.46,4.46],
          [74.72,9.6,9.64,5],
          [75.3,9.3,9.52,5],
          [76.4,9.4,9.16,2]];
var ironEf=[2,2,4,2,2,2,2,2,2,2];
var ironEt=[22,30,46,36,42,36,42,38,29,44];
var e=0;
var f=0;
var g=0;
var e1,e2,e3,f1,f2,f3,g1,g2,g3,d;
var iEEt=0;

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

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	if (simsubscreennum==1)
	{  
         setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 165px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('i1-3').onclick=function(){step1();}
		 },500);
	}
 	else if (simsubscreennum==2)
	{ 
		document.getElementById('i1-1').style.visibility="hidden";
		document.getElementById('i1-2').style.visibility="hidden";
		document.getElementById('i1-54').style.visibility="hidden";
		document.getElementById('i1-4').style.visibility="hidden";
		document.getElementById('i1').style.visibility="hidden";
		
		     document.getElementById('i2-1').onclick=function(){
				 if(!firsttime)
		         {
			          firsttime=true;
			          document.getElementById('2-4').style.color="#FC0D05";
			          flag=1;
			          document.getElementById('2-2').style.visibility="visible";
				      setTimeout(function(){
				           step2();
				      },200);
			     }
		     }
		
		     document.getElementById('i2-2').onclick=function(){
				 if(!firsttime)
		         {
			         firsttime=true;
			         document.getElementById('2-5').style.color="#FC0D05";
			         flag=2;
			         document.getElementById('2-3').style.visibility="visible";
				     setTimeout(function(){
				         step2();
				      },200);
			     }
		     }
    }
	else if (simsubscreennum==3)
	{
		repeat++;

		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
        if(repeat==1)
		{
			document.getElementById('i3-2').style.visibility="visible";
		    if(flag==1)
		    {
		     document.getElementById('tabci1').style.visibility="hidden";
		     document.getElementById('2-2').style.visibility="hidden";
		    }
		    if(flag==2)
		    {
     		     document.getElementById('2-3').style.visibility="hidden";
		         document.getElementById('tabms1').style.visibility="hidden";
				 
		    }
			document.getElementById('nextButton').style.visibility="visible";
		}
		else if(repeat>1 && repeat<=3)
		{   
	        refresh();
			
			     var st = steel[Math.floor(Math.random() * steel.length)];
			     var sEf = steelEf[Math.floor(Math.random() * steelEf.length)];
		         a=sEf;
			
				 var ci = iron[Math.floor(Math.random() * iron.length)];
			     var cEf = ironEf[Math.floor(Math.random() * ironEf.length)];
		         e=cEf;
			
			document.getElementById('3-1').style.visibility="visible";
			document.getElementById('step5-1').style.visibility="hidden";
			document.getElementById('5-1i').style.visibility="hidden";
			document.getElementById('5-2i').style.visibility="hidden";
			document.getElementById('5-3i').style.visibility="hidden";
			document.getElementById('5-4i').style.visibility="hidden";
			document.getElementById('5-1s').style.visibility="hidden";
			document.getElementById('5-2s').style.visibility="hidden";
			document.getElementById('5-3s').style.visibility="hidden";
			document.getElementById('5-4s').style.visibility="hidden";
			if(flag==1)
			{
				 document.getElementById('3-2').style.visibility="visible";
     			  
					 document.getElementById('tabci2').style.visibility="visible";
					 document.getElementById('ci-ll').innerHTML=ci[0];
	                 document.getElementById('ci-bb').innerHTML=ci[1];
	                 document.getElementById('ci-dd').innerHTML=ci[2];
	                 document.getElementById('ci-ddn').innerHTML=ci[3];
      			 
			}
			if(flag==2)
			{
				 document.getElementById('3-3').style.visibility="visible";
				 
				 document.getElementById('tabms2').style.visibility="visible";
				 document.getElementById('ll').innerHTML=st[0];
	             document.getElementById('bb').innerHTML=st[1];
	             document.getElementById('dd').innerHTML=st[2];
	             document.getElementById('ddn').innerHTML=st[3];
      			 
			}
		}
		document.getElementById('nextButton').style.visibility="visible";
    }
	else if (simsubscreennum==4)
	{ 
        
        document.getElementById('i3-2').style.visibility="hidden";
        document.getElementById('3-1').style.visibility="hidden";
        document.getElementById('3-2').style.visibility="hidden";
        document.getElementById('3-3').style.visibility="hidden";
		if(repeat>1 && repeat<=3)
		{
		refresh();
        document.getElementById('4-1').style.visibility="visible";
        document.getElementById('4-2').style.visibility="visible";
        document.getElementById('i4').style.visibility="visible";
        document.getElementById('i4-1').style.visibility="visible";
        document.getElementById('i4-3').style.visibility="visible";
        document.getElementById('i4-5').style.visibility="visible";
        document.getElementById('i4-6').style.visibility="visible";
        document.getElementById('i4-sp1').style.visibility="visible";
		}
        if(flag==1)
		{
			document.getElementById('tabci2').style.visibility="hidden";
   		}
		if(flag==2)
		{
			  document.getElementById('tabms2').style.visibility="hidden";
      	}
		setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top: 145px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('i4-3').onclick=function(){step4();}
		 },500);
		
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 					
		if(repeat>1 && repeat<=3)
		{
     		 document.getElementById('step5-1').style.visibility="visible";
		}
		 document.getElementById('i4').style.visibility="hidden";
		 document.getElementById('4-1').style.visibility="hidden";
		 document.getElementById('i4-2').style.visibility="hidden";
		 document.getElementById('i4-3').style.visibility="hidden";
		 document.getElementById('i4-4').style.visibility="hidden";
		 document.getElementById('i4-54').style.visibility="hidden";
		 document.getElementById('i4-7').style.visibility="hidden";
		 document.getElementById('i4-1').style.visibility="hidden";
		 if(flag==1)
		 {   
	         document.getElementById('5-1i').style.visibility="visible";
	         document.getElementById('5-2i').style.visibility="visible";
	         document.getElementById('5-3i').style.visibility="visible";
	         document.getElementById('5-4i').style.visibility="visible";
             document.getElementById('5-2i').innerHTML="Average loss of energy due to friction, E<sub>f</sub> = "+e+" J";
             document.getElementById('5-3i').innerHTML="Total Loss of energy E<sub>t</sub> during transit of hammer = "+f+" J";
             document.getElementById('5-4i').innerHTML="Energy for failure of specimen = KU / Impact Value = E<sub>t</sub> - E<sub>f</sub> = "+g+" J";
		     if(repeat==1)
			{
			     e1=e;
				 f1=f;
				 g1=g;
			}
			else if(repeat==2)
			{
			     e2=e;
                 f2=f;
				 g2=g;				 
			}
			else if(repeat==3)
			{
			     e3=e;
                 f3=f;
				 g3=g;				 
			}
			h=(g1+g2+g3)/3.00;
		 }
		 if(flag==2)
		 {
			 document.getElementById('5-1s').style.visibility="visible";
	         document.getElementById('5-2s').style.visibility="visible";
	         document.getElementById('5-3s').style.visibility="visible";
	         document.getElementById('5-4s').style.visibility="visible";
			 document.getElementById('5-2s').innerHTML="Average loss of energy due to friction,E<sub>f</sub>  = "+a+" J";
             document.getElementById('5-3s').innerHTML="Total Loss of energy E<sub>t</sub> during transit of hammer = "+b+" J";
             document.getElementById('5-4s').innerHTML="Energy for failure of specimen = KU / Impact Value = E<sub>t</sub> - E<sub>f</sub> = "+c+" J";
			if(repeat==1)
			{
			     a1=a;
				 b1=b;
				 c1=c;
			}
			else if(repeat==2)
			{
			     a2=a;
                 b2=b;
				 c2=c;				 
			}
			else if(repeat==3)
			{
			     a3=a;
                 b3=b;
				 c3=c;				 
			}
			d=(c1+c2+c3)/3.00;
		 }
		 
		 
		 setTimeout(function(){
		 if(repeat==3)
		 {
            document.getElementById('trial').style.visibility="hidden";			
			if(flag==1)
			 {
				 document.getElementById('5-1i').style.visibility="hidden";
	             document.getElementById('5-2i').style.visibility="hidden";
	             document.getElementById('5-3i').style.visibility="hidden";
	             document.getElementById('5-4i').style.visibility="hidden";
				 document.getElementById('tab5').style.visibility="visible";
                 document.getElementById('5-11').innerHTML=e1;				
                 document.getElementById('5-12').innerHTML=f1;				
                 document.getElementById('5-13').innerHTML=g1;				
                 document.getElementById('5-21').innerHTML=e2;				
                 document.getElementById('5-22').innerHTML=f2;				
                 document.getElementById('5-23').innerHTML=g2;				
                 document.getElementById('5-31').innerHTML=e3;				
                 document.getElementById('5-32').innerHTML=f3;				
                 document.getElementById('5-33').innerHTML=g3;
				document.getElementById('5-5').style.visibility="visible";
                document.getElementById('5-5').innerHTML=" Average energy for failure of specimen = "+h.toFixed(2)+" J"; 
			 }
			 else if(flag==2)
			 {
				 document.getElementById('5-1s').style.visibility="hidden";
	             document.getElementById('5-2s').style.visibility="hidden";
	             document.getElementById('5-3s').style.visibility="hidden";
	             document.getElementById('5-4s').style.visibility="hidden";
				document.getElementById('tab5').style.visibility="visible";
                document.getElementById('5-11').innerHTML=a1;				
                document.getElementById('5-12').innerHTML=b1;				
                document.getElementById('5-13').innerHTML=c1;				
                document.getElementById('5-21').innerHTML=a2;				
                document.getElementById('5-22').innerHTML=b2;				
                document.getElementById('5-23').innerHTML=c2;				
                document.getElementById('5-31').innerHTML=a3;				
                document.getElementById('5-32').innerHTML=b3;				
                document.getElementById('5-33').innerHTML=c3;
				document.getElementById('5-5').style.visibility="visible";
                document.getElementById('5-5').innerHTML=" Average energy for failure of specimen = "+d.toFixed(2)+" J"; 				
			 }
			 
		 }
	    },500);
		
		
		 if(repeat<3 && repeat>=1)
		 {
			 i++;
			 simsubscreennum=2;
			 document.getElementById('nextButton').style.visibility="visible";
		 }
	}
	
}
    
	function step1()
	{
		 
		 myStopFunction();
		 
		     var sEf = steelEf[Math.floor(Math.random() * steelEf.length)];
		     a=sEf;
		 
		     var iEf = ironEf[Math.floor(Math.random() * ironEf.length)];
		     e=iEf;
		 
		 document.getElementById('i1-3').style.visibility="hidden";
		 document.getElementById('i1-4').style.visibility="visible";
		 
		 document.getElementById('i1-1').style.transformOrigin="0 0%";
		 document.getElementById('i1-1').style.mozAnimation= " swing 8s forwards  ";
         document.getElementById('i1-1').style.webkitAnimation= "swing 8s  forwards ";
		 
		 // document.getElementById('i1-1').style.transformOrigin = "0% 0%";
	     // document.getElementById('i1-1').style.animation = "hammerturn-1 2.5s 4 forwards"; 
		setTimeout(function(){
			 document.getElementById('i1-5').style.transformOrigin="50% 20%";
			 document.getElementById('i1-5').style.animation="hammerturn-2 2s forwards";
		 },250);
		 setTimeout(function(){
			 document.getElementById('i1-5').style.visibility="hidden";
			 document.getElementById('i1-51').style.visibility="visible";
			 document.getElementById('i1-52').style.visibility="visible";
			 document.getElementById('i1-52').style.transformOrigin="51% 35%";
			 document.getElementById('i1-52').style.animation="hammerturn-2 2.25s 4 forwards";
		 },350);
		
		 setTimeout(function(){
			 
		 	      document.getElementById('1-1').innerHTML="Loss of energy due to friction E<sub>f</sub> = "+sEf+" J";
			 
				 // document.getElementById('1-1').innerHTML="Loss of energy due to friction E<sub>f</sub> = "+iEf+" J";
			 
         },600);
         setTimeout(function(){
			 document.getElementById('i1-54').style.visibility="visible";
			 document.getElementById('i1-52').style.visibility="hidden";
			 document.getElementById('i1-51').style.visibility="hidden";
         },8500);
		 setTimeout(function(){
			 document.getElementById('nextButton').style.visibility="visible";
		 },8500);
	}
	function step2()
	{
		var st = steel[Math.floor(Math.random() * steel.length)];
		var ci = iron[Math.floor(Math.random() * iron.length)];
		if(flag==1)
		{
	     document.getElementById('tabci1').style.visibility="visible";
	     document.getElementById('ci-l').innerHTML=ci[0];
	     document.getElementById('ci-b').innerHTML=ci[1];
	     document.getElementById('ci-d').innerHTML=ci[2];
	     document.getElementById('ci-dn').innerHTML=ci[3];
		}
        else if(flag==2)
		{
	     document.getElementById('tabms1').style.visibility="visible";
	     document.getElementById('l').innerHTML=st[0];
	     document.getElementById('b').innerHTML=st[1];
	     document.getElementById('d').innerHTML=st[2];
	     document.getElementById('dn').innerHTML=st[3];
		}
	    document.getElementById('nextButton').style.visibility="visible";
    }
		
	function step4()
	 {
		 
		 myStopFunction();
		  var sEt = steelEt[Math.floor(Math.random() * steelEt.length)];
             EEt=sEt-a;
		     b=sEt;
		     c=EEt;
		 
		 
		     var iEt = ironEt[Math.floor(Math.random() * ironEt.length)];
             iEEt=iEt-e;
		     f=iEt;
		     g=iEEt;
		 
		 document.getElementById('i4-3').style.visibility="hidden";
		 document.getElementById('i4-4').style.visibility="visible";
		 document.getElementById('i4-1').style.transformOrigin="0 0%";
		 document.getElementById('i4-1').style.mozAnimation= " swing 9s forwards  ";
         document.getElementById('i4-1').style.webkitAnimation= "swing 9s  forwards ";
		 setTimeout(function(){
			 document.getElementById('i4-5').style.transformOrigin="50% 20%";
			 document.getElementById('i4-5').style.animation="hammerturn-3 2s forwards";
		 },250);
		 setTimeout(function(){
			 document.getElementById('i4-5').style.visibility="hidden";
			 document.getElementById('i4-51').style.visibility="visible";
			 document.getElementById('i4-52').style.visibility="visible";
			 document.getElementById('i4-52').style.transformOrigin="51% 35%";
			 document.getElementById('i4-52').style.animation="hammerturn-2 2.25s 4 forwards";
		 },350);
		 // Breaking Specimen
		  setTimeout(function(){
			 document.getElementById('i4-10').style.visibility="visible";
			 document.getElementById('i4-10').style.transformOrigin="0 20%";
		     document.getElementById('i4-10').style.animation="mymove2 1 1.5s forwards";
		},500);
		
		setTimeout(function(){
		document.getElementById('i4-10').style.visibility="hidden";
			 document.getElementById('i4-sp1').style.visibility="hidden";
			 document.getElementById('i4-sp2').style.visibility="visible";
		},800);
		 setTimeout(function(){
		 if(flag==1)
			 {
			     document.getElementById('4-1').innerHTML="Total loss of energy during transit of Hammer E<sub>t</sub> = "+iEt+" J";
			     document.getElementById('4-2').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+iEEt+" J";
			 }
			 if(flag==2)
			 {   
					 document.getElementById('4-1').innerHTML="Total loss of energy during transit of Hammer E<sub>t</sub> = "+sEt+" J";
			         document.getElementById('4-2').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+EEt+" J";
			 }
		 },800);
         setTimeout(function(){
			 document.getElementById('i4-6').style.visibility="hidden";
			 document.getElementById('i4-7').style.visibility="visible";
		 },800);
         setTimeout(function(){
			 document.getElementById('i4-54').style.visibility="visible";
			 document.getElementById('i4-52').style.visibility="hidden";
			 document.getElementById('i4-51').style.visibility="hidden";
         },8500);
		 setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
			document.getElementById('i4-sp2').style.visibility="hidden";
		 },8750);
	 }
	
	
	
	
	function refresh()
	{
         //document.getElementById('arrow1').style="";
		 //document.getElementById("arrow1").style.WebkitTransform = ""; 
		 document.getElementById('4-1').innerHTML="";
		 document.getElementById('4-2').innerHTML="";
		 document.getElementById('i4-1').style.transformOrigin = "";
	     document.getElementById('i4-1').style.animation = ""; 
		 document.getElementById('i4-5').style.transformOrigin = "";
	     document.getElementById('i4-5').style.animation = ""; 
		 document.getElementById('i4-52').style.transformOrigin = "";
	     document.getElementById('i4-52').style.animation = ""; 
		 document.getElementById('i1-1').style.transformOrigin = "";
	     document.getElementById('i1-1').style.animation = ""; 
		 document.getElementById('i1-5').style.transformOrigin = "";
	     document.getElementById('i1-5').style.animation = ""; 
		 document.getElementById('i1-52').style.transformOrigin = "";
	     document.getElementById('i1-52').style.animation = "";
		 document.getElementById('i4-10').style.transformOrigin = "";
	     document.getElementById('i4-10').style.animation = ""; 
		 document.getElementById('5-2i').innerHTML="";
         document.getElementById('5-3i').innerHTML="";
         document.getElementById('5-4i').innerHTML="";
		 document.getElementById('5-2s').innerHTML="";
         document.getElementById('5-3s').innerHTML="";
         document.getElementById('5-4s').innerHTML="";
		
	}