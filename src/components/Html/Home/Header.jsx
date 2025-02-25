import Button from "@/components/Html/Button/Button.jsx";
import img from "@/assets/images/2.png";
import shape1 from "@/assets/images/shape-1.svg";
import shape2 from "@/assets/images/shape-2.svg";
import bannerGif from "@/assets/images/banner-gif.gif";
import {useEffect} from "react"
// import {CrazyText} from "@/modules/crazy/Crazy.js"
import "@/modules/crazy/Crazy.js"
// import { gsap } from 'gsap'
// import SplitType from 'split-type'

// import Skills from "@/components/2D/Concave/Skills.jsx";
import RubiksCube from "@/components/3D/RubiksCube.jsx";
import Test from "@/components/2D/Concave/Test.jsx";

export default function Header(){

    // const handleClickExperience = () => {

    // }


    

    useEffect(() => {
        console.dir(document.querySelector('.header-left-title'));
       

        // gsap.fromTo(
        // chars,
        // { 
        //     y: 100,
        //     opacity: 0
        // },
        // {
        //     y: 0,
        //     opacity: 1,
        //     stagger: 0.05,
        //     duration: 2,
        //     ease: 'power4.out',
        // }
        // )

        // const bounceLetter = new CrazyText.BounceLetter(".animation.animation-bounce-letter", 1000, 0);
    }, [])
    

    return(
        <header className="header">

            <div className="header-top">
                <h1 className="header-top-title crazy crazy-explode">
                    <div className="header-top-title-line">
                        <strong>Développeuse</strong> 
                        <img src={shape2} alt="" className="header-top-title-shape1"/>
                    </div> 
                    <div className="header-top-title-line">
                        <strong className="header-top-title-thin">Web</strong>
                        <span>Fullstack</span>
                        <strong className="header-top-title-thin">et</strong>
                    </div>
                    <div className="header-top-title-line">
                        <strong className="header-top-title-thin">mobile</strong>
                        <img src={shape1} alt="" className="header-top-title-shape2"/>
                    </div>
                </h1>
            </div>

            <div className="header-bottom">
                <Test/>
                <div className="header-bottom-right">
                    <div className="card-learn">
                        <h3 className="card-learn-title">Mais je continue <br/> à apprendre</h3>

                        <div className="card-learn-skills">
                            <span className="card-learn-skills-left">Three.js</span>
                            <span className="card-learn-skills-right">Python</span>
                        </div>
                    </div>
                    <div className="card-gif">
                        <img src={bannerGif} alt="" className="card-gif-img"/>
                    </div>
                </div>
            </div>

          
        </header>
    )
}