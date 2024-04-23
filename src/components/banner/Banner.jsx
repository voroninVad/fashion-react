import './banner.css'
import bannerImg from './../../img/images/promo-img.jpg'

const Banner = () => {
    return (
        <selection className="container">
            <div className="banner__content">
                <div className="banner__img"><img src={bannerImg} alt="Banner"/></div>
                <div className="banner__text">
                    <div className="banner__title">
                        <span className='banner__highlight'>
                            <span>PAYDAY</span>
                        </span> 
                            SALE NOW
                    </div>
                    <div className="banner__disc">
                        Spend minimal $100 get 30% off voucher code for your next purchase
                    </div>
                    <div className="banner__condit">
                        <div className="banner__date">
                            1 June - 10 June 2021
                        </div>
                        <div className="banner__cond">
                            *Terms & Conditions apply
                        </div>
                    </div>

                    <div className="banner__btn-wrapper">
                        <a href="#!" className="banner__btn">
                            Shop Now
                        </a>
                    </div>
                </div> 
            </div>
        </selection>
    );
}
 
export default Banner;