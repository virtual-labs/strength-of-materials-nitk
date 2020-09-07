//on click of next button
var repeat =0;
var result=0;
var diameter=0;
var length=0;
var pim=0;
var yt=0;
var ystress=0;
var ft=0;
var mrupture=0;
var dy=0;
var dx=0;
var tta=0;
var rigidity=0,f=0;
var en3,en4,en5,en6,pe3,pe4,p35,pe6;
function navNext()
{

    for (temp = 0; temp <=7; temp++) 
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



// ------------------------------------------function drag and drop starts here-----------------------------------------
 $( function() {
	var isTouchSupported = 'ontouchstart' in window;
	var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
	var moveEvent = isTouchSupported ? 'touchmove' : 'mousemove';
	var endEvent = isTouchSupported ? 'touchend' : 'mouseup';
	Tipped.create('#i33');
	Tipped.create('#i44');
	Tipped.create('#i55');
	Tipped.create('#i66');
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
    $( "#can45" ).draggable(
	{
		drag: function(){
		var oset = $(this).offset();
		var xPos = oset.left;
		var yPos = oset.top;
		$("#drg").hide();
		$("#can45d").fadeOut(1000);
		if((xPos>="340" && xPos<="360")	&& (yPos>="140" && yPos<="160"))
		{
			$("#can45").hide();
			$("#can4n3").hide();
			document.getElementById('can4n3a').style.visibility="visible";		
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('can4n4').onclick=function(){step41();}
		}
		}
	} );
});
 
//-------------------------------------function to calculate polar moment of inertia---------------------------------------

 $(function()
 {  
	$('#last').children('input').val('');
	 $('#canvas7').is(':visible')
	 {
		$('#t1').text(vals0[0]);
		$('#t2').text(vals0[1]);
	 }
 });

function viewTooltip() {
	if(!$('#i33').val() || !$('#i44').val() || !$('#i55').val() || !$('#i66').val())
	{
		$('#check').off('click');
		Tipped.create('#check',"Fill all the values");
	}
	else
	{
		Tipped.create('#check',"Done!!Click here to view the result.");
	}
}


function checkResult() {
	if(!$('#i33').val() || !$('#i44').val() || !$('#i55').val() || !$('#i66').val())
	{
		$('#check').off('click');
		Tipped.create('#check',"Fill all the values");
	}
	else
	{
		en3=$('#i33').val(); 
		en4=$('#i44').val();
		en5=$('#i55').val(); 
		en6=$('#i66').val(); 
		pe3=((vals0[2]-en3)*100)/vals0[2];
		pe4=((vals0[3]-en4)*100)/vals0[3];
		pe5=((vals0[4]-en5)*100)/vals0[4];
		pe6=((vals0[6]-en6)*100)/vals0[6];
		document.getElementById('prevButton').style.visibility="hidden";
		document.getElementById('last').style.visibility="hidden";
		document.getElementById('check').style.visibility="hidden";
		document.getElementById('final').style.visibility="visible";
		$('#l1').text("Initial Diameter(mm): "+vals0[0]+"mm");
		$('#l2').text("Gauge Length(mm): "+vals0[1]+"mm");
		$('#t3').text(vals0[2]);
		$('#t4').text(vals0[3]);
		$('#t5').text(vals0[4]);
		$('#t6').text(vals0[6]);
		$('#e3').text(en3);
		$('#e4').text(en4);
		$('#e5').text(en5);
		$('#e6').text(en6);
		$('#p3').text(pe3.toFixed(2));
		$('#p4').text(pe4.toFixed(2));
		$('#p5').text(pe5.toFixed(2));
		$('#p6').text(pe6.toFixed(2));	
	}
}
//-------------------------------------function to clear the fields--------------------------------------------------
function clearfield()
{
	document
}
//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{  
	    document.getElementById('nextButton').style.visibility="hidden";	
		// values = vals[Math.floor(Math.random()*vals	.length)]; 
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:264px; top: 180px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-360deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-360deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-360deg)";
		document.getElementById('can11').onclick=function()
		{	
			myStopFunction();
			document.getElementById('can11').style.animation = "rod1-move 2.5s forwards ";
			document.getElementById('mov').style.animation = "cali1-move 2.5s forwards ";
			setTimeout(function()
			{
				document.getElementById('can11').style.animation = "rod2-move 1.5s forwards ";
				document.getElementById('mov').style.animation = "cali2-move 1.5s forwards ";
			},2500);
			
			setTimeout(function()
			{
				document.getElementById('can11').style.animation = "rod3-move 1.5s forwards ";
				document.getElementById('mov').style.animation = "cali3-move 1.5s forwards ";
			},3500);
			setTimeout(function()
			{
				
				document.getElementById('v1-0').innerHTML="Initial Diameter="+vals0[0]+"mm";
				document.getElementById('nextButton').style.visibility="visible";
			},4500);
		}
    }
	
	
	else if (simsubscreennum==2)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:264px; top: 215px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('can24').onclick=function()
		{
			myStopFunction();
			setTimeout(function()
			{
				$("#can24").prop("onclick", false);			
				document.getElementById('can24').style.animation = "scale-move 1s forwards ";
				setTimeout(function()
				{
					document.getElementById('v2-0').innerHTML="Gauge Length="+vals0[1]+"mm";
					document.getElementById('nextButton').style.visibility="visible";
				},1200);
			},1500);
		}
    }
	else if (simsubscreennum==3)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:300px; top: 215px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('can33').onclick=function()
		{
			myStopFunction();
			document.getElementById('can33').onclick="";
			setTimeout(function()
			{
				document.getElementById('can33').style.animation = "can33-move 2.2s forwards ";
				setTimeout(function()
				{
					document.getElementById('can32').style.visibility="visible";
				},150);
				setTimeout(function()
				{
					document.getElementById('can32a').style.visibility="visible";
				},300);
				setTimeout(function()
				{
					document.getElementById('can32b').style.visibility="visible";
				},450);
				setTimeout(function()
				{
					document.getElementById('can32c').style.visibility="visible";
				},600);
				setTimeout(function()
				{
					document.getElementById('can32d').style.visibility="visible";
				},750);
				setTimeout(function()
				{
					document.getElementById('can32e').style.visibility="visible";
				},900);
				setTimeout(function()
				{
					document.getElementById('can32f').style.visibility="visible";
				},1050);
				setTimeout(function()
				{
					document.getElementById('can32g').style.visibility="visible";
				},1200);
				setTimeout(function()
				{
					document.getElementById('can32h').style.visibility="visible";
				},1350);
				setTimeout(function()
				{
					document.getElementById('can32i').style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";
				},1500);
			},1500);
		}
	}
	else if (simsubscreennum==4)
	{
		
		document.getElementById('can32').style.visibility="hidden";
		document.getElementById('can32').style.visibility="hidden";
		document.getElementById('can32a').style.visibility="hidden";
		document.getElementById('can32b').style.visibility="hidden";
		document.getElementById('can32c').style.visibility="hidden";
		document.getElementById('can32d').style.visibility="hidden";
		document.getElementById('can32e').style.visibility="hidden";
		document.getElementById('can32f').style.visibility="hidden";
		document.getElementById('can32g').style.visibility="hidden";
		document.getElementById('can32h').style.visibility="hidden";
		document.getElementById('can32i').style.visibility="hidden";
		document.getElementById('can31').style.visibility="hidden";
		document.getElementById('can33').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:254px; top: 521px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('can4n4').onclick=function(){step4();}
	}	
	else if (simsubscreennum==5)
	{
		document.getElementById('can4n3a').style.visibility="hidden";
		document.getElementById('can4n2').style.visibility="hidden";
		document.getElementById('can4n4').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:115px; top: 305px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
		document.getElementById('green').onclick=function(){step51();}
	}
	else if(simsubscreennum==6)
	{
		$(function() {
			$("#chartContainer").ejChart({
            // ...
				series: [[ 
				{
                    points:[],
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 0, width: 0
                        },
                        visible: false
                    },					
					enableAnimation :false
                }], 
				{
                // ...
				}]
			});
        });
		document.getElementById("canvas5").style.visibility="hidden";
		document.getElementById("red").style.visibility="hidden";
		document.getElementById("green").style.visibility="hidden";
		document.getElementById("mac2").style.visibility="hidden";
		document.getElementById('mydiv').style.visibility="visible";
		document.getElementById('x').innerHTML="&Delta;X ="+x1 ;
		document.getElementById('y').innerHTML="&Delta;Y ="+y1;
		document.getElementById('slp').innerHTML="Slope ="+(y1/x1).toFixed(2);
		Plotly.newPlot('mydiv', data, layout, options);
		setTimeout(function()
		{
			document.getElementById('can61').style.visibility="visible";
			document.getElementById('can61').onclick=function(){step61();}
		},5000);

	}
	else if(simsubscreennum==7)
	{
		if(f==1)
		{
			document.getElementById("mydiv1").style.visibility="hidden";
			f=0;
		}
		document.getElementById("prevButton").style.visibility="visible";
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("slopefm").style.visibility="hidden";
		document.getElementById("canvas8").style.visibility="hidden";
		document.getElementById("gz1").style.visibility="hidden";
		document.getElementById("gz2").style.visibility="hidden";
		document.getElementById("gz3").style.visibility="hidden";
		document.getElementById("gz4").style.visibility="hidden";
		document.getElementById("gz5").style.visibility="hidden";
		document.getElementById("gz6").style.visibility="hidden";
		document.getElementById("gz7").style.visibility="hidden";
		document.getElementById("gz8").style.visibility="hidden";
		document.getElementById("gz9").style.visibility="hidden";
		document.getElementById("gz10").style.visibility="hidden";
		// document.getElementById("x").style.visibility="hidden";
		// document.getElementById("y").style.visibility="hidden";
		document.getElementById("can61").style.visibility="hidden";

	
	}
	else if(simsubscreennum==8)
	{
		f=1;
		document.getElementById('prevButton').style.visibility="hidden";
		document.getElementById('mydiv1').style.visibility="visible";
		Plotly.newPlot('mydiv1', data, layout1,op);
		simsubscreennum=6;
		document.getElementById('nextButton').style.visibility="visible";

	}
	
}
    
