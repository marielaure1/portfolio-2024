import useSkills from "@/components/2D/Concave/Skills.hook.jsx";
export default function Skills() {
  
  let { containerRef, canvasRef } = useSkills();

	return (
		<div ref={containerRef} className='concave-skills'>
			<canvas ref={canvasRef} style={{ position: 'absolute', top: '0', left: '0' }} />
		</div>
	);
}