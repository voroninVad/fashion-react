import './footer.css'

import fb from './../../img/socials/fb.svg'
import inst from './../../img/socials/inst.svg'
import tw from './../../img/socials/tw.svg'
import inI from './../../img/socials/in.svg'

const Footer = () => {
    return (  
        <footer>
            <div className="footer__container">
                <div className="footer__fashion">
                    <div className="footer__title">
                        FASHION
                    </div>
                    <div className="footer__compl">
                        Complete your style with awesome clothes from us.
                    </div>
                    <div className="footer__social">
                        <img src={fb} alt="facebook" />
                        <img src={inst} alt="instagram" />
                        <img src={tw} alt="twitter" />
                        <img src={inI} alt="in" />
                    </div>
                </div>
                <div className="footer__link">
                    <nav className="footer__nav">
                        <ul>
                            Company
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">Support</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>
                        <ul>
                            Quick Link
                            <li><a href="#!">Share Location</a></li>
                            <li><a href="#!">Orders Tracking</a></li>
                            <li><a href="#!">Size Guide</a></li>
                            <li><a href="#!">FAQs</a></li>
                        </ul>
                        <ul>
                            Legal
                            <li><a href="#!">Terms & conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;