import "./hero.scss";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import BrownCoffeeCup from "../../assets/brownCoffeeCup.png";
import liquidSplashCoffee from "../../assets/liquid-splash-coffee-beans-white-background-removebg-preview.png";
import singleCoffeeBean from "../../assets/singleCoffeeBean.png";
const Hero = ()=>{
    return(
        <div className="hero">
           <div className="heroContainer">
              <div className="heroTextPart">
                   <img src={singleCoffeeBean} className="coffeeBeans1" alt="" />
                   <img src={singleCoffeeBean} className="coffeeBeans2" alt="" />
                   <img src={singleCoffeeBean} className="coffeeBeans3" alt="" />
                   <h1>Ro<strong>a</strong>stery Co<strong>ff</strong>ee House</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia sol.</p>
                   <span>Order Now! <KeyboardDoubleArrowRightOutlinedIcon/></span>
              </div>
              <div className="heroImagePart">
                    <img src={BrownCoffeeCup} className='coffeeCup' alt="" />
                    <img src={liquidSplashCoffee} className='splashCoffee' alt="" />
              </div>
           </div>
        </div>
    )
}
export default Hero