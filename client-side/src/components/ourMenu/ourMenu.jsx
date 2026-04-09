import "./ourMenu.scss";
import LeftLine from "../../assets/Left-line.png";
import rightLine from "../../assets/right-Line.png";
import coffeeBeanVector from "../../assets/coffeeBeanVector.png";
import coffeeCup3 from "../../assets/coffeeCup3.png";
import COFFEEcup2 from "../../assets/COFFEEcup2.png";
import coffeeCup4 from "../../assets/coffeeCup4.png";
import COFFEcup1 from "../../assets/COFFEcup1.png";
import JoinCommunity from "../joinCommunit/joinCommunity";
const OurMenu = ()=>{
    return(
        <div className="ourMenu">
            <div className="textContainer">
              <h1>Our Special Menu</h1>
              <div className="UnderLineContainer">
                  <img src={LeftLine} alt="" className="leftLine"/>
                  <img src={coffeeBeanVector} alt="" className="center"/>
                  <img src={rightLine} alt="" className="rightLine"/>
              </div>
            </div>
            <div className="itemsContainer">
                <div className="items">
                    <div className="imagePart">
                        <img src={coffeeCup4} alt="" />
                    </div>
                    <div className="textPart">
                        <h1>title</h1>
                        <p>description</p>
                        <span>Order</span>
                    </div>
                </div>
                <div className="items">
                    <div className="imagePart">
                        <img src={coffeeCup3} alt="" />
                    </div>
                    <div className="textPart">
                        <h1>title</h1>
                        <p>description</p>
                        <span>Order</span>
                    </div>
                </div>
                <div className="items">
                    <div className="imagePart">
                        <img src={COFFEEcup2} alt="" />
                    </div>
                    <div className="textPart">
                        <h1>title</h1>
                        <p>description</p>
                        <span>Order</span>
                    </div>
                </div>
                <div className="items">
                    <div className="imagePart">
                        <img src={COFFEcup1} alt="" />
                    </div>
                    <div className="textPart">
                        <h1>title</h1>
                        <p>description</p>
                        <span>Order</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurMenu;