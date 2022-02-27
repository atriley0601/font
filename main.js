var difference=0;
leftwristx=0;
rightwristx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(450, 450);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}
function draw(){
    background("grey");
    textSize(difference);
    fill ("black");
    text("mr frog",50,200);
}
function modelLoaded(){
    console.log('PoseNet IS Initialized!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        difference=leftwristx-rightwristx;
    }
}
