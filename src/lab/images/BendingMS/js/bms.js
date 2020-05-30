var temp,simsubscreennum=0;
var p=Math.floor(Math.random()*(10-1+1))+1;
// var p=9;

   var z=[[25.2,25.4,25.3,690,20101.65,482.76,716.13,207.7,1],
          [24.50,24,24.25,690,16966.67,524.04,613.13,210.68,1.05],
          [24.04,24.60,24.32,690,17163.42,495.55,623.92,211.93,0.85],
		  [25,24.30,24.65,690,18114.13,491.27,654.33,210.59,0.8],
		  [24.30,24.06,24.18,690,16771.61,528.61,602.33,209.38,0.93],
		  [24.49,24.49,24.49,690,17648.38,500.96,639.61,211.29,0.94],
		  [23.02,25,24.01,690,16304.91,514.99,588.6,210.46,0.8],
		  [24.6,24.6,24.6,690,17967.6,498.13,653.35,211.99,0.94],
		  [26,25.20,25.6,690,21072.18,424.87,759.29,210.07,0.76],
		  [24.3,24.3,24.3,690,17107.04,520.81,617.05,210.29,0.875]];

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});
function navNext()
{
	for(temp=0;temp<9;temp++)
	{
		 //alert(p);
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

function animatearrow()
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

var count1=0;
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
	if(count1<1)
		degrees++;
    }
	var count2=0;
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
            elem1.style.transform = "rotate("+degrees1+"deg)";
        }
    looper1 = setTimeout('rotateAnimation1(\''+el+'\','+speed+')',speed);
	if(count2<1)
		degrees1++;
    }

var a=[[0,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800],
       [0,50,100,150,200,250,300,350,400,450,500,550,600,650,670,690,710,730,750,770],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,620,640,660,680,700,720],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,670,690,710,730],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690,700,710],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690,700,710],
	   [0,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800],
	   [0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690]];
		
var b=[[0,51,104,157,210,266,318,373,426,480,532,585,638,693,745,799,852,906,975,1036,1108],
       [0,75,155,229,312,397,476,555,634,718,801,895,995,1086,1135,1193,1241,1298,1362,1422],
	   [0,80,156,233,314,395,475,552,635,714,787,870,952,988,1045,1108,1186,1245,1302],
	   [0,85,161,238,315,392,469,546,623,700,777,854,931,1008,1085,1162,1239,1316],
	   [0,90,182,271,360,449,532,616,701,775,855,945,1035,1136,1225,1329,1418,1507],
	   [0,72,150,224,307,394,478,563,639,718,812,905,1007,1135,1238,1320,1458,1543,1625,1734],
	   [0,82,168,247,333,419,501,582,658,750,835,921,1000,1124,1245,1368,1467,1586],
	   [0,84,162,236,310,384,458,532,606,680,754,828,902,990,1050,1124,1198,1272,1346,1420],
	   [0,61,114,167,220,273,326,379,432,485,538,591,644,697,750,803,865,962,1068,1158,1286],
	   [0,70,146,223,300,377,454,531,608,685,762,839,916,993,1070,1147,1224,1301]];

var c=[[0,48,111,140,190,238,283,302,380,401,470,506,570,600,660,686,760,805,834,900,915],
       [0,65,135,198,267,335,396,450,511,560,604,680,740,810,845,860,880,910,920,930],
       [0,75,120,195,280,350,420,490,550,630,710,840,960,990,1001,1015,1060,1110,1178],
       [0,80,145,235,305,410,490,590,660,760,830,900,960,990,1000,1066,1097,1114],
       [0,67,140,213,286,368,460,519,590,669,780,825,920,990,1054,1070,1100,1124],
       [0,65,130,195,270,350,425,505,575,645,725,810,840,900,910,940,952,967,988,1006],
       [0,79,155,225,338,450,546,650,700,780,850,960,1046,1114,1122,1139,1157,1169],
       [0,70,135,200,265,330,395,460,525,590,655,720,785,850,870,885,905,920,925,935],
       [0,51,114,143,183,233,275,343,393,441,492,543,593,643,694,743,795,845,892,941,995],
       [0,80,150,240,330,400,510,600,680,750,840,950,1000,1096,1096,1118,1122,1139]];
	   
