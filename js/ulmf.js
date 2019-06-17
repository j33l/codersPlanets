/* utilized code !0not working
function runUl(var myFun=0) {
	var ipNumb="";
	var funClk=0;
	var funMou="";

	if(myFun==2) {
		ipNumb="f2t";
		funClk=runClk2;
		funMou ="2ul";
		selfun=2;
	}
	else if (myFun==1) {
		ipNumb="f1t";
		funClk=runClk1;
		funMou ="1ul";
		selfun=1;
	}
	else {
		ipNumb="mt";
		funClk=runClk;
		funMou ="ul";
		selfun=0;
	}
	var ulNumb=document.getElementById(ipNumb).innerHTML;
	console.log(ulNumb);
	if (funClk <= ulNumb) {
		var mou = funMou+""+ funClk;
		var myUl=document.getElementById(mou).src;
		var myUlLen=myUl.length;
		var myUlLenFi=myUlLen-6;
		var myUlFi=myUl.substring(myUlLenFi,myUlLen);

			if(myUlFi === 'f1.png'){
				runUl(1);
			}
			else if(myUlFi === 'f2.png'){
				runUlf2(2);
			}
			else if(myUlFi === 'up.png'){
				moFwdRun();
			}
			else if(myUlFi === 'rl.png'){
				moRlRun();
			}
			else if(myUlFi === 'rr.png'){
				moRrRun();
			}
			else if(myUlFi === 'gr.png'){
				moGrRun();
			}
			funClk++;
			setTimeout(runUl 500);
	}
	else {
		//runClk=funClk;
	}
}
*/

// main func. i/p Runner
// (NEW)
function runUl() {
	curFun=0;
	var ulMain=document.getElementById("mt").innerHTML;
	if (runClk <= ulMain) {
		var mou = "ul" + runClk;
		var myUl=document.getElementById(mou).src;
		var myUlLen=myUl.length;
		var myUlLenFi=myUlLen-10;
		var myUlFi=myUl.substring(myUlLenFi,myUlLen);

			if(myUlFi === 'img/f1.png'){
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
			runClk++;
			setTimeout(runUl, 500);
	}
}

// func.1 i/p Runner
// compressed loops (NEW)
function runUlf1() {
	curFun=1;
	var ulF1=document.getElementById("f1t").innerHTML;
	if(runClk1 <= ulF1){
      var mou = "1ul" + runClk1;
      var myUl=document.getElementById(mou).src;
			document.getElementById(mou).style.border="10px";
    	var myUlLen=myUl.length;
    	var myUlLenFi=myUlLen-10;
    	var myUlFi=myUl.substring(myUlLenFi,myUlLen);

    		if(myUlFi === 'img/f1.png'){
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
    		runClk1++;
        setTimeout(runUlf1, 500);
  }
}

// func.2 i/p Runner
// (NEW)
function runUlf2() {
	curFun=2;
	var ulF2=document.getElementById("f2t").innerHTML;
	if (runClk2 <= ulF2) {
		var mou = "2ul" + runClk2;
		var myUl=document.getElementById(mou).src;
		var myUlLen=myUl.length;
		var myUlLenFi=myUlLen-10;
		var myUlFi=myUl.substring(myUlLenFi,myUlLen);

			if(myUlFi === 'img/f1.png'){
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
			runClk2++;
			setTimeout(runUlf2, 500);
	}
}
