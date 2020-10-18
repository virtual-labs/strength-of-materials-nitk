//flag==1 => Cast Iron and flag==2 => Mild Steel
var flag=0; var repeat=0; var i=0; 

var run_once=true; var a=0;

var a1,b1,c1,a2,b2,c2,a3,b3,c3,avg=0;

var val1=0; var vla2=0; var vla3=0;

var p=Math.floor(Math.random()*(9));
val1=p;

var indefinite=0;

var array1=[0,2,3,5,6,8,9];//not indefinite dataset from MildSteel array

var array2=[1,4,7]; //indefinite dataset from MildSteel array

// MildSteel=[[57.9,9.2,9.4,5,300,1,34,33],
           // [58.87,9.3,9.5,5,300,1,44.5,43.5],
           // [58.87,9.3,9.5,5,300,1,45,44],
           // [57.46,9.22,9.42,5,300,1,47.5,46.5],
           // [57.46,9.22,9.42,5,300,1,46.5,45.5],
           // [57.6,9.4,9.3,5,300,1,48,47],
           // [59.56,9.4,9.42,5,300,1,41,40],
           // [58.44,9.62,9.5,5.66,300,1,43,42],
           // [58.44,9.62,9.5,5.66,300,1,43,42],
           // [59.56,9.6,9.3,5,300,1,40,39]];

// var CastIron=[[57,9.5,9.52,6.1,300,1,19,18],
		  // [58.87,9.3,9.5,5,300,1,20,19],
		  // [58.6,9.3,9.32,4.5,300,1,32,31],
		  // [57.32,9.62,9.82,5.3,300,1,30,29],
		  // [55.4,9.52,9.44,5.1,300,1,26.5,25.5],
		  // [58.7,9.1,9.52,5,300,1,24,23],
		  // [58.7,9.1,9.52,5,300,1,27,26],
		  // [59.04,9.4,9.4,5,300,1,26,25],
		  // [58.87,9.3,9.5,5,300,1,23,22],
		  // [57.82,9.2,9.56,5,300,1,25,24]];
		  
var MildSteel=[[57.9,9.2,9.4,5,300,1,34,33],
           [58.87,9.3,9.5,5,300,1,"Indefinite","Indefinite"],
           [58.87,9.3,9.5,5,300,1,45,44],
           [57.46,9.22,9.42,5,300,1,47.5,46.5],
           [57.46,9.22,9.42,5,300,1,"Indefinite","Indefinite"],
           [57.6,9.4,9.3,5,300,1,48,47],
           [59.56,9.4,9.42,5,300,1,41,40],
           [58.44,9.62,9.5,5.66,300,1,"Indefinite","Indefinite"],
           [58.44,9.62,9.5,5.66,300,1,43,42],
           [59.56,9.6,9.3,5,300,1,40,39]];

var CastIron=[[57,9.5,9.52,6.1,300,1,3,2],
		  [58.87,9.3,9.5,5,300,1,3,2],
		  [58.6,9.3,9.32,4.5,300,1,9,8],
		  [57.32,9.62,9.82,5.3,300,1,8,7],
		  [55.4,9.52,9.44,5.1,300,1,7,6],
		  [58.7,9.1,9.52,5,300,1,5,4],
		  [58.7,9.1,9.52,5,300,1,7.5,6.5],
		  [59.04,9.4,9.4,5,300,1,6,5],
		  [58.87,9.3,9.5,5,300,1,4,3],
		  [57.82,9.2,9.56,5,300,1,5,4]];

