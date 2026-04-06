import "./NavBar.scss";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import logo from "../../assets/Logo.png";
const NavBar = ()=>{
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