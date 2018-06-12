/////GEMOTRY
var geometry5 = new THREE.SphereGeometry( 25, 32, 32 ); // first 4 planets

var geometrySUN = new THREE.SphereGeometry( 115, 32, 32 ); //sun

var geometry30 = new THREE.SphereGeometry( 70, 32, 32 );//jupitar

var geometry25 = new THREE.SphereGeometry( 50, 32, 32 );//saturn

var geometry15 = new THREE.SphereGeometry( 40 , 32, 32);//uransas and neptune

var geometry3 = new THREE.SphereGeometry( 10, 32, 32 );//pluto

/////////////////////loadBackground object whichis is a plane figure///
var geometryBox = new THREE.PlaneBufferGeometry( 3000, 3000 );
var loaderCube = new THREE.TextureLoader().load( 'textures/2k_stars.jpg' );
var materialCube = new THREE.MeshBasicMaterial( {color: 0x5F9EA0 , wireframe: false} );
var materialCube = new THREE.MeshBasicMaterial( { map: loaderCube, overdraw: 0.9 } );
var cube99 = new THREE.Mesh( geometryBox, materialCube );      
scene.add(cube99);
cube99.position.z = 0;

///////////////////////SUN//////////////////////////////
//var materialSun = new THREE.MeshBasicMaterial( {color: 0xffff00 , wireframe: true} );
var loaderSun = new THREE.TextureLoader().load( 'textures/2k_sun.jpg' );
var materialSun = new THREE.MeshBasicMaterial( { map: loaderSun, overdraw: 0.5 } );
var sun = new THREE.Mesh( geometrySUN, materialSun );
scene.add( sun );

/////////////////////////// MERCURY //////////////////////////////
//var geometry5 = new THREE.SphereGeometry( 15, 32, 32 );
var loaderMercury = new THREE.TextureLoader().load( 'textures/2k_mercury.jpg' );
var materialMercury = new THREE.MeshBasicMaterial( { map: loaderMercury, overdraw: 0.5 } );
var mercury = new THREE.Mesh( geometry5, materialMercury );
scene.add( mercury );

function orbitMercury(){      
    var floatx = Math.cos(routeCounter * 2.2) * 150;
    var floatz = Math.sin(routeCounter * 2.2) * 150;
    mercury.position.x = floatx;
    mercury.position.y = floatz;
    mercury.rotation.y += .04; 
}

/////////////////////////// VENUS //////////////////////////////
var loaderVenus = new THREE.TextureLoader().load( 'textures/venusmap.jpg' );
var materialVenus = new THREE.MeshBasicMaterial( { map: loaderVenus, overdraw: 0.5 } );
var venus = new THREE.Mesh( geometry5, materialVenus );
scene.add( venus );

function orbitVenus(){
    var floatx = Math.cos(routeCounter * 2) * 225;
    var floatz = Math.sin(routeCounter * 2) * 225;             
    venus.position.x = floatx;
    venus.position.y = floatz;
    venus.rotation.y += .04;                
}

/////////////////////////// EARTH //////////////////////////////
var loaderEarth = new THREE.TextureLoader().load( 'textures/land_ocean_ice_cloud_2048.jpg' );
//var materialEarth = new THREE.MeshBasicMaterial( {color: 0x5F9EA0 , wireframe: true} );
var materialEarth = new THREE.MeshBasicMaterial( { map: loaderEarth, overdraw: 0.5 } );
var earth = new THREE.Mesh( geometry5, materialEarth );
scene.add( earth );

function orbitEarth(){
    var floatx = Math.cos(routeCounter * 1.8 ) * 300;
    var floatz = Math.sin(routeCounter * 1.8 ) * 300;             
    earth.position.x = floatx;
    earth.position.y = floatz;
    earth.rotation.y += .04;                 
}

var loaderMars = new THREE.TextureLoader().load( 'textures/mars_1k_color.jpg' );
var materialMars = new THREE.MeshBasicMaterial( { map: loaderMars, overdraw: 0.5 } );
var mars = new THREE.Mesh( geometry5, materialMars );
scene.add( mars );

function orbitMars(){
    var floatx = Math.cos(routeCounter * 1.5 )  * 375;
    var floatz = Math.sin(routeCounter * 1.5 )  * 375;             
    mars.position.x = floatx;
    mars.position.y = floatz;
    mars.rotation.y += .04;                 
}

///////////asteroid belt should be represented.////////////////
 

///////////asteroid belt should be represented.////////////////

//////////////////////////////Jupiter/////////////////////////

var loaderJupiter = new THREE.TextureLoader().load( 'textures/2k_jupiter.jpg' );
var materialJupiter = new THREE.MeshBasicMaterial( { map: loaderJupiter, overdraw: 0.5 } );
var jupiter = new THREE.Mesh( geometry30, materialJupiter );
scene.add( jupiter );

function orbitJupiter(){
    var floatx = Math.cos(routeCounter * 1) * 525;
    var floatz = Math.sin(routeCounter * 1) * 525;             
    jupiter.position.x = floatx;
    jupiter.position.y = floatz;
    jupiter.rotation.y += .04;                
}

//////////////////////////Saturn//////////////\

var loaderSaturn = new THREE.TextureLoader().load( 'textures/2k_saturn.jpg' );
var materialSaturn = new THREE.MeshBasicMaterial( { map: loaderSaturn, overdraw: 0.5 } );
var saturn = new THREE.Mesh( geometry25, materialSaturn );
scene.add( saturn );

function orbitSaturn(){
    var floatx = Math.cos(routeCounter * .9) * 725;
    var floatz = Math.sin(routeCounter * .9 ) * 725;             
    saturn.position.x = floatx;
    saturn.position.y = floatz;
    saturn.rotation.y += .07;                  
}

//////////////////////////Uranus//////////////\

var loaderUranus = new THREE.TextureLoader().load( 'textures/uranusmap.jpg' );
var materialUranus = new THREE.MeshBasicMaterial( { map: loaderUranus, overdraw: 0.5 } );
var uranus = new THREE.Mesh( geometry15, materialUranus );
scene.add( uranus );

function orbitUranus(){
    var floatx = Math.cos(routeCounter * .7) * 925;
    var floatz = Math.sin(routeCounter * .7) * 925;             
    uranus.position.x = floatx;
    uranus.position.y = floatz;
    uranus.rotation.z += .04;                  
}
//////////////////////////Neptune//////////////
var loaderNeptune = new THREE.TextureLoader().load( 'textures/neptunemap.jpg' );
var materialNeptune = new THREE.MeshBasicMaterial( { map: loaderNeptune, overdraw: 0.5 } );
var neptune = new THREE.Mesh( geometry15, materialNeptune );
scene.add( neptune );

function orbitNeptune(){
    var floatx = Math.cos(routeCounter * .6) * 1105;
    var floatz = Math.sin(routeCounter * .6) * 1105;             
    neptune.position.x = floatx;
    neptune.position.y = floatz;
    neptune.rotation.y += .04;                   
}

//////////////////////////Pluto//////////////

//var loaderPluto = new THREE.TextureLoader().load( 'textures/uranusmap.jpg' );
//var materialPluto = new THREE.MeshBasicMaterial( { map: loaderPluto, overdraw: 0.5 } );
var pluto = new THREE.Mesh( geometry3, materialUranus );
scene.add( pluto );

function orbitPluto(){
    var floatx = Math.cos(routeCounter * .5) * 1225;
    var floatz = Math.sin(routeCounter * .5) * 1225;             
    pluto.position.x = floatx;
    pluto.position.y = floatz;
    pluto.rotation.y += .04;                   
}
