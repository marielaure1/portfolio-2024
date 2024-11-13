import {useEffect, useState} from "react"
import gsap from "gsap";
import img from "@/assets/images/2.png";
import { Icon } from '@iconify-icon/react';
import Button from "@/components/Html/Button/Button.jsx";

let projectsList = [
    {
        title: "The Prestige",
        tags: ["Next.js", "Typescript", "Gsap"],
        date: 2024,
        image: img,
        link: "/"
    },
    {
        title: "Genia",
        tags: ["Next.js", "Typescript"],
        date: 2024,
        image: img,
        link: "/"
    },
    {
        title: "Ramen Oshin",
        tags: ["Next.js", "Typescript"],
        date: 2024,
        image: img,
        link: "https://ramen-oshin.marie-laure-edjour.com/"
    },
    {
        title: "Youvence - Interface",
        tags: ["React.js" ],
        date: 2023,
        image: img,
        link: "/"
    },
    {
        title: "Youvence - Api",
        tags: ["Node.js", "Express", "Prisma"],
        date: 2023,
        image: img,
        link: "/"
    },
    {
        title: "Zenflow - Application",
        tags: ["React Native", "Typescript", "Supabase"],
        date: 2023,
        image: img,
        link: "/"
    },
    {
        title: "Zenflow - Api",
        tags: ["Nest", "Typescript", "Supabase",  "MongoDb.js"],
        date: 2023,
        image: img,
        link: "/"
    },
    {
        title: "Portfolio",
        tags: ["Nest", "Typescript", "Supabase",  "MongoDb.js"],
        date: 2022,
        image: img,
        link: "https://marie-laure-edjour.netlify.app/"
    },
    {
        title: "La Maison",
        tags: ["Nest", "Typescript", "Supabase",  "MongoDb.js"],
        date: 2022,
        image: img,
        link: "https://lamaison-agency.netlify.app/"
    },
    {
        title: "Reproduction de Tesla",
        tags: ["Nest", "Typescript", "Supabase",  "MongoDb.js"],
        date: 2021,
        image: img,
        link: "https://reproduction-tesla.netlify.app/"
    },
    {
        title: "Jeu du Morpion",
        tags: ["Nest", "Typescript", "Supabase",  "MongoDb.js"],
        date: 2021,
        image: img,
        link: "https://jeu-du-morpion.netlify.app/"
    }
]

export default function Services(){
    const [projects, setProjects] = useState(projectsList);

    

    useEffect(() => {
        if(window.matchMedia("(min-width: 992px)").matches){
            let size = {
                width: window.innerWidth
            }
    
         
            // gsap
            // .timeline()
            // .from(".services-table-body", {
            //   delay: 1,
            //   duration: 0.85,
            //   x: 25,
            //   y: 125,
            //   stagger: 0.095,
            //   skewY: gsap.utils.wrap([-8, 8]),
            //   ease: "expo.out",
            // })
            // .set(".services-table", { pointerEvents: "all" });
          
          gsap.defaults({
            duration: 0.55,
            ease: "expo.out",
          });
          
          const menuItems = document.querySelectorAll(".services-table-body");
    
        //   let previousImageX = 0;
        //   let previousImageY = 0;
          
          menuItems.forEach((item, i) => {
            const imageWrapper = item.querySelector(".table-wrapper");
            imageWrapper.style.width = size.width/ 4 + "px"
            const imageWrapperBounds = imageWrapper.getBoundingClientRect();
            let itemBounds = item.getBoundingClientRect();
          
            const onMouseEnter = ({x, y}) => {
                console.log(size.width);
                console.log(size.width  / 5);
              gsap.set(imageWrapper, {
                scale: 0.8,
                x: 750,
                y: y - 50,
                rotation: -15,
              });
              gsap.to(imageWrapper, { opacity: 1, scale: 1, rotation: 0 });
            };
          
            const onMouseLeave = () => {
                if(i == 0){
                    gsap.to(imageWrapper, {
                        opacity: 0,
                        // yPercent: -50,
                        // xPercent: 25,
                        scale: 0.8,
                        rotation: -15,
                    });
                } else {
                    gsap.to(imageWrapper, {
                        opacity: 0,
                        y: 0,
                        // xPercent: 40,
                        scale: 0.8,
                        rotation: -15,
                    });
                }
            };
          
            const onMouseMove = ({ x, y }) => {
              let yOffset = itemBounds.top / imageWrapperBounds.height;
              yOffset = gsap.utils.mapRange(0, 1.5, -50, 50, yOffset);
              gsap.to(imageWrapper, {
                // duration: 1.25,
                // x: 600,
                y: y - 60 *0.5,
              });
            };
          
            item.addEventListener("mouseenter", onMouseEnter);
            item.addEventListener("mouseleave", onMouseLeave);
            item.addEventListener("mousemove", onMouseMove);
          
            window.addEventListener("resize", () => {
              itemBounds = item.getBoundingClientRect();
            });
          });
        }
      
    }, [])
    
    return(
        <section className="services">
            <h2 className="services-title title-section-black">Portfolio</h2>
            <div className="services-table">
                <div className="services-table-head">
                    <div className="services-table-head-cell">
                        <span className="table-title">Date</span>
                    </div>
                    <div className="services-table-head-cell">
                        <span className="table-title">Titre</span>
                    </div>
                    <div className="services-table-head-cell">
                        <span className="table-title">Technologies</span>
                    </div>
                    
                    <div className="services-table-head-cell"></div>
                </div>
                {projects.map((project) => (
                    <a href={project.link} target="_blank"  className="services-table-body">
                        
                        
                        <div className="services-table-body-cell services-table-body-cell-img">
                            <span className="table-text">{project.date}</span>
                            <div className="table-wrapper">
                                <img className="table-wrapper-image" src={project.image} />
                            </div>
                        </div>
                        <div className="services-table-body-cell services-table-body-cell-title">
                            <span className="table-text">{project.title}</span>
                        </div>
                        <div className="services-table-body-cell services-table-body-cell-tags">
                        {project.tags.map((tag) => (
                            <span className="tag">{tag}</span>
                        ))}
                        </div>
                        
                        <div className="services-table-body-cell table-action">
                            <span className="btn-border-round">
                                <Icon className="btn-icons-icon" icon="zondicons:arrow-left" />
                            </span>
                        </div>
                    </a>
                ))}
                {/* <div className="services-table-footer">
                    <Button className="btn-white" href="/portfolio">Voir plus</Button>
                </div> */}

               
            </div>
            {/* <div className="container">
                <nav className="menu">
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Zinjao</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Fastwired</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Jarritos</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Matt Smith</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Lizzy</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Okai</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">QuestR</span></span>
                    </div>

                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Weblogician</span></span>
                    </div>
                    <div className="menu__item">
                    <div className="menu__item-image_wrapper">
                        <div className="menu__item-image_inner">
                        <img className="menu__item-image" src={img} />
                        </div>
                    </div>
                    <span className="menu__item-text"
                        ><span className="menu__item-innertext">Wallmats</span></span>
                    </div>
                </nav>
            </div> */}
        </section>
    )
}