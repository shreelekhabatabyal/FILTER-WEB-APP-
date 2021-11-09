nose_x = 0;
nose_y = 0;

function preload() {
    img = loadImage('https: //w7.pngwing.com/pngs/453/238/png-transparent-man-s-mustache-moustache-beard-product-object-thumbnail.png');
    console.log("hi")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);

}

function gotPoses(results) {
    console.log(results);
    nose_x = results[0].pose.nose.x - 50;
    nose_y = results[0].pose.nose.y - 60;
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    // circle(nose_x, nose_y, 20)
    image(clown_image, nose_x, nose_y, 55, 50);

}

function take_snaptop() {
    save("my_Cool_Img.png")
}

function modelLoaded() {
    console.log("model_loaded");
}