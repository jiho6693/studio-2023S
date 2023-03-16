import * as THREE from 'three';

			const scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(0x11111f, 0.002);
			scene.background = new THREE.Color(0xEEEfff); 

			const camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
			camera.position.z = 1;
			camera.rotation.x = 1.16;
			camera.rotation.y = -0.12;
			camera.rotation.z = 0.27;


			const renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

			//rain
			
			const starGeo = new THREE.BufferGeometry ()
            const vertices = [];
            for (let i = 0; i < 15000; i++) {
            const x = Math.random() * 400 - 300;
            const y = Math.random() * 500 - 250;
            const z = Math.random() * 400 - 200;
            vertices.push(x, y, z);
            }
            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            let starMaterial = new THREE.PointsMaterial({
                color:0xaaaaaa,
                size:1,
                transparent: true
            })
            const stars = new THREE.Points(starGeo,starMaterial)
            scene.add(stars)
            

			




			//

		
			  
			const directionalLight = new THREE.DirectionalLight(0xffeedd);
			directionalLight.position.set(0,0,1);
			scene.add(directionalLight);  
			  
			  
			
			const ambient = new THREE.AmbientLight(0x555555);
			scene.add(ambient);
			


			function animate() {
				const positions = starGeo.attributes.position.array;
				for (let i = 1; i < positions.length; i += 3) {
					if (positions[i] < -200) {
					positions[i] = 200;
					}
					positions[i] -= 3;
				}
				starGeo.attributes.position.needsUpdate = true;
				stars.rotation.y +=0.002;
				requestAnimationFrame(animate);
				renderer.render(scene, camera); 
			  }

			animate();