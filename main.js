mustache_noseX = 0;
mustache_noseY = 0;
lip_noseX = 0;
lip_noseY = 0;
spec_noseX = 0;
spec_noseY = 0;
crown_noseX = 0;
crown_noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/L5YDVNsF/efeb60-e2e6de10f4fd4f3aa974b5f9c5364c4a-mv2.webp");
    lip = loadImage("https://i.postimg.cc/bN19g6Pp/red-lips-png-red-lipstick-is-timeless-and-will-probably-lip-gloss-115632207295qxnqhlwra.png");
    spec = loadImage("https://i.postimg.cc/tCdFWYdg/327-3275501-sunglasses-love-sticker-by-csak-for-ios-transparent.jpg");
    crown = loadImage("https://i.postimg.cc/fRry9NPL/download.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustache_noseX, mustache_noseY, 70, 40);
    image(lip, lip_noseX, lip_noseY, 40, 20);
    image(spec, spec_noseX, spec_noseY, 70, 40);
    image(crown, crown_noseX, crown_noseY, 70, 45);
}

function take_snapshot() {
    save('filterimg.png');
}

function modelLoaded() {
    console.log("PoseNet is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mustache_noseX = results[0].pose.nose.x - 33;
        mustache_noseY = results[0].pose.nose.y - 10;
        lip_noseX = results[0].pose.nose.x - 18;
        lip_noseY = results[0].pose.nose.y + 15;
        spec_noseX = results[0].pose.nose.x - 33;
        spec_noseY = results[0].pose.nose.y - 40;
        crown_noseX = results[0].pose.nose.x - 35;
        crown_noseY = results[0].pose.nose.y - 120;
    }
}
