import Card from '../card/Card';
import './arrivals.css'
import card01Img from './../../img/categories/cat-01.jpg'
import card02Img from './../../img/categories/cat-02.jpg'
import card03Img from './../../img/categories/cat-03.jpg'

const Arrivals = () => {
    return ( 
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">
                        NEW ARRIVALS
                    </h2>
                </div>
                <div className="arrivars__cards">
                <Card title="Hoodies & Sweetshirt" img={card01Img}/>
                <Card title="Coats & Parkas"  img={card02Img}/>
                <Card title="Teed & T-Shirt"  img={card03Img}/>
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;