import Card from '../card/Card';
import './favourite.css'
import card01Img from './../../img/images/promo-01.jpg'
import card02Img from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return (  
        <section className="favourite">
            <div className="container">
                <div className="favourites__header">
                    <h2 className="title-2">
                     Young’s Favourite
                    </h2>
                </div>
                <div className="favourites__cards">
                <Card title="Hoodies & Sweetshirt" img={card01Img}/>
                <Card title="Coats & Parkas"  img={card02Img}/>
                </div>
            </div>
        </section>
    );
}
 
export default Favourite;