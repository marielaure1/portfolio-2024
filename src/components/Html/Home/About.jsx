import { useEffect } from "react";

export default function About(){

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("test");
      })
    }, [])
    
    return(
        <section className="about">
            <h3 className="about-title title-section-stroke">About</h3>

            <div className="about-container">
                <div className="about-container-paragraph">
                    <p className="about-container-paragraph-text">
                        Lorem ipsum dolor sit amet consectetur. Lectus nulla sagittis sed vestibulum et eget suspendisse pellentesque. agittis sed vestibulum et eget suspendisse pellentesque. 
                    </p>
                </div>

                <div className="about-container-paragraph">
                    <p className="about-container-paragraph-text">
                    Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.
                    </p>
                </div>

                <div className="about-container-paragraph">
                    <p className="about-container-paragraph-text">
                    Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.
                    </p>
                </div>
            </div>
        </section>
    )
}