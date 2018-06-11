astroidArray = [];

rockLanes = [
    [ 1200, 560, 790],
    [ 1200, 280, 790],
    [ 1200 , 0 , 790],
    [ 1200, -280, 790],
    [ 1200, -560, 790] 
];


var newAstroid01 = new makeAstroid(2,rockLanes[2][0],rockLanes[2][1]);
var newAstroid02 = new makeAstroid(0,rockLanes[0][0],rockLanes[0][1]);
var newAstroid03 = new makeAstroid(1,rockLanes[1][0],rockLanes[1][1]);

function generateAstroid(){

    for(var xyz =0; xyz < 25; xyz++){
        var randomX = Math.floor((Math.random() * 8000) );; // helps astroids spawn at random x locations
        var randomLane = Math.floor((Math.random() * 5) );
        var newAstroid = new makeAstroid(randomLane,rockLanes[randomLane][0] + randomX,rockLanes[randomLane][1]);
    }

}

function makeAstroid(laneNumber,x,y){
    var objLoader = new THREE.OBJLoader();
    var matLoader = new THREE.MTLLoader();
    this.laneNumber = laneNumber;
    this.x = x;
    this.y = y;
    var parentThis = this;
    this.thisOBJECT;
    astroidArray.push(this);
    this.update = function(){
        if(parentThis.thisOBJECT != null && parentThis.thisOBJECT != false){
           checkRockCollision(parentThis);
            orbitRocks(parentThis.thisOBJECT); 
        }    
    }
    matLoader.load('models/rock/rock_3.mtl', function(materials){
    materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load('models/rock/rock_3.obj', function(obj){

            //newAstroid = obj;
            parentThis.thisOBJECT = obj;
        
            
            collidableMeshList.push(obj);
            obj.scale.x = 100;
            obj.scale.y = 100;
            obj.scale.z = 100;
            
            obj.position.x = parentThis.x;
            obj.position.y = parentThis.y;
            obj.position.z = 790;
            addMesh(obj);
        });
    });
    //we need to set the new astroids positions
}

//makeAstroid();

//this functions will rotate and spin rocks
function orbitRocks(thisRock){
    if(thisRock != null && thisRock != false){
        thisRock.position.x -= 8;
    }
    
    //console.log(thisRock.thisOBJECT.position.x);
}

//this functions will handle how astroids float and change x y positions

//this functions will handle collisions between the focus astroid and the spaceship
function checkRockCollision(thisRock){
    //astroid hits ship at x = -856
    if(thisRock != null && thisRock != false){
        

        if(thisRock.thisOBJECT.position.x < -865 && thisRock.thisOBJECT.position.x > -1150 && thisRock.laneNumber == spaceshipPlayerLanePosition){
            //console.log("ROCK is Crashing the spaceship")
            //console.log(spaceshipPlayerLanePosition);
            //console.log(spaceshipPlayer.position.y);
            //console.log(thisRock.laneNumber);
            //astroidArray.splice(rockINarray,rockINarray+1);
            delete astroidArray[rockINarray];
            if(shouldMoveAstronaut00 == false){
                shouldMoveAstronaut00 = true;
                shouldMoveAstronaut = true;
            }
            
        }
    
        
        
        if( thisRock.thisOBJECT.position.x < -1375){
            var rockINarray = astroidArray.indexOf(thisRock);
            //astroidArray.splice(rockINarray,rockINarray+1);
            delete astroidArray[rockINarray];
            playerPoints ++;
        }


    }

}
