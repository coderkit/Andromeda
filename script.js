if (annyang) {
	var commands = {
		"hello" : function() {
			alert("worked?");
		}
	}
	annyang.addCommands(commands);
	annyang.start();
	alert("started?");
}