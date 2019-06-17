<<<<<<< HEAD
// func.1 i/p Runner
// TEST to make code small
function runUlf1() {
	for(var i=1;i<=4;i++) {
		var mou = "1ul" +i ;
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
			//setTimeout(temp, 500);
			sleep(5*1000);
	}
}

function sleep(msec) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > msec) {
			break;
		}
	}
}
=======
// func.1 i/p Runner
// TEST to make code small
function runUlf1() {
	for(var i=1;i<=4;i++) {
		var mou = "1ul" +i ;
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
			//setTimeout(temp, 500);
			sleep(5*1000);
	}
}

function sleep(msec) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > msec) {
			break;
		}
	}
}
>>>>>>> master