function step1()
{
	
	
	
	
	
	myStopFunction();
	setTimeout(function()
	{
	document.getElementById('can11').style.animation = "rod1-move 1.5s forwards ";
	document.getElementById('mov').style.animation = "cali1-move 1.5s forwards ";
	},1500);
	setTimeout(function()
	{
	document.getElementById('can11').style.animation = "rod2-move 1.5s forwards ";
	document.getElementById('mov').style.animation = "cali2-move 1.5s forwards ";
	},2500);
	setTimeout(function()
	{
	document.getElementById('can11').style.animation = "rod3-move 1.5s forwards ";
	document.getElementById('mov').style.animation = "cali3-move 1.5s forwards ";
	},3500);
	setTimeout(function()
	{
		
		document.getElementById('v1-0').innerHTML="Initial Diameter="+vals0[0]+"mm";
		document.getElementById('nextButton').style.visibility="visible";
	},4500);
}	


function step4()
{
	myStopFunction();
	document.getElementById('can4n4').style.transformOrigin="50% 45%";
	document.getElementById('can4n4').style.animation="valveturn-4 8.5s  forwards";
	document.getElementById('can4n3').style.animation="can4n3 8.5s forwards";
	document.getElementById('can4n5').style.animation="can4n5 8.5s forwards";
	setTimeout(function()
	{
		document.getElementById('can45').style.visibility="visible";
		document.getElementById('drg').style.visibility="visible";
		document.getElementById('can45d').style.visibility="visible";
	},6500);
}
function step41()
{
	myStopFunction();
	document.getElementById('can4n4').style.transformOrigin="50% 45%";
	document.getElementById('can4n4').style.animation="valveturn-4a 8.5s forwards";
	document.getElementById('can4n3a').style.animation="can4n3b 8.5s forwards";
    setTimeout(function()
	{	
		document.getElementById('nextButton').style.visibility="visible";
	},6500);
}
		// setTimeout(function()
function step51()
{
	document.getElementById('green').onclick="";
	myStopFunction();
	setTimeout(function()
	{
		document.getElementById('mac1').style.visibility="hidden";
		document.getElementById('green').style.visibility="hidden";
		document.getElementById('red').style.visibility="hidden";
		document.getElementById('can50').style.visibility="visible";
		if(gr==1)
			g1();
		else if(gr==2)
			g2();
		else if(gr==3)
			g3();
		else if(gr==4)
			g4();
		else if(gr==5)
			g5();
		else if(gr==6)
			g6();
		else if(gr==7)
			g7();
		else if(gr==8)
			g8();
		else if(gr==9)
			g9();
		else if(gr==10)
			g10();
	},1200);
	setTimeout(function()
	{
		document.getElementById('can51').style.visibility="visible";
	},2400);
	setTimeout(function()
	{
		document.getElementById('can52').style.visibility="visible";
	},3600);
	setTimeout(function()
	{
		document.getElementById('can53').style.visibility="visible";
	},4800);
	setTimeout(function()
	{
		document.getElementById('can54').style.visibility="visible";
	},6000);
	setTimeout(function()
	{
		document.getElementById('can55').style.visibility="visible";
	},7200);
	setTimeout(function()
	{
		document.getElementById('can56').style.visibility="visible";
	},8400);
	setTimeout(function()
	{
		document.getElementById('can57').style.visibility="visible";
	},9600);
	setTimeout(function()
	{
		document.getElementById('can50').style.visibility="hidden";
		document.getElementById('can51').style.visibility="hidden";
		document.getElementById('can52').style.visibility="hidden";
		document.getElementById('can53').style.visibility="hidden";
		document.getElementById('can54').style.visibility="hidden";
		document.getElementById('can55').style.visibility="hidden";
		document.getElementById('can56').style.visibility="hidden";
		document.getElementById('can57').style.visibility="hidden";
		document.getElementById('mac2').style.visibility="visible";
		document.getElementById('red').style.visibility="visible";
		document.getElementById('chartContainer').style.visibility="hidden";
		$(function() {
					$("#chartContainer").ejChart({
					// ...
						series: [[ 
						{
							points:[],
							marker:{
								shape: 'circle',
								size:
								{
									height: 0, width: 0
								},
								visible: false
							},					
							enableAnimation :false
						}], 
						{
						// ...
						}]
					});
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:115px; top: 230px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('red').onclick=function(){step52();}
					
	});	},10000);	
}


function step52()
{
	myStopFunction();
	document.getElementById('green').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('nextButton').style.visibility="visible";
	},500);
	
}

