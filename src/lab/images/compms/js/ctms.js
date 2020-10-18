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
var pos1,pos2,v1a,v1b,v2a,v2b,rot=0,mi;
var ob1=0,ob2=0,ob3=0;
function navNext()
{

    for (temp = 0; temp <=5; temp++) 
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
//--------------to download data---------
function download(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "Tensiondata.xls";
    a.href = "data:text/xls," +document.getElementById("v1-0").innerHTML+"\t"+document.getElementById("v2-0").innerHTML+ document.getElementById("content").innerHTML;
    a.click();
}
//-----zooin image and double click function-----
function dzoom()
{
	var ckd=0;
	if(ckd==0)
	{
		$('#can53').one('click',function()
		{
			myStopFunction();
			document.getElementById('can51').style.visibility="hidden";
			document.getElementById('can51a').style.visibility="visible";
			document.getElementById('can54r').style.visibility="visible";
			ckd=1;
			if(ckd==1)
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:350px; top: 324px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
				 // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(360deg)";
				$('#can52').one('click',function()
				{
					ckd=2;
					myStopFunction();
					document.getElementById('can51a').style.visibility="hidden";
					document.getElementById('can51b').style.visibility="visible";
					document.getElementById('can54l').style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";
				});
			}
		});
	}
	 
	
}


//---------------to rotate an image---------------
 function rotateImage(degree) 
	{
		myStopFunction();
		if(rot==1)
		{
			rot=2;
			myStopFunction();
			$('#can44').animate({ 	
									left:'162px',
									top: '+=31px',
									transform: degree
								},
								{
									duration:2500,
									step: function(now,fx) {
									$(this).css({
									'-webkit-transform':'rotate('+now+'deg)',
									'-moz-transform':'rotate('+now+'deg)',
									'transform':'rotate('+now+'deg)'
									});
									}}
								);
			$('#can42').animate(
							{
								left:'88px',
								top: '+=31px'
							},2500,
							function()
							{
								
								setTimeout(function()
								{
									$('#can46').fadeIn(2500);
									$('#can47').fadeIn(2500);
								},200);
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:215px; top: 320px;height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									 // Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									 // Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									$('#can47').click(function()
									{
										myStopFunction();
										$('#can46a').show();
										document.getElementById('can47').style.visibility="hidden";
										document.getElementById('can46').style.visibility="hidden";
										document.getElementById('nextButton').style.visibility="visible";
									});
								},1500);
							}
							
							);
		}
		
	}
//----------------table view ------------------------

	

// ------------------------------------------function drag and drop starts here-----------------------------------------
 $( function() 
 {
	var isTouchSupported = 'ontouchstart' in window;
	var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
	var moveEvent = isTouchSupported ? 'touchmove' : 'mousemove';
	var endEvent = isTouchSupported ? 'touchend' : 'mouseup';
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
     
	 $( "#can45" ).draggable(
	{
		drag: function(){
		var oset = $(this).offset();
		var xPos = oset.left;
		var yPos = oset.top;
		if(xPos>="275" && xPos<="280" && yPos>="310" && yPos<="314")
		{
			$("#can45").hide();
			rot=1;
			document.getElementById('can45a').style.visibility="visible";	
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top: 120px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
			 // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(-90deg)";			
		}
		}
	});	
	 $('#mov').one('click',function()
	 {
		myStopFunction();
		$('#mov').animate(
							{
								left:'185px',
								top:'100px'
							},
							1500,
							function()
							{ 
									v1a=vals0[0];
									v1b=vals0[0];
									$('#1a').html("d<sub>1x</sub> = "+v1a.toFixed(2));
									// $('#1b').html("d<sub>1x</sub> = "+v1b.toFixed(2));
									// $('#1c').html("d<sub>1</sub> = "+v1a.toFixed(2));
									setTimeout(function()
									{
									 secondmove();
									},1500);
							}							
					);
	 });
	 function secondmove()
	 {
		  myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:260px; top: 120px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			
	  $('#mov').one('click',function()
	 {
		myStopFunction();
		$('#mov').animate(
							{
								left:'200px',
								top:'100px'
							},
							1500		
					);
		$('#can11').animate(
			{
				left:'125px',
				top:'120px'
			},
			1500,
			function()
			{ 
				thirdmove();
			}
	 );
	 
 } );
}
  function thirdmove()
	 {
		  myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:260px; top: 120px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			
	  $('#mov').one('click',function()
	 {
		myStopFunction();
		$('#mov').animate(
							{
								left:'185px',
								top:'100px'
							},
							1500,
							function()
							{ 
								v2a=vals0[0];
								//v2b=v2a-0.01;
								mi=(3.14*Math.pow((vals0[0]),4))/64;
								// $('#2a').html("d<sub>2x</sub> = "+v2a.toFixed(2));
								$('#1b').html("d<sub>1y</sub> = "+v2a.toFixed(2));
								$('#1c').html(vals0[0].toFixed(2));
								$('#v1-0').html("Average Initial Diameter ="+vals0[0].toFixed(2)+"mm");
								$('#v2-0').html("Moment of Inertia about neutral axis for the specimen = ");
								document.getElementById('mf').style.visibility="visible";
								$('#v3-0').html("="+mi.toFixed(2)+"mm<sup>4</sup>");
								document.getElementById('nextButton').style.visibility="visible";
							});
	 });
	 
 } 
 
 
 
 $('#mov22').one('click',function()
	 {
		myStopFunction();
		$('#mov22').animate(
							{
								left:'220px',
								top:'100px'
							},
							1500,
							function()
							{ 
									$('#v2-1').html("Length of the specimen="+vals0[1]+"mm");
									document.getElementById('nextButton').style.visibility="visible";

							}							
					);
	 });
	 
	$('#can92').one('click',function()
	{
		myStopFunction();
		$('#can92').animate({
								left:'316px',
								top:'213px'
							},
							1500,
							function()
							{
								document.getElementById('cal9').style.visibility="visible";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:390px; top: 520px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
								 // Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(360deg)";
								document.getElementById('mov9').style.visibility="visible";
								$('#mov9').one('click',function()
								{
									myStopFunction();
									$('#mov9').animate({
														left:'145px',
														top:'210px'
														},
														1500,
														function()
														{
															$('#v9-0').text("Reduction in area is negligible");
															document.getElementById('nextButton').style.visibility="visible";

														});
								});
							});
							
	});
	// $('#can102').one('click',function()
	// {
		// myStopFunction();
		// $('#can102').animate({
								// left:'68px',
								// top:'127px'
							// },
							// 1500,
							// function()
							// {
								// $('#v10-0').text("Elongation is negligible");
								// document.getElementById('nextButton').style.visibility="visible";
							// });
							
							
	// });
 });
 
