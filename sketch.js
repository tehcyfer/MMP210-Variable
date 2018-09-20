// Cloud Variables

var cloudOne = 200;
var cloudTwo = 150;
var cloudThree = 300;
var cloudFour = 100;
var CloudWidth = 200;
var CloudHeight = 50;

function setup() {
    createCanvas(500,500);
}

function draw() {
    //sun
    background(0, 201, 255);
    fill('yellow');
    ellipse(250, 250, 200, 200);
    
    //clouds
	fill('white');
    ellipse(cloudOne, 100, CloudWidth, CloudHeight);
    ellipse(cloudTwo, 150, CloudWidth, CloudHeight);
    ellipse(cloudThree, 400, CloudWidth, CloudHeight);
    ellipse(cloudFour, 370, CloudWidth, CloudHeight);

    //Cloud Moving Repeat
    cloudOne++;
    cloudTwo++;
    cloudThree++;
    cloudFour++;
    
	if (cloudOne > 500) { 
		cloudOne = 0;
	}
	
		if (cloudTwo > 500) { 
		cloudTwo = 0;
	}
	
		if (cloudThree > 500) { 
		cloudThree = 0;
	}
	
		if (cloudFour > 500) { 
		cloudFour = 0;
	}


}