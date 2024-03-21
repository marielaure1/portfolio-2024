import useSkills from "@/components/2D/Concave/Skills.hook.jsx";
import {useState, useEffect} from "react";

export default function Skills() {

  const [skillsList, setSkillsList] = useState([
    { id: 1, name: "React", group: 1},
    { id: 2, name: "Node.js", group: 2},
    { id: 3, name: "Next.js", group: 1},
    { id: 4, name: "MongoDB", group: 2},
    { id: 5, name: "Javascript", group: 3},
    { id: 6, name: "React Native", group: 1},
    { id: 7, name: "Vue.js", group: 3},
    { id: 8, name: "Sass", group: 3},
    { id: 9, name: "Ionic", group: 3},
    { id: 10, name: "Laravel", group: 3},
    { id: 11, name: "MySql", group: 3},
    { id: 12, name: "Express", group: 3},
    { id: 13, name: "Typescript", group: 3},
    { id: 14, name: "Three.js", group: 3},
    { id: 15, name: "Html", group: 3},
    { id: 16, name: "Css", group: 3},
    { id: 17, name: "Php", group: 3},
    { id: 18, name: "Nest.js", group: 3},
  ]);

  
  let { ref, newSkillsList } = useSkills(skillsList);

  useEffect(() => {

  setSkillsList(newSkillsList)
  }, [])
  
  
  // console.log(skillsList);

  return (
    <div ref={ref} className="concave-skills" >
      {skillsList.map((dot, key) => (
        <div key={key} className={`concave-skills-item concave-skills-item-${dot.id} group${dot.group}`} style={{ top: dot.y, left: dot.x }}>{ dot.name}</div>
      ))}
    </div>
  );
}