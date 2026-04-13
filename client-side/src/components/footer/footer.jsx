import "./footer.scss";
import mans from "../../assets/PopularmenuImg.png"
import mans1 from "../../assets/manwithMastush.png"
import mans2 from "../../assets/manwithCurlyHair.png"
import mans3 from "../../assets/women.png"
import logo from "../../assets/Logo.png";
import faceBook from "../../assets/faceBook.png";
import instagram from "../../assets/instagram.png";
import twiiter from "../../assets/twiiter.png";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footerContainer">
                <div className="footerContainerTop">
                    <div className="left">
                        <img src={mans} alt="" />
                    </div>
                    <div className="center">
                        <div className="comments">
                            <h1 className="name">Miki</h1>
                            <span><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarHalfOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/></span>
                            <img src={mans1} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia illo sunt voluptatibus aliquam nisi voluptas quod explicabo adipisci. Consequuntur, reprehenderit aliquam! Odio, suscipit magni totam asperiores molestiae illo aut.</p>
                        </div>
                        <div className="comments zoomOut">
                            <h1 className="name">Erloi</h1>
                            <span><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarHalfOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/></span>
                            <img src={mans2} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia illo sunt voluptatibus aliquam nisi voluptas quod explicabo adipisci. Consequuntur, reprehenderit aliquam! Odio, suscipit magni totam asperiores molestiae illo aut.</p>
                        </div>
                        <div className="comments">
                            <h1 className="name">sami</h1>
                            <span><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/><StarHalfOutlinedIcon style={{color:"#fdd990",fontSize:"16px"}}/></span>
                            <img src={mans3} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia illo sunt voluptatibus aliquam nisi voluptas quod explicabo adipisci. Consequuntur, reprehenderit aliquam! Odio, suscipit magni totam asperiores molestiae illo aut.</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={mans} alt="" />
                    </div>
                </div>
                <div className="footerContainerBottom">
                    <div className="logoSector">
                         <img src={logo} alt="" />
                         <span className="titleOfCompany">Roastery</span>
                         <p><EmailOutlinedIcon/> roastery@gmail.com</p>
                         <p><LocalPhoneOutlinedIcon/> +1 234 43252</p>
                    </div>
                    <div className="theFooterLists">
                        <div className="listContainers">
                            <h2>About</h2>
                            <p> our story</p>
                            <p>FAQ</p>
                            <p>Careers</p>
                        </div>
                        <div className="listContainers">
                            <h2>customer resource</h2>
                            <p> menu</p>
                            <p>location</p>
                            <p>support</p>
                        </div>
                        <div className="listContainers">
                            <h2>Service</h2>
                            <p> Payment option</p>
                            <p>refund and Exchange</p>
                            <p>limitation of liability</p>
                        </div>
                        <div className="listContainers">
                            <h2>Our policy</h2>
                            <p> terms & condition</p>
                            <p>shipping policy</p>
                            <p>return policy</p>
                        </div>
                        <div className="listContainers">
                            <h2>Get in touch</h2>
                            <div className="imageSocialMedia">
                                <img src={faceBook} alt="" />
                                <img src={instagram} alt="" />
                                <img src={twiiter} alt="" />
                            </div>
                        </div>
                                    <p>copy right</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;