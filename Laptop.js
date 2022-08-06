Status = "";
laptop_image = "";
objects=[];

function preload(){
    laptop_image = loadImage("https://media.istockphoto.com/vectors/set-of-blank-screens-with-laptop-tablet-phone-vector-id1245120028?k=20&m=1245120028&s=612x612&w=0&h=_yMMv_VmUElHxtLCQuiO_7hMwlh8K_UcEQlIVyaqClc=");
}

function setup(){
    canvas = createCanvas(640,400);
    canvas.position(500,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(laptop_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(laptop_image,0,0,640,400);
    if(Status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 14, objects[i].y - 175);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 14, objects[i].y - 175, objects[i].width - 2326, objects[i].height - 2850);
        }
    }
        }
