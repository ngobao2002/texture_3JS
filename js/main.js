// import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var skybox;

var create_skybox = function(scene) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var front_texture = new THREE.TextureLoader().load("arid2_ft.jpg");
    var back_texture = new THREE.TextureLoader().load("arid2_bk.jpg");
    var up_texture = new THREE.TextureLoader().load("arid2_up.jpg");
    var down_texture = new THREE.TextureLoader().load("arid2_dn.jpg");
    var right_texture = new THREE.TextureLoader().load("arid2_rt.jpg");
    var left_texture = new THREE.TextureLoader().load("arid2_lf.jpg");

    var materials = [];
    materials.push(new THREE.MeshBasicMaterial({ map: front_texture }));
    materials.push(new THREE.MeshBasicMaterial({ map: back_texture }));
    materials.push(new THREE.MeshBasicMaterial({ map: up_texture }));
    materials.push(new THREE.MeshBasicMaterial({ map: down_texture }));
    materials.push(new THREE.MeshBasicMaterial({ map: right_texture }));
    materials.push(new THREE.MeshBasicMaterial({ map: left_texture }));

    skybox = new THREE.Mesh(geometry, materials);
    scene.add(skybox);
}

create_skybox(scene);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    // Rotate the skybox
    skybox.rotation.x += 0.005;
    skybox.rotation.y += 0.005;
    skybox.rotation.z += 0.005;

    renderer.render(scene, camera);
};

animate();
