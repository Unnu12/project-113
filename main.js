function preload(){

}

function setup(){
    canvas = createCanvas(650 , 500);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.size (300,300);
    video.hide();

}

function draw(){

    fill('#4da843');
    stroke('#4da843');
    rect(30, 40, 580, 30 );
    rect(30, 430, 580, 30 );
    rect(30, 40, 30, 400 );
    rect(570, 40, 30, 400 );
    fill('#ff0000');
    stroke('#ff0000');
    circle(50, 50, 70);   
    circle(590, 50, 70);
    circle(590, 440, 70);
    circle(50, 440, 70);

    image(video,230,150,220,200);
    
}

function take_snapshot(){
    save("frame.png")
}