var d=[[0,49,80,149,194,241,290,336,383,425,482,509,574,601,674,700,763,813,819,909,930],
       [0,67,128,194,262,325,395,470,542,620,712,765,840,900,920,955,986,1010,1050,1094],
	   [0,84,209,300,380,470,570,660,760,850,930,970,1020,1065,1111,1165,1185,1196,1200],
	   [0,78,170,245,350,410,480,544,640,700,790,885,985,1110,1135,1101,1112,1124],
	   [0,72,160,240,328,400,460,545,640,720,770,870,930,1009,1022,1066,1098,1137],
	   [0,64,138,215,280,345,409,480,550,615,690,755,850,940,960,970,985,1004,1009,1018],
	   [0,73,170,280,341,400,490,570,695,790,890,970,1049,1168,1187,1206,1234,1259],
	   [0,61,135,212,289,366,443,520,597,664,741,818,886,954,967,982,996,1001,1025,1041],
	   [0,50,81,150,219,288,357,426,495,564,633,702,771,840,909,978,1047,1116,1185,1254,1323],
	   [0,73,170,245,324,410,462,544,610,702,780,840,945,1009,1040,1056,1085,1104]];
  
var e=[[0,48.5,95.5,144.5,192,239.5,286.5,319,381.5,413,476,507.5,572,600.5,667,693,761.5,809,826.5,904.5,922.5],
       [0,66,131.5,196,264.5,330,395.5,460,526.5,590,658,722.5,790,855,882.5,907.5,933,960,985,1012],
	   [0,79.5,164.5,247.5,330,410,495,575,655,740,820,905,990,1027.5,1056,1090,1122.5,1153,1189],
	   [0,79,157.5,240,327.5,410,485,567,650,730,810,892.5,972.5,1050,1067.5,1083.5,1104.5,1119],
	   [0,69.5,150,226.5,307,384,460,532,615,694.5,775,847.5,925,999.5,1038,1068,1099,1130.5],
	   [0,64.5,134,205,275,347.5,417,492.5,562.5,630,707.5,782.5,845,920,935,955,968.5,985.5,998.5,1012],
	   [0,76,162.5,252.5,339.5,425,518,610,697.5,785,870,965,1047.5,1141,1154.5,1172.5,1195.5,1214],
	   [0,65.5,135,206,277,348,419,490,561,627,698,769,835.5,902,918.5,933.5,950.5,960.5,975,988],
	   [0,50.5,97.5,146.5,201,260.5,316,384.5,444,502.5,562.5,622.5,682,741.5,801.5,860.5,921,980.5,1038.5,1097.5,1159],
	   [0,76.5,160,242.5,327,405,486,572,645,726,810,895,972.5,1052.5,1068,1087,1103.5,1121.5]];

var f=[[0,47.65,95.29,142.94,191.17,238.96,286.75,321.64,382.33,413.54,477.92,505.43,573.5,597.33,669.08,689.23,764.67,812.46,827.07,908.04,918.97],	   
	   [0,69.57,139.13,208.7,278.26,347.83,417.39,486.96,556.52,626.09,695.65,765.22,834.78,904.35,932.17,960,987.82,1014.78,1043.48,1071.3],
	   [0,68.36,136.72,205.09,273.45,341.81,410.17,478.53,546.9,615.26,683.62,751.98,820.34,847.69,875.03,902.38,929.72,957.07,984.41],
	   [0,65.19,130.37,195.56,260.75,325.93,391.12,456.3,521.49,586.68,651.86,717.05,782.24,847.42,860.46,873.5,886.53,899.57],
	   [0,70.82,141.64,212.45,283.27,354.09,424.91,495.73,566.54,637.36,708.18,779,849.81,920.63,948.96,977.29,1005.61,1033.94],
	   [0,66.68,133.37,200.05,266.74,333.42,400.11,466.79,533.48,600.16,666.85,733.53,800.22,866.9,880.24,893.58,906.91,920.25,933.59,946.93],
	   [0,72.46,144.93,217.39,289.86,362.32,434.79,507.25,579.71,652.18,724.64,797.11,869.57,942.03,956.53,971.02,985.51,1000.01],
	   [0,65.28,130.57,195.85,261.14,326.42,391.7,456.99,522.27,587.55,652.84,718.12,783.41,848.69,861.75,874.8,887.86,900.92,913.97,927.03],
	   [0,44.94,89.88,134.82,179.76,224.7,269.64,314.58,359.52,404.46,449.39,494.33,539.27,584.21,629.15,674.09,719.03,763.97,808.91,853.85,898.79],
	   [0,69.12,138.24,207.37,276.49,345.61,414.73,483.86,552.98,622.1,691.22,760.34,829.47,898.59,912.41,926.24,940.06,953.89]];
	   
