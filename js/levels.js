var curLev;
var rowG=0,colG=0; // global row n column vals

// level structure maker
function levMkr(row,col) {
  var matrix = "";
  //matrix = NULL; !-not working,not needed
  var i,j;
  rowG=row;
  colG=col;
  //matrix += `<table id="dsp">`;
  for(i=1;i<=row;i++) {
    matrix += `<tr>`;

    for(j=1;j<=col;j++) {
      matrix += `<td>
                  <img src="img/ti.png" id="`;
      matrix +=	""+i+""+j +"i";
      matrix +=	`" />
                </td>`;
    }
    matrix += `</tr>`;
  }
  //matrix += `</table>`;
  document.getElementById("dsp").innerHTML = matrix;
  document.getElementById(curLoc).src="img/uf.png";
  document.getElementById(curLoc).style.transform=`rotate(`+curDeg+`deg)`;
}

// user input number changer
function ulMkr(numb,dId) { // MAX(numb)=15 because of runUl()
  var matrix = "";
  var i;
  for(i=1;i<=numb;i++) {
		matrix += `<img id="`;
    if (dId == "ulF1") {
      matrix +=	"1ul"+i;
    }
    else if (dId == "ulF2") {
      matrix +=	"2ul"+i;
    }
    else {
		   matrix += "ul"+i;
    }
    matrix += `" src="img/ti.png" />`;
  }
  if (dId == "ulF1") {
    document.getElementById("f1t").innerHTML = numb;
  }
  else if (dId == "ulF2") {
    document.getElementById("f2t").innerHTML = numb;
  }
  else {
    document.getElementById("mt").innerHTML = numb;
  }
  document.getElementById(dId).innerHTML = matrix;
}

function levSel () {
  try {
    retryLev();
    var l = "lev"+document.getElementById("levIp").value+""+document.getElementById("stgIp").value;
    eval(l+"()");
  }
  catch {
    //window.alert(`"Invalid Input \n available levels from 1 to `+avlLev+`."`);
  }
}

/* old levChanger,before dynamic level structure implimantation
function levChanger() {
  // initilizing game display
  for(var i=1;i<=5;i++){
    for(var j=1;j<=5;j++){
      var preI=i+"";
      var preJ=j+"";
      var tid= preI+preJ+'i';
      document.getElementById(tid).src="img/ti.png";
    }
  }
  // initilizing user i/ps display
  // !-not refreshing func.1,2's i/ps
  for(var k=1;k<=15;k++){
    var tul="ul"+k;
    document.getElementById(tul).src="img/ti.png";
    document.getElementById(tul).src="img/ti.png";
    document.getElementById(tul).src="img/ti.png";
  }
  // ufo location
  document.getElementById(curLoc).src="img/uf.png";
}
*/

//##################################tbc###########################
// for user level making functining
function getVal() {
  var rowL = document.getElementById("rowIp").innerHTML;
  var colL = document.getElementById("colIp").innerHTML;

}
