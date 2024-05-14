import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const AnimationContainer = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;

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
    const engine = Engine.create({});
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
        background: 'transparent',
        showAxes: false,
        showCollisions: false,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showPositions: false,
        showAngleIndicator: false,
        wireframeBackground: 'transparent' 
      }
    });

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const ground = Bodies.rectangle(width / 2, height, width, 10, {
      isStatic: true,
      render: {
        visible: false
      }
    });
    const wallL = Bodies.rectangle(0, height / 2, 10, height, {
      isStatic: true,
      render: {
        visible: false
      }
    });
    const wallR = Bodies.rectangle(width, height / 2, 10, height, {
      isStatic: true,
      render: {
        visible: false
      }
    });
    
    World.add(engine.world, [ground, wallL, wallR]);

    
    const bodies = words.map((word, index) => {
      const angle = (Math.random() - 0.5) * Math.PI / 4;
      const textRadius = 20;
      const textHeight = 40;
      const textWidth = word.name.length * 10;
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

      Matter.Body.setVelocity(body, { x: 0, y: Math.random() * 5 });
      World.add(engine.world, [body]);

      const div = document.createElement('div'); 
      div.innerText = word.name;
      div.classList.add("concave-skills-item")
      div.classList.add("group"+word.group)
      div.style.width = word.width + 'px';
      div.style.height = textHeight + 'px';
      div.style.left = `${body.position.x - div.clientWidth / 2}px`;
      div.style.top = `${body.position.y - div.clientHeight / 2}px`;
      containerRef.current.appendChild(div);
      
      return { body, div };
    });

    

    Events.on(engine, 'afterUpdate', () => {
      bodies.forEach(({ body, div }) => {
        div.style.left = `${body.position.x - div.clientWidth / 2}px`;
        div.style.top = `${body.position.y - div.clientHeight / 2}px`;
        div.style.transform = `rotate(${body.angle}rad)`; 
      });
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(engine.world, mouseConstraint);

    Engine.run(engine);
    Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      bodies.forEach(({ div }) => containerRef.current.removeChild(div));
    };
  }, []);

  return (
    <div ref={containerRef} className='concave-skills'>
      <canvas ref={canvasRef}  />
    </div>
  );
};

export default AnimationContainer;