function navNext()
{
	for (temp = 0; temp <= 6 ; temp++) 
    { 
        document.getElementById ('canvas'+temp).style.visibility="hidden";
    }
    simsubscreennum+=1;
    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function blinkarrow()
{
    if (document.getElementById('arrow2').style.visibility=="hidden")
        document.getElementById('arrow2').style.visibility="visible";
    else
        document.getElementById('arrow2').style.visibility="hidden";
}

function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function flag1(){
	flag=1;
	document.getElementById('can3-4').style.color="#FC0D05";
	document.getElementById('can3-1').style.visibility="visible";
	document.getElementById('can3-2').style.visibility="visible";
  
	document.getElementById('can3-5').style.visibility="hidden";
	document.getElementById('can3i-2').style.visibility="hidden";
  
	document.getElementById('tabci1').style.visibility="visible";
	document.getElementById('ci-l').innerHTML=CastIron[p][0];
	document.getElementById('ci-b').innerHTML=CastIron[p][1];
	document.getElementById('ci-d').innerHTML=CastIron[p][2];
	document.getElementById('ci-dn').innerHTML=CastIron[p][3];
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";  
	},200);
}

function flag2(){
	flag=2;
	document.getElementById('can3-5').style.color="#FC0D05";
	document.getElementById('can3-1').style.visibility="visible";
	document.getElementById('can3-3').style.visibility="visible";
	 
	document.getElementById('can3-4').style.visibility="hidden";
	document.getElementById('can3i-1').style.visibility="hidden";
						 
	document.getElementById('tabci1').style.visibility="visible";
	document.getElementById('ci-l').innerHTML=MildSteel[p][0];
	document.getElementById('ci-b').innerHTML=MildSteel[p][1];
	document.getElementById('ci-d').innerHTML=MildSteel[p][2];
	document.getElementById('ci-dn').innerHTML=MildSteel[p][3];
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";  
	},200);
}

