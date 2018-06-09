const name = "spaceship";
//this loads when script is called ************8
loadMesh('spaceship', function(obj){

    obj.scale.x = .25;
    obj.scale.y = .25;
    obj.scale.z = .25;

    obj.rotation.x = 1.55;
    obj.rotation.y = 4.7 ;
    obj.rotation.z = 0//1.5;

    obj.position.x = -1100;
    obj.position.y = 0;
    obj.position.z = 790;



    
    addMesh(obj);
});

function addMesh(mesh){
    scene.add(mesh);
    console.log(mesh.getWorldPosition());
}

var spaceshipPlayer;

function loadMesh(name, callback){
    var objLoader = new THREE.OBJLoader();
    var matLoader = new THREE.MTLLoader();
    matLoader.load('models/space-shuttle-orbiter.mtl', function(materials){
       materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load('models/space-shuttle-orbiter.obj', function(obj){
            spaceshipPlayer = obj;
            callback(obj);
        });
    });
}
// x and y and z positions and rotations for lanes PLAYER1
var lane1 = [ -14, -.2, 790, 1.55 , (4.7+.5) , 0]; 
var lane2 = [ -12.5, -3.1, 790, 1.55 , (4.7+.5) , 0];  
var lane3 = [ -11 , -6 , 790, 1.55 , (4.7+.5) , 0]; 
var lane4 = [ -9.5, -8.9, 790, 1.55 , (4.7+.5) , 0]; 
var lane5 = [ -8, -11.8, 790, 1.55 , (4.7+.5) , 0]; 

playerOneLanes = [
    [ -1100, 560, 790, 1.55 , (4.7+.5) , 0],
    [ -1100, 280, 790, 1.55 , (4.7+.5) , 0],
    [ -1100 , 0 , 790, 1.55 , (4.7+.5) , 0],
    [ -1100, -280, 790, 1.55 , (4.7+.5) , 0],
    [ -1100, -560, 790, 1.55 , (4.7+.5) , 0]
];

var moveShip = false;
var shipMovePosition;

function moveSpaceship(event){
    var clickY = event.clientY;   
    //var clickY = event.touches[0].clientY;

    console.log(clickY);
    var fullHeight =  window.innerHeight;
    var rowHeight = fullHeight/5;

    if(clickY < rowHeight*1){
        moveShip = true;
        shipMovePosition = 0;
        //changeSpaceshipPosition(0);
    } else
    if(clickY < rowHeight*2){
        moveShip = true;
        shipMovePosition = 1;
        //changeSpaceshipPosition(1);
    }else
    if(clickY < rowHeight*3){
        moveShip = true;
        shipMovePosition = 2;
        //changeSpaceshipPosition(2);
    }else
    if(clickY < rowHeight*4){
        moveShip = true;
        shipMovePosition = 3;
        //changeSpaceshipPosition(3);
    }else
    if(clickY <= rowHeight*5){
        moveShip = true;
        shipMovePosition = 4;
        //changeSpaceshipPosition(4);
    }

} 

//arrayIndexPosition aka shipMovePosition variable
function changeSpaceshipPosition(arrayIndexPosition){
    var desirableX = playerOneLanes[arrayIndexPosition][0];
    var desirableY = playerOneLanes[arrayIndexPosition][1];

    var notEqualX = true;
    var notEqualY = true;

        if( desirableY != spaceshipPlayer.position.y.toFixed(2) ){
            if( desirableY > spaceshipPlayer.position.y){
                spaceshipPlayer.position.y += 10;
                //console.log("This is position Y1: " + spaceshipPlayer.position.y);
            }
            else if( desirableY < spaceshipPlayer.position.y){
                spaceshipPlayer.position.y -= 10;
                //console.log("This is position Y2: " + spaceshipPlayer.position.y);
            }
        }

        if( desirableX != spaceshipPlayer.position.x.toFixed(1) ){
            if( desirableX > spaceshipPlayer.position.x){
                spaceshipPlayer.position.x += .05;
                //console.log("This is position X1: " + spaceshipPlayer.position.x);
            }
            else if( desirableX < spaceshipPlayer.position.x){
                spaceshipPlayer.position.x -= .05;
                //console.log("This is position X2: " +spaceshipPlayer.position.x);
            }
        }
            if( desirableY == spaceshipPlayer.position.y.toFixed(2) ){
                notEqualY = false;
                spaceshipPlayer.position.y = playerOneLanes[arrayIndexPosition][1];

            }

            if( desirableX == spaceshipPlayer.position.x.toFixed(1) ){
                notEqualX = false;
                spaceshipPlayer.position.x = playerOneLanes[arrayIndexPosition][0];

            }

            if( notEqualX == false && notEqualY == false){
                moveShip = false;

            }

} //end of function 



function moveSpaceship2(){
    spaceshipPlayer.position.x = 0;
    spaceshipPlayer.position.y = 0;
}