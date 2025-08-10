const container = document.getElementById('viewer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);

const house = new THREE.Group();
house.name = 'house';

const baseGeometry = new THREE.BoxGeometry(4, 2, 4);
const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x8d5524 });
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = 1;
house.add(base);

const roofGeometry = new THREE.ConeGeometry(4, 2, 4);
const roofMaterial = new THREE.MeshLambertMaterial({ color: 0xcd5c5c });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 2 + 1;
roof.rotation.y = Math.PI / 4;
house.add(roof);

scene.add(house);

const groundGeometry = new THREE.PlaneGeometry(20, 20);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.name = 'ground';
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// expose scene for tests
window.viewerScene = scene;

camera.position.set(5, 5, 10);
controls.update();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
