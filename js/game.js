/* proj. JS(webGame) date: dec 2017
* last visit: dec 2018
*	cdr: zk n some members of team studity
*	4 fun n lea., ProsedurOrieantedProgramming approch
*	dev.'s contack email: zk@jptl.rf.gd
*/

var clk=1; // main func.'s
var clk1=1; // func.1's
var clk2=1; // func.2's
var selfun=0; // func. panel Selector

var riClk=1; // right
var leClk=1; //left
var upClk=1; // up
var doClk=1; // odwn

var runClk=1; // main func.'s
var runClk1=1; // func.1's
var runClk2=1; // func.2's

var curLoc=""; // ufo's location
var preImg=""; // previous loc. content
var curDeg=0; // ufo's degree
var avlLev=0; // available levels

var point=0;
var bg=1; // music on/off
var mnu=1; // three line menu on/off

var d = 0; //dim index
var allDims = []; //all dim.s of cur. lev.

// refreshing current level
function retryLev() {
	//	levSel();
	// initilizing all clocks/clicks
	clk=1;
	clk1=1;
	clk2=1;

	leClk=1;
	upClk=1;
	doClk=1;
	riClk=1;

	runClk=1;
	runClk1=1;
	runClk2=1;

	curDeg=0;
	point=0;

	d = 0;
	//allDims = NULL;
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

// select main func. i/p panel
function selulm(){
	document.getElementById("mainFuntxt1").style.color="red";
	document.getElementById("mainFuntxt2").style.color="red";
	document.getElementById("Fun1txt1").style.color="blue";
	document.getElementById("Fun1txt2").style.color="blue";
	document.getElementById("Fun2txt1").style.color="blue";
	document.getElementById("Fun2txt2").style.color="blue";
	selfun=0;
}

// select func.1 i/p panel
function selulf1(){
	selfun=1;
	document.getElementById("mainFuntxt1").style.color="blue";
	document.getElementById("mainFuntxt2").style.color="blue";
	document.getElementById("Fun1txt1").style.color="red";
	document.getElementById("Fun1txt2").style.color="red";
	document.getElementById("Fun2txt1").style.color="blue";
	document.getElementById("Fun2txt2").style.color="blue";
}

// select func.2 i/p panel
function selulf2(){
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
	window.alert("Welcome To Coder\'s Planet.\nUse your logic to grab all dimonds\nusing Blue UFO");
}

// for loop to check border
// for every level make saperate html page

function trapMaker(myid) {
	document.getElementById(myid).src="img/la.png";
}

function dimMaker(myid1) {
	document.getElementById(myid1).src="img/di.png";
	allDims[d++] = myid1;
	document.getElementById("maxPnt").innerHTML=allDims.length;
}

// moves ufo left
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
		for (var o = 0; o < allDims.length; o++) {
			if (curLoc == allDims[o]) {
				document.getElementById(tiTile).src="img/di.png";
				document.getElementById(tiTile).style.transform='rotate(0deg)';
				console.log("333333333");
				break;
			}
			else {
				document.getElementById(tiTile).src="img/ti.png";
			}
		}
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}
	leClk++;
}

// moves ufo up
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
		for (var o = 0; o < allDims.length; o++) {
			if (curLoc == allDims[o]) {
				document.getElementById(tiTile).src="img/di.png";
				document.getElementById(tiTile).style.transform='rotate(0deg)';
				console.log("333333333");
				break;
			}
			else {
				document.getElementById(tiTile).src="img/ti.png";
			}
		}
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}
	upClk++;
}


// moves ufo down
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
		for (var o = 0; o < allDims.length; o++) {
			if (curLoc == allDims[o]) {
				document.getElementById(tiTile).src="img/di.png";
				document.getElementById(tiTile).style.transform='rotate(0deg)';
				console.log("333333333");
				break;
			}
			else {
				document.getElementById(tiTile).src="img/ti.png";
			}
		}
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}
	doClk++;
}


// moves ufo right
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
		for (var o = 0; o < allDims.length; o++) {
			if (curLoc == allDims[o]) {
				document.getElementById(tiTile).src="img/di.png";
				document.getElementById(tiTile).style.transform='rotate(0deg)';
				console.log("333333333");
				break;
			}
			else {
				document.getElementById(tiTile).src="img/ti.png";
			}
		}
		curLoc=ufoTile;
		moveAud();
		console.log("ufoTile->>>"+ufoTile);
		console.log("curLoc->>>"+curLoc);
	}
	console.log("moRi"+"ufoTile"+ufoTile);
	riClk++;
}

// moves ufo forward
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

// rotate ufo anticlock wise
function moRlRun() {
	rtnccw();
}

// rotate ufo clock wise
function moRrRun() {
	rtncw();
}

// to grab dimonds !-not working
function moGrRun() {
	for (var o = 0; o < allDims.length; o++) {
		if (curLoc == allDims[o]) {
			point++;
			document.getElementById("pnt").innerHTML=point;
			grbAud();
			allDims[o] = "";
		}
	}
}

// user i/p indicator forward
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

// user i/p indicator rotate left
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

// user i/p indicator rotate right
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

// user i/p indicator grabbing !-not working
function moGr() {
	document.getElementById("ul"+clk).src="img/gr.png";
	clk++;
}

// user i/p indicator func.1
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

// user i/p indicator func.2
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
