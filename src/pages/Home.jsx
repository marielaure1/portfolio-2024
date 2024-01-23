import Header from "@/components/Html/Home/Header";
import Background from "@/components/Html/Home/Background";
import About from "@/components/Html/Home/About";
import Services from "@/components/Html/Home/Services";
import Skills from "@/components/Html/Home/Skills";
import Portfolio from "@/components/Html/Home/Portfolio";
import Contact from "@/components/Html/Home/Contact";

export default function Home(){

    return(
        <>
            <Background/>
            <Header/>
            <About/>
            <Services/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </>
    )
}