var balloon00 =document.getElementById("balloon00");

var balloon01 =document.getElementById("balloon01");

var balloon02 =document.getElementById("balloon02");

var balloon03 =document.getElementById("balloon03");

var balloon04 =document.getElementById("balloon04");

var balloon05 =document.getElementById("balloon05");

var balloon06 =document.getElementById("balloon06");

var balloon07 =document.getElementById("balloon07");

var balloon08 =document.getElementById("balloon08");

var balloon09 =document.getElementById("balloon09");

var balloon10 =document.getElementById("balloon10");

var balloon11 =document.getElementById("balloon11");

var balloon12 =document.getElementById("balloon12");

var balloon13 =document.getElementById("balloon13");

var balloon14 =document.getElementById("balloon14");

var balloon15 =document.getElementById("balloon15");

var balloon16 =document.getElementById("balloon16");

var balloon17 =document.getElementById("balloon17");

var balloon18 =document.getElementById("balloon18");


var balloon19 =document.getElementById("balloon19");

var balloon20 =document.getElementById("balloon20");

var balloon21 =document.getElementById("balloon21");

var balloon22 =document.getElementById("balloon22");

var balloon23 =document.getElementById("balloon23");

var yay =document.getElementById("yay-no-balloons");

function balloonPopper(balloonVariable){
	balloonVariable.addEventListener("mouseover",popballoon);

function popballoon(){
	if (balloonVariable.style.background === "none") {
		balloonVariable.innerText= "";
	}
	else {
		balloonVariable.innerText= "POP!";
		balloonVariable.style.background = "none"
	}
}
balloonVariable.addEventListener("mouseout",popIsOver,false);
function popIsOver(){
	balloonVariable.innerText="";
}

}
	balloonPopper(balloon00);
	balloonPopper(balloon01);
	balloonPopper(balloon02);
	balloonPopper(balloon03);
	balloonPopper(balloon04);
	balloonPopper(balloon05);
	balloonPopper(balloon06);
	balloonPopper(balloon07);
	balloonPopper(balloon08);
	balloonPopper(balloon09);
	balloonPopper(balloon10);
	balloonPopper(balloon11);
	balloonPopper(balloon12);
	balloonPopper(balloon13);
	balloonPopper(balloon14);
	balloonPopper(balloon15);
	balloonPopper(balloon16);
	balloonPopper(balloon17);
	balloonPopper(balloon18);
	balloonPopper(balloon19);
	balloonPopper(balloon20);
	balloonPopper(balloon21);
	balloonPopper(balloon22);
	balloonPopper(balloon23);
document.addEventListener("mouseover",noBalloons,false);
function noBalloons(){
	if (balloon00.style.background === "none" && balloon01.style.background ==="none"  && balloon02.style.background ==="none" && balloon03.style.background ==="none" && balloon04
		.style.background ==="none" && balloon05.style.background ==="none" && balloon06.style.background ==="none" && balloon07.style.background ==="none" && balloon08.style.background ==="none" && balloon09.style.background ==="none" && balloon10.style.background ==="none" && balloon11.style.background ==="none" && balloon12.style.background ==="none" && balloon13.style.background ==="none" && balloon14.style.background ==="none" && balloon15.style.background ==="none" && balloon16.style.background ==="none" && balloon17.style.background ==="none" && balloon18.style.background ==="none" && balloon19.style.background ==="none" && balloon20.style.background ==="none" && balloon21.style.background ==="none" && balloon22.style.background ==="none" && balloon23.style.background ==="none" ) 
		 {
		 	yay.style.display= "block";
		 	windows.scrollTo(0,0);

	}
}