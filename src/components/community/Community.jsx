import './community.css'

const Community = () => {
    return (  
        <selection className="container">
            <div className="community">
                <div className="community__text">
                    <div className="community__title">
                        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                    </div>
                    <div className="community__type">
                        Type your email down below and be young wild generation
                    </div>
                </div>
                <div className="community__form">
                    <form action="" method="post">
                        <input type="email" placeholder='Add your email here' name="email" id="em" />
                        <input type="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </selection>
    );
}
 
export default Community;