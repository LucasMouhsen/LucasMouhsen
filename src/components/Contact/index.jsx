import FormContact from "./FormContact"
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapLocation, faFileText } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <section className="boxContact" id="contact">

            <div className="ContactContainer">
                <FormContact />
                <div className='box'>
                    <h3>Mas sobre mi</h3>
                    <ul className="icons">

                        <li>
                            <SocialIcon url="https://www.linkedin.com/in/lucasdiazmouhsen/" target="_blank"w />
                        </li>
                        <li>
                            <SocialIcon url="https://github.com/LucasMouhsen" target="_blank"/>
                        </li>
                        <li>
                            <SocialIcon url="https://www.instagram.com/lucasmouhsen/" target="_blank"/>
                        </li>
                        <li>
                            <SocialIcon url="https://x.com/LucasMouhsen" target="_blank"/>
                        </li>
                    </ul>
                    <ul className="link">

                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+54 911 3189 0767</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faFileText} />
                            <p>Lucasmouhsen@gmail.com</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faMapLocation} />
                            <p>San Miguel, Buenos Aires, Argentina</p>
                        </li>
                    </ul>
                </div>
                <div className="box link">
                    <iframe width="100%" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=San%20miguel+(San%20Miguel)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/car-satnav-gps/" >San Miguel</a>
                    </iframe>
                </div>

            </div>
            <div className='legal'>
                <p>
                    © {year}.
                </p>
            </div>

        </section>
    )
}