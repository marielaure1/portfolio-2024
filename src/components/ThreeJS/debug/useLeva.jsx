
import { useControls, folder } from "leva";

export default function useLeva(){

    const PerfDatas = useControls("Performance", {
        visible: true,
        position: {
            options: {
                "Top Left": "top-left", 
                "Top Right": "top-right",
                "Bottom Left": "bottom-left",
                "Bottom Right": "bottom-right"
            },
        }
    }, 
    {   
        collapsed: true 
    })

    const PlayerDatas = useControls("Player", {
        scale: {
            value: [1, 1, 1],
            min: -10,
            max: 10,
            step: 0.01
        },
        position: {
            value: [70, 1, 70],
            min: -100,
            max: 100,
            step: 0.01
        },
        rotation: {
            value: [1, 1, 1],
            min: -10,
            max: 10,
            step: 0.01
        },
    }, 
    {   
        collapsed: true 
    })

    const Floor01Datas = useControls("Floor 01", {
        position: {
            value: { 
                x: -2,
                y: 0,
                z: 0
            },
            min: -10,
            max: 10,
            step: 0.01,
            joystick: 'invertY'
        }, 
        rotation: {
            value: [Math.PI / -2, 0, 0],
            lock: true,
            min: -10,
            max: 10,
            step: 0.01
        }, 
        scale: {
            value: [100, 100, 1],
            min: -1000,
            max: 1000,
            step: 0.01
        }, 
        alphaMap: true,
        visible: true
    }, 
    {   
        collapsed: true,
        color: "yellow",
    })

    return {
        PlayerDatas,
        Floor01Datas,
        PerfDatas
    };
}