function viewObservation() {
	if(ob1==0)
	{
		ob1=1;
		$('#gr1').hide();
		$('#mydiv3').hide();
		$('#check').hide();
		$('#calc').hide();
		$('#obs1').val("Calculation");
		document.getElementById('obs').style.visibility="visible";
		$('#ta33').text(vals0[0]);
		$('#ta44').text(vals0[1]);
		$('#ta55').text(vals0[2]);
		$('#ta66').text(slope[p][0]);
		$('#ta77').text(slope[p][1]);
		$('#ta88').text(slope[p][2]);
		
	}
	else if(ob1==1)
	{
		ob1=0;
		$('#obs1').val("Observation");
		$('#calc').show();
		$('#obs1').show();
		$('#gr1').show();
		$('#check').show();
		$('#mydiv3').hide();
		document.getElementById('obs').style.visibility="hidden";
	}
}
 
function viewGraph() {
	if(ob2==0)
	{
		ob2=1;
		$('#gr1').val("Calculation");
		$('#obs1').hide();
		$('#check').hide();
		$('#calc').hide();
		$('#mydiv3').show();
		Plotly.newPlot('mydiv3', data, layout,options);
	}
	else if(ob2==1)
	{
		ob2=0;
		$('#obs1').val("Observation");
		$('#gr1').val("Graph");
		$('#calc').show();
		$('#obs1').show();
		$('#mydiv3').hide();
		$('#check').show();
		document.getElementById('obs').style.visibility="hidden";
	}
}

function viewTooltip() {
	
	if(!$('#i33').val() || !$('#i44').val() || !$('#i55').val() || !$('#i66').val() ||!$('#i77').val())
	{
		$('#check').off('click');
		Tipped.create('#check',"Fill all the values");
	}
	else
	{
		Tipped.create('#check',"Done!!Click now to view the result.");
	}
	
}

