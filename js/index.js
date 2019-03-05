var dae, scene, camera, renderer;
function init() {
    //add detector to see if WebGL is supported
    if (!Detector.webgl)
        Detector.addGetWebGLMessage();
    //set up a scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf5f8ca, 0.001);
    //add a camera
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //render the scene - start renderer and set it's size
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xcaf8f1, 1);
    document.body.appendChild(renderer.domElement);

    //add model
    var loader = new THREE.ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load('scene/planet.dae',
                function (collada) {
        dae = collada.scene;
        dae.traverse(function (child){
            if (child instanceof THREE.Mesh){
                child.castShadow = true;
                child.recieveShadow = true;
            }
        })
        dae.scale.x = dae.scale.y = dae.scale.z = 0.5
        dae.updateMatrix();
        scene.add(dae);
        render();
    });

    camera.position.set(170, 0, 290);
    
   
}



function render(){
    //call to render scene 60fps
    requestAnimationFrame(render);
    camera.lookAt( scene.position );
    renderer.render(scene, camera);
    TWEEN.update();
}

/*function move(){
     var bar = document.getElementById("year_bar");
    var width = 1;
    var id = setInterval(progress, 10);
    function progress(){
        if (width >=100){
            clearInterval(id);
        } else{
            width++;
            bar.style.width = width + '%';
        }
    }
}*/

/*function change(){

    dae.visible = false;
    document.getElementById("prompt1").style.display = "none";
    document.getElementById("commitment").style.display = "block";
    document.getElementById("commitment2").style.display = "block";
    document.getElementById("commitment3").style.display = "block";
}*/

document.addEventListener("DOMContentLoaded", function(){
    init();
}, false);
