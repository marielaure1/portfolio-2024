import { useState } from "react";

export default function useNav(){
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeAudio, setActiveAudio] = useState(false);

    const handleClickMenu = () => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    }

    const handleClickAudio = () => {
        activeAudio ? setActiveAudio(false) : setActiveAudio(true);
    }

    return {
        handleClickMenu,
        handleClickAudio,
        activeMenu,
        activeAudio
    }
}