function checkResult() {
	if(!$('#i33').val() || !$('#i44').val() || !$('#i55').val() || !$('#i66').val() ||!$('#i77').val())
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
		en7=$('#i77').val(); 
		pe3=((vals0[3]-en3)/vals0[3])*100;
		pe4=((vals0[4]-en4)/vals0[4])*100;
		pe5=((vals0[5]-en5)/vals0[5])*100;
		pe6=((vals0[6]-en6)/vals0[6])*100;
		pe7=((vals0[7]-en7)/vals0[7])*100;
		$('#obs1').hide();
		$('#gr1').hide();
		$('#calc').hide();
		$('#check').hide();
		document.getElementById('final').style.visibility="visible";
		$('#l1').text("Initial Diameter(mm): "+vals0[0]+"mm");
		$('#l2').text("Gauge Length(mm): "+vals0[1]+"mm");
		$('#t3').text(vals0[3]);
		$('#t4').text(vals0[4]);
		 $('#t5').text(vals0[5]);
		 $('#t6').text(vals0[6]);
		 $('#t7').text(vals0[7]);
		 $('#e3').text(en3);
		 $('#e4').text(en4);
		 $('#e5').text(en5);
		 $('#e6').text(en6); 
		 $('#e7').text(en7); 
		 $('#p3').text(pe3.toFixed(2));
		 $('#p4').text(pe4.toFixed(2));
		 $('#p5').text(pe5.toFixed(2));
		 $('#p6').text(pe6.toFixed(2));
		 $('#p7').text(pe7.toFixed(2));
	}
}


 //--------------table draw function--------------
 function tabledraw6()
 {
	 $('#green').click(function()
	 {
		 myStopFunction();
		 $('#green').hide();
		 document.getElementById('can63a').style.transformOrigin="50% 90%";
		document.getElementById('can63a').style.animation = "needle-move 9.5s 2 forwards ";
			setTimeout(function()
			{
				$('#v6-0').delay(1000).text("DialIndicator is removed").fadeOut();
				document.getElementById('can61').style.visibility="hidden";
				document.getElementById('can63').style.visibility="hidden";
				document.getElementById('can63a').style.visibility="hidden";
				 
				 document.getElementById('can62').style.visibility="visible";
				 document.getElementById('can65').style.visibility="visible";
				$('#can65').delay(10000).hide(1).promise().done(function()
				{
					document.getElementById('can62').style.visibility="hidden";
					document.getElementById('can66').style.visibility="visible";
					document.getElementById('can62b').style.visibility="visible";
					
							document.getElementById('dwn').style.visibility="visible";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:280px; top:350px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							 // Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							 // Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$('#red').click(function()
							{
								myStopFunction();
								$('#green').show();							
								$('#red').off('click');
								$('#green').off('click');
								document.getElementById('nextButton').style.visibility="visible";
							});
				});
			},7500);
			document.getElementById('can61a').style.transformOrigin="50% 90%";
			document.getElementById('can61a').style.animation = "needle-move 9.5s 2 forwards ";
			
		$('#Table').show().find('tr').each(function (i,item){           
          var $row = $(item); 
             $row.hide();  
           $row.delay(i*300).fadeIn(300);  
		});    
	 });
 }
 function redclick()
 {
	$('#red').click(function()
	{
		myStopFunction();
		$('#green').show();
		$('#green').off('click');
		document.getElementById('nextButton').style.visibility="visible";
	});
}
 
function rodstatus()
{
	$('#v10-0').text("Elongation is negligible");
	document.getElementById('nextButton').style.visibility="visible";
}
  //---------------------draws html table

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{  
	    document.getElementById('nextButton').style.visibility="hidden";	
		// values = vals[Math.floor(Math.random()*vals	.length)]; 
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top: 120px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";	
    }
	
	
	else if (simsubscreennum==2)
	{
		document.getElementById('can11').style.visibility="hidden";
		document.getElementById('cal1').style.visibility="hidden";
		document.getElementById('mov').style.visibility="hidden";
		document.getElementById('diameter').style.visibility="hidden";
		document.getElementById('v1-0').style.visibility="hidden";
		document.getElementById('v2-0').style.visibility="hidden";
		document.getElementById('v3-0').style.visibility="hidden";
		document.getElementById('mf').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top: 115px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
    }
	else if (simsubscreennum==3)
	{
		document.getElementById('v2-1').style.visibility="hidden";
		document.getElementById('cal22').style.visibility="hidden";
		document.getElementById('can23').style.visibility="hidden";
		document.getElementById('mov22').style.visibility="hidden";
		// myInt = setInterval(function(){ animatearrow(); }, 500);
		// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top: 500px; height: 30px; z-index: 10;";
		// document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		//  // Code for IE9
		// document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		//  // Standard syntax
		// document.getElementById("arrow1").style.transform = "rotate(90deg)";
		document.getElementById('can45').style.visibility="visible";
		$("#can45t").text("Drag the specimen").fadeOut(2000);
		setTimeout(function()
		{
			document.getElementById('can45d').style.visibility="visible";
			$("#can45d").fadeIn().fadeOut(800);
		},1000);

		
	}
	else if (simsubscreennum==4)
	{
		
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can46a').style.visibility="hidden";
		document.getElementById('can45a').style.visibility="hidden";
		document.getElementById('can44').style.visibility="hidden";
		document.getElementById('can41').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:285px; top: 359px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
				tabledraw6();

	}	
	
	else if(simsubscreennum==5)
	{
		
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("dwn").style.visibility="hidden";
		document.getElementById("can61a").style.visibility="hidden";
		document.getElementById("can62b").style.visibility="hidden";
		document.getElementById("can66").style.visibility="hidden";
		document.getElementById("can64").style.visibility="hidden";
		document.getElementById("red").style.visibility="hidden";
		document.getElementById("green").style.visibility="hidden";
		document.getElementById("content").style.visibility="hidden";
		Plotly.newPlot('mydiv1', data, layout,options);
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	else if(simsubscreennum==6)
	{
		document.getElementById('mydiv1').style.visibility="hidden";
		document.getElementById('tablediv1').style.visibility="hidden";
		document.getElementById('vdata1').style.visibility="hidden";
		document.getElementById('vslope').style.visibility="hidden";
		document.getElementById('g'+gr).style.visibility="hidden";
		document.getElementById('slopefm').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		
	}
}
    





	
	
