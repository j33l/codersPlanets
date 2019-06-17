<<<<<<< HEAD
/* structure to make new levels
function lev<levNumber><stageCharector> () {
  curLev=lev<levNumber>;
  avlLev=curLev; //no change
  curLoc="32i"; //ufo location
  curDeg=0; //ufo degree

  levMkr(7,7); //level size
  ulMkr(12,"ulMain"); //main function input number
  ulMkr(0,"ulF1"); //function2 input number
  ulMkr(0,"ulF2"); //function1 input number

  trapMaker("11i"); //trap maker

	dimMaker("56i"); //dimond maker
}
*/

function lev0C() { //for test
  curLev=0;
  avlLev++;
  curLoc="22i";
  curDeg=90;

  //levChanger();
  levMkr(6,5);
  ulMkr(5,"ulMain");
  ulMkr(5,"ulF1");
  ulMkr(5,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("25i");
  trapMaker("31i");
  trapMaker("32i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("55i");
  trapMaker("61i");
  trapMaker("62i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
	dimMaker("23i");
	dimMaker("52i");
}


function lev1B() {
  curLev=1;
  avlLev++;
  curLoc="34i";
  curDeg=270;

  //levChanger();
  levMkr(4,4);
  ulMkr(4,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
	trapMaker("13i");
	trapMaker("14i");
  trapMaker("21i");
  trapMaker("22i");
  trapMaker("23i");
  trapMaker("24i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("44i");
	dimMaker("31i");
}

function lev2B() {
  curLev=2;
  avlLev++;
  curLoc="25i";
  curDeg=270;

  //levChanger();
  levMkr(5,5);
  ulMkr(8,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("31i");
  trapMaker("33i");
  trapMaker("34i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("43i");
  trapMaker("44i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("52i");
  trapMaker("53i");
  trapMaker("54i");
  trapMaker("55i");
	dimMaker("23i");
	dimMaker("42i");
}

function lev3B() {
  curLev=3;
  avlLev++;
  curLoc="22i";
  curDeg=90;

  //levChanger();
  levMkr(6,5);
  ulMkr(11,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("25i");
  trapMaker("31i");
  trapMaker("32i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("55i");
  trapMaker("61i");
  trapMaker("62i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
	dimMaker("24i");
	dimMaker("52i");
}

function lev4B() {
  curLev=4;
  avlLev++;
  curLoc="32i";
  curDeg=0;

  //levChanger();
  levMkr(7,7);
  ulMkr(12,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("16i");
  trapMaker("17i");

  trapMaker("21i");
  trapMaker("27i");

  trapMaker("31i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("37i");

  trapMaker("41i");
  trapMaker("43i");
  trapMaker("44i");
  trapMaker("45i");
  trapMaker("47i");

  trapMaker("51i");
  trapMaker("53i");
  trapMaker("54i");
  trapMaker("55i");
  trapMaker("57i");

  trapMaker("61i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
  trapMaker("67i");

  trapMaker("71i");
  trapMaker("72i");
  trapMaker("73i");
  trapMaker("74i");
  trapMaker("75i");
  trapMaker("76i");
  trapMaker("77i");

	dimMaker("24i");
	dimMaker("56i");
}

/*
function graberFun(var ufoTile,var nxtTile) {
  var nxtSrc=document.getElementById(nxtTile).src;
  var nxtImg=nxtSrc.substring(nxtSrc.length-6,nxtSrc.length);
  var funClk;
  var ulId;
  switch (curFun) {
    case 1:
      funClk=runClk1;
      ulId="ul";
      break;
    case 2:
      funClk=runClk2;
      ulId="2ul";
      break;
    default:
      funClk=runClk;
      ulId="ul";
  }
  var ulSrc=document.getElementById(`ulId+funClk`).src;
  var ulImg=ulSrc.substring(ulSrc.length-6,ulSrc.length);
  if (nxtImg !== "la.png" && nxtImg !== "di.png") {
    document.getElementById(nxtTile).src="uf.png";
		document.getElementById(nxtTile).style.transform='rotate(270deg)';
		document.getElementById(tiTile).src="ti.png";
		curLoc=nxtTile;
		moveAud();
  }
  else if(nxtImg !== "la.png" && nxtImg === "di.png" && ulImg !== "gr.png") {
    document.getElementById(nxtTile).src="uf.png";
    document.getElementById(nxtTile).style.transform='rotate(270deg)';
    document.getElementById(tiTile).src="ti.png";
    preImg=ufo;
    curLoc=nxtTile;
    moveAud();
  }
}

function1 moLeRun () {
  var ufoTile = curLoc; // current id
  var ufoTileMid = eval(ufoTile.substring(1,2)); // col. no.
  // nxt tile id
  var nxtTile = eval(ufoTile.substring(0,1))+eval(ufoTile.substring(1,2)-1)+"i";
  graberFun(ufoTile,nxtTile); // string ids
}
*/
=======
/* structure to make new levels
function lev<levNumber><stageCharector> () {
  curLev=lev<levNumber>;
  avlLev=curLev; //no change
  curLoc="32i"; //ufo location
  curDeg=0; //ufo degree

  levMkr(7,7); //level size
  ulMkr(12,"ulMain"); //main function input number
  ulMkr(0,"ulF1"); //function2 input number
  ulMkr(0,"ulF2"); //function1 input number

  trapMaker("11i"); //trap maker

	dimMaker("56i"); //dimond maker
}
*/

function lev0B() { //for test
  curLev=0;
  avlLev++;
  curLoc="22i";
  curDeg=90;

  //levChanger();
  levMkr(6,5);
  ulMkr(5,"ulMain");
  ulMkr(5,"ulF1");
  ulMkr(5,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("25i");
  trapMaker("31i");
  trapMaker("32i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("55i");
  trapMaker("61i");
  trapMaker("62i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
	dimMaker("23i");
	dimMaker("52i");
}


function lev1B() {
  curLev=1;
  avlLev++;
  curLoc="34i";
  curDeg=270;

  //levChanger();
  levMkr(4,4);
  ulMkr(4,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
	trapMaker("13i");
	trapMaker("14i");
  trapMaker("21i");
  trapMaker("22i");
  trapMaker("23i");
  trapMaker("24i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("44i");
	dimMaker("31i");
}

function lev2B() {
  curLev=2;
  avlLev++;
  curLoc="25i";
  curDeg=270;

  //levChanger();
  levMkr(5,5);
  ulMkr(8,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("31i");
  trapMaker("33i");
  trapMaker("34i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("43i");
  trapMaker("44i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("52i");
  trapMaker("53i");
  trapMaker("54i");
  trapMaker("55i");
	dimMaker("23i");
	dimMaker("42i");
}

function lev3B() {
  curLev=3;
  avlLev++;
  curLoc="22i";
  curDeg=90;

  //levChanger();
  levMkr(6,5);
  ulMkr(11,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("21i");
  trapMaker("25i");
  trapMaker("31i");
  trapMaker("32i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("41i");
  trapMaker("42i");
  trapMaker("43i");
  trapMaker("45i");
  trapMaker("51i");
  trapMaker("55i");
  trapMaker("61i");
  trapMaker("62i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
	dimMaker("24i");
	dimMaker("52i");
}

function lev4B() {
  curLev=4;
  avlLev++;
  curLoc="32i";
  curDeg=0;

  //levChanger();
  levMkr(7,7);
  ulMkr(12,"ulMain");
  ulMkr(0,"ulF1");
  ulMkr(0,"ulF2");

  trapMaker("11i");
  trapMaker("12i");
  trapMaker("13i");
  trapMaker("14i");
	trapMaker("15i");
  trapMaker("16i");
  trapMaker("17i");

  trapMaker("21i");
  trapMaker("27i");

  trapMaker("31i");
  trapMaker("33i");
  trapMaker("35i");
  trapMaker("37i");

  trapMaker("41i");
  trapMaker("43i");
  trapMaker("44i");
  trapMaker("45i");
  trapMaker("47i");

  trapMaker("51i");
  trapMaker("53i");
  trapMaker("54i");
  trapMaker("55i");
  trapMaker("57i");

  trapMaker("61i");
  trapMaker("63i");
  trapMaker("64i");
  trapMaker("65i");
  trapMaker("67i");

  trapMaker("71i");
  trapMaker("72i");
  trapMaker("73i");
  trapMaker("74i");
  trapMaker("75i");
  trapMaker("76i");
  trapMaker("77i");

	dimMaker("24i");
	dimMaker("56i");
}

/*
function graberFun(var ufoTile,var nxtTile) {
  var nxtSrc=document.getElementById(nxtTile).src;
  var nxtImg=nxtSrc.substring(nxtSrc.length-6,nxtSrc.length);
  var funClk;
  var ulId;
  switch (curFun) {
    case 1:
      funClk=runClk1;
      ulId="ul";
      break;
    case 2:
      funClk=runClk2;
      ulId="2ul";
      break;
    default:
      funClk=runClk;
      ulId="ul";
  }
  var ulSrc=document.getElementById(`ulId+funClk`).src;
  var ulImg=ulSrc.substring(ulSrc.length-6,ulSrc.length);
  if (nxtImg !== "la.png" && nxtImg !== "di.png") {
    document.getElementById(nxtTile).src="uf.png";
		document.getElementById(nxtTile).style.transform='rotate(270deg)';
		document.getElementById(tiTile).src="ti.png";
		curLoc=nxtTile;
		moveAud();
  }
  else if(nxtImg !== "la.png" && nxtImg === "di.png" && ulImg !== "gr.png") {
    document.getElementById(nxtTile).src="uf.png";
    document.getElementById(nxtTile).style.transform='rotate(270deg)';
    document.getElementById(tiTile).src="ti.png";
    preImg=ufo;
    curLoc=nxtTile;
    moveAud();
  }
}

function1 moLeRun () {
  var ufoTile = curLoc; // current id
  var ufoTileMid = eval(ufoTile.substring(1,2)); // col. no.
  // nxt tile id
  var nxtTile = eval(ufoTile.substring(0,1))+eval(ufoTile.substring(1,2)-1)+"i";
  graberFun(ufoTile,nxtTile); // string ids
}
*/
>>>>>>> master
