import Button from "@/components/Html/Button/Button.jsx";
import img from "@/assets/images/2.png";
import shape1 from "@/assets/images/shape-1.svg";
import shape2 from "@/assets/images/shape-2.svg";
import {useEffect} from "react"
// import {CrazyText} from "@/modules/crazy/Crazy.js"
import "@/modules/crazy/Crazy.js"
// import { gsap } from 'gsap'
// import SplitType from 'split-type'

import Skills from "@/components/2D/Concave/Skills.jsx";
import RubiksCube from "@/components/3D/RubiksCube.jsx";
// import Test from "@/components/2D/Concave/test.jsx";

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

            <div className="header-left">
                <h1 className="header-left-title crazy crazy-explode">
                    Développeuse 
                    <img src={shape2} alt="" className="header-left-title-shape1"/> <br/>
                    <strong className="header-left-title-thin">
                        Web Fullstack et <br/> mobile
                    <img src={shape1} alt="" className="header-left-title-shape2"/>
                    </strong>
                    
                </h1>

                <p className="header-left-text">
                    Lorem ipsum dolor sit amet consectetur. Luctus facilisi nisi purus consectetur pellentesque risus mus molestie. 
                    Vel lectus nulla nam amet. A donec dignissim nisl porta tempus venenatis habitasse leo. 
                </p>

                <Skills/>
            </div>

            <div className="header-right">
                {/* <img src={img} alt="" className="header-right-img"/> */}
                <div className="header-right-canvas">
                    <RubiksCube/>
                </div>
                <div className="header-right-container">
                    <span className="header-right-container-scroll">Scroll</span>
                    <span>ou</span>
                    <Button className="btn-black" href="/">Contact</Button>

                </div>
            </div>

            {/* <div className="header-top">
                <div className="header-top-techno">
                    <h2 className="header-top-techno-title">Développeuse <br/>FRONT</h2>
                    <p className="header-top-techno-list">
                        <strong>React</strong> JS,  
                        <strong> Vue</strong> JS,  
                        <strong> Next</strong> JS,  
                        <strong> Three</strong> JS
                    </p>
                </div>

                <div className="header-top-techno">
                    <h2 className="header-top-techno-title">Développeuse <br/>BACK</h2>
                    <p className="header-top-techno-list">
                        <strong>Laravel</strong>, 
                        <strong> Node</strong> JS, 
                        <strong> Nest</strong> JS
                    </p>
                </div>

                <div className="header-top-techno">
                    <h2 className="header-top-techno-title">Développeuse <br/>MOBILE</h2>
                    <p className="header-top-techno-list">
                        <strong>Ionic</strong>, 
                        <strong> React Native</strong>
                    </p>
                </div>
            </div>
            <div className="header-bottom">
                <h1 className="header-bottom-title"><strong className="strong">Développeuse</strong> Web Full Stack et Mobile</h1>
                <div className="header-bottom-container">
                    <Button className="header-bottom-container-btn btn-border-white" href="/experience">Expérience 3D</Button>
                </div>
            </div> */}
        </header>
    )
}