function magic()
{
	if (simsubscreennum==1)
	{  
         setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 615px; top: 140px; height: 30px; z-index: 10;";
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
		document.getElementById('i1-3').style.visibility="hidden";
		document.getElementById('i1-6').style.visibility="hidden";
		document.getElementById('i1-4').style.visibility="hidden";
		document.getElementById('i1').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	else if(simsubscreennum==3)
	{
		if(repeat==0)
		{
			//cast iron
			document.getElementById('can3i-1').onclick=function()
			{
				flag1();
		    }
			//mild steel
			document.getElementById('can3i-2').onclick=function()
			{
				flag2();
			}
		}
		else if(repeat>=1)
		{
			//p=Math.floor(Math.random()*(9));
			if(flag==1)
			{
				document.getElementById('can3-1').style.visibility="visible";
				document.getElementById('can3-2').style.visibility="visible";
			}
			if(flag==2)
			{
				document.getElementById('can3-1').style.visibility="visible";
				document.getElementById('can3-3').style.visibility="visible";
			}
			document.getElementById('nextButton').style.visibility="visible";  
		}
        repeat++;
		if(flag==1)
		{
			if(repeat==1)
			{
				//p=Math.floor(Math.random()*(9));
				val1=p;
			}
			else if(repeat==2)
			{
				do
				{
					p=Math.floor(Math.random()*(9));
			    }while(p==val1 || p==1);
				val2=p;	
			}
			else if(repeat==3)
			{
				do
				{
					p=Math.floor(Math.random()*(9));
				}while(p==val1 || p==val2 || p==1);
			}
			displayTable(p);
		}
		if(flag==2)
		{
			checkIfIndefinite(val1);
			console.log("in");
			// if(repeat==1){
				// console.log("repeat1");
				
				// checkIfIndefinite(val1);
			// }
			// else
			if(repeat==2) //Indefinite value should be displayed in third trial if not displayed in first 2 trials
			{ 
				console.log("repeat2");
				if(indefinite==0)
				{
					p=Math.floor(Math.random()*(9));
				}
				else if(indefinite>=1)//Indefinite value should not repeat
				{
					var z=Math.floor(Math.random()*(6));
					p=array1[z];
				}
				val2=p;
				checkIfIndefinite(val2);
			}
			else if(repeat==3)//Indefinite value should not repeat
			{ 
				console.log("repeat3");
				if(indefinite==0) //Indefinite value should be displayed in third trial if not displayed in first 2 trials
				{ 
					var z=Math.floor(Math.random()*(2));
					p=array2[z];
				}
				else if(indefinite>=1)
				{
					var z=Math.floor(Math.random()*(6));
					p=array1[z];
				}
				val3=p;
				checkIfIndefinite(val3);
			}
			console.log(repeat,p,MildSteel[p],"out");
			displayTable(p);
		}
		
	}
	else if (simsubscreennum==4)
	{
				
		document.getElementById('tabci1').style.visibility="hidden";
		document.getElementById('can3-1').style.visibility="hidden";
		document.getElementById('can3-2').style.visibility="hidden";
		document.getElementById('can3-3').style.visibility="hidden";
    	document.getElementById('trial').style="visibility:visible ;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;	
		document.getElementById('i2-1').style.visibility="hidden";
		document.getElementById('i2-2').style.visibility="hidden";
		document.getElementById('i3-1').style.visibility="visible";
		document.getElementById('i3-12').style.visibility="visible";
		setTimeout(function(){
		document.getElementById('i3-4').style.visibility="visible";
		},500);
		setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 112px; top:417.5px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('i3-12').onclick=function(){step2();}
		 },600);
    }
	else if (simsubscreennum==5)
	{ 
        refresh();
		document.getElementById('4-3').innerHTML="0.000";
		document.getElementById('4-4').innerHTML="0.000";
        document.getElementById('i3-1').style.visibility="hidden";
        document.getElementById('i3-2').style.visibility="hidden";
        document.getElementById('i3-4').style.visibility="hidden";
        document.getElementById('i3-5').style.visibility="hidden";
        document.getElementById('i3-6').style.visibility="hidden";
        document.getElementById('i3-12').style.visibility="hidden";
		document.getElementById('i4').style.visibility="visible";
		document.getElementById('i4-3').style.visibility="visible";
		document.getElementById('4-3').style.visibility="visible";
		document.getElementById('4-4').style.visibility="visible";
		document.getElementById('d4-4').style.visibility="visible";
		setTimeout(function(){
			document.getElementById('i4-8').style.visibility="visible";
			document.getElementById('i4-9').style.visibility="visible";
			document.getElementById('4-5').style.visibility="visible";
		},500);
		 setTimeout(function(){
					// document.getElementById('i4-2').style.visibility="hidden";
			myFun();
		 },1000);
	}
	else if (simsubscreennum==6)
	{
		 document.getElementById('i4').style.visibility="hidden";
		 document.getElementById('4-1').style.visibility="hidden";
		 document.getElementById('i4-3').style.visibility="hidden";
		 document.getElementById('i4-4').style.visibility="hidden";
		 document.getElementById('4-2').style.visibility="hidden";
		 document.getElementById('4-3').style.visibility="hidden";
		 document.getElementById('4-4').style.visibility="hidden";
		 document.getElementById('i4-12').style.visibility="hidden";
		 document.getElementById('i4-11i').style.visibility="hidden";
		 document.getElementById('i4-11is').style.visibility="hidden";
		 document.getElementById('i4-11s').style.visibility="hidden";
		 document.getElementById('i4-11ss').style.visibility="hidden";
		 if(flag==1)
		 {
			if(repeat==1)
			{
				a1=CastIron[p][5];b1=CastIron[p][6];c1=CastIron[p][7];
			}
			if(repeat==2)
			{
				a2=CastIron[p][5];b2=CastIron[p][6];c2=CastIron[p][7];
			}
			if(repeat==3)
			{
				a3=CastIron[p][5];b3=CastIron[p][6];c3=CastIron[p][7];
			}
		 }
		 if(flag==2)
		 {
			if(repeat==1)
			{
				a1=MildSteel[p][5];b1=MildSteel[p][6];c1=MildSteel[p][7];
			}
			if(repeat==2)
			{
				a2=MildSteel[p][5];b2=MildSteel[p][6];c2=MildSteel[p][7];
			}
			if(repeat==3)
			{
				a3=MildSteel[p][5];b3=MildSteel[p][6];c3=MildSteel[p][7];
			}
		 }
		 if(flag==1)
		 {
			document.getElementById('5-1i').innerHTML="Loss of energy due to friction E<sub>f</sub> = "+CastIron[p][5]+" J";
			document.getElementById('5-2i').innerHTML="Total loss of energy during transit of Hammer E<sub>t</sub> = "+CastIron[p][6]+" J";
			document.getElementById('5-3i').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+CastIron[p][7]+" J";
		 }
		 
		 if(flag==2)
		 {
			document.getElementById('5-1i').innerHTML="Loss of energy due to friction E<sub>f</sub> = "+MildSteel[p][5]+" J";
			if(MildSteel[p][6]=="Indefinite")
			{
				document.getElementById('5-2i').innerHTML="Total loss of energy during transit of Hammer E<sub>t</sub> = Indefinite";
				document.getElementById('5-3i').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = Indefinite";
			}
			else{
				document.getElementById('5-2i').innerHTML="Total loss of energy during transit of Hammer E<sub>t</sub> = "+MildSteel[p][6]+" J";
				document.getElementById('5-3i').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+MildSteel[p][7]+" J";
			}
		 }
		 if(flag==1)
		 {
			avg=((c1+c2+c3)/3).toFixed(2);
		 }
		 if(flag==2)
		 {
			 if(c1=="Indefinite"){
				c1=0;
			 }
			 if(c2=="Indefinite"){
				c2=0;
			 }
			 if(c3=="Indefinite"){
				c3=0;
			 }
			 // if(indefinite==true)
				avg=((c1+c2+c3)/2).toFixed(2);
			// if(indefinite==false)
				// avg=((c1+c2+c3)/3).toFixed(2);
		 }
		 if(repeat<3)
		 {
			 document.getElementById('nextButton').style.visibility="visible";
			 simsubscreennum=2;
		 }
		 if(repeat==3)
		 {
			 setTimeout(function(){
			 document.getElementById('trial').style.visibility="hidden";
			 document.getElementById('5-1i').style.visibility="hidden";
             document.getElementById('5-2i').style.visibility="hidden";
             document.getElementById('5-3i').style.visibility="hidden";
			 document.getElementById('tab').style.visibility="visible";
			 if(flag==1){
				 document.getElementById('mat').innerHTML="Cast Iron";
				 document.getElementById('12').innerHTML=a1;
				 document.getElementById('11').innerHTML=b1;
				 document.getElementById('13').innerHTML=c1;
				 document.getElementById('22').innerHTML=a2;
				 document.getElementById('21').innerHTML=b2;
				 document.getElementById('23').innerHTML=c2;
				 document.getElementById('32').innerHTML=a3;
				 document.getElementById('31').innerHTML=b3;
				 document.getElementById('33').innerHTML=c3;
			 }
			 if(flag==2){
				 document.getElementById('mat').innerHTML="Mild Steel";
				 if(c1==0){
					// console.log("c1==0",c1,b1);
					 document.getElementById('12').innerHTML=a1;
					 document.getElementById('11').innerHTML="-";
					 document.getElementById('13').innerHTML="-";
					 document.getElementById('22').innerHTML=a2;
					 document.getElementById('21').innerHTML=b2;
					 document.getElementById('23').innerHTML=c2;
					 document.getElementById('32').innerHTML=a3;
					 document.getElementById('31').innerHTML=b3;
					 document.getElementById('33').innerHTML=c3;
				 }
				 else if(c2==0){
					 //console.log("c2==0",c2,b2);
					 document.getElementById('12').innerHTML=a1;
					 document.getElementById('11').innerHTML=b1;
					 document.getElementById('13').innerHTML=c1;
					 document.getElementById('22').innerHTML=a2;
					 document.getElementById('21').innerHTML="-";
					 document.getElementById('23').innerHTML="-";
					 document.getElementById('32').innerHTML=a3;
					 document.getElementById('31').innerHTML=b3;
					 document.getElementById('33').innerHTML=c3;
				 }
				 else if(c3==0){
					// console.log("c3==0",c3,b3);
					 document.getElementById('12').innerHTML=a1;
					 document.getElementById('11').innerHTML=b1;
					 document.getElementById('13').innerHTML=c1;
					 document.getElementById('22').innerHTML=a2;
					 document.getElementById('21').innerHTML=b2;
					 document.getElementById('23').innerHTML=c2;
					 document.getElementById('32').innerHTML=a3;
					 document.getElementById('31').innerHTML="-";
					 document.getElementById('33').innerHTML="-";
				 }
				 else{
					// console.log("else",b1,c1,b2,c2,b3,c3);
					 document.getElementById('12').innerHTML=a1;
					 document.getElementById('11').innerHTML=b1;
					 document.getElementById('13').innerHTML=c1;
					 document.getElementById('22').innerHTML=a2;
					 document.getElementById('21').innerHTML=b2;
					 document.getElementById('23').innerHTML=c2;
					 document.getElementById('32').innerHTML=a3;
					 document.getElementById('31').innerHTML=b3;
					 document.getElementById('33').innerHTML=c3;
				 }
			 } 
			 document.getElementById('14').innerHTML=avg; 
			 },1000);
		 }
	}
}

