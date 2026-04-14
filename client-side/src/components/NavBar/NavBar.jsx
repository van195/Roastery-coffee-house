import "./NavBar.scss";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import logo from "../../assets/Logo.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
const NavBar = ()=>{
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        const navTween = gsap.timeline({
         ScrollTrigger:{
            trigger:".navbarContainer",
            start:'bottom top'
         }
        });
        navTween.fromTo('.navbarContainer',
            {
              backgroundColor:'transparent'
            },
            {
                backgroundColor:'#00000050',
                backdropFilter: 'blur(10px)',
                duration:1,
                ease:'power1.inOut'
            }
        )
    },[])
    return(
        <div className="navbar">
            <div className="navbarContainer">
                 <img src={logo} alt="" />
                 <span className="theMenu">Service</span>
                 <span className="theMenu">Catagory</span>
                 <span className="theMenu">About</span>
                 <span className="SignUpButton">Join <ArrowForwardOutlinedIcon
                  style={{
                    padding:"6px",
                    border:"1px solid #000",
                    borderRadius:"50%",
                    color:"#fff",
                    backgroundColor:"#210f04",
                  }}/></span>
            </div>
        </div>
    )
}
export default NavBar;