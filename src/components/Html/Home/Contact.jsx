import {Link} from "react-router-dom";

export default function Contact(){
    return(
        <>
            <section className="contact">
                <h2 className="contact-title title-section-black">Contactez-moi &ensp; :)</h2>

                <div className="contact-content">
                    <div className="contact-content-links">
                        <Link to="https://www.linkedin.com/in/ml-edjour" target="_blank" className="contact-content-links-card">
                            <div  className="contact-content-links-card-content">
                                <span  className="contact-content-links-card-content-text" >Linkedin</span>
                                <span  className="contact-content-links-card-content-text">Linkedin</span>
                            </div>
                        </Link>
                        <Link to="tel:+33769399335" target="_blank" className="contact-content-links-card">
                            <div  className="contact-content-links-card-content">
                                <span  className="contact-content-links-card-content-text" >07 69 39 93 35</span>
                                <span  className="contact-content-links-card-content-text">07 69 39 93 35</span>
                            </div>
                        </Link>
                        <Link to="mailTo:marielaure.edjour@gmail.com" target="_blank" className="contact-content-links-card">
                            <div  className="contact-content-links-card-content">
                                <span  className="contact-content-links-card-content-text" >marielaure.edjour<br/>@gmail.com</span>
                                <span  className="contact-content-links-card-content-text">marielaure.edjour <br/>@gmail.com</span>
                            </div>
                        </Link>
                        <Link to="https://github.com/marielaure1" target="_blank" className="contact-content-links-card">
                            <div  className="contact-content-links-card-content">
                                <span  className="contact-content-links-card-content-text" >Github</span>
                                <span  className="contact-content-links-card-content-text">Github</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </section>
        </>
    )
}