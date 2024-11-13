import Logo from "@/components/Html/Texts/Logo.jsx";
import { Icon } from '@iconify/react';
import useNav from "@/components/Html/Layouts/Nav.hook.jsx";

export default function Nav(){

    const {
        handleClickMenu,
        handleClickAudio,
        activeMenu,
        activeAudio
    } = useNav();
  
    return(
        <>
            <nav className="menu">
                <div className="menu-part">
                    <Logo/>
                </div>
                {/* <div className="menu-part">
                    <span className={`menu-part-btn ${activeMenu ? "active" :  ""}`} onClick={handleClickMenu}>
                        <span className="menu-part-btn-line1"></span>
                        <span className="menu-part-btn-line2"></span>
                    </span>
                </div>
                <div className="menu-part">
                    <span className={`menu-part-audio ${activeAudio ? "active" :  ""}`} onClick={handleClickAudio}>
                        <Icon icon="iconoir:sound-off" className="menu-part-audio-off"/>
                        <Icon icon="iconoir:sound-high" className="menu-part-audio-on"/>
                    </span>
                </div> */}
            </nav>
        </>
    )
}