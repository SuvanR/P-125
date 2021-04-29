noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist X = " + leftWristX + "rightWrist X = " + rightWristX + "Difference = " + difference);
    }
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}


function draw(){
    background('#FFD700');

    document.getElementById("font_side").innerHTML = "width and height of the Text is " + difference + "px";
    textSize(difference);
    fill("#0000FF");
    text('Suvan',noseX,noseY);

}
