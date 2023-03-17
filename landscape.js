import * as THREE from 'three'
import { WEBGL } from  "./webgl.js";
import { OrbitControls } from 'OrbitControls';
import { MeshStandardMaterial } from 'three';

if (WEBGL.isWebGLAvailable()) {
  // 여기다 코드 넣기
  // 장면
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); 
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  //카메라
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 2;

  //렌더러
  const renderer = new THREE.WebGLRenderer({
    alpha : true,
    antialias : true
  });
    
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.update();

  
  const skyMaterialArray = []
  const texture_ft = new THREE.TextureLoader().load('../ex-12/bay_ft.jpg')
  const texture_bk = new THREE.TextureLoader().load('../ex-12/bay_bk.jpg')
  const texture_up = new THREE.TextureLoader().load('../ex-12/bay_up.jpg')
  const texture_dn = new THREE.TextureLoader().load('../ex-12/bay_dn.jpg')
  const texture_rt = new THREE.TextureLoader().load('../ex-12/bay_rt.jpg')
  const texture_lf = new THREE.TextureLoader().load('../ex-12/bay_lf.jpg')
  
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


  //매쉬
  const skyGeometry = new THREE.BoxGeometry(400,400,400 );
  // const skyMaterial= new THREE.MeshStandardMaterial({
  //   color:0x333333,
  //   map: texture,
  // });
  // skyMaterial.side = THREE.BackSide;
  const sky = new THREE.Mesh(skyGeometry, skyMaterialArray);
  scene.add(sky);

  
  //빛
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);



  function render(time) {
    time *= 0.0005;  // convert time to seconds  
    
  
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // 반응형 처리

  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);


} else {
  var warning = WEBGL.getWebGLErrorMessage
  document.body.appendChild(warning)
}
