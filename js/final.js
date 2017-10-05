//variable to store score value from test html page
var score=localStorage.getItem('Grade');

//json storing the grade and coressponding range of intelligence
var result=[{"grade":"1","intelligence":"Genius"},
			{"grade":"2","intelligence":"Gifted"},
			{"grade":"3","intelligence":"Above average"},
			{"grade":"4","intelligence":"Higher average"},
			{"grade":"5","intelligence":"Lower average"},
			{"grade":"6","intelligence":"Below average"},
			{"grade":"7","intelligence":"Borderline low"},
			{"grade":"8","intelligence":"Low"}]

//animating the graph divs
$(".rect1").animate({
	height:"400px"},2500);
$(".rect2").animate({
	height:"350px"},2500);	
$(".rect3").animate({
	height:"300px"},2500);	
$(".rect4").animate({
	height:"250px"},2500);	
$(".rect5").animate({
	height:"200px"},2500);	
$(".rect6").animate({
	height:"150px"},2500);	
$(".rect7").animate({
	height:"100px"},2500);	
$(".rect8").animate({
	height:"50px"},2500);

//code to animate the arrow
var rescore=parseInt(score)+2;

$( ".graph div:nth-child("+ rescore  +")" ).css("background-color","#588528");
var k=(score-1)*60;
var g=(score-1)*60;
$('.imageSlider').animate({
	left:k,
	top:g
},3000);

//code to display the intelligence range 
for(var i=0;i<8;i++){
	if(score==result[i].grade){
		$(".intelligence").text(result[i].intelligence);
	}
}

//to display and hide the overall range
$("#status").click(function(){
	$("#status").css("display","none");
	$(".show").css("display","block");
});

$("#close").click(function(){
	$("#status").css("display","block");
	$(".show").css("display","none");
});


