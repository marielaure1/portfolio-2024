// import { useTrimesh } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

const url = "./gallery.glb";

const useExperience = () => {
   
	const gallery = useGLTF(url);
	// useGLTF.preload(Models.map(({ url }) => url))

    return {
		gallery
    };
}

export default useExperience;

useGLTF.preload(url);