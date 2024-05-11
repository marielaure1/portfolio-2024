import { useEffect } from "react";
import shape3 from "@/assets/images/shape-3.svg";
import shape4 from "@/assets/images/shape-4.svg";
import Button from "@/components/Html/Button/Button.jsx";
import Lenis from 'lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About(){

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("test");
      })


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
    }, [])
    
    return(
        <section className="about">
            <img src={shape3} alt="" className="about-shape1"/> 

            <div className="about-container">
                <div className="about-container-title">
                    <img src={shape4} alt="" className="about-container-title-shape4"/>
                    <h2 className="about-container-title-text title-section-black">A propos</h2>
                </div>

                <div className="about-container-paragraph">
                    <h3 className="about-container-paragraph-title">Formations</h3>
                    <p className="about-container-paragraph-text">
                        Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.
                    </p>
                </div>
                <div className="about-container-paragraph">
                    <h3 className="about-container-paragraph-title">Expériences</h3>
                    <p className="about-container-paragraph-text">
                        Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.
                    </p>
                </div>
                <div className="about-container-cta">
                    <Button className="btn-black" href="/CV-Marie-Laure-Edjour.pdf" target="_blank" download>Mon CV</Button>
                </div>
            </div>
        </section>
    )
}