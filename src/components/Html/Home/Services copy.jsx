import {useEffect} from "react"
import gsap from "gsap";
import img from "@/assets/images/2.png";

export default function Services(){

    useEffect(() => {
        gsap
        .timeline()
        .set(".menu", { autoAlpha: 1 })
        .from(".menu__item-innertext", {
          delay: 1,
          duration: 0.85,
          x: 25,
          y: 125,
          stagger: 0.095,
          skewY: gsap.utils.wrap([-8, 8]),
          ease: "expo.out",
        })
        .set(".menu", { pointerEvents: "all" });
      
      gsap.defaults({
        duration: 0.55,
        ease: "expo.out",
      });
      
      const menuItems = document.querySelectorAll(".menu__item");

      let previousImageX = 0;
      let previousImageY = 0;
      
      menuItems.forEach((item, i) => {
        const imageWrapper = item.querySelector(".menu__item-image_wrapper");
        const imageWrapperBounds = imageWrapper.getBoundingClientRect();
        let itemBounds = item.getBoundingClientRect();
      
        const onMouseEnter = ({x, y}) => {
            
            
          gsap.set(imageWrapper, {
            scale: 0.8,
            xPercent: 40,
            y: 0,
            rotation: -15,
          });
          gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
        };
      
        const onMouseLeave = () => {
            if(i == 0){
                gsap.to(imageWrapper, {
                    opacity: 0,
                    yPercent: -50,
                    xPercent: 25,
                    scale: 0.8,
                    rotation: -15,
                });
            } else {
                gsap.to(imageWrapper, {
                    opacity: 0,
                    y: 0,
                    xPercent: 40,
                    scale: 0.8,
                    rotation: -15,
                });
            }
        };
      
        const onMouseMove = ({ x, y }) => {
          let yOffset = itemBounds.top / imageWrapperBounds.height;
          yOffset = gsap.utils.mapRange(0, 1.5, -50, 50, yOffset);
          gsap.to(imageWrapper, {
            duration: 1.25,
            x: 600,
            y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
          });
        };
      
        item.addEventListener("mouseenter", onMouseEnter);
        item.addEventListener("mouseleave", onMouseLeave);
        item.addEventListener("mousemove", onMouseMove);
      
        window.addEventListener("resize", () => {
          itemBounds = item.getBoundingClientRect();
        });
      });
      
    }, [])
    
    return(
        <section className="services">
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