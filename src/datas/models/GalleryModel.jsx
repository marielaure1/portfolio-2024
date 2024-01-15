import { useGLTF } from '@react-three/drei';
import { useMemo } from "react";

export default function GalleryModel(){
    
    const gallery = useMemo(() => useGLTF("./gallery.glb"), [])

    return gallery;
}