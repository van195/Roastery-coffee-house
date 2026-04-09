import "./joinCommunity.scss";
import cupWithMan from "../../assets/cupWithGuys.png"
import products from "../../assets/Proefpakket_page-0.png";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const JoinCommunity = ()=>{
    return(
        <div className="joincommunity">
            <div className="joincommunityContainer">
                <div className="theLeft">
                  <img src={cupWithMan} alt="" />
                </div>
                <div className="theCenter">
                    <h2>Up to 50% off</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita optio amet dicta earum reiciendis officiis unde ipsam debitis fuga illum eos ipsa eum repellendus, perferendis omnis iusto voluptatem cum ad!</p>
                    <div className="inputPlace">
                        <NotificationsOutlinedIcon/>
                      <input type="text"  placeholder=" Your email address"/>
                    </div>
                    <button className="subscribe">Subscribe</button>
                </div>
                <div className="theRight">
                    <img src={products} alt="" />
                </div>
            </div>
        </div>
    )
}
export default JoinCommunity;