function checkIfIndefinite(val){
	if(MildSteel[val][6]=="Indefinite")
	{
		indefinite++;
	}
	console.log("p="+p,"val="+val,"indefinite="+indefinite);
}
  
function displayTable(p){
	if(repeat>=1)
	{
		if(flag==1)
		{
			document.getElementById('tabci1').style.visibility="visible";
			document.getElementById('ci-l').innerHTML=CastIron[p][0];
			document.getElementById('ci-b').innerHTML=CastIron[p][1];
			document.getElementById('ci-d').innerHTML=CastIron[p][2];
			document.getElementById('ci-dn').innerHTML=CastIron[p][3];
		}
		else if(flag==2)
		{
			document.getElementById('tabci1').style.visibility="visible";
			document.getElementById('ci-l').innerHTML=MildSteel[p][0];
			document.getElementById('ci-b').innerHTML=MildSteel[p][1];
			document.getElementById('ci-d').innerHTML=MildSteel[p][2];
			document.getElementById('ci-dn').innerHTML=MildSteel[p][3];
		}
	}
	console.log("repeat="+repeat,"displayTable","p="+p,"indefinite="+indefinite);
}	
function step1()
{
	myStopFunction();
	document.getElementById('i1-3').style.visibility="hidden";
	document.getElementById('i1-4').style.visibility="visible";
	setTimeout(function(){
		document.getElementById('i1-1').style.transformOrigin="6% 92%";
		document.getElementById('i1-1').style.mozAnimation= " swing 6s forwards  ";
		document.getElementById('i1-1').style.webkitAnimation= "swing 6s  forwards ";
	},350);
	setTimeout(function(){
		document.getElementById('1-2').innerHTML="&nbsp;&nbsp;"+ Ef + ".0";
		document.getElementById('1-3').innerHTML="&nbsp;&nbsp;"+ Ef + ".0";
		document.getElementById('1-1').innerHTML="Loss of energy due to friction E<sub>f</sub> = " +Ef + " J";
	},1000);
	setTimeout(function(){
		 document.getElementById('nextButton').style.visibility="visible";
	},6200);
}
	

