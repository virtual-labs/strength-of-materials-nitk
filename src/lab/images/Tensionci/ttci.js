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
var pos1,pos2,v1,v2,rot=0;
var ob1=0,ob2=0,ob3=0;
function navNext()
{

    for (temp = 0; temp <=9; temp++) 
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
	if(rot==0)
	{
		rot=2;
		$('#can44').animate({ 	
								left:'182px',
								top: '+=30px',
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
								}
							});
		$('#can43').animate({
								left:'88px',
								top: '+=30px'
							},2500,
							function()
							{	
								$("#can44").off('click');
								document.getElementById('can45').style.visibility="visible";
								$("#can45t").text("Drag the specimen").fadeOut(2000);
								setTimeout(function()
								{
									document.getElementById('can45d').style.visibility="visible";
									$("#can45d").fadeIn().fadeOut(1000);
								},1500);
							});
	}
	else if(rot==1)
	{
		rot=2;
		myStopFunction();
		$('#can44').animate({ 	
								left:'182px',
								top: '-=24px',
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
								}
							});
		$('#can43').animate({
								left:'88px',
								top: '-=24px'
							},2500);
							$('#can45a').animate(
							{
								left:'234px',
								top: '-=24px'
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
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:210px; top: 250px;height: 30px; z-index: 10;";
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
			if(xPos>="280" && xPos<="285" && yPos>="208" && yPos<="215")
			{
				$("#can45").hide();
				rot=1;
				document.getElementById('can45a').style.visibility="visible";	
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top: 520px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
				 // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(90deg)";			
			}
		}
	});	
	$('#mov').one('click',function()
	{
		myStopFunction();
		$('#mov').animate(
							{
								left:'402px',
								top:'150px'
							},
							1500			
					    );
		$('#cal1').animate(
			{
				left:'256px',
				top:'150px'
			},
			1500,
			function()
			{ 
					v1=vals0[0]-0.001;
					$('#v1-1').html("d<sub>ix</sub> = "+v1.toFixed(2)+'mm');
					setTimeout(function()
					{
						$('#mov').hide();
						$('#cal1').hide();
						$('#can11').hide();
					},1500);
			        setTimeout(function()
					{
						document.getElementById('mov2').style.visibility="visible";
						document.getElementById('can12').style.visibility="visible";
						document.getElementById('cal2').style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:350px; top: 420px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
					},1500);
			}
		);
	});
	$('#mov2').one('click',function()
	{
		myStopFunction();
		$('#mov2').animate(
							{
								left:'250px',
								top:'245px'
							},
							1500	
						);
		$('#cal2').animate(
							{
								left:'250px',
								top:'90px'
							},
							1500,
							function()
							{ 
									v2=v1-0.01;
									var areav3 = (Math.PI * Math.pow((vals0[0]),2))/4;
									$('#v1-2').html("d<sub>iy</sub> = "+v2.toFixed(2)+'mm');
									$('#v1-0').html("Average Initial diameter d= "+vals0[0]+'mm');
									$('#v1-3').html("Initial Area = "+areav3.toFixed(2)+'mm<sup>2</sup>');
									document.getElementById('nextButton').style.visibility="visible";
							}
						);
	});
	 
	 
	 //Hammer tool clicking....
	$('#can34').one('click',function()
	{
		myStopFunction();
		$('#v3-0').html("Distance 2.5d = 2.5 x "+vals0[0]+"="+(2.5*vals0[0]).toFixed(2)+"mm");
		$("#can34").off('click');
		$('#can34').animate({
								left:'175px',
								top:'60px'
							},
							function()
							{
								$('#can34').animate({
								left:'175px',
								top:'85px'
								});
								setTimeout(function()
								{
									document.getElementById('can35').style.visibility="visible";
									move1();
								},500);
							});
	});
	function move1()
	{
		setTimeout(function()
		{
			$('#can34').animate(
			{
				left:'195px',
				top:'70px'
			},
			1500
			);
			$('#can36').animate(
			{
				left:'203px',
				top: '180px'
			},
			1500,
			function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:365px; top: 100px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
				 // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(-90deg)";
				$('#can34').one('click',function()
				{
					myStopFunction();
					$("#can34").off('click');
					$('#can34').animate({
							left:'195px', 
							top: '105px'
						});
					setTimeout(function()
					{
						document.getElementById('can35a').style.visibility="visible";
						move2();
					},500);
				});
			});
		},1000);
	}
	function move2()
	{
		setTimeout(function()
		{
			$('#can34').animate(
						{
							left:'210px',
							top: '100px'
						},
						1500
					);
			$('#can36').animate(
						{
						left:'224px' ,
						top: '202px'
					},
					1500,
			function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:365px; top: 100px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
				 // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(-90deg)";
				$('#can34').one('click',function()
				{
					myStopFunction();
					$("#can34").off('click');
					$('#can34').animate({
							left:'212px', 
							top:'124px'
						});
					setTimeout(function()
					{
						document.getElementById('can35b').style.visibility="visible";
						move3();
					},500);
				});
			});
		},1000);
	}
	function move3()
	{
	setTimeout(function()
		{
			$('#can34').animate(
						{
							left:'240px',
							top: '130px'
						},
						1500
					);
			$('#can36').animate(
						{
						left:'251px',
						top: '225px'
					},
					1500,
					function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:365px; top: 100px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
						 // Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
						 // Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(-90deg)";
						$('#can34').one('click',function()
						{
							myStopFunction();
							$("#can34").off('click');
							$('#can34').animate({
									left:'240px',
									top: '150px' 
								});
							setTimeout(function()
							{
								document.getElementById('can35c').style.visibility="visible";
							},500);
							setTimeout(function()
							{
								document.getElementById('can34').style.visibility="hidden";
								document.getElementById('can36').style.visibility="hidden";
								document.getElementById('v3-0').style.visibility="hidden";
								document.getElementById('nextButton').style.visibility="visible";
							},1500);
						});
					});
		},1000);
	}
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
	$('#obs1').click(function()
	{
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
		
	});
	$('#gr1').click(function()
	{  
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
 });
 $("#check").on('mouseover',function()
	{
		if(!$('#i33').val() || !$('#i44').val() || !$('#i55').val() || !$('#i66').val() ||!$('#i77').val())
		{
			$('#check').off('click');
			Tipped.create('#check',"Fill all the values");
		}
		else
		{
			Tipped.create('#check',"Done!!Click here to view the result.");
			$("#check").click(function()
			{
				en3=$('#i33').val(); 
				en4=$('#i44').val();
				en5=$('#i55').val(); 
				en6=$('#i66').val(); 
				en7=$('#i77').val(); 
				pe3=((vals0[3]-en3)*100)/vals0[3];
				pe4=((vals0[4]-en4)*100)/vals0[4];
				pe5=((vals0[5]-en5)*100)/vals0[5];
				pe6=((vals0[6]-en6)*100)/vals0[6];
				pe7=((vals0[7]-en7)*100)/vals0[7];
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
			});
		}
 });
}); 
 //--------------table draw function--------------
 function tabledraw6()
 {
	 $('#green').click(function()
	 {
		myStopFunction();
		$('#green').hide();
		document.getElementById('can61a').style.visibility="visible";
		document.getElementById('can61b').style.visibility="visible";
		document.getElementById('can61a').style.transformOrigin="50% 90%";
		document.getElementById('can61a').style.animation = "needle-move 9.5s 2 forwards ";
		document.getElementById('can63a').style.transformOrigin="50% 90%";
		document.getElementById('can63a').style.animation = "needle-move 9.5s 2 forwards ";
		document.getElementById('can61b').style.transformOrigin="50% 90%";
		document.getElementById('can61b').style.animation = "needle-move 9.5s 2 forwards ";
		setTimeout(function()
		{
			document.getElementById('can61a').style.visibility="hidden";
			document.getElementById('can61b').style.visibility="hidden";
			document.getElementById('can61').style.visibility="hidden";
			document.getElementById('can63').style.visibility="hidden";
			document.getElementById('can63a').style.visibility="hidden";
			document.getElementById('can62').style.visibility="visible";
			document.getElementById('can65').style.visibility="visible";
			document.getElementById('dwn').style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:280px; top: 348px;height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			redclick();
		},19000);
		$('#Table').show().find('tr').each(function (i,item){           
			var $row = $(item); 
			$row.hide();  
			$row.delay(i*500).fadeIn(500);  
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
		document.getElementById('can12').style.visibility="hidden";
		document.getElementById('cal2').style.visibility="hidden";
		document.getElementById('mov2').style.visibility="hidden";
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
					document.getElementById('v2-0').innerHTML="Length of the specimen between the grips ="+vals0[1]+"mm";
					document.getElementById('nextButton').style.visibility="visible";
				},1200);
			},1500);
		}
    }
	else if (simsubscreennum==3)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:365px; top: 100px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		
	}
	else if (simsubscreennum==4)
	{
		
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('can35').style.visibility="hidden";
		document.getElementById('can35a').style.visibility="hidden";
		document.getElementById('can35b').style.visibility="hidden";
		document.getElementById('can35c').style.visibility="hidden";
		document.getElementById('can34').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top: 500px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
	}	
	else if(simsubscreennum==5)
	{
		document.getElementById('can46a').style.visibility="hidden";
		document.getElementById('can45a').style.visibility="hidden";
		document.getElementById('can44').style.visibility="hidden";
		document.getElementById('can41').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:285px; top: 359px;height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		tabledraw6();
	}
	else if(simsubscreennum==6)
	{
		
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("dwn").style.visibility="hidden";
		document.getElementById("can62").style.visibility="hidden";
		document.getElementById("can65").style.visibility="hidden";
		document.getElementById("can64").style.visibility="hidden";
		document.getElementById("red").style.visibility="hidden";
		document.getElementById("green").style.visibility="hidden";
		document.getElementById("content").style.visibility="hidden";
		Plotly.newPlot('mydiv1', data, layout,options);
		document.getElementById('nextButton').style.visibility="visible";
	}
	else if(simsubscreennum==7)
	{
		document.getElementById('mydiv1').style.visibility="hidden";
		document.getElementById('tablediv1').style.visibility="hidden";
		document.getElementById('vdata1').style.visibility="hidden";
		document.getElementById('vslope').style.visibility="hidden";
		document.getElementById('g'+gr).style.visibility="hidden";
		document.getElementById('slopefm').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:660px; top: 262px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}
	else if(simsubscreennum==8)
	{
	document.getElementById('can91').style.visibility="hidden";
		document.getElementById('can92').style.visibility="hidden";
		document.getElementById('cal9').style.visibility="hidden";
		document.getElementById('mov9').style.visibility="hidden";
		document.getElementById('v9-0').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		rodstatus();
	}
	
	else if(simsubscreennum==9)
	{
		document.getElementById('can10').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('v10-0').style.visibility="hidden";
		
	}
}
    





	
	

	