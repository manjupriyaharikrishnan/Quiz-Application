// JavaScript Document
var timer;
var time;		
var h=0,m=0,s=0,ms=0,d=5;
var name,age;
var ansCount=0;
var set1=0,set2=0,set3=0,set4=0,set5=0,set6=0,set7=0,set8=0;
var score=0;
var namegiven,agegiven;
var grade;
	
$("#start").click(function(){ 
	name=$("#name").val();
	age=$("[name='age']");						
	if(name===""|| name===null||name==="enter ur name"){
		alert("fill in details to proceed");
		return false;
	}
	age=$( "#age option:selected" ).text();
	localStorage.setItem('Age', age);
	localStorage.setItem('Name', name);
	if(age==="--select ur age--"){
		alert("select ur age");
		return false;
	}
});

function start(){
	namegiven = localStorage.getItem('Name');
	agegiven = localStorage.getItem('Age');
	console.log(namegiven);
	console.log(agegiven);
	function calc(){
		if(d==10){
			d=0;
		}if(ms==100){
			ms=0;
			s++;
		}if(s==60){
			s=0;
			m++;
		}if(m==60){
			m=0;
			h++;
		}
		time=h+":"+m+":"+s;
		$("#display").html(time);
		ms++;
		d++;
	}
	timer=setInterval(calc,10);
}
		
$("[name='answer1']").click(function(){if(set1===0){
	ansCount++;
	set1++;
	$("#ansCount").html(ansCount+"/8");
	}
});

$("[name='answer2']").change(function(){if(set2===0){ansCount++;set2++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer3']").change(function(){if(set3===0){ansCount++;set3++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer4']").change(function(){if(set4===0){ansCount++;set4++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer5']").change(function(){if(set5===0){ansCount++;set5++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer6']").change(function(){if(set6===0){ansCount++;set6++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer7']").change(function(){if(set7===0){ansCount++;set7++;$("#ansCount").html(ansCount+"/8");}});
$("[name='answer8']").change(function(){if(set8===0){ansCount++;set8++;$("#ansCount").html(ansCount+"/8");}});
		
$("#finishTest").click(function(){
	$("#confirm").css("display","block");
	if(ansCount<8){
		$("#num").html(8-ansCount+" question(s) has been unanswered");
	}else{
		$("#num").html("");
	}
});		
		
function yesfun(){			
	var get1 = document.getElementsByName("answer1");
   	for (var x = 0; x < get1.length; x ++) {
		if (get1[x].checked){
			ans1=get1[x].value;
		}
	}
	
	var get2 = document.getElementsByName("answer2");
   	for (var x = 0; x < get2.length; x ++) {
		if (get2[x].checked) {
			ans2=get2[x].value;
		}
    }

    var get3 = document.getElementsByName("answer3");
   	for (var x = 0; x < get3.length; x ++) {
		if (get3[x].checked) {
			ans3=get3[x].value;
		}
    }

    var get4 = document.getElementsByName("answer4");
   	for (var x = 0; x < get4.length; x ++) {
		if (get4[x].checked) {
			ans4=get4[x].value;
		}
    }

    var get5 = document.getElementsByName("answer5");
   	for (var x = 0; x < get5.length; x ++) {
		if (get5[x].checked) {
			ans5=get5[x].value;
		}
    }

    var get6 = document.getElementsByName("answer6");
   	for (var x = 0; x < get6.length; x ++) {
		if (get6[x].checked) {
			ans6=get6[x].value;
		}
    }

    var get7 = document.getElementsByName("answer7");
   	for (var x = 0; x < get7.length; x ++) {
		if (get7[x].checked) {
			ans7=get7[x].value;
		}
    }

    var get8 = document.getElementsByName("answer8");
   	for (var x = 0; x < get8.length; x ++) {
		if (get8[x].checked) {
			ans8=get8[x].value;
		}
    }
	
	if(ans1==="option3"){score++;}
	if(ans2==="option1"){score++;}
	if(ans3==="option2"){score++;}
	if(ans4==="option2"){score++;}
	if(ans5==="option3"){score++;}
	if(ans6==="option1"){score++;}
	if(ans7==="option4"){score++;}
	if(ans8==="option4"){score++;}

	var timeC=h*360+m*60+s;
	console.log(score+" "+timeC+" "+agegiven+" "+namegiven);

	/*grade calculation*/
	if(timeC<121){
		if(agegiven=="below18"){
			switch(score){
				case 8:grade=1;break;						
				case 7:grade=2;break;
				case 6:grade=2;break;						
				case 5:grade=3;break;
				case 4:grade=4;break;						
				case 3:grade=5;break;
				case 2:grade=6;break;						
				case 1:grade=7;break;
				case 0:grade=8;break;
			}
		}else if(agegiven=="above18"){
			switch(score){
				case 8:grade=2;break;						
				case 7:grade=3;break;
				case 6:grade=3;break;						
				case 5:grade=4;break;
				case 4:grade=4;break;						
				case 3:grade=5;break;
				case 2:grade=6;break;						
				case 1:grade=7;break;
				case 0:grade=8;break;
			}
		}				 
	}else if(timeC<201){
		if(agegiven=="below18"){
			switch(score){
				case 8:grade=2;break;						
				case 7:grade=3;break;
				case 6:grade=3;break;						
				case 5:grade=4;break;
				case 4:grade=4;break;						
				case 3:grade=5;break;
				case 2:grade=6;break;						
				case 1:grade=7;break;
				case 0:grade=8;break;
			}
		}else if(agegiven=="above18"){
			switch(score){
				case 8:grade=3;break;						
				case 7:grade=4;break;
				case 6:grade=5;break;						
				case 5:grade=5;break;
				case 4:grade=6;break;						
				case 3:grade=6;break;
				case 2:grade=7;break;						
				case 1:grade=8;break;
				case 0:grade=8;break;
			}
		}	
	}else{
		if(agegiven=="below18"){
			switch(score){
				case 8:grade=3;break;						
				case 7:grade=4;break;
				case 6:grade=4;break;						
				case 5:grade=5;break;
				case 4:grade=6;break;						
				case 3:grade=6;break;
				case 2:grade=7;break;						
				case 1:grade=8;break;
				case 0:grade=8;break;
			}
		}else if(agegiven=="above18"){
			switch(score){
				case 8:grade=4;break;						
				case 7:grade=5;break;
				case 6:grade=6;break;						
				case 5:grade=6;break;
				case 4:grade=7;break;						
				case 3:grade=7;break;
				case 2:grade=8;break;						
				case 1:grade=8;break;
				case 0:grade=8;break;
			}
		}	
	} 
	localStorage.setItem('Grade',grade);
}
		
$("#no").click(function(){
	$("#confirm").css("display","none");
	$("#num").html();
	return false;
});