function generate_table() 
{
	var j=0;
    var table = document.getElementById("dataTable");
    for(var i=a[p].length-1;i>=0;i--)
    {
    	   	$("#dataTable").delay(1000)
            .queue(function (generate_table) {
            $(this).append("<tr><td>" + a[p][j] + "</td><td>"+b[p][j]+"</td><td>"+c[p][j]+"</td><td>"+d[p][j]+"</td><td>"+e[p][j]+"</td></tr>");
			j++;
            generate_table(); 
        });
	}
}

var trace1 = {
				y: [0,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800], 
				x: [0,51,104,157,210,266,318,373,426,480,532,585,638,693,745,799,852,906,975,1036,1108], 
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};


var trace2 = {
				y: [0,50,100,150,200,250,300,350,400,450,500,550,600,650,670,690,710,730,750,770],
				x: [0,75,155,229,312,397,476,555,634,718,801,895,995,1086,1135,1193,1241,1298,1362,1422],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			


var trace3 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,620,640,660,680,700,720],
				x:[0,80,156,233,314,395,475,552,635,714,787,870,952,988,1045,1108,1186,1245,1302],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace4 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690],
				x:[0,85,161,238,315,392,469,546,623,700,777,854,931,1008,1085,1162,1239,1316],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace5 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,670,690,710,730],
				x:[0,90,182,271,360,449,532,616,701,775,855,945,1035,1136,1225,1329,1418,1507],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace6 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690,700,710],
				x:[0,72,150,224,307,394,478,563,639,718,812,905,1007,1135,1238,1320,1458,1543,1625,1734],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
  
var trace7 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690],
				x:[0,82,168,247,333,419,501,582,658,750,835,921,1000,1124,1245,1368,1467,1586],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace8 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690,700,710],
				x:[0,84,162,236,310,384,458,532,606,680,754,828,902,990,1050,1124,1198,1272,1346,1420],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			
var trace9 = {
				y:[0,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800],
				x:[0,61,114,167,220,273,326,379,432,485,538,591,644,697,750,803,865,962,1068,1158,1286],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace10 = {
				y:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,660,670,680,690],
				x:[0,70,146,223,300,377,454,531,608,685,762,839,916,993,1070,1147,1224,1301],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};



if(p==0)
{
	data=[trace1];
}
else if(p==1)
{
	data=[trace2];
}
else if(p==2)
{
	data=[trace3];
	
}
else if(p==3)
{
	data=[trace4];

}
else if(p==4)
{
	data=[trace5];
}
else if(p==5)
{
	data=[trace6];
}
else if(p==6)
{
	data=[trace7];
}
else if(p==7)
{
	data=[trace8];
}
else if(p==8)
{
	data=[trace9];
}
else if(p==9)
{
	data=[trace10];
}
	
var layout = {
    title:'load vs deformation at mid-span',
	showlegend: false,
	xaxis: {
    title:'Dial Indicator reading at mid-span (div)',
    fixedrange: true
  },
  yaxis: {
    title:'Total Load ( kg )',
    fixedrange: true
  }
};    

var options = {
	scrollZoom: false, // lets us scroll to zoom in and out - works
	showLink: false, // removes the link to edit on plotly - works
	modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
	//modeBarButtonsToAdd: ['lasso2d'],
	displayLogo: false, // this one also seems to not work
	displayModeBar: false, //this one does work
	isResponsive:true,
	animationEnabled:true,
};


// second graph


	var trace11 = {
				y: [0,47.65,95.29,142.94,191.17,238.96,286.75,321.64,382.33,413.54,477.92,505.43,573.5,597.33,669.08,689.23,764.67,812.46,827.07,908.04,918.97], 
				x: [0,48.5,95.5,144.5,192,239.5,286.5,319,381.5,413,476,507.5,572,600.5,667,693,761.5,809,826.5,904.5,922.5], 
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};


