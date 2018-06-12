var astronaut007;

function makeAstronaut(){
    var objLoader = new THREE.OBJLoader(loadingManager);
    var matLoader = new THREE.MTLLoader(loadingManager);

    
    matLoader.load('models/astronaut/Z2.mtl', function(materials){
    materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load('models/astronaut/Z2.obj', function(obj){

            //newAstroid = obj;
            astronaut007 = obj;
            console.log(astronaut007);
            console.log("astronaut007");
        
            
            collidableMeshList.push(obj);
            //obj.scale.x = 0;//500;
            //obj.scale.y = 0;//500;
            //obj.scale.z = 0;//500;
            
            obj.position.x = 0;
            obj.position.y = 0;
            obj.position.z = 0;
            addMesh(obj);
        });
    });
    //we need to set the new astroids positions
}

var shouldMoveAstronaut = false;
var shouldMoveAstronaut00 = false;

function moveAstronaut(){
    //want y to be -700
    //want z to be 400
    //want scale to be 700
    if(astronaut007.position.z < 400){
        astronaut007.position.z += 1;   
        astronaut007.position.y -= 1.85;//3.7;   

        astronaut007.scale.x += 1.85;//3.7; 
        astronaut007.scale.y += 1.85;//3.7; 
        astronaut007.scale.z += 1.85;//3.7; 
    }

    
        astronaut007.rotation.z += .032;   
    

    if(astronaut007.position.z >= 400){
        shouldMoveAstronaut = false; 

    }
    
}

makeAstronaut();
