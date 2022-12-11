import { GLTFLoader } from './GLTFLoader.js';
function background(){
  
const loader = new GLTFLoader();

loader.load( '../public/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
  
}