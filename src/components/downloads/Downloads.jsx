import './downloads.css'
import storeMobImg from './../../img/icons/app-store.png'
import googleMobImg from './../../img/icons/google-play.png'
import voucher from './../../img/images/vouchers-img.png'

const Downloads = () => {
    return ( 
        <selection className="downloads">
            <div className="downloads__content">
                <div className="downloads__text">
                    <div className="downloads__title">
                    DOWNLOAD APP & GET THE VOUCHER!
                    </div>
                    <div className="downloads__disc-mobile">
                        Get 30% off for first transaction using Rondovision mobile app for now.
                    </div>
                    <div className="downloads__mobile-app">
                        <img src={storeMobImg} alt="store" />
                        <img src={googleMobImg} alt="google" />
                    </div>
                </div>
                <div className="downloads__img">
                    <img src={voucher} alt="voucher" />
                </div>
            </div>
        </selection>
    );
}
 
export default Downloads;