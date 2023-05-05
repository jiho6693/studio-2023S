import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';

			const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xff000f); 
      // const axesHelper = new THREE.AxesHelper(5)
      // scene.add(axesHelper)


			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = -2;

			const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
      });
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.maxPolarAngle = 1
      controls.enableDamping = true;
      controls.update();

      const skyMaterialArray = []
      const texture_ft = new THREE.TextureLoader().load('../ex-12/kenon_star_ft.jpg')
      const texture_bk = new THREE.TextureLoader().load('../ex-12/kenon_star_bk.jpg')
      const texture_up = new THREE.TextureLoader().load('../ex-12/kenon_star_up.jpg')
      const texture_dn = new THREE.TextureLoader().load('../ex-12/kenon_star_dn.jpg')
      const texture_rt = new THREE.TextureLoader().load('../ex-12/kenon_star_rt.jpg')
      const texture_lf = new THREE.TextureLoader().load('../ex-12/kenon_star_lf.jpg')

      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_ft,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_bk,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_up,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_dn,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_rt,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_lf,
        })
      )

      // 반복문
      for (let i = 0; i < 6; i++){
        skyMaterialArray[i].side = THREE.BackSide
      }

      const skyGeometry = new THREE.BoxGeometry( 400,400,400 );
			const skyMaterial = new THREE.MeshBasicMaterial( { color: 0x333333 } );
			const cube = new THREE.Mesh( skyGeometry, skyMaterialArray );
			scene.add( cube );


//       const geometry = new THREE.PlaneGeometry( 1, 1 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffffff, map: texture_dn, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( geometry, material );
// plane.scale.set(400, 400, 400); 
// plane.position.set(0.0, -1.5, 0.0); 
// plane.rotation.x = Math.PI / 2;
// scene.add( plane );



//       //obj
// const loader01 = new GLTFLoader();
// // // load a resource
// loader01.load(
// 	// resource URL
// 	'source/Rock1.glb',
// 	// called when the resource is loaded
// 	function ( gltf ) {
    
//     gltf.scene.scale.set(20, 20, 20); 
//     gltf.scene.position.y= 3
//     gltf.scene.position.z= 0.4
//     gltf.scene.position.x= -0.8
// 	gltf.scene.rotation.z = Math.PI / 2;
//     gltf.scene.traverse( function ( child ){
//       child.castShadow = true;
//       child.receiveShadow = true;
// 	  child.userData.link = "https://jiho.cargo.site/Reading-4";
//      });
// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );


			camera.position.z = 5;


      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

			function animate() {
				requestAnimationFrame( animate );
        camera.rotation.y += 0.0002;

			

				renderer.render( scene, camera );
			}

      function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener('resize', onWindowResize);

			animate();