function step61()
{
	document.getElementById('mydiv').style.visibility="hidden";
	document.getElementById('slopefm').style.visibility="visible";
	if(gr==1)
		document.getElementById('gz1').style.visibility="visible";
	else if(gr==2)
		document.getElementById('gz2').style.visibility="visible";
	else if(gr==3)
		document.getElementById('gz3').style.visibility="visible";
	else if(gr==4)
		document.getElementById('gz4').style.visibility="visible";
	else if(gr==5)
		document.getElementById('gz5').style.visibility="visible";
	else if(gr==6)
		document.getElementById('gz6').style.visibility="visible";
	else if(gr==7)
		document.getElementById('gz7').style.visibility="visible";
	else if(gr==8)
		document.getElementById('gz8').style.visibility="visible";
	else if(gr==9)
		document.getElementById('gz9').style.visibility="visible";
	else if(gr==10)
		document.getElementById('gz10').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	},1500);
}

function g1()
{
 
	$("#chartContainer").ejChart(
        {	
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}",			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}             
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.4 },
							{x :  2.0 ,y : 0.9 },
							{x :  3.0 ,y : 1.4 },
							{x :  4.0 ,y : 2.0 },
							{x :  5.0 ,y : 2.6 },
							{x :  6.0 ,y : 3.25 },
							{x :  7.0 ,y : 4.0 },
							{x :  8.0 ,y : 4.75 },
							{x :  9.0 ,y : 5.4 },
							{x :  10.0 ,y : 5.9 },
							{x :  11.0 ,y : 6.1 },
							{x :  12.0 ,y : 6.1 },
							{x :  13.0 ,y : 6.1 },
							{x :  14.0 ,y : 6.1 },
							{x :  15.0 ,y : 6.1 },
							{x :  16.0 ,y : 6.2 },
							{x :  17.0 ,y : 6.3 },
							{x :  18.0 ,y : 6.3 },
							{x :  19.0 ,y : 6.3 },
							{x :  20.0 ,y : 6.3 },
							{x :  21.0 ,y : 6.3 },
							{x :  22.0 ,y : 6.4 },
							{x :  23.0 ,y : 6.5 },
							{x :  24.0 ,y : 6.5 },
							{x :  25.0 ,y : 6.6 },
							{x :  26.0 ,y : 6.7 },
							{x :  27.0 ,y : 6.7 },
							{x :  28.0 ,y : 6.7 },
							{x :  29.0 ,y : 6.7 },
							{x :  30.0 ,y : 6.7 },
							{x :  60.0 ,y : 6.9 },
							{x :  90.0 ,y : 7.1 },
							{x :  120.0 ,y : 7.3 },
							{x :  150.0 ,y : 7.5 },
							{x :  180.0 ,y : 7.7 },
							{x :  210.0 ,y : 8.0 },
							{x :  240.0 ,y : 8.3 },
							{x :  270.0 ,y : 8.6 },
							{x :  300.0 ,y : 8.9 },
							{x :  330.0 ,y : 9.3 },
							{x :  360.0 ,y : 9.6 },
							{x :  390.0 ,y : 9.8 },
							{x :  420.0 ,y : 10.0 },
							{x :  450.0 ,y : 10.2 },
							{x :  480.0 ,y : 10.4 },
							{x :  510.0 ,y : 10.7 },
							{x :  540.0 ,y : 10.9 },
							{x :  570.0 ,y : 11.2 },
							{x :  600.0 ,y : 11.5 },
							{x :  630.0 ,y : 11.7 },
							{x :  660.0 ,y : 11.9 },
							{x :  690.0 ,y : 12.0 },
							{x :  720.0 ,y : 12.1 },
							{x :  750.0 ,y : 12.3 },
							{x :  780.0 ,y : 12.4 },
							{x :  810.0 ,y : 12.5 },
							{x :  840.0 ,y : 12.6 },
							{x :  870.0 ,y : 12.7 },
							{x :  900.0 ,y : 12.9 },
							{x :  930.0 ,y : 13.0 },
							{x :  960.0 ,y : 13.1 },
							{x :  990.0 ,y : 13.2 },
							{x :  1020.0 ,y : 13.3 },
							{x :  1050.0 ,y : 13.4 },
							{x :  1080.0 ,y : 13.5 },
							{x :  1110.0 ,y : 13.6 },
							{x :  1140.0 ,y : 13.7 },
							{x :  1170.0 ,y : 13.8 },
							{x :  1200.0 ,y : 13.9 },
							{x :  1230.0 ,y : 14.0 },
							{x :  1260.0 ,y : 14.0 },
							{x :  1290.0 ,y : 14.1 },
							{x :  1320.0 ,y : 14.2 },
							{x :  1350.0 ,y : 14.3 },
							{x :  1380.0 ,y : 14.5 },
							{x :  1410.0 ,y : 14.6 },
							{x :  1440.0 ,y : 14.7 },
							{x :  1470.0 ,y : 14.9 },
							{x :  1500.0 ,y : 15.0 },
							{x :  1530.0 ,y : 15.1 },
							{x :  1560.0 ,y : 15.1 },
							{x :  1590.0 ,y : 15.2 }
							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g2()
{
	
     
	$("#chartContainer").ejChart(
        {	
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}              
            },

			series: 
			[ 
				{
						points:[{x :  0.0 ,y : 0.0 },
								{x :  1.0 ,y : 0.35 },
								{x :  2.0 ,y : 0.75 },
								{x :  3.0 ,y : 1.2 },
								{x :  4.0 ,y : 1.8 },
								{x :  5.0 ,y : 2.5 },
								{x :  6.0 ,y : 3.2 },
								{x :  7.0 ,y : 3.95 },
								{x :  8.0 ,y : 4.65 },
								{x :  9.0 ,y : 5.4 },
								{x :  10.0 ,y : 5.9 },
								{x :  11.0 ,y : 6.1 },
								{x :  12.0 ,y : 6.2 },
								{x :  13.0 ,y : 6.3 },
								{x :  14.0 ,y : 6.4 },
								{x :  15.0 ,y : 6.5 },
								{x :  16.0 ,y : 6.6 },
								{x :  17.0 ,y : 6.6 },
								{x :  18.0 ,y : 6.6 },
								{x :  19.0 ,y : 6.6 },
								{x :  20.0 ,y : 6.6 },
								{x :  21.0 ,y : 6.6 },
								{x :  22.0 ,y : 6.6 },
								{x :  23.0 ,y : 6.6 },
								{x :  24.0 ,y : 6.6 },
								{x :  25.0 ,y : 6.7 },
								{x :  26.0 ,y : 6.8 },
								{x :  27.0 ,y : 7.0 },
								{x :  28.0 ,y : 7.5 },
								{x :  29.0 ,y : 7.9 },
								{x :  30.0 ,y : 8.0 },
								{x :  60.0 ,y : 8.2 },
								{x :  90.0 ,y : 8.4 },
								{x :  120.0 ,y : 8.6 },
								{x :  150.0 ,y : 8.8 },
								{x :  180.0 ,y : 9.1 },
								{x :  210.0 ,y : 9.3 },
								{x :  240.0 ,y : 9.5 },
								{x :  270.0 ,y : 9.8 },
								{x :  300.0 ,y : 10.1 },
								{x :  330.0 ,y : 10.4 },
								{x :  360.0 ,y : 10.7 },
								{x :  390.0 ,y : 10.9 },
								{x :  420.0 ,y : 11.1 },
								{x :  450.0 ,y : 11.3 },
								{x :  480.0 ,y : 11.4 },
								{x :  510.0 ,y : 11.6 },
								{x :  540.0 ,y : 11.7 },
								{x :  570.0 ,y : 11.9 },
								{x :  600.0 ,y : 12.0 },
								{x :  630.0 ,y : 12.1 },
								{x :  660.0 ,y : 12.2 },
								{x :  690.0 ,y : 12.3 },
								{x :  720.0 ,y : 12.4 },
								{x :  750.0 ,y : 12.5 },
								{x :  780.0 ,y : 12.6 },
								{x :  810.0 ,y : 12.7 },
								{x :  840.0 ,y : 12.8 },
								{x :  870.0 ,y : 12.9 },
								{x :  900.0 ,y : 13.0 },
								{x :  930.0 ,y : 13.1 },
								{x :  960.0 ,y : 13.2 },
								{x :  990.0 ,y : 13.3 },
								{x :  1020.0 ,y : 13.4 },
								{x :  1050.0 ,y : 13.5 },
								{x :  1080.0 ,y : 13.6 },
								{x :  1110.0 ,y : 13.7 },
								{x :  1140.0 ,y : 13.7 },
								{x :  1170.0 ,y : 13.8 },
								{x :  1200.0 ,y : 13.9 },
								{x :  1230.0 ,y : 14.0 },
								{x :  1260.0 ,y : 14.0 },
								{x :  1290.0 ,y : 14.1 },
								{x :  1320.0 ,y : 14.2 },
								{x :  1350.0 ,y : 14.3 },
								{x :  1380.0 ,y : 14.4 },
								{x :  1410.0 ,y : 14.5 },
								{x :  1440.0 ,y : 14.6 },
								{x :  1470.0 ,y : 14.8 },
								{x :  1500.0 ,y : 14.9 },
								{x :  1530.0 ,y : 15.0 },
								{x :  1560.0 ,y : 15.1 },
								{x :  1590.0 ,y : 15.2 },
								{x :  1620.0 ,y : 15.3 },
								{x :  1650.0 ,y : 15.4 },
								{x :  1680.0 ,y : 15.5 },
								{x :  1710.0 ,y : 15.6 },
								{x :  1740.0 ,y : 15.7 }
								],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration :10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g3()
{
	
     
	$("#chartContainer").ejChart(
        {	 
			primaryXAxis:
            {                
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}              

            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.45 },
							{x :  2.0 ,y : 0.8 },
							{x :  3.0 ,y : 1.25 },
							{x :  4.0 ,y : 1.8 },
							{x :  5.0 ,y : 2.4 },
							{x :  6.0 ,y : 3.15 },
							{x :  7.0 ,y : 3.9 },
							{x :  8.0 ,y : 4.7 },
							{x :  9.0 ,y : 5.5 },
							{x :  10.0 ,y : 6.1 },
							{x :  11.0 ,y : 6.3 },
							{x :  12.0 ,y : 6.4 },
							{x :  13.0 ,y : 6.5 },
							{x :  14.0 ,y : 6.5 },
							{x :  15.0 ,y : 6.5 },
							{x :  16.0 ,y : 6.5 },
							{x :  17.0 ,y : 6.5 },
							{x :  18.0 ,y : 6.5 },
							{x :  19.0 ,y : 6.5 },
							{x :  20.0 ,y : 6.5 },
							{x :  21.0 ,y : 6.5 },
							{x :  22.0 ,y : 6.5 },
							{x :  23.0 ,y : 6.5 },
							{x :  24.0 ,y : 6.5 },
							{x :  25.0 ,y : 6.5 },
							{x :  26.0 ,y : 6.5 },
							{x :  27.0 ,y : 6.5 },
							{x :  28.0 ,y : 6.5 },
							{x :  29.0 ,y : 6.5 },
							{x :  30.0 ,y : 6.6 },
							{x :  60.0 ,y : 6.9 },
							{x :  90.0 ,y : 7.3 },
							{x :  120.0 ,y : 8.0 },
							{x :  150.0 ,y : 8.5 },
							{x :  180.0 ,y : 8.9 },
							{x :  210.0 ,y : 9.4 },
							{x :  240.0 ,y : 9.8 },
							{x :  270.0 ,y : 10.1 },
							{x :  300.0 ,y : 10.4 },
							{x :  330.0 ,y : 10.6 },
							{x :  360.0 ,y : 10.9 },
							{x :  390.0 ,y : 11.2 },
							{x :  420.0 ,y : 11.4 },
							{x :  450.0 ,y : 11.6 },
							{x :  480.0 ,y : 11.7 },
							{x :  510.0 ,y : 11.9 },
							{x :  540.0 ,y : 12.0 },
							{x :  570.0 ,y : 12.2 },
							{x :  600.0 ,y : 12.3 },
							{x :  630.0 ,y : 12.4 },
							{x :  660.0 ,y : 12.5 },
							{x :  690.0 ,y : 12.6 },
							{x :  720.0 ,y : 12.7 },
							{x :  750.0 ,y : 12.8 },
							{x :  780.0 ,y : 12.9 },
							{x :  810.0 ,y : 13.0 },
							{x :  840.0 ,y : 13.1 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.6 },
							{x :  1050.0 ,y : 13.7 },
							{x :  1080.0 ,y : 13.8 },
							{x :  1110.0 ,y : 13.8 },
							{x :  1140.0 ,y : 13.9 },
							{x :  1170.0 ,y : 14.0 },
							{x :  1200.0 ,y : 14.0 },
							{x :  1230.0 ,y : 14.0 },
							{x :  1260.0 ,y : 14.0 },
							{x :  1290.0 ,y : 14.1 },
							{x :  1320.0 ,y : 14.2 },
							{x :  1350.0 ,y : 14.3 },
							{x :  1380.0 ,y : 14.4 },
							{x :  1410.0 ,y : 14.5 },
							{x :  1440.0 ,y : 14.5 },
							{x :  1470.0 ,y : 14.5 },
							{x :  1500.0 ,y : 14.6 },
							{x :  1530.0 ,y : 14.7 },
							{x :  1560.0 ,y : 14.7 },
							{x :  1590.0 ,y : 14.8 },
							{x :  1620.0 ,y : 14.8 },
							{x :  1650.0 ,y : 14.8 },
							{x :  1680.0 ,y : 14.9 },
							{x :  1710.0 ,y : 14.9 },
							{x :  1740.0 ,y : 14.9 }
							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g4()
{
	
     
	$("#chartContainer").ejChart(
        {	
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}
			},
			
			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.35 },
							{x :  2.0 ,y : 0.7 },
							{x :  3.0 ,y : 1.15 },
							{x :  4.0 ,y : 1.65 },
							{x :  5.0 ,y : 2.2 },
							{x :  6.0 ,y : 2.9 },
							{x :  7.0 ,y : 3.7 },
							{x :  8.0 ,y : 4.65 },
							{x :  9.0 ,y : 5.55 },
							{x :  10.0 ,y : 6.2 },
							{x :  11.0 ,y : 6.5 },
							{x :  12.0 ,y : 6.6 },
							{x :  13.0 ,y : 6.6 },
							{x :  14.0 ,y : 6.6 },
							{x :  15.0 ,y : 6.6 },
							{x :  16.0 ,y : 6.6 },
							{x :  17.0 ,y : 6.6 },
							{x :  18.0 ,y : 6.6 },
							{x :  19.0 ,y : 6.6 },
							{x :  20.0 ,y : 6.6 },
							{x :  21.0 ,y : 6.6 },
							{x :  22.0 ,y : 6.6 },
							{x :  23.0 ,y : 6.6 },
							{x :  24.0 ,y : 6.6 },
							{x :  25.0 ,y : 6.6 },
							{x :  26.0 ,y : 6.6 },
							{x :  27.0 ,y : 6.6 },
							{x :  28.0 ,y : 6.6 },
							{x :  29.0 ,y : 6.6 },
							{x :  30.0 ,y : 6.7 },
							{x :  60.0 ,y : 7.0 },
							{x :  90.0 ,y : 7.4 },
							{x :  120.0 ,y : 8.1 },
							{x :  150.0 ,y : 8.6 },
							{x :  180.0 ,y : 9.0 },
							{x :  210.0 ,y : 9.5 },
							{x :  240.0 ,y : 9.9 },
							{x :  270.0 ,y : 10.2 },
							{x :  300.0 ,y : 10.5 },
							{x :  330.0 ,y : 10.7 },
							{x :  360.0 ,y : 11.0 },
							{x :  390.0 ,y : 11.2 },
							{x :  420.0 ,y : 11.4 },
							{x :  450.0 ,y : 11.7 },
							{x :  480.0 ,y : 11.8 },
							{x :  510.0 ,y : 12.0 },
							{x :  540.0 ,y : 12.1 },
							{x :  570.0 ,y : 12.3 },
							{x :  600.0 ,y : 12.4 },
							{x :  630.0 ,y : 12.5 },
							{x :  660.0 ,y : 12.6 },
							{x :  690.0 ,y : 12.7 },
							{x :  720.0 ,y : 12.8 },
							{x :  750.0 ,y : 12.9 },
							{x :  780.0 ,y : 13.0 },
							{x :  810.0 ,y : 13.1 },
							{x :  840.0 ,y : 13.2 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.5 },
							{x :  1020.0 ,y : 13.6 },
							{x :  1050.0 ,y : 13.7 },
							{x :  1080.0 ,y : 13.8 },
							{x :  1110.0 ,y : 13.9 },
							{x :  1140.0 ,y : 13.9 },
							{x :  1170.0 ,y : 14.0 },
							{x :  1200.0 ,y : 14.1 },
							{x :  1230.0 ,y : 14.2 },
							{x :  1260.0 ,y : 14.3 },
							{x :  1290.0 ,y : 14.4 },
							{x :  1320.0 ,y : 14.5 },
							{x :  1350.0 ,y : 14.5 },
							{x :  1380.0 ,y : 14.5 },
							{x :  1410.0 ,y : 14.6 },
							{x :  1440.0 ,y : 14.7 },
							{x :  1470.0 ,y : 14.7 },
							{x :  1500.0 ,y : 14.8 },
							{x :  1530.0 ,y : 14.8 },
							{x :  1560.0 ,y : 14.8 },
							{x :  1590.0 ,y : 14.9 },
							{x :  1620.0 ,y : 15.0 },
							{x :  1650.0 ,y : 15.0 },
							{x :  1680.0 ,y : 15.1 },
							{x :  1710.0 ,y : 15.1 },
							{x :  1740.0 ,y : 15.1 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
				
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g5()
{
	
     
	$("#chartContainer").ejChart(
        {	
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}             
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.35 },
							{x :  2.0 ,y : 0.7 },
							{x :  3.0 ,y : 1.05 },
							{x :  4.0 ,y : 1.5 },
							{x :  5.0 ,y : 2.0 },
							{x :  6.0 ,y : 2.6 },
							{x :  7.0 ,y : 3.45 },
							{x :  8.0 ,y : 4.3 },
							{x :  9.0 ,y : 5.2 },
							{x :  10.0 ,y : 6.0 },
							{x :  11.0 ,y : 6.2 },
							{x :  12.0 ,y : 6.3 },
							{x :  13.0 ,y : 6.4 },
							{x :  14.0 ,y : 6.4 },
							{x :  15.0 ,y : 6.4 },
							{x :  16.0 ,y : 6.4 },
							{x :  17.0 ,y : 6.4 },
							{x :  18.0 ,y : 6.4 },
							{x :  19.0 ,y : 6.4 },
							{x :  20.0 ,y : 6.4 },
							{x :  21.0 ,y : 6.4 },
							{x :  22.0 ,y : 6.4 },
							{x :  23.0 ,y : 6.4 },
							{x :  24.0 ,y : 6.4 },
							{x :  25.0 ,y : 6.4 },
							{x :  26.0 ,y : 6.4 },
							{x :  27.0 ,y : 6.4 },
							{x :  28.0 ,y : 6.4 },
							{x :  29.0 ,y : 6.4 },
							{x :  30.0 ,y : 6.6 },
							{x :  60.0 ,y : 6.8 },
							{x :  90.0 ,y : 7.2 },
							{x :  120.0 ,y : 7.8 },
							{x :  150.0 ,y : 8.5 },
							{x :  180.0 ,y : 8.9 },
							{x :  210.0 ,y : 9.4 },
							{x :  240.0 ,y : 9.7 },
							{x :  270.0 ,y : 10.0 },
							{x :  300.0 ,y : 10.4 },
							{x :  330.0 ,y : 10.8 },
							{x :  360.0 ,y : 11.0 },
							{x :  390.0 ,y : 11.3 },
							{x :  420.0 ,y : 11.5 },
							{x :  450.0 ,y : 11.7 },
							{x :  480.0 ,y : 11.9 },
							{x :  510.0 ,y : 12.0 },
							{x :  540.0 ,y : 12.2 },
							{x :  570.0 ,y : 12.3 },
							{x :  600.0 ,y : 12.4 },
							{x :  630.0 ,y : 12.5 },
							{x :  660.0 ,y : 12.5 },
							{x :  690.0 ,y : 12.7 },
							{x :  720.0 ,y : 12.8 },
							{x :  750.0 ,y : 12.9 },
							{x :  780.0 ,y : 13.0 },
							{x :  810.0 ,y : 13.2 },
							{x :  840.0 ,y : 13.3 },
							{x :  870.0 ,y : 13.3 },
							{x :  900.0 ,y : 13.4 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.6 },
							{x :  1050.0 ,y : 13.7 },
							{x :  1080.0 ,y : 13.8 },
							{x :  1110.0 ,y : 13.9 },
							{x :  1140.0 ,y : 13.9 },
							{x :  1170.0 ,y : 14.0 },
							{x :  1200.0 ,y : 14.1 },
							{x :  1230.0 ,y : 14.2 },
							{x :  1260.0 ,y : 14.3 },
							{x :  1290.0 ,y : 14.4 },
							{x :  1320.0 ,y : 14.4 },
							{x :  1350.0 ,y : 14.4 },
							{x :  1380.0 ,y : 14.5 },
							{x :  1410.0 ,y : 14.6 },
							{x :  1440.0 ,y : 14.7 },
							{x :  1470.0 ,y : 14.8 },
							{x :  1500.0 ,y : 14.8 },
							{x :  1530.0 ,y : 14.8 },
							{x :  1560.0 ,y : 14.9 },
							{x :  1590.0 ,y : 14.9 },
							{x :  1620.0 ,y : 14.9 },
							{x :  1650.0 ,y : 15.0 },
							{x :  1680.0 ,y : 15.0 },
							{x :  1710.0 ,y : 15.0 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
				
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g6()
{
	
     
	$("#chartContainer").ejChart(
        {	
			
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}              
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.5 },
							{x :  2.0 ,y : 0.95 },
							{x :  3.0 ,y : 1.4 },
							{x :  4.0 ,y : 1.9 },
							{x :  5.0 ,y : 2.5 },
							{x :  6.0 ,y : 3.15 },
							{x :  7.0 ,y : 3.85 },
							{x :  8.0 ,y : 4.65 },
							{x :  9.0 ,y : 5.35 },
							{x :  10.0 ,y : 6.0 },
							{x :  11.0 ,y : 6.5 },
							{x :  12.0 ,y : 6.7 },
							{x :  13.0 ,y : 6.7 },
							{x :  14.0 ,y : 6.7 },
							{x :  15.0 ,y : 6.7 },
							{x :  16.0 ,y : 6.7 },
							{x :  17.0 ,y : 6.7 },
							{x :  18.0 ,y : 6.7 },
							{x :  19.0 ,y : 6.7 },
							{x :  20.0 ,y : 6.7 },
							{x :  21.0 ,y : 6.7 },
							{x :  22.0 ,y : 6.7 },
							{x :  23.0 ,y : 6.7 },
							{x :  24.0 ,y : 6.7 },
							{x :  25.0 ,y : 6.7 },
							{x :  26.0 ,y : 6.7 },
							{x :  27.0 ,y : 6.8 },
							{x :  28.0 ,y : 6.9 },
							{x :  29.0 ,y : 7.0 },
							{x :  30.0 ,y : 7.2 },
							{x :  60.0 ,y : 7.4 },
							{x :  90.0 ,y : 7.8 },
							{x :  120.0 ,y : 8.0 },
							{x :  150.0 ,y : 8.2 },
							{x :  180.0 ,y : 8.5 },
							{x :  210.0 ,y : 8.8 },
							{x :  240.0 ,y : 8.9 },
							{x :  270.0 ,y : 9.3 },
							{x :  300.0 ,y : 9.6 },
							{x :  330.0 ,y : 9.9 },
							{x :  360.0 ,y : 10.2 },
							{x :  390.0 ,y : 10.5 },
							{x :  420.0 ,y : 10.8 },
							{x :  450.0 ,y : 11.2 },
							{x :  480.0 ,y : 11.4 },
							{x :  510.0 ,y : 11.7 },
							{x :  540.0 ,y : 11.9 },
							{x :  570.0 ,y : 12.1 },
							{x :  600.0 ,y : 12.4 },
							{x :  630.0 ,y : 12.5 },
							{x :  660.0 ,y : 12.6 },
							{x :  690.0 ,y : 12.7 },
							{x :  720.0 ,y : 12.8 },
							{x :  750.0 ,y : 12.9 },
							{x :  780.0 ,y : 13.0 },
							{x :  810.0 ,y : 13.1 },
							{x :  840.0 ,y : 13.2 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.6 },
							{x :  1050.0 ,y : 13.7 },
							{x :  1080.0 ,y : 13.8 },
							{x :  1110.0 ,y : 13.9 },
							{x :  1140.0 ,y : 14.0 },
							{x :  1170.0 ,y : 14.0 },
							{x :  1200.0 ,y : 14.1 },
							{x :  1230.0 ,y : 14.2 },
							{x :  1260.0 ,y : 14.3 },
							{x :  1290.0 ,y : 14.4 },
							{x :  1320.0 ,y : 14.5 },
							{x :  1350.0 ,y : 14.5 },
							{x :  1380.0 ,y : 14.5 },
							{x :  1410.0 ,y : 14.6 },
							{x :  1440.0 ,y : 14.7 },
							{x :  1470.0 ,y : 14.7 },
							{x :  1500.0 ,y : 14.8 },
							{x :  1530.0 ,y : 14.9 },
							{x :  1560.0 ,y : 14.9 },
							{x :  1590.0 ,y : 14.9 },
							{x :  1620.0 ,y : 14.9 },
							{x :  1650.0 ,y : 15.0 },
							{x :  1680.0 ,y : 15.1 },
							{x :  1710.0 ,y : 15.2 },
							{x :  1740.0 ,y : 15.2 },
							{x :  1770.0 ,y : 15.2 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
				},
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g7()
{
	
     
	$("#chartContainer").ejChart(
        {	
			 
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 } 				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}              
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.6 },
							{x :  2.0 ,y : 1.2 },
							{x :  3.0 ,y : 1.8 },
							{x :  4.0 ,y : 2.4 },
							{x :  5.0 ,y : 3.1 },
							{x :  6.0 ,y : 3.8 },
							{x :  7.0 ,y : 4.55 },
							{x :  8.0 ,y : 5.3 },
							{x :  9.0 ,y : 5.8 },
							{x :  10.0 ,y : 6.0 },
							{x :  11.0 ,y : 6.0 },
							{x :  12.0 ,y : 6.0 },
							{x :  13.0 ,y : 6.0 },
							{x :  14.0 ,y : 6.0 },
							{x :  15.0 ,y : 6.0 },
							{x :  16.0 ,y : 6.2 },
							{x :  17.0 ,y : 6.3 },
							{x :  18.0 ,y : 6.4 },
							{x :  19.0 ,y : 6.4 },
							{x :  20.0 ,y : 6.4 },
							{x :  21.0 ,y : 6.4 },
							{x :  22.0 ,y : 6.5 },
							{x :  23.0 ,y : 6.5 },
							{x :  24.0 ,y : 6.5 },
							{x :  25.0 ,y : 6.5 },
							{x :  26.0 ,y : 6.7 },
							{x :  27.0 ,y : 6.7 },
							{x :  28.0 ,y : 6.9 },
							{x :  29.0 ,y : 7.0 },
							{x :  30.0 ,y : 7.1 },
							{x :  60.0 ,y : 7.4 },
							{x :  90.0 ,y : 7.7 },
							{x :  120.0 ,y : 8.1 },
							{x :  150.0 ,y : 8.4 },
							{x :  180.0 ,y : 8.7 },
							{x :  210.0 ,y : 8.9 },
							{x :  240.0 ,y : 9.2 },
							{x :  270.0 ,y : 9.4 },
							{x :  300.0 ,y : 9.6 },
							{x :  330.0 ,y : 9.9 },
							{x :  360.0 ,y : 10.2 },
							{x :  390.0 ,y : 10.6 },
							{x :  420.0 ,y : 10.9 },
							{x :  450.0 ,y : 11.2 },
							{x :  480.0 ,y : 11.4 },
							{x :  510.0 ,y : 11.8 },
							{x :  540.0 ,y : 12.0 },
							{x :  570.0 ,y : 12.2 },
							{x :  600.0 ,y : 12.4 },
							{x :  630.0 ,y : 12.5 },
							{x :  660.0 ,y : 12.6 },
							{x :  690.0 ,y : 12.7 },
							{x :  720.0 ,y : 12.8 },
							{x :  750.0 ,y : 12.9 },
							{x :  780.0 ,y : 13.1 },
							{x :  810.0 ,y : 13.2 },
							{x :  840.0 ,y : 13.2 },
							{x :  870.0 ,y : 13.3 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.7 },
							{x :  1050.0 ,y : 13.8 },
							{x :  1080.0 ,y : 13.9 },
							{x :  1110.0 ,y : 14.0 },
							{x :  1140.0 ,y : 14.1 },
							{x :  1170.0 ,y : 14.2 },
							{x :  1200.0 ,y : 14.3 },
							{x :  1230.0 ,y : 14.4 },
							{x :  1260.0 ,y : 14.5 },
							{x :  1290.0 ,y : 14.6 },
							{x :  1320.0 ,y : 14.6 },
							{x :  1350.0 ,y : 14.6 },
							{x :  1380.0 ,y : 14.7 },
							{x :  1410.0 ,y : 14.7 },
							{x :  1440.0 ,y : 14.7 },
							{x :  1470.0 ,y : 14.8 },
							{x :  1500.0 ,y : 14.8 },
							{x :  1530.0 ,y : 14.8 },
							{x :  1560.0 ,y : 14.9 },
							{x :  1590.0 ,y : 14.9 },
							{x :  1620.0 ,y : 14.9 },
							{x :  1650.0 ,y : 15.0 },
							{x :  1680.0 ,y : 15.1 },
							{x :  1710.0 ,y : 15.2 },
							{x :  1740.0 ,y : 15.2 },
							{x :  1770.0 ,y : 15.3 },
							{x :  1800.0 ,y : 15.3 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g8()
{
	
     
	$("#chartContainer").ejChart(
        {	

			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}             
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.45 },
							{x :  2.0 ,y : 0.95 },
							{x :  3.0 ,y : 1.5 },
							{x :  4.0 ,y : 2.15 },
							{x :  5.0 ,y : 2.9 },
							{x :  6.0 ,y : 3.65 },
							{x :  7.0 ,y : 4.4 },
							{x :  8.0 ,y : 5.2 },
							{x :  9.0 ,y : 5.8 },
							{x :  10.0 ,y : 6.0 },
							{x :  11.0 ,y : 6.05 },
							{x :  12.0 ,y : 6.1 },
							{x :  13.0 ,y : 6.1 },
							{x :  14.0 ,y : 6.1 },
							{x :  15.0 ,y : 6.1 },
							{x :  16.0 ,y : 6.2 },
							{x :  17.0 ,y : 6.3 },
							{x :  18.0 ,y : 6.4 },
							{x :  19.0 ,y : 6.5 },
							{x :  20.0 ,y : 6.6 },
							{x :  21.0 ,y : 6.6 },
							{x :  22.0 ,y : 6.6 },
							{x :  23.0 ,y : 6.6 },
							{x :  24.0 ,y : 6.6 },
							{x :  25.0 ,y : 6.8 },
							{x :  26.0 ,y : 7.0 },
							{x :  27.0 ,y : 7.3 },
							{x :  28.0 ,y : 7.4 },
							{x :  29.0 ,y : 7.4 },
							{x :  30.0 ,y : 7.4 },
							{x :  60.0 ,y : 7.8 },
							{x :  90.0 ,y : 8.0 },
							{x :  120.0 ,y : 8.2 },
							{x :  150.0 ,y : 8.4 },
							{x :  180.0 ,y : 8.6 },
							{x :  210.0 ,y : 8.8 },
							{x :  240.0 ,y : 9.0 },
							{x :  270.0 ,y : 9.1 },
							{x :  300.0 ,y : 9.2 },
							{x :  330.0 ,y : 9.4 },
							{x :  360.0 ,y : 9.6 },
							{x :  390.0 ,y : 9.8 },
							{x :  420.0 ,y : 9.9 },
							{x :  450.0 ,y : 10.2 },
							{x :  480.0 ,y : 10.4 },
							{x :  510.0 ,y : 10.6 },
							{x :  540.0 ,y : 10.8 },
							{x :  570.0 ,y : 11.0 },
							{x :  600.0 ,y : 11.2 },
							{x :  630.0 ,y : 11.4 },
							{x :  660.0 ,y : 11.6 },
							{x :  690.0 ,y : 11.9 },
							{x :  720.0 ,y : 12.2 },
							{x :  750.0 ,y : 12.4 },
							{x :  780.0 ,y : 12.6 },
							{x :  810.0 ,y : 12.8 },
							{x :  840.0 ,y : 13.0 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.7 },
							{x :  1050.0 ,y : 13.9 },
							{x :  1080.0 ,y : 14.0 },
							{x :  1110.0 ,y : 14.1 },
							{x :  1140.0 ,y : 14.2 },
							{x :  1170.0 ,y : 14.3 },
							{x :  1200.0 ,y : 14.3 },
							{x :  1230.0 ,y : 14.4 },
							{x :  1260.0 ,y : 14.5 },
							{x :  1290.0 ,y : 14.6 },
							{x :  1320.0 ,y : 14.7 },
							{x :  1350.0 ,y : 14.8 },
							{x :  1380.0 ,y : 14.9 },
							{x :  1410.0 ,y : 15.0 },
							{x :  1440.0 ,y : 15.0 },
							{x :  1470.0 ,y : 15.0 },
							{x :  1500.0 ,y : 15.0 },
							{x :  1530.0 ,y : 15.0 },
							{x :  1560.0 ,y : 15.0 },
							{x :  1590.0 ,y : 15.0 },
							{x :  1620.0 ,y : 15.0 },
							{x :  1650.0 ,y : 15.1 },
							{x :  1680.0 ,y : 15.1 },
							{x :  1710.0 ,y : 15.1 },
							{x :  1740.0 ,y : 15.2 },
							{x :  1770.0 ,y : 15.2 },
							{x :  1800.0 ,y : 15.2 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g9()
{
	
     
	$("#chartContainer").ejChart(
        {	
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 } 				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}             
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.35 },
							{x :  2.0 ,y : 0.8 },
							{x :  3.0 ,y : 1.3 },
							{x :  4.0 ,y : 1.85 },
							{x :  5.0 ,y : 2.55 },
							{x :  6.0 ,y : 3.25 },
							{x :  7.0 ,y : 4.0 },
							{x :  8.0 ,y : 4.9 },
							{x :  9.0 ,y : 5.6 },
							{x :  10.0 ,y : 6.0 },
							{x :  11.0 ,y : 6.2 },
							{x :  12.0 ,y : 6.3 },
							{x :  13.0 ,y : 6.3 },
							{x :  14.0 ,y : 6.3 },
							{x :  15.0 ,y : 6.3 },
							{x :  16.0 ,y : 6.3 },
							{x :  17.0 ,y : 6.3 },
							{x :  18.0 ,y : 6.3 },
							{x :  19.0 ,y : 6.3 },
							{x :  20.0 ,y : 6.8 },
							{x :  21.0 ,y : 6.8 },
							{x :  22.0 ,y : 6.8 },
							{x :  23.0 ,y : 6.8 },
							{x :  24.0 ,y : 6.8 },
							{x :  25.0 ,y : 6.8 },
							{x :  26.0 ,y : 6.9 },
							{x :  27.0 ,y : 7.1 },
							{x :  28.0 ,y : 7.3 },
							{x :  29.0 ,y : 7.4 },
							{x :  30.0 ,y : 7.4 },
							{x :  60.0 ,y : 7.9 },
							{x :  90.0 ,y : 8.1 },
							{x :  120.0 ,y : 8.4 },
							{x :  150.0 ,y : 8.8 },
							{x :  180.0 ,y : 9.1 },
							{x :  210.0 ,y : 9.4 },
							{x :  240.0 ,y : 9.8 },
							{x :  270.0 ,y : 10.1 },
							{x :  300.0 ,y : 10.4 },
							{x :  330.0 ,y : 10.6 },
							{x :  360.0 ,y : 10.9 },
							{x :  390.0 ,y : 11.1 },
							{x :  420.0 ,y : 11.3 },
							{x :  450.0 ,y : 11.5 },
							{x :  480.0 ,y : 11.7 },
							{x :  510.0 ,y : 11.9 },
							{x :  540.0 ,y : 12.0 },
							{x :  570.0 ,y : 12.2 },
							{x :  600.0 ,y : 12.3 },
							{x :  630.0 ,y : 12.4 },
							{x :  660.0 ,y : 12.5 },
							{x :  690.0 ,y : 12.6 },
							{x :  720.0 ,y : 12.7 },
							{x :  750.0 ,y : 12.8 },
							{x :  780.0 ,y : 12.9 },
							{x :  810.0 ,y : 13.0 },
							{x :  840.0 ,y : 13.1 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.7 },
							{x :  1050.0 ,y : 13.8 },
							{x :  1080.0 ,y : 13.9 },
							{x :  1110.0 ,y : 14.0 },
							{x :  1140.0 ,y : 14.1 },
							{x :  1170.0 ,y : 14.2 },
							{x :  1200.0 ,y : 14.3 },
							{x :  1230.0 ,y : 14.4 },
							{x :  1260.0 ,y : 14.5 },
							{x :  1290.0 ,y : 14.6 },
							{x :  1320.0 ,y : 14.7 },
							{x :  1350.0 ,y : 14.8 },
							{x :  1380.0 ,y : 14.9 },
							{x :  1410.0 ,y : 15.0 },
							{x :  1440.0 ,y : 15.0 },
							{x :  1470.0 ,y : 15.1 },
							{x :  1500.0 ,y : 15.2 },
							{x :  1530.0 ,y : 15.3 },
							{x :  1560.0 ,y : 15.4 },
							{x :  1590.0 ,y : 15.5 },
							{x :  1620.0 ,y : 15.6 },
							{x :  1650.0 ,y : 15.7 },
							{x :  1680.0 ,y : 15.8 },
							{x :  1710.0 ,y : 15.9 },
							{x :  1740.0 ,y : 15.9 }

							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					 
			
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
function g10()
{
	
     
	$("#chartContainer").ejChart(
        {	
			
			primaryXAxis:
            {
                title: { text: 'Angle of Twist(ϴ) in degrees' },
                labelFormat:"{value}"	,			
                // range: { min: 1000, max: 4000, interval: 500},              
				range: { min: 0, max: 2000, interval: 200 }  				
               
            },   
			 primaryYAxis:
            {
				title: { text: 'Torque in kg.m' },
                labelFormat:"{value}",
				// range: { min: 100, max: 400, interval: 50 },                       
                range: { min: 0, max: 16, interval: 2}              
            },

			series: 
			[ 
				{
                    points:[{x :  0.0 ,y : 0.0 },
							{x :  1.0 ,y : 0.5 },
							{x :  2.0 ,y : 1.0 },
							{x :  3.0 ,y : 1.6 },
							{x :  4.0 ,y : 2.2 },
							{x :  5.0 ,y : 2.9 },
							{x :  6.0 ,y : 3.55 },
							{x :  7.0 ,y : 4.25 },
							{x :  8.0 ,y : 5.0 },
							{x :  9.0 ,y : 5.7 },
							{x :  10.0 ,y : 6.2 },
							{x :  11.0 ,y : 6.4 },
							{x :  12.0 ,y : 6.5 },
							{x :  13.0 ,y : 6.5 },
							{x :  14.0 ,y : 6.5 },
							{x :  15.0 ,y : 6.5 },
							{x :  16.0 ,y : 6.5 },
							{x :  17.0 ,y : 6.5 },
							{x :  18.0 ,y : 6.5 },
							{x :  19.0 ,y : 6.5 },
							{x :  20.0 ,y : 6.6 },
							{x :  21.0 ,y : 6.6 },
							{x :  22.0 ,y : 6.6 },
							{x :  23.0 ,y : 6.6 },
							{x :  24.0 ,y : 6.6 },
							{x :  25.0 ,y : 6.6 },
							{x :  26.0 ,y : 6.6 },
							{x :  27.0 ,y : 6.6 },
							{x :  28.0 ,y : 6.6 },
							{x :  29.0 ,y : 6.6 },
							{x :  30.0 ,y : 6.6 },
							{x :  60.0 ,y : 6.8 },
							{x :  90.0 ,y : 7.3 },
							{x :  120.0 ,y : 8.0 },
							{x :  150.0 ,y : 8.5 },
							{x :  180.0 ,y : 8.9 },
							{x :  210.0 ,y : 9.4 },
							{x :  240.0 ,y : 9.8 },
							{x :  270.0 ,y : 10.1 },
							{x :  300.0 ,y : 10.4 },
							{x :  330.0 ,y : 10.6 },
							{x :  360.0 ,y : 10.9 },
							{x :  390.0 ,y : 11.1 },
							{x :  420.0 ,y : 11.3 },
							{x :  450.0 ,y : 11.5 },
							{x :  480.0 ,y : 11.7 },
							{x :  510.0 ,y : 11.9 },
							{x :  540.0 ,y : 12.0 },
							{x :  570.0 ,y : 12.2 },
							{x :  600.0 ,y : 12.3 },
							{x :  630.0 ,y : 12.4 },
							{x :  660.0 ,y : 12.5 },
							{x :  690.0 ,y : 12.6 },
							{x :  720.0 ,y : 12.7 },
							{x :  750.0 ,y : 12.8 },
							{x :  780.0 ,y : 12.9 },
							{x :  810.0 ,y : 13.0 },
							{x :  840.0 ,y : 13.1 },
							{x :  870.0 ,y : 13.2 },
							{x :  900.0 ,y : 13.3 },
							{x :  930.0 ,y : 13.4 },
							{x :  960.0 ,y : 13.5 },
							{x :  990.0 ,y : 13.6 },
							{x :  1020.0 ,y : 13.7 },
							{x :  1050.0 ,y : 13.7 },
							{x :  1080.0 ,y : 13.7 },
							{x :  1110.0 ,y : 13.8 },
							{x :  1140.0 ,y : 13.8 },
							{x :  1170.0 ,y : 13.9 },
							{x :  1200.0 ,y : 14.0 },
							{x :  1230.0 ,y : 14.0 },
							{x :  1260.0 ,y : 14.0 },
							{x :  1290.0 ,y : 14.1 },
							{x :  1320.0 ,y : 14.2 },
							{x :  1350.0 ,y : 14.2 },
							{x :  1380.0 ,y : 14.3 },
							{x :  1410.0 ,y : 14.3 },
							{x :  1440.0 ,y : 14.4 },
							{x :  1470.0 ,y : 14.4 },
							{x :  1500.0 ,y : 14.4 },
							{x :  1530.0 ,y : 14.5 },
							{x :  1560.0 ,y : 14.6 },
							{x :  1590.0 ,y : 14.7 },
							{x :  1620.0 ,y : 14.8 },
							{x :  1650.0 ,y : 14.8 },
							{x :  1680.0 ,y : 14.8 },
							{x :  1710.0 ,y : 14.8 },
							{x :  1740.0 ,y : 14.9 },
							{x :  1770.0 ,y : 14.9 },
							{x :  1800.0 ,y : 15.0 },
							{x :  1830.0 ,y : 15.0 },
							{x :  1860.0 ,y : 15.0 },
							{x :  1890.0 ,y : 15.1 },
							{x :  1920.0 ,y : 15.2 },
							{x :  1950.0 ,y : 15.2 }
							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
                },
			],
			commonSeriesOptions : {
				enableAnimation :true,
				animationDuration : 10000 
			},
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}
	




	
	
