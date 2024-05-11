import Button from "@/components/Html/Button/Button.jsx";
import img from "@/assets/images/2.png";
import shape1 from "@/assets/images/shape-1.svg";
import shape2 from "@/assets/images/shape-2.svg";
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
// import {CrazyText} from "@/modules/crazy/Crazy.js"
import "@/modules/crazy/Crazy.js"
// import { gsap } from 'gsap'
// import SplitType from 'split-type'

import Skills from "@/components/2D/Concave/Skills.jsx";
// import Test from "@/components/2D/Concave/test.jsx";

export default function Test(){

    const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const words = [
      { id: 1, name: "React", group: 1, width: 100},
      { id: 2, name: "Node.js", group: 2, width: 100},
      { id: 3, name: "Next.js", group: 1, width: 100},
      { id: 4, name: "MongoDB", group: 2, width: 100},
      { id: 5, name: "Javascript", group: 3, width: 110},
      { id: 6, name: "React Native", group: 1, width: 130},
      { id: 7, name: "Vue.js", group: 3, width: 100},
      { id: 8, name: "Sass", group: 3, width: 80},
      { id: 9, name: "Ionic", group: 3, width: 80},
      { id: 10, name: "Laravel", group: 3, width: 100},
      { id: 11, name: "MySql", group: 3, width: 100},
      { id: 12, name: "Express", group: 3, width: 100},
      { id: 13, name: "Typescript", group: 3, width: 110},
      { id: 14, name: "Three.js", group: 3, width: 100},
      { id: 15, name: "Html", group: 3, width: 80},
      { id: 16, name: "Css", group: 3, width: 70},
      { id: 17, name: "Php", group: 3, width: 70},
      { id: 18, name: "Nest.js", group: 3, width: 100},
    ];

  useEffect(() => {
    const { Engine, Render, Runner, Composites, Common, MouseConstraint, Mouse, Composite, Bodies } = Matter;

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: canvasRef.current.clientWidth,
        height: canvasRef.current.clientHeight,
        showAngleIndicator: true,
      }
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const bodies = words.map((word) => {
        const angle = (Math.random() - 0.5) * Math.PI / 4;
        const textRadius = 20;
        const textHeight = 40;
        const body = Bodies.rectangle(
            Math.random() * containerRef.current.clientWidth,
            Math.random() * -containerRef.current.clientHeight,
            word.width,
            textHeight,
            {
            angle: angle,
            restitution: 0.5,
            chamfer: { radius: textRadius },
            render: {
                visible: false
            }
            }
        );

        // Matter.Body.setVelocity(body, { x: 0, y: Math.random() * 5 });
        Composite.add(world, [body]);

        // const div = document.createElement('div');
        // div.innerText = word.name;
        // div.classList.add("concave-skills-item")
        // div.classList.add("group"+word.group)
        // div.style.width = word.width + 'px';
        // div.style.height = textHeight + 'px';
        // div.style.left = `${body.position.x - 50}px`;
        // div.style.top = `${body.position.y - 20}px`;
        // containerRef.current.appendChild(div);
        
        return { body };
    });

    // Composite.add(world, stack);

    // Matter.Events.on(engine, 'afterUpdate', () => {
    //         bodies.forEach(({ body, div }) => {
    //           div.style.left = `${body.position.x - 50}px`;
    //           div.style.top = `${body.position.y - 20}px`;
    //           div.style.transform = `rotate(${body.angle}rad)`; 
    //         });
    //       });

    Composite.add(world, [
      // walls
      Bodies.rectangle(canvasRef.current.clientWidth / 2, 0, canvasRef.current.clientWidth, 10, { isStatic: true }),
        Bodies.rectangle(canvasRef.current.clientWidth / 2, canvasRef.current.clientHeight, canvasRef.current.clientWidth, 10, { isStatic: true }),
        Bodies.rectangle(canvasRef.current.clientWidth, canvasRef.current.clientHeight / 2, 10, canvasRef.current.clientHeight, { isStatic: true }),
        Bodies.rectangle(0, canvasRef.current.clientHeight / 2, 10, canvasRef.current.clientHeight, { isStatic: true })
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: canvasRef.current.clientWidth, y: canvasRef.current.clientHeight }
    });

    // cleanup function
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    };
  }, []);


    return(
        <header>
            <div ref={containerRef} className='concave-skills'>
			    <canvas ref={canvasRef} style={{ width: "100%", height: "100%"}}  />
		    </div>
        </header>
    )
}