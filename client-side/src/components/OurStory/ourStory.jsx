import "./ourStory.scss";
import yellowCup from "../../assets/yellowCoffeeCup.png";
import roseCoffeeCup from "../../assets/roseCoffeeCup.png";
import coffeeBeans from "../../assets/coffeeBeans.png";
import womenImage from "../../assets/Image-ourstory.png";
import singleCoffeeBean from "../../assets/singleCoffeeBean.png";
const OurStory = ()=>{
    return(
        <div className="OurStory">
             <div className="OurStoryContainer">
                <img src={singleCoffeeBean} className="coffeeBean" alt="" />
                <img src={singleCoffeeBean} className="coffeeBean1" alt="" />
                <img src={singleCoffeeBean} className="coffeeBean2" alt="" />
                <img src={singleCoffeeBean} className="coffeeBean3" alt="" />
                <img src={singleCoffeeBean} className="coffeeBean4" alt="" />
                <img src={singleCoffeeBean} className="coffeeBean5" alt="" />
                <div className="theCupSpot">
                    <div className="theCupSpotContainer">
                       <div className="theSpotWithItem">
                            <div className="itemContainer">
                                <img src={yellowCup} alt="" />
                            </div>
                            <span>Milk Iced Coffee</span>
                       </div>
                       <div className="theSpotWithItem">
                            <div className="itemContainer">

                            </div>
                            <span>Signature Cold Brew</span>
                       </div>
                       <div className="theSpotWithItem">
                            <div className="itemContainer">
                                <img src={roseCoffeeCup} alt="" className="roseCoffeeCup"/>
                            </div>
                            <span>Velvet Bean Brew</span>
                      </div>
                    </div>
                </div>
                <div className="theStory">
                     <div className="theStoryContainer">
                         <h1>Our Story</h1>
                        <div className="theStoryImagePart">
                            <img src={womenImage} alt="" />
                        </div>
                        <div className="theStorytextPatr">
                            <p>
                                Our journey started with a vision—to create more than just coffee.
                                 We wanted a space where flavors meet creativity and every visit feels personal.
                                  From sourcing our beans to perfecting each recipe, we focus on the details that turn ordinary moments into something memorable.
                                  With carefully selected beans and refined techniques, we create an experience that goes beyond the ordinary.
                            </p>
                        </div>
                     </div>
                </div>
             </div>
        </div>
    )
}
export default OurStory;