function step2()
{
	 myStopFunction();
	 // EEt = Et[Math.floor(Math.random() * Et.length)];
	 // a=EEt-1;
	 document.getElementById('i3-4').style.visibility="hidden";
	 document.getElementById('gate').style.visibility="visible";
	 setTimeout(function(){
		 document.getElementById('ball').style.visibility="visible";
		 if(repeat>1 && repeat<=3)
		 {	
			 run_once=true;		 
			 document.getElementById('ball').style.left="580px";
			 document.getElementById('ball').style.top="180px";
		 }
	 },500);
	 setTimeout(function(){
		document.getElementById('3-1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 605px; top:150px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(270deg)";
		 
		 drag_specimen();  //drag from one position to another
		 
	 },600);	 

}

function drag_specimen()
{
	//drag from one position to another or one image upon another image
	let currentDroppable = null;
    ball.onmousedown = function(event) {
         myStopFunction();
	     document.getElementById('3-1').style.visibility="hidden";
		 if(run_once)
	         {
	     document.getElementById('3-2').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 360px; top:275px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
			 }
	
      let shiftX = event.clientX - ball.getBoundingClientRect().left;
      let shiftY = event.clientY - ball.getBoundingClientRect().top;
// The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
		
		
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
		setTimeout(function(){
			document.getElementById('gate').style.background='white';
			myStopFunction();
			document.getElementById('3-2').style.visibility="hidden";
		},200);
		setTimeout(function(){
			document.getElementById('i3-5').style.visibility="visible";
		  document.getElementById('i3-6').style.visibility="visible";
		  document.getElementById('ball').style.visibility="hidden";
		  document.getElementById('gate').style.visibility="hidden";
		  document.getElementById('nextButton').style.visibility="visible";
		},300);
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
	  run_once=false;	  
    }

    function leaveDroppable(elem) {
	  
      elem.style.background = '';
	  setTimeout(function(){
		  document.getElementById('i3-5').style.visibility="visible";
		  document.getElementById('i3-6').style.visibility="visible";
		  document.getElementById('ball').style.visibility="hidden";
		  document.getElementById('gate').style.visibility="hidden";
	  },10);
    }

   ball.ondragstart = function() {
      return false;
    };
}
	
function myFun()
{
	//myStopFunction();
	setTimeout(function()
	 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 635px; top: 110px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(270deg)";
		 document.getElementById('i4-3').onclick=function(){step4();}
	 },500);
}
	
	
	function step4()
	 {
		 myStopFunction();
		 document.getElementById('i4-3').style.visibility="hidden";
		 document.getElementById('i4-4').style.visibility="visible";
		 setTimeout(function(){
			 document.getElementById('i4-1').style.transformOrigin="6% 92%";
			 document.getElementById('i4-1').style.mozAnimation= " swing 10s forwards  ";
             document.getElementById('i4-1').style.webkitAnimation= "swing 10s  forwards ";
   		 },350);
		 setTimeout(function(){
			 if(flag==1)
			 {
				 document.getElementById('4-3').innerHTML="&nbsp;" +CastIron[p][6];
				 document.getElementById('4-4').innerHTML="&nbsp;" +CastIron[p][6];
			 }
			 if(flag==2) 
			 {
				if(MildSteel[p][6] == "Indefinite")
				{
					 document.getElementById('4-3').innerHTML="&nbsp;----- ";
					 document.getElementById('4-4').innerHTML="&nbsp;----- ";
				}
				else {
					 document.getElementById('4-3').innerHTML="&nbsp;" +MildSteel[p][6];
					 document.getElementById('4-4').innerHTML="&nbsp;" +MildSteel[p][6];
				}
			 }
		 },1100);
         setTimeout(function(){
			 document.getElementById('4-1').style.visibility="visible";
			 document.getElementById('4-2').style.visibility="visible";
			 if(flag==1) 
			 {
				document.getElementById('4-1').innerHTML="Total loss of energy during transit of Hammer, E<sub>t</sub> = "+CastIron[p][6]+" J";
				document.getElementById('4-2').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+CastIron[p][7]+" J";
			 }
			 if(flag==2) 
			 {
				if(MildSteel[p][6] == "Indefinite")
				{
					document.getElementById('4-1').innerHTML="The test piece was not broken by striking energy of the testing machine.";
					document.getElementById('4-2').innerHTML="So the impact value obtained is indefinite.";
				}
				else 
				{
					document.getElementById('4-1').innerHTML="Total loss of energy during transit of Hammer, E<sub>t</sub> = "+MildSteel[p][6]+" J";
					document.getElementById('4-2').innerHTML="Energy for failure of specimen = E<sub>t</sub> - E<sub>f</sub> = "+MildSteel[p][7]+" J";
				}
			 }
		    
		},7500);
		  
		setTimeout(function(){
			 document.getElementById('i4-10').style.visibility="visible";
			 document.getElementById('i4-10').style.transformOrigin="0 20%";
		     document.getElementById('i4-10').style.animation="mymove2 1.0s linear";
			 setTimeout(function(){
				 document.getElementById('i4-10').style.visibility="hidden";
			 },1000);
		},500);
		setTimeout(function(){
			document.getElementById('i4-8').style.visibility="hidden";
			document.getElementById('i4-12').style.visibility="visible";
			if(flag==1){
				document.getElementById('i4-11i').style.visibility="visible";
			}
			if(flag==2){
				if(MildSteel[p][6] == "Indefinite")
				{
					document.getElementById('i4-11s').style.visibility="visible";
				}
				else{
					document.getElementById('i4-11i').style.visibility="visible";
				}
			}			
		},4200);
		setTimeout(function(){
			document.getElementById('d4-4').style.visibility="hidden";
			document.getElementById('i4-9').style.visibility="hidden";
			document.getElementById('4-5').style.visibility="hidden";
			// document.getElementById('i4-11i').style.visibility="visible";
			//small specimen
			if(flag==1){
				document.getElementById('i4-11is').style.visibility="visible";
				document.getElementById('i4-11is').style.animation="specimenFall 0.5s forwards";
			}
			if(flag==2){
				if(MildSteel[p][6] == "Indefinite")
				{
					document.getElementById('i4-11ss').style.visibility="visible";
					document.getElementById('i4-11ss').style.animation="specimenFall 0.5s forwards";
				}
				else
				{
					document.getElementById('i4-11is').style.visibility="visible";
					document.getElementById('i4-11is').style.animation="specimenFall 0.5s forwards";
				}
			}
			//big specimen
			if(flag==1){
				document.getElementById('i4-11i2').style.visibility="visible";
				document.getElementById('i4-11i2').style.animation="moveSpecimen 0.5s forwards";
			}
			if(flag==2){
				if(MildSteel[p][6] == "Indefinite")
				{
					document.getElementById('i4-11s2').style.visibility="visible";
					document.getElementById('i4-11s2').style.animation="moveSpecimen 0.5s forwards";
				}
				else{
					document.getElementById('i4-11i2').style.visibility="visible";
					document.getElementById('i4-11i2').style.animation="moveSpecimen 0.5s forwards";
				}
			}
			setTimeout(function(){
				document.getElementById('i4-11i2').style.visibility="hidden";
				document.getElementById('i4-11s2').style.visibility="hidden";
			},500);
		},850);  	
		setTimeout(function(){
			 document.getElementById('nextButton').style.visibility="visible";
		},8700);
	 }
	
function refresh()
{
    document.getElementById('i4-1').style.transformOrigin= "";
    document.getElementById('i4-1').style.animation= "";
    document.getElementById('i4-1').style.mozAnimation= "";
    document.getElementById('i4-1').style.webkitAnimation= "";
	document.getElementById('i4-10').style.transformOrigin="";
	document.getElementById('i4-10').style.animation="";
	document.getElementById('i4-11is').style.animation="";
	document.getElementById('i4-11ss').style.animation="";
	document.getElementById('i4-11i2').style.animation="";
	document.getElementById('i4-11s2').style.animation="";
}	