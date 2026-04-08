import CoffeeFeature from '../../components/coffeeFeature/coffeeFeature.jsx';
import Hero from '../../components/hero/hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import OurStory from '../../components/OurStory/ourStory.jsx';
import SpotLight from '../../components/spotlight/spotlight.jsx';
import Zoom from '../../components/immersiveZoom/Zoom.jsx';
import OurMenu from '../../components/ourMenu/ourMenu.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
const Home =()=>{
     gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".menuContainer",
        {
           yPercent: 0,
        }
        ,{
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".menuContainer",
            start: "top bottom",   // when it enters viewport
            end: "top top",
            scrub: true,           // smooth scroll-linked animation
        }
        });

    }, []);
    return(
        <div className="home">
           <NavBar/>
           <Hero/>
           <CoffeeFeature/>
           <OurStory/>
           <SpotLight/>
           <Zoom/>
           <div className="menuContainer">
            <OurMenu/>
           </div>
        </div>
    )
}
export default Home;