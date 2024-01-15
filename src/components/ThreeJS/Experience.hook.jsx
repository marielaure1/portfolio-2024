import { useTrimesh } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

export default function useExperience(){
   
	const {nodes, materials}= useGLTF("./gallery.glb");

	const [Floor01Ref] = useTrimesh(() => ({ 
		type: 'Static', 
		mass: 0,
		args: [
		nodes["Walls-1001"].geometry.attributes.position.array,
		nodes["Walls-1001"].geometry.index.array,
		]
	}));

	const [Floor02Ref] = useTrimesh(() => ({ 
		type: 'Static', 
		mass: 0,
		args: [
		nodes["Floor"].geometry.attributes.position.array,
		nodes["Floor"].geometry.index.array
		]
	}));

	const [Stairs01Ref] = useTrimesh(() => ({ 
		type: 'Static', 
		mass: 0,
		args: [
		nodes["Walls-1003"].geometry.attributes.position.array,
		nodes["Walls-1003"].geometry.index.array,
		]
	}));
	
    console.log(nodes);

    return {
		nodes, 
		materials, 
		Floor01Ref, 
		Floor02Ref, 
		Stairs01Ref
    };
}