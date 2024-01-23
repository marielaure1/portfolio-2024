import Button from "@/components/Html/Button/Button.jsx";


export default function Header(){

    const handleClickExperience = () => {

    }

    return(
        <header className="header">
            <div className="header-top">
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
            </div>
        </header>
    )
}