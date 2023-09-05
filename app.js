const hoursSpan = document.getElementById('hours');
const minSpan = document.getElementById('min');
const secSpan = document.getElementById('sec');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const stopBtn = document.getElementById('stopBtn');
const laps = document.getElementById('laps');

let hours = 0,
    minutes = 0,
    seconds = 0;

    var stopwatch;
    startBtn.addEventListener("click", () => {
    	startBtn.style.display = "none";
    	stopBtn.style.display = "inline-block";
    	lapBtn.style.display = "inline-block";

    	stopwatch = setInterval(() => {
    		seconds++;
    		if (seconds == 60) {
    			seconds = 0;
    			minutes++;
    		}
    		if(minutes == 60){
    			minutes = 0;
    			hours++;
    		}
    		if (hours <= 9) hoursSpan.innertext = "0" + hours + " : ";
    		else hoursSpan.innertext = hours + " : ";
    		if (minutes <= 9) minSpan.innerText = "0" + minutes + " : ";
    		else minSpan.innerText = minutes + " : ";
    		if (seconds <= 9) secSpan.innerText = "0" + seconds;
    		else secSpan.innerText = seconds;
  }, 1000);
});

    lapBtn.addEventListener("click",() => {
    	const lap = document.createElement("div");
    	lap.innerText = hours+ " : "+minutes +" : " + seconds;
    	laps.appendChild(lap);
    });

    stopBtn.addEventListener("click", () => {

    	startBtn.style.display = "inline-block";
    	stopBtn.style.display = "none";
    	lapBtn.style.display = "none";

    	hoursSpan.innerText = "00 : ";
  		minSpan.innerText = "00 : ";
  		secSpan.innerText = "00";

  	hour = 0;
    minutes = 0;
    seconds = 0;

    clearInterval(stopwatch);

    laps.innerHTML = "<p>Laps-</P>";
    });

    