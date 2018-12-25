var clk=1;
var clk1=1;
var clk2=1;
var selfun=0; // func. panel Selector

var leClk=1;
var upClk=1;
var doClk=1;
var riClk=1;

var runClk=1; // main func.'s
var runClk1=1;
var runClk2=1;
var curLoc="";
var curDeg=0;
var point=0;

var bg=1;
var mnu=1;

function retryLev() {
	if (curLev==1) {
		lev1();
	}
	else if (curLev==2) {
		lev2();
	}
	clk=1;
	leClk=1;
	upClk=1;
	doClk=1;
	riClk=1;
	runClk=1;
	curDeg=0;
	point=0;
}
/* REFRANCE Function
function moveit(){
	var current = document.getElementById('22i').className;
	console.log(current);
	var change = current.substring(1,2);
	var putt = parseInt(change) -1;
	var neyu = 'i' + change + putt;
	console.log(neyu);

	document.getElementsByClassName(current)[0].classList.add(neyu);
	document.getElementsByClassName(current)[0].classList.remove(current);

	document.getElementsByClassName(neyu)[0].classList.add(current);
	document.getElementsByClassName(neyu)[0].classList.remove(neyu);
}
*/
function selulm(){
	// select main func. i/p panel
	document.getElementById("mainFuntxt1").style.color="red";
	document.getElementById("mainFuntxt2").style.color="red";
	document.getElementById("Fun1txt1").style.color="blue";
	document.getElementById("Fun1txt2").style.color="blue";
	document.getElementById("Fun2txt1").style.color="blue";
	document.getElementById("Fun2txt2").style.color="blue";
	selfun=0;
}

function selulf1(){
	// select func.1 i/p panel
	selfun=1;
	document.getElementById("mainFuntxt1").style.color="blue";
	document.getElementById("mainFuntxt2").style.color="blue";
	document.getElementById("Fun1txt1").style.color="red";
	document.getElementById("Fun1txt2").style.color="red";
	document.getElementById("Fun2txt1").style.color="blue";
	document.getElementById("Fun2txt2").style.color="blue";
}

function selulf2(){
	// select func.2 i/p panel
	document.getElementById("mainFuntxt1").style.color="blue";
	document.getElementById("mainFuntxt2").style.color="blue";
	document.getElementById("Fun1txt1").style.color="blue";
	document.getElementById("Fun1txt2").style.color="blue";
	document.getElementById("Fun2txt1").style.color="red";
	document.getElementById("Fun2txt2").style.color="red";
	selfun=2;
}
/*    //for mobile application
function funChangerMain() {
	document.getElementById('mainFun').style.backgroundColor="black";
	document.getElementById('oneFun').style.backgroundColor="white";
	document.getElementById('twoFun').style.backgroundColor="white";
	//myElement.classList.remove("curFun");
	document.getElementById("ulMain").style.display="none";
	document.getElementById("ulF1").style.display="block";
	document.getElementById("ulF2").style.display="block";
}

function funChangerF1() {
	document.getElementById('mainFun').style.backgroundColor="white";
	document.getElementById('oneFun').style.backgroundColor="black";
	document.getElementById('twoFun').style.backgroundColor="white";

	document.getElementById("ulMain").style.display="block";
	document.getElementById("ulF1").style.display="none";
	document.getElementById("ulF2").style.display="block";
}

function funChangerF2() {
	document.getElementById('mainFun').style.backgroundColor="white";
	document.getElementById('oneFun').style.backgroundColor="white";
	document.getElementById('twoFun').style.backgroundColor="black";

	document.getElementById("ulMain").style.display="block";
	document.getElementById("ulF1").style.display="block";
	document.getElementById("ulF2").style.display="none";
}
*/

// three line menu buttons
function menuBut(){
	if(mnu==1){
		document.getElementById('menuCls').style.display = "block";
		mnu=0;
	}
	else if (mnu==0){
		document.getElementById('menuCls').style.display = "none";
		mnu=1;
	}
}

// user feedback taker !-not working
function feedbackme(){
	document.getElementById("fdbk").innerHTML="Thankyou!";
	var myWindow=window.open("https://www.thesitewizard.com/");
	myWindow.document.getElementById('')
}

