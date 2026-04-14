import "./coffeeFeature.scss";
import yellowCup from "../../assets/yellowCoffeeCup.png";
import iceCoffee1 from "../../assets/iceCoffee1.png";
import iceCoffee2 from "../../assets/iceCoffee2.png";
import iceCoffee3 from "../../assets/black.png";
import roseCoffeeCup from "../../assets/roseCoffeeCup.png";
import starbucksCoffee from "../../assets/starbucksCoffee.png";
import ice from "../../assets/ice.png";
const CoffeeFeature =()=>{
    return(
        <div className="coffeeFeature">
            <div className="coffeeFeatureContainer">
                <div className="theCoffeeCupPart">
                    <img src={starbucksCoffee} alt="" className="front" />
                    <img src={roseCoffeeCup} alt="" className="left" />
                    <img src={ice} alt="" className="behinde" />
                </div>
                <div className="theCoffeeListPart">
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={iceCoffee1} alt="" />
                        </div>
                        <span>Cocktails</span>
                    </div>
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={iceCoffee2} alt="" />
                        </div>
                        <span>Noir Iced Elixir</span>
                    </div>
                    <div className="itemContainer">
                        <div className="itemImageContainer">
                          <img src={iceCoffee3} alt="" className="balckBox"/>
                        </div>
                        <span>Velour Latte</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoffeeFeature;