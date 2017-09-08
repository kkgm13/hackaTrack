	// Set Hackathon Countdown Date (As the End of Hacking via DevPost)
	var countDownDate = new Date("Jan 1, 2018 00:00:00").getTime(); //Format is (Month dd, yyyy hh:mm:ss)

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get Current Date and Time
		var now = new Date().getTime();
		
		// Calculate the distance between now and the count down date
		var distance = countDownDate - now;
		
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		// Output the result in an element with id="demo"
			//Day Left
		if (days == 0) {
			document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
		}
			//Minutes Left
		if (hours == 0) {
			document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
		} 
			//Seconds Left	
		if (minutes == 0) {
			document.getElementById("demo").innerHTML = seconds + "s ";
		} else {
			//Standard
			document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		}
		
		//State that the Hackathon has finished
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = ".HACK ENDED!!";
				//Resizing Testing
			//document.getElementById("demo").innerHTML = "777d 77h 77m 77s!!";
		}
	}, 1000);

