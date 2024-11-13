import { useEffect } from "react";
import shape3 from "@/assets/images/shape-3.svg";
import shape4 from "@/assets/images/shape-4.svg";
import Button from "@/components/Html/Button/Button.jsx";
import Lenis from 'lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Icon} from "@iconify-icon/react";

export default function About(){

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("test");
      })


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        // console.log(e)
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
    }, [])
    
    return(
        <section className="about">

            <div className="about-container">
                {/* <div className="about-container-title">
                    <img src={shape4} alt="" className="about-container-title-shape4"/>
                    <h2 className="about-container-title-text title-section-black">A propos</h2>
                </div> */}

                <div className="about-container-paragraph">
                    <p className="about-container-paragraph-text">
                        Je m'appelle Marie-Laure Edjour,  
                        <Icon icon="emojione-monotone:cat-face-with-wry-smile" className="about-icon"/> 
                        développeuse fullstack et mobile  
                        <Icon icon="mingcute:code-line"  className="about-icon"/>      
                        . J'ai étudié à l'école Webstart 
                        <Icon icon="gis:globe-smiley"  className="about-icon"/>     
                        à Paris, où j'ai appris à maîtriser des technologies comme React.js, Vue.js, et Node.js. Je suis capable de gérer aussi bien la création d'interfaces utilisateur  
                        <Icon icon="mingcute:paint-brush-fill"  className="about-icon"/>
                        que la partie back-end
                        <Icon icon="lets-icons:setting-line-light"  className="about-icon"/>
                        des projets. 
                    </p>
                </div>
                <div className="about-container-paragraph">
                    <p className="about-container-paragraph-text">
                    En tant que passionnée de développement  
                    <Icon icon="fluent:flash-28-filled"  className="about-icon"/>    
                    , je continue à apprendre chaque jour pour améliorer mes compétences
                    <Icon icon="fluent:flash-28-filled"  className="about-icon"/>
                    . Je suis à l'écoute et aime travailler en équipe   
                    <Icon icon="fluent:flash-28-filled"  className="about-icon"/>     
                    pour créer des solutions innovantes adaptées aux besoins des utilisateurs.
                    <Icon icon="emojione-monotone:rocket"  className="about-icon"/>
                    </p>
                </div>
                
            </div>
            <div className="about-cta">
                    <Button className="btn-black" href="/CV-Marie-Laure-Edjour.pdf" target="_blank" download>Mon CV</Button>
                </div>
        </section>
    )
}