import { useEffect } from "react";
import shape3 from "@/assets/images/shape-3.svg";

export default function About(){

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("test");
      })
    }, [])
    
    return(
        <section className="about">
            <img src={shape3} alt="" className="about-shape1"/> 

            <div className="about-container">
                <div className="about-container-paragraph">
                </div>

                <div className="about-container-paragraph">
                    <h3 className="about-container-paragraph-title">A propos</h3>
                    <p className="about-container-paragraph-text">
                    Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.
                    </p>
                </div>
            </div>
        </section>
    )
}