// onload initilizer func.
function init() {
	selulm();  // default main i/p panel selector
	// to display and hide function i/p  panels
	  document.getElementById("ulMain").style.display="block";
		document.getElementById("ulF1").style.display="block";
		document.getElementById("ulF2").style.display="block";

}

function bgMusic(){
	if (bg==1){
		document.getElementById("bgAud").play();
		document.getElementById("onoff").innerHTML="on";
		bg=0;
	}
	else if (bg==0) {
		document.getElementById("bgAud").pause();
		document.getElementById("onoff").innerHTML="off";
		bg=1;
	}
}

function help() {
	window.alert("Welcome To Coder\'s Planet.\nUse your logic to grab all 3 dimonds\nusing Blue UFO");
}

// for loop to check border
// for every level make saperate html page

function trapMaker(myid) {
	document.getElementById(myid).src="img/la.png";
}

function dimMaker(myid1) {
	document.getElementById(myid1).src="img/di.png";
}

function moLeRun() {
	var ufoTile=curLoc;
	var tiTile="";
	var tiTileMid;
	var ufoTileMid=eval(ufoTile.substring(1,2)-1); //-leClk instad of -1
	ufoTile=ufoTile.substring(0,1)+ufoTileMid+"i";
	tiTileMid=eval(ufoTileMid+1);
	tiTile=ufoTile.substring(0,1)+tiTileMid+"i";
	var nxtTileMid=eval(ufoTileMid);
	var nxtTile=ufoTile.substring(0,1)+nxtTileMid+"i";
	console.log(nxtTile+"->nxtTileVar");
	console.log("tiTile"+tiTile);
	console.log("ufoTile->>>"+ufoTile);

	var mi=document.getElementById(nxtTile).src;
	console.log("nxtLINE->"+nxtTile);
	var miLen=mi.length;
	var miLenFi = miLen-10;
	var op=mi.substring(miLenFi,miLen);
	console.log("OOOOP->"+op);
	if(op !== "img/la.png"){
		document.getElementById(ufoTile).src="img/uf.png";
		document.getElementById(ufoTile).style.transform='rotate(270deg)';
		document.getElementById(tiTile).src="img/ti.png";
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}

	if(op === "img/di.png"){
		point++;
		document.getElementById("pnt").innerHTML=point;
		grbAud();
	}

	console.log("moLe"+"ufoTile"+ufoTile);
	leClk++;
}

function moUpRun() {
	var ufoTile=curLoc;
	var tiTile="";
	var tiTileFst;
	var ufoTileFst=eval(ufoTile.substring(0,1)-1); //-upClk instd of -1
	ufoTile=ufoTileFst+ufoTile.substring(1,2)+"i";
	tiTileFst=eval(ufoTileFst+1);
	tiTile=tiTileFst+ufoTile.substring(1,2)+"i";

	var abvTileFst=eval(ufoTileFst);
	var abvTile=abvTileFst+ufoTile.substring(1,2)+"i";
	console.log(abvTile+"->abvTileVar");
	console.log("tiTile"+tiTile);
	console.log("ufoTile->>>"+ufoTile);

	var mi=document.getElementById(abvTile).src;
	console.log("abvLINE->"+abvTile);
	var miLen=mi.length;
	var miLenFi = miLen-10;
	var op=mi.substring(miLenFi,miLen);
	if(op !== "img/la.png"){
	document.getElementById(ufoTile).src="img/uf.png";
	document.getElementById(tiTile).src="img/ti.png";
	console.log("moUp"+"ufoTile"+ufoTileFst);
	curLoc=ufoTile;
	moveAud();
	}
	if(op === "img/di.png"){
		point++;
		document.getElementById("pnt").innerHTML=point;
		grbAud();
	}
	upClk++;
}

