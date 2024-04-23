import './promo.css'
import promoImg from './../../img/images/header-img.jpg'

const Promo = () => {
    return ( 
        <selection className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight'>
                            <span>LET`S</span>
                            </span> 
                            EXPLORE 
                            <span className='highlight highlight--yellow'>
                            <span>UNTQUE</span>
                            </span>  
                            CLOTHES.
                    </div>
                    <div className="promo__desc">
                        Live for Influentiol and Innovative fashion!
                    </div>

                    <div className="promo__btn-wrapper">
                        <a href="#!" className="promo__btn">
                            Shop Now
                        </a>
                    </div>
                </div>  
                <div className="promo__img"><img src={promoImg} alt="Promo" /></div>
            </div>
        </selection>
     );
}
 
export default Promo;