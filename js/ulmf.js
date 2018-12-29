// main func. i/p Runner
// (NEW)
function runUl() {
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
	var ulF1=document.getElementById("f1t").innerHTML;
	if(runClk1 <= ulF1){
      var mou = "1ul" + runClk1;
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
    		runClk1++;
        setTimeout(runUlf1, 500);
  }
}

// func.2 i/p Runner
// (NEW)
function runUlf2() {
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
