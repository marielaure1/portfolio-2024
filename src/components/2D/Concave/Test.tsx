'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface Word {
  id: number;
  name: string;
  group: number;
  width: number;
}

const AnimationContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  
  useEffect(() => {
    // Attendre que le DOM soit chargé et que les refs soient disponibles
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Configuration de Matter.js
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    
    // Création du canvas dynamiquement
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: container.clientWidth,
        height: container.clientHeight,
        wireframes: false,
        background: 'transparent',
      },
    });
    renderRef.current = render;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Création des murs
    const ground = Matter.Bodies.rectangle(width / 2, height, width, 10, { 
      isStatic: true, 
      render: { visible: false } 
    });
    
    const wallL = Matter.Bodies.rectangle(0, height / 2, 10, height, { 
      isStatic: true, 
      render: { visible: false } 
    });
    
    const wallR = Matter.Bodies.rectangle(width, height / 2, 10, height, { 
      isStatic: true, 
      render: { visible: false } 
    });

    Matter.World.add(engine.world, [ground, wallL, wallR]);

    // Définition des mots
    const words: Word[] = [
      { id: 1, name: "React", group: 1, width: 100 },
      { id: 2, name: "Node.js", group: 2, width: 100 },
      // Ajoutez d'autres mots ici...
    ];

    // Création des corps et des éléments DOM
    const bodies = words.map((word) => {
      const angle = (Math.random() - 0.5) * Math.PI / 4;
      const textHeight = 40;
      
      const body = Matter.Bodies.rectangle(
        Math.random() * width,
        Math.random() * -height,
        word.width,
        textHeight,
        {
          angle: angle,
          restitution: 0.5,
          chamfer: { radius: 20 },
          render: { visible: false },
        }
      );

      Matter.Body.setVelocity(body, { 
        x: 0, 
        y: Math.random() * 5 
      });

      Matter.World.add(engine.world, [body]);

      // Création de l'élément DOM
      const div = document.createElement('div');
      div.innerText = word.name;
      div.className = `concave-skills-item group${word.group}`;
      div.style.cssText = `
        position: absolute;
        width: ${word.width}px;
        height: ${textHeight}px;
        left: ${body.position.x - word.width / 2}px;
        top: ${body.position.y - textHeight / 2}px;
        transform: rotate(${body.angle}rad);
      `;
      
      container.appendChild(div);
      
      return { body, div };
    });

    // Mise à jour des positions
    Matter.Events.on(engine, 'afterUpdate', () => {
      bodies.forEach(({ body, div }) => {
        div.style.left = `${body.position.x - div.clientWidth / 2}px`;
        div.style.top = `${body.position.y - div.clientHeight / 2}px`;
        div.style.transform = `rotate(${body.angle}rad)`;
      });
    });

    // Configuration de la souris
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);

    // Démarrage des moteurs
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    // Nettoyage
    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      Matter.World.clear(engine.world);
      bodies.forEach(({ div }) => container.removeChild(div));
      container.removeChild(canvas);
      engineRef.current = null;
      renderRef.current = null;
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="concave-skills relative w-full h-screen overflow-hidden"
    />
  );
};

export default AnimationContainer;