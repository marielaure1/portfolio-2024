import { useEffect, useRef, useState } from 'react'
import { Engine, Render, Runner, Bodies, Composites, Common, MouseConstraint, Mouse, Composite, Vertices, World } from 'matter-js'

const engine = Engine.create();
const runner = Runner.create();

Runner.run(runner, engine);

export default function useSkills(skillsList) {
  const ref = useRef(null);
  let newSkillsList = skillsList;
  const [anim, setAnim] = useState(0);
  
  useEffect(function init() {
    const width = ref.current?.clientWidth ?? 0;
    const height = ref.current?.clientHeight ?? 0;

    const ground = Bodies.rectangle(width / 2, height, width, 50, {
      isStatic: true,
    });
    const ceiling = Bodies.rectangle(width / 2, 0, width, 1, {
      isStatic: true,
    });
    const wallL = Bodies.rectangle(0, height / 2, 1, height, {
      isStatic: true,
    });
    const wallR = Bodies.rectangle(width, height / 2, 50, height, {
      isStatic: true,
    });

    Composite.add(engine.world, [ground, ceiling, wallL, wallR]);
  }, []);

  useEffect(() => {
    let unsubscribe;

    function addDot(element) {
      const item = document.querySelector(`.concave-skills-item-${element.id}`);

      const x = ref.current?.clientWidth ?? 0;
      const y = ref.current?.clientHeight ?? 0;

      const circ = Bodies.rectangle(
        Math.random() * x * 0.75 + item?.clientWidth,
        Math.random() * y * 0.75 + item?.clientHeight,
        item?.clientWidth,
        item?.clientHeight
      );
      circ.friction = 0.05;
      circ.frictionAir = 0.00005;
      circ.restitution = 0.9;

      Composite.add(engine.world, circ);
    }

    skillsList.forEach(element => {
      setTimeout(() => addDot(element), 300)
    });

    return () => {
      clearTimeout(unsubscribe);
    };

   
  }, []);

  useEffect(function triggerAnimation() {
    let unsubscribe;

    function animate() {
      let i = 0;

      for (const dot of Composite.allBodies(engine.world)) {
        if (dot.isStatic) continue;

        newSkillsList[i] = { ...newSkillsList[i], x: dot.position.x, y: dot.position.y };

        i += 1;
      }

      setAnim((x) => x + 1);

      unsubscribe = requestAnimationFrame(animate);
    }

    unsubscribe = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(unsubscribe);
    };
  }, []);


  return { ref, newSkillsList}

}