import CoffeeFeature from '../../components/coffeeFeature/coffeeFeature.jsx';
import Hero from '../../components/hero/hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import OurStory from '../../components/OurStory/ourStory.jsx';
import SpotLight from '../../components/spotlight/spotlight.jsx';
import Zoom from '../../components/immersiveZoom/Zoom.jsx';
import OurMenu from '../../components/ourMenu/ourMenu.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import JoinCommunity from '../../components/joinCommunit/joinCommunity.jsx';
const Home =()=>{
    const element = useRef(null);
  // useEffect(()=>{
  //      const handleScroll = ()=>{
  //          const offsetY= window.scrollY;
  //          if(element.current){
  //          element.current.style.transform = `translateY(${offsetY * 0.3}px)`;
  //          }
  //      }
  //      window.addEventListener("scroll", handleScroll);
//
  //      return()=>{
  //          window.removeEventListener("scroll",handleScroll);
  //      }
  // },[])
    return(
        <div className="home">
           <NavBar/>
           <Hero/>
           <CoffeeFeature/>
           <OurStory/>
           <SpotLight/>
            <Zoom/>
           <div className="menuContainer" ref={element}>
             <OurMenu/>
           </div>
          <JoinCommunity/>
        </div>
    )
}
export default Home;