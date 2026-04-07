import "./coffeeFeature.scss";
import yellowCup from "../../assets/yellowCoffeeCup.png";
import roseCoffeeCup from "../../assets/roseCoffeeCup.png";
const CoffeeFeature =()=>{
    return(
        <div className="coffeeFeature">
            <div className="coffeeFeatureContainer">
                <div className="theCoffeeCupPart">
                    <img src={yellowCup} alt="" className="front" />
                    <img src={roseCoffeeCup} alt="" className="left" />
                </div>
                <div className="theCoffeeListPart">
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={yellowCup} alt="" />
                        </div>
                        <span>asdfasffadsfasdf</span>
                    </div>
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={roseCoffeeCup} alt="" />
                        </div>
                        <span>asdfasffadsfasdf</span>
                    </div>
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={yellowCup} alt="" />
                        </div>
                        <span>asdfasffadsfasdf</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoffeeFeature;