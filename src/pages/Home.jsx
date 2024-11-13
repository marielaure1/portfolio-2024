import Header from "@/components/Html/Home/Header";
import Background from "@/components/Html/Home/Background";
import About from "@/components/Html/Home/About";
import Services from "@/components/Html/Home/Services";
import Skills from "@/components/Html/Home/Skills";
import Portfolio from "@/components/Html/Home/Portfolio";
import Contact from "@/components/Html/Home/Contact";

import IMG from "@/assets/images/1.jpg"
// import "@/components/3D/test/app.js"



export default function Home(){

    return(
        <>
            {/* <Background/> */}
            <Header/>
            <About/>
            <Services/>
            {/* <div className="item__image">
                <img src={IMG} className="js-image" alt="Some image" style={{ width: "500px" }}/>
            </div>
            
	<div id="container"></div> */}
            {/* 
            <Skills/>
            <Portfolio/> */}
            <Contact/>
        </>
    )
}