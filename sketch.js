var ball;
var pos, db;

function setup(){
    createCanvas(500,500);
    db = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosRef = db.ref('Ball/Position');
    ballPosRef.on("value", (data) => {
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref('Ball/Position').set({
    x : pos.x + x,
    y : pos.y + y
    });
}
