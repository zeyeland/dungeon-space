astroidArray = [];

var newAstroid;

function makeAstroid(){
    var objLoader = new THREE.OBJLoader();
    var matLoader = new THREE.MTLLoader();
    //var newAstroid;
    matLoader.load('models/rock/rock_3.mtl', function(materials){
    materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load('models/rock/rock_3.obj', function(obj){
            newAstroid = obj;
            astroidArray.push(obj)
            obj.scale.x = 100;
            obj.scale.y = 100;
            obj.scale.z = 100;
            
            obj.position.x = 6;
            obj.position.y = 0;
            obj.position.z = 790;
            addMesh(obj);
        });
    });
    //we need to set the new astroids positions
}

makeAstroid();

//this functions will rotate and spin rocks
function orbitRocks(event){
    newAstroid.position.x -= 5;
    console.log(newAstroid.getWorldPosition());
}

//this functions will handle how astroids float and change x y positions

//this functions will handle collisions between the focus astroid and the spaceship