var trace12 = {
				y: [0,69.57,139.13,208.7,278.26,347.83,417.39,486.96,556.52,626.09,695.65,765.22,834.78,904.35,932.17,960,987.82,1014.78,1043.48,1071.3],
				x: [0,66,131.5,196,264.5,330,395.5,460,526.5,590,658,722.5,790,855,882.5,907.5,933,960,985,1012],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace13 = {
				y:[0,68.36,136.72,205.09,273.45,341.81,410.17,478.53,546.9,615.26,683.62,751.98,820.34,847.69,875.03,902.38,929.72,957.07,984.41],
				x:[0,79.5,164.5,247.5,330,410,495,575,655,740,820,905,990,1027.5,1056,1090,1122.5,1153,1189],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace14 = {
				y:[0,65.19,130.37,195.56,260.75,325.93,391.12,456.3,521.49,586.68,651.86,717.05,782.24,847.42,860.46,873.5,886.53,899.57],
				x:[0,79,157.5,240,327.5,410,485,567,650,730,810,892.5,972.5,1050,1067.5,1083.5,1104.5,1119],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			
var trace15 = {
				y:[0,70.82,141.64,212.45,283.27,354.09,424.91,495.73,566.54,637.36,708.18,779,849.81,920.63,948.96,977.29,1005.61,1033.94],
				x:[0,69.5,150,226.5,307,384,460,532,615,694.5,775,847.5,925,999.5,1038,1068,1099,1130.5],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace16 = {
				y:[0,66.68,133.37,200.05,266.74,333.42,400.11,466.79,533.48,600.16,666.85,733.53,800.22,866.9,880.24,893.58,906.91,920.25,933.59,946.93],
				x:[0,64.5,134,205,275,347.5,417,492.5,562.5,630,707.5,782.5,845,920,935,955,968.5,985.5,998.5,1012],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			
 var trace17 = {
				y:[0,72.46,144.93,217.39,289.86,362.32,434.79,507.25,579.71,652.18,724.64,797.11,869.57,942.03,956.53,971.02,985.51,1000.01],
				x:[0,76,162.5,252.5,339.5,425,518,610,697.5,785,870,965,1047.5,1141,1154.5,1172.5,1195.5,1214],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			
var trace18 = {
				y:[0,65.28,130.57,195.85,261.14,326.42,391.7,456.99,522.27,587.55,652.84,718.12,783.41,848.69,861.75,874.8,887.86,900.92,913.97,927.03],
				x:[0,65.5,135,206,277,348,419,490,561,627,698,769,835.5,902,918.5,933.5,950.5,960.5,975,988],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};
			
var trace19 = {
				y:[0,44.94,89.88,134.82,179.76,224.7,269.64,314.58,359.52,404.46,449.39,494.33,539.27,584.21,629.15,674.09,719.03,763.97,808.91,853.85,898.79],
				x:[0,50.5,97.5,146.5,201,260.5,316,384.5,444,502.5,562.5,622.5,682,741.5,801.5,860.5,921,980.5,1038.5,1097.5,1159],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};

var trace20 = {
				y:[0,69.12,138.24,207.37,276.49,345.61,414.73,483.86,552.98,622.1,691.22,760.34,829.47,898.59,912.41,926.24,940.06,953.89],
				x:[0,76.5,160,242.5,327,405,486,572,645,726,810,895,972.5,1052.5,1068,1087,1103.5,1121.5],
				type: 'line',
				mode:'lines+markers',
				enableAnimation: true
			};


if(p==0)
{
	data2=[trace11];
}
else if(p==1)
{
	data2=[trace12];
}
else if(p==2)
{
	data2=[trace13];
}
else if(p==3)
{
	data2=[trace14];

}
else if(p==4)
{
	data2=[trace15];
}
else if(p==5)
{
	data2=[trace16];
}
else if(p==6)
{
	data2=[trace17];
}
else if(p==7)
{
	data2=[trace18];
}
else if(p==8)
{
	data2=[trace19];
}
else if(p==9)
{
	data2=[trace20];
}
	
var layout2 = {
    title:'Average Dial Reading vs Theoretical Deflection ',
	showlegend: false,
	xaxis: {
    title:'Average Dial Reading ( div )',
    fixedrange: true
  },
  yaxis: {
    title:'Theoretical Deflection in div ',
    fixedrange: true
  }
};    

var options2 = {
	scrollZoom: false, // lets us scroll to zoom in and out - works
	showLink: false, // removes the link to edit on plotly - works
	modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
	//modeBarButtonsToAdd: ['lasso2d'],
	displayLogo: false, // this one also seems to not work
	displayModeBar: false, //this one does work
	isResponsive:true,
	animationEnabled:true,
};

function check()
{
	document.getElementById('9-03').innerHTML=z[p][4];
	document.getElementById('9-04').innerHTML=z[p][5];
	document.getElementById('9-05').innerHTML=z[p][7];
	document.getElementById('9-2').style="visibility:hidden;"
	document.getElementById('9-3').style="visibility:hidden;"
	document.getElementById('9-4').style="visibility:hidden;"
}


function generate_table2()
{
var j=0;
    var table = document.getElementById("dataTable7");
    for(var i=a[p].length-1;i>=0;i--)
    {
    	   	$("#dataTable7").delay(0)
            .queue(function (generate_table2) {
            $(this).append("<tr><td>" + a[p][j] + "</td><td>"+b[p][j]+"</td><td>"+c[p][j]+"</td><td>"+d[p][j]+"</td><td>"+e[p][j]+"</td></tr>");
			j++;
            generate_table2(); 
        });
	}
}


function generate_table3()
{
var j=0;
    var table = document.getElementById("dataTable8");
    for(var i=a[p].length-1;i>=0;i--)
    {
    	   	$("#dataTable8").delay(0)
            .queue(function (generate_table3) {
            $(this).append("<tr><td>" + a[p][j] + "</td><td>"+b[p][j]+"</td><td>"+c[p][j]+"</td><td>"+d[p][j]+"</td><td>"+e[p][j]+"</td></tr>");
			j++;
            generate_table3(); 
        });
	}
}

var area,inertia;
function areaInertia()
{
	document.getElementById("calc").style.visibility="visible";
	
	document.getElementById("check").onclick=function(){
		if(document.getElementById('area').value != null)
		{
			inertia=(Math.PI*Math.pow(z[p][2],2))/4;
			document.getElementById('ar').innerHTML=inertia.toFixed(2);
			document.getElementById('area').style.visibility="hidden";
		}
		if(document.getElementById('inertia').value != null)
		{
			
			document.getElementById('in').innerHTML=z[p][4];
			document.getElementById('inertia').style.visibility="hidden";
		}
		document.getElementById("check").style="visibility:hidden;";
		document.getElementById('nextButton').style.visibility="visible";
	}
}
	
function magic()
{
	if(simsubscreennum==1)
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:410px; top:330px; position:absolute; height:40px;  z-index:10";
		document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
		document.getElementById('arrow1').style.msTransform="rotate(180deg)";
		document.getElementById('arrow1').style.transform="rotate(180deg)";
	    document.getElementById('1-1').onclick=function(){
			myStopFunction();
			document.getElementById('1-1').onclick="";
			document.getElementById('1-1').style.transformOrigin="0 20%";
			document.getElementById('1-1').style.animation="moveRod 1.5s forwards";
			setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);
		    document.getElementById('arrow1').style="visibility:visible; left:180px; top:130px; position:absolute; height:30px;  z-index:10";
		    document.getElementById('arrow1').style.WebkitTransform="rotate(270deg)";
		    document.getElementById('arrow1').style.msTransform="rotate(270deg)";
		    document.getElementById('arrow1').style.transform="rotate(270deg)";
			document.getElementById('1-3').onclick=function(){
				myStopFunction();
				document.getElementById('1-3').onclick="";
				document.getElementById('1-3').style.transformOrigin="0 20%";
				document.getElementById('1-3').style.animation="moveCal 1.5s forwards";
				setTimeout(function(){
					document.getElementById('1-3').style.visibility="hidden";
					document.getElementById('1-31').style.visibility="visible";
					// table values
					document.getElementById('tab').style.visibility="visible";
					document.getElementById('1').innerHTML="d<sub>1x</sub>="+z[p][0];
					document.getElementById('2').innerHTML="d<sub>1y</sub>=";
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById('arrow1').style="visibility:visible; position:absolute; left:180px; top:220px; height:30px; z-index:10;";
				document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
				document.getElementById('arrow1').style.msTransform="rotate(90deg)";
				document.getElementById('arrow1').style.transform="rotate(90deg)";
				document.getElementById('1-31').onclick=function(){
					myStopFunction();
					document.getElementById('1-31').onclick="";
					document.getElementById('1-31').style.transformOrigin="0 20%";
					document.getElementById('1-31').style.animation="moveCal2 1.5s forwards";
					setTimeout(function(){
						document.getElementById('1-1').style.transformOrigin="0 20%";
			            document.getElementById('1-1').style.animation="moveRod2 1.5s forwards";
					},500);
					setTimeout(function(){
						document.getElementById('1-31').style.transformOrigin="0 20%";
					    document.getElementById('1-31').style.animation="moveCal 1.5s forwards";
					},1500);
					setTimeout(function(){
						document.getElementById('2').innerHTML="d<sub>1y</sub>="+z[p][1];
					    document.getElementById('3').innerHTML=z[p][2];
						
						areaInertia();
			
      			    },3000);
					
				}
				
				},2600);
			}
			},1500);
			
		}
	}
	if(simsubscreennum==2)
	{
		document.getElementById("calc").style.visibility="hidden";
		document.getElementById('1-31').style.visibility="hidden";
		document.getElementById('tab').style.visibility="hidden";
        myInt=setInterval(function(){animatearrow();},500);
        document.getElementById('arrow1').style="visibility:visible; position:absolute; left:400px; top:110px; height:30px; z-index:10;" 
		document.getElementById('arrow1').style.WebkitTransform="rotate(270deg)";
		document.getElementById('arrow1').style.msTransform="rotate(270deg)";
		document.getElementById('arrow1').style.transform="rotate(270deg)";
		document.getElementById('2-2').onclick=function(){
			myStopFunction();
			document.getElementById('2-2').style.transformOrigin="0 20%";
			document.getElementById('2-2').style.animation="scaleMove 2s forwards";
			setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
		    },2500);
		}
		
	}
	if(simsubscreennum==3)
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:430px; top:235px; height:30px; z-index:10;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
		document.getElementById('arrow1').style.msTransform="rotate(180deg)";
		document.getElementById('arrow1').style.transform="rotate(180deg)";
		document.getElementById('3-2').onclick=function(){
			myStopFunction();
			document.getElementById('3-2').onclick="";
			document.getElementById('3-2').style.transformOrigin="0% 20%";
			document.getElementById('3-2').style.animation="markChalk 1.5s forwards";
			setTimeout(function(){
				document.getElementById('3-2').style.transformOrigin="0% 20%";
			    document.getElementById('3-2').style.animation="markChalk1 1.5s forwards";
			},1500);
			setTimeout(function(){
				document.getElementById('3-3').style.visibility="visible";
				// document.getElementById('3-2').style.transformOrigin="0% 20%";
			    // document.getElementById('3-2').style.animation="markChalk 1.5s forwards";
			},1950);
			setTimeout(function(){
				document.getElementById('3-2').style.transformOrigin="0% 20%";
			    document.getElementById('3-2').style.animation="markChalk2 1.5s forwards";
			},3500);
			setTimeout(function(){
				document.getElementById('3-31').style.visibility="visible";
			},3900);
			setTimeout(function(){
				document.getElementById('3-2').style.transformOrigin="0% 20%";
			    document.getElementById('3-2').style.animation="markChalk3 1.5s forwards";
			},5800);
			setTimeout(function(){
				document.getElementById('3-32').style.visibility="visible";
			},6150);
			setTimeout(function(){
				document.getElementById('3-2').style.transformOrigin="0% 20%";
			    document.getElementById('3-2').style.animation="markChalk4 1.5s forwards";
			},7200);
			setTimeout(function(){
				document.getElementById('3-33').style.visibility="visible";
			},7500);
			setTimeout(function(){
                document.getElementById('3-2').style.transformOrigin="0% 20%";
			    document.getElementById('3-2').style.animation="markChalk5 1.5s forwards";					
			},8600);
			setTimeout(function(){
				document.getElementById('3-34').style.visibility="visible";
			},8900);
			setTimeout(function(){
				document.getElementById('3-2').style.visibility="hidden";
			},9900);
			setTimeout(function(){
				document.getElementById('3-4').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
			},10000);
		}
	}
	if(simsubscreennum==4)
	{
		document.getElementById('3-3').style.visibility="hidden";
		document.getElementById('3-4').style.visibility="hidden";
		document.getElementById('3-31').style.visibility="hidden";
		document.getElementById('3-32').style.visibility="hidden";
		document.getElementById('3-33').style.visibility="hidden";
		document.getElementById('3-34').style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:125px; top:200px; height:30px; z-index:10";
		document.getElementById('arrow1').style.WebkitTransform="rotate(270deg)";
		document.getElementById('arrow1').style.msTransform="rotate(270deg)";
		document.getElementById('arrow1').style.transform="rotate(270deg)";
		document.getElementById('4-2').onclick=function(){
			myStopFunction();
			document.getElementById('4-1').style.visibility="hidden";
			document.getElementById('4-2').style.visibility="hidden";
			document.getElementById('4-3').style.visibility="visible";
			setTimeout(function(){
				document.getElementById('4-4').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
			},1000);
		}
	}
	if(simsubscreennum==5)
	{
		document.getElementById('4-3').style.visibility="hidden";
		document.getElementById('4-4').style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; position:absolute; left:310px; top:381px; height:20px; z-index:10";
        document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
        document.getElementById('arrow1').style.msTransform="rotate(90deg)";
        document.getElementById('arrow1').style.transform="rotate(90deg)";
        document.getElementById('5-3').onclick=function(){	
            myStopFunction();
			document.getElementById('5-3').onclick="";
			document.getElementById('p5-1').style.visibility="hidden";
			document.getElementById('5-3').style.visibility="hidden";
			document.getElementById('5-33').style.visibility="visible";
			document.getElementById('dataTable').style.visibility="visible";
			document.getElementById('5-4n1').style.transformOrigin="35% 90%";
			rotateAnimation("5-4n1",20);
			document.getElementById('5-4n2').style.transformOrigin="35% 90%";
			rotateAnimation1("5-4n2",30);
			generate_table();
			setTimeout(function(){
				document.getElementById('5-64').style.visibility="visible";
				document.getElementById('5-61').style.visibility="visible";
				document.getElementById('5-11').style.visibility="visible";
			},1000);
			setTimeout(function(){
				document.getElementById('5-11').style.visibility="hidden";
				document.getElementById('5-61').style.visibility="hidden";
				document.getElementById('5-62').style.visibility="visible";
				document.getElementById('5-12').style.visibility="visible";
			},10000);
			setTimeout(function(){
				document.getElementById('5-12').style.visibility="hidden";
				document.getElementById('5-62').style.visibility="hidden";
				document.getElementById('5-63').style.visibility="visible";
				document.getElementById('5-13').style.visibility="visible";
			},18000);
			setTimeout(function(){
				document.getElementById('p5-2').style.visibility="visible";
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById('arrow1').style="visibility:visible; position:absolute; left:292px; top:384px; height:20px; z-index:10";
                document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
                document.getElementById('arrow1').style.msTransform="rotate(90deg)";
                document.getElementById('arrow1').style.transform="rotate(90deg)";
				document.getElementById('5-2').onclick=function(){
					count1=1;
					count2=1;
					myStopFunction();
					document.getElementById('5-3').onclick="";
					document.getElementById('5-63').style.visibility="hidden";
					document.getElementById('5-64').style.visibility="hidden";
					document.getElementById('p5-2').style.visibility="hidden";
			        document.getElementById('5-2').style.visibility="hidden";
			        document.getElementById('5-33').style.visibility="hidden";
			        document.getElementById('5-3').style.visibility="visible";
			        document.getElementById('5-22').style.visibility="visible";
					document.getElementById('5-5').style.visibility="visible";
					document.getElementById('nextButton').style.visibility="visible";
				}
		},20000);	
		}		
	}
	if(simsubscreennum==6)
	{
		document.getElementById('5-13').style.visibility="hidden";
		document.getElementById('5-3').style.visibility="hidden";
		document.getElementById('5-22').style.visibility="hidden";
		document.getElementById('5-5').style.visibility="hidden";
		document.getElementById('dataTable').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="visible";
	}
	if(simsubscreennum==7)
	{
		Plotly.newPlot('graph1', data, layout,options);
		var count3=0;
		document.getElementById('7-1').onclick=function(){
			
			if(count3==0)
			{
			count3=1;
			generate_table2(); 
			}
			document.getElementById('g1-'+p).style.visibility="hidden";
			document.getElementById('tabdiv').style.visibility="visible";
			document.getElementById('7-1').style.visibility="hidden";
			document.getElementById('7-2').style.visibility="visible";
			document.getElementById('7-3').style="visibility:visible; position:absolute; left:-2px; top:450px; cursor:pointer; border:2px solid double;  background:#cbc8c7;";
			document.getElementById('dataTable7').style.visibility="visible";
			document.getElementById('graph1').style.visibility="hidden";
		}
		document.getElementById('7-2').onclick=function(){ 
		     document.getElementById('g1-'+p).style.visibility="visible";
		     document.getElementById('7-1').style.visibility="visible";
			document.getElementById('7-2').style.visibility="hidden";
			document.getElementById('tabdiv').style.visibility="hidden";
			document.getElementById('7-3').style="visibility:visible; position:absolute; left:600px; top:450px; cursor:pointer; border:2px solid double;  background:#cbc8c7;";
			document.getElementById('graph1').style.visibility="hidden";
			document.getElementById('dataTable7').style.visibility="hidden";
		}
		document.getElementById('7-3').onclick=function(){ 
		     document.getElementById('g1-'+p).style.visibility="hidden";
			document.getElementById('7-3').style.visibility="hidden";
			document.getElementById('tabdiv').style.visibility="hidden";
			document.getElementById('7-2').style.visibility="visible";
			document.getElementById('7-1').style.visibility="visible";
			document.getElementById('graph1').style.visibility="visible";
			document.getElementById('dataTable7').style.visibility="hidden";
		}
		
		setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
		},500);

	}
	if(simsubscreennum==8)
	{
		document.getElementById('7-1').style.visibility="hidden";
		document.getElementById('7-2').style.visibility="hidden";
		document.getElementById('7-3').style.visibility="hidden";
		document.getElementById('graph1').style.visibility="hidden";
		document.getElementById('dataTable7').style.visibility="hidden";
		document.getElementById('tabdiv').style.visibility="hidden";
		document.getElementById('g1-'+p).style.visibility="hidden";

		Plotly.newPlot('graph2', data2, layout2,options2);
		var count4=0;
		document.getElementById('8-1').onclick=function(){
			
			if(count4==0)
			{
			count4=1;
			generate_table3(); 
			}
			document.getElementById('g2-'+p).style.visibility="hidden";
			document.getElementById('tabdiv2').style.visibility="visible";
			document.getElementById('8-1').style.visibility="hidden";
			document.getElementById('8-2').style.visibility="visible";
			document.getElementById('8-3').style="visibility:visible; position:absolute; left:-2px; top:450px; cursor:pointer; border:2px solid double;  background:#cbc8c7;";
			document.getElementById('dataTable8').style.visibility="visible";
			document.getElementById('graph2').style.visibility="hidden";
		}
		document.getElementById('8-2').onclick=function(){ 
		     document.getElementById('g2-'+p).style.visibility="visible";
		     document.getElementById('8-1').style.visibility="visible";
			document.getElementById('8-2').style.visibility="hidden";
			document.getElementById('tabdiv2').style.visibility="hidden";
			document.getElementById('8-3').style="visibility:visible; position:absolute; left:600px; top:450px; cursor:pointer; border:2px solid double;  background:#cbc8c7;";
			document.getElementById('graph2').style.visibility="hidden";
			document.getElementById('dataTable8').style.visibility="hidden";
		}
		document.getElementById('8-3').onclick=function(){ 
		     document.getElementById('g2-'+p).style.visibility="hidden";
			document.getElementById('8-3').style.visibility="hidden";
			document.getElementById('tabdiv2').style.visibility="hidden";
			document.getElementById('8-2').style.visibility="visible";
			document.getElementById('8-1').style.visibility="visible";
			document.getElementById('graph2').style.visibility="visible";
			document.getElementById('dataTable8').style.visibility="hidden";
		}
		
		setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
		},500);
	}
	if(simsubscreennum==9)
	{
		document.getElementById('8-1').style.visibility="hidden";
		document.getElementById('8-2').style.visibility="hidden";
		document.getElementById('8-3').style.visibility="hidden";
		document.getElementById('graph2').style.visibility="hidden";
		document.getElementById('dataTable8').style.visibility="hidden";
		document.getElementById('tabdiv2').style.visibility="hidden";
		document.getElementById('g2-'+p).style.visibility="hidden";

		// Plotly.newPlot('graph3', data2, layout2,options2);
		document.getElementById('9-01').innerHTML=z[p][2];
		document.getElementById('9-02').innerHTML=z[p][6];
		// document.getElementById('9-2').style="visibility:visible; position:absolute; left:200px; top:370px;"
		// document.getElementById('9-3').style="visibility:visible; position:absolute; left:300px; top:370px;"
		// document.getElementById('9-4').style="visibility:visible; position:absolute; left:400px; top:370px;"
		// document.getElementById('9-0').onclick=function(){vi
		document.getElementById('9-4').onclick=function(){
			document.getElementById('9-4').style.visibility="hidden";
			document.getElementById('9-1ob').style.visibility="hidden";
			document.getElementById('9-2ob').style.visibility="visible";
			document.getElementById('9-11').innerHTML=document.getElementById('9-03').value;
			document.getElementById('9-12').innerHTML=document.getElementById('9-04').value;
			document.getElementById('9-13').innerHTML=document.getElementById('9-05').value;
			document.getElementById('9-21').innerHTML=z[p][4];
			document.getElementById('9-22').innerHTML=z[p][5];
			document.getElementById('9-23').innerHTML=z[p][7];
		}
	}
}