function moDoRun() {
	var ufoTile=curLoc;
	var tiTile="";
	var tiTileFst;
	var ufoTileFst=eval( parseInt(ufoTile.substring(0,1)) +1 ); //-upClk instd of -1
	console.log("ufoTileFst__"+ufoTileFst);
	ufoTile=ufoTileFst+ufoTile.substring(1,2)+"i";
	tiTileFst=eval(ufoTileFst-1);
	tiTile=tiTileFst+ufoTile.substring(1,2)+"i";
	console.log(ufoTile);

	var bloTileFst=ufoTileFst;
	var bloTile=bloTileFst + ufoTile.substring(1,2) + "i";
	console.log(bloTile+"->bloTileVar");
	console.log("tiTile"+tiTile);
	console.log("ufoTile->>>"+ufoTile);

	var mi=document.getElementById(bloTile).src;
	console.log("bloLINE->"+bloTile);
	var miLen=mi.length;
	var miLenFi = miLen-10;
	var op=mi.substring(miLenFi,miLen);
	if(op !== "img/la.png"){
		document.getElementById(ufoTile).src="img/uf.png";
		document.getElementById(ufoTile).style.transform='rotate(180deg)';
		document.getElementById(tiTile).src="img/ti.png";
		console.log("moDo"+"ufoTile"+ufoTileFst);
		curLoc=ufoTile;
		moveAud();
	}
	if(op === "img/di.png"){
		point++;
		document.getElementById("pnt").innerHTML=point;
		grbAud();
	}
	doClk++;
}

function moRiRun() {
	var ufoTile=curLoc;
	var tiTile="";
	var tiTileMid;
	var ufoTileMid=eval( parseInt(ufoTile.substring(1,2)) + 1); //-leClk instad of -1
	console.log("ri####"+ufoTileMid);
	ufoTile=ufoTile.substring(0,1)+ufoTileMid+"i";
	tiTileMid=eval(ufoTileMid-1);
	tiTile=ufoTile.substring(0,1)+tiTileMid+"i";
	var nxtTileMid=eval(ufoTileMid);
	var nxtTile=ufoTile.substring(0,1)+nxtTileMid+"i";
	console.log(nxtTile+"->nxtTileVar");
	console.log("tiTile"+tiTile);
	console.log("ufoTile->>>"+ufoTile);

	var mi=document.getElementById(nxtTile).src;
	console.log("nxtLINE->"+nxtTile);
	var miLen=mi.length;
	var miLenFi = miLen-10;
	var op=mi.substring(miLenFi,miLen);
	console.log("OOOOP->"+op);
	if(op !== "img/la.png"){
		document.getElementById(ufoTile).src="img/uf.png";
		document.getElementById(ufoTile).style.transform='rotate(90deg)';
		document.getElementById(tiTile).src="img/ti.png";
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}

	if(op === "img/di.png"){
		point++;
		document.getElementById("pnt").innerHTML=point;
		grbAud();
	}

	console.log("moRi"+"ufoTile"+ufoTile);
	riClk++;
}

function moFwdRun() {
	if(curDeg==0){
		moUpRun();
	}
	if(curDeg==90){
		moRiRun();
	}
	if(curDeg==180){
		moDoRun();
	}
	if(curDeg==270){
		moLeRun();
	}
}

function moRlRun() {
	rtnccw();
}

function moRrRun() {
	rtncw();
}

function moGrRun() {
	console.log("???im Grabbing!");
}

function moF1Run() {
	console.log("???this' f1!");
}

function moF2Run() {
	console.log("???this' f2!");
}

function moFwd() {
	if (selfun==0) {
		document.getElementById("ul"+clk).src="img/up.png";
		clk++;
		//console.log(+selfun+"ul"+clk+selfun);
	}
	if (selfun==1) {
		document.getElementById("1ul"+clk1).src="img/up.png";
		clk1++;
	}
	if (selfun==2) {
		document.getElementById("2ul"+clk2).src="img/up.png";
		clk2++;
	}
}

function moRl() {
	if(selfun==0){
		document.getElementById("ul"+clk).src="img/rl.png";
		clk++;
	}
	if (selfun==1) {
		document.getElementById("1ul"+clk1).src="img/rl.png";
		clk1++;
	}
	if (selfun==2) {
		document.getElementById("2ul"+clk2).src="img/rl.png";
		clk2++;
	}
}

function moRr() {
	if(selfun==0){
		document.getElementById("ul"+clk).src="img/rr.png";
		clk++;
	}
	if (selfun==1) {
		document.getElementById("1ul"+clk1).src="img/rr.png";
		clk1++;
	}
	if (selfun==2) {
		document.getElementById("2ul"+clk2).src="img/rr.png";
		clk2++;
	}
}

function moGr() {
	document.getElementById("ul"+clk).src="img/gr.png";
	clk++;
}

function moF1() {
	if(selfun==0){
		document.getElementById("ul"+clk).src="img/f1.png";
		clk++;
	}
	if (selfun==1) {
		document.getElementById("1ul"+clk1).src="img/f1.png";
		clk1++;
	}
	if (selfun==2) {
		document.getElementById("2ul"+clk2).src="img/f1.png";
		clk2++;
	}
}

function moF2() {
	if(selfun==0){
		document.getElementById("ul"+clk).src="img/f2.png";
		clk++;
	}
	if (selfun==1) {
		document.getElementById("1ul"+clk1).src="img/f2.png";
		clk1++;
	}
	if (selfun==2) {
		document.getElementById("2ul"+clk2).src="img/f2.png";
		clk2++;
	}
}

// main func. i/p RUNner
function runUl() {

	if(runClk==1){
		var myUl=document.getElementById('ul1').src;
	}
	else if(runClk==2){
		var myUl=document.getElementById('ul2').src;
	}
	else if(runClk==3){
		var myUl=document.getElementById('ul3').src;
	}
	else if(runClk==4){
		var myUl=document.getElementById('ul4').src;
	}
	else if(runClk==5){
		var myUl=document.getElementById('ul5').src;
	}
	else if(runClk==6){
		var myUl=document.getElementById('ul6').src;
	}
	else if(runClk==7){
		var myUl=document.getElementById('ul7').src;
	}
	else if(runClk==8){
		var myUl=document.getElementById('ul8').src;
	}
	else if(runClk==9){
		var myUl=document.getElementById('ul9').src;
	}
	else if(runClk==10){
		var myUl=document.getElementById('ul10').src;
	}
	else if(runClk==11){
		var myUl=document.getElementById('ul11').src;
	}
	else if(runClk==12){
		var myUl=document.getElementById('ul12').src;
	}
	else if(runClk==13){
		var myUl=document.getElementById('ul13').src;
	}
	else if(runClk==14){
		var myUl=document.getElementById('ul14').src;
	}
	else if(runClk==15){
		var myUl=document.getElementById('ul15').src;
	}

		var myUlLen=myUl.length;
		var myUlLenFi=myUlLen-10;
		var myUlFi=myUl.substring(myUlLenFi,myUlLen);

		if(runClk == 16) {
			runClk = 1;
			continue;
		}
		else if(myUlFi === 'img/f1.png'){
			runUlf1();
		}
		else if(myUlFi === 'img/f2.png'){
			runUlf2();
		}
		else if(myUlFi === 'img/up.png'){
			moFwdRun();
		}
		else if(myUlFi === 'img/rl.png'){
			moRlRun();
		}
		else if(myUlFi === 'img/rr.png'){
			moRrRun();
		}
		else if(myUlFi === 'img/gr.png'){
			moGrRun();
		}
		else if(myUlFi === 'img/f1.png'){
			moF1Run();
		}
		else if(myUlFi === 'img/f2.png'){
			moF2Run();
		}
		runClk++;
		setTimeout(runUl, 500);
	}
}

function rtncw() {
	if(curDeg==0) {
		document.getElementById(curLoc).style.transform='rotate(90deg)';
		curDeg=90;
	}
	else if(curDeg==90) {
		document.getElementById(curLoc).style.transform='rotate(180deg)';
		curDeg=180;
	}
	else if(curDeg==180) {
		document.getElementById(curLoc).style.transform='rotate(270deg)';
		curDeg=270;
	}
	else if(curDeg==270) {
		document.getElementById(curLoc).style.transform='rotate(0deg)';
		curDeg=0;
	}
}

function rtnccw() {
	if(curDeg==0) {
		document.getElementById(curLoc).style.transform='rotate(270deg)';
		curDeg=270;
	}
	else if(curDeg==90) {
		document.getElementById(curLoc).style.transform='rotate(0deg)';
		curDeg=0;
	}
	else if(curDeg==180) {
		document.getElementById(curLoc).style.transform='rotate(90deg)';
		curDeg=90;
	}
	else if(curDeg==270) {
		document.getElementById(curLoc).style.transform='rotate(180deg)';
		curDeg=180;
	}
}

function grbAud(){
	document.getElementById("grbAud").play();
}

function moveAud(){
	document.getElementById("grbAud").play();
}

function myTest() {
	document.getElementById(curLoc).style.transform="rotate(90deg)";
	console.log("testRuns");
}
