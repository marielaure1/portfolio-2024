"use client"

import Button from "@/components/Button/Button";
import img from "@/assets/images/2.png";
import shape1 from "@/assets/images/shape-1.svg";
import shape2 from "@/assets/images/shape-2.svg";
import bannerGif from "@/assets/images/banner.gif";
import {useEffect} from "react";
import Test from "@/components/2D/Concave/Test";
import Image from "next/image";

export default function Header(){

    // const handleClickExperience = () => {

    // }


    

    useEffect(() => {
        // console.dir(document.querySelector('.header-left-title'));
       

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
        <header className="w-full h-screen p-[20px] sm:py-[50px] flex flex-col gap-[30px]">
            <div className="w-full h-fit flex justify-center items-end pt-[200px]">
                <div className="flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[30px]">
                        <strong className="title-regular">Développeuse</strong>
                        <Image src={shape2} alt="alt" width={shape2.width} height={shape2.height} className="w-[39px] h-[39px] animation-shape1"/>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <strong className="title-thin">Web</strong>
                        <strong className="title-regular">Fullstack</strong>
                        <strong className="title-thin">et</strong>
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <strong className="title-thin">Mobile</strong>
                        <Image src={shape1} alt="alt" width={shape1.width} height={shape1.height} className="w-[39px] h-[39px] animation-shape2" />
                    </div>
                </div>
            </div>
            <div className="w-full h-fit">
                <Test/>
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="bg-pink-1 rounded-[50px] flex-col justify-center items-center gap-5 inline-flex aspect-square">
                        <h3 className="text-center text-black text-xl font-primary">Mais je continue <br/>à apprendre</h3>
                        <div className="flex items-center gap-[10px]">
                            <span className="px-5 py-2.5 bg-white rounded-[30px] border justify-center items-center gap-2.5 inline-flex text-blue-1 text-base font-primary">Three.js</span>
                            <span className="px-5 py-2.5 bg-white rounded-[30px] border justify-center items-center gap-2.5 inline-flex text-yellow-1 text-base font-primary">Python</span>
                        </div>
                    </div>
                    <div className="w-full aspect-square rounded-[50px] overflow-hidden">
                    <Image src={bannerGif} alt="alt" width={bannerGif.width} height={bannerGif.height} className="w-full h-full object-cover" />
                    </div>
                </div>
                
            </div>
        </header>
    )
}