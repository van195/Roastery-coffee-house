import "./home.scss"
import CoffeeFeature from '../../components/coffeeFeature/coffeeFeature.jsx';
import Hero from '../../components/hero/hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import OurStory from '../../components/OurStory/ourStory.jsx';
import SpotLight from '../../components/spotlight/spotlight.jsx';
import Zoom from '../../components/immersiveZoom/Zoom.jsx';
import OurMenu from '../../components/ourMenu/ourMenu.jsx';
import logo from "../../assets/Logo.png";
import loadingAbstarct from "../../assets/rightSideOfBeans.png";
import leftBeansOfCoffeeBeans from "../../assets/image-removebg-preview.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import JoinCommunity from '../../components/joinCommunit/joinCommunity.jsx';
import Footer from '../../components/footer/footer.jsx';
import Lenis from "lenis";
import { motion } from "framer-motion";
import { itemBottomToTop, Stagger } from '../../config/FrameMotion.jsx';
const Home =()=>{
    const element = useRef(null);
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
      ScrollTrigger.killAll();
    };
  }, []);
  function animateProgress(duration = 4) {
    const tl = gsap.timeline();
    const counterSteps = 5;
    let currentProgress = 0;

    for (let i = 0; i < counterSteps; i++) {
      const finalStep = i === counterSteps - 1;
      const targetProgress = finalStep
        ? 1
        : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);

      currentProgress = targetProgress;

      tl.to(".preLoader-progress-bar", {
        scaleX: targetProgress,
        duration: duration / counterSteps,
        ease: "power2.out",
      });
  }

  return tl;
}
   useGSAP(() => {
   
    const tl=gsap.timeline({delay:0.5});

    tl.add(animateProgress(),"<")
      .to(".preLoader-progress",
        {
        opacity:0,
        duration:0.5,
        ease:"power3.out"
       },
       "-=0.25"
       )
    .to(".preLoaderMask",
       {
         scale:5,
         backgroundColor:'#0a0a0a00',
         duration:2.5,
         ease:"power3.out"
      },"<")
    .to(".container",{
        scale:1,
        duration:1.2,
        ease:"power3.out"
    },
     "<"
    );
    
    
  }, []);
    return(
        <div className="home">
            <div className="preLoader-progress">
                      <div className="preLoader-progress-bar"></div>
                      <div className="preLoader-progress-logo">
                           <motion.img src={logo} alt="" variants={itemBottomToTop} initial='hidden' animate='visible'/>
                           <motion.div variants={Stagger} initial='hidden' animate='visible' className="textContaner">
                             <motion.h1 variants={itemBottomToTop}>R</motion.h1> 
                             <motion.h1 variants={itemBottomToTop}>o</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>a</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>s</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>t</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>e</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>r</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>y </motion.h1>
                             <motion.h1 variants={itemBottomToTop}> </motion.h1> 
                             <motion.h1 variants={itemBottomToTop}> C</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>o</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>f</motion.h1>                        
                             <motion.h1 variants={itemBottomToTop}>f</motion.h1>                        
                             <motion.h1 variants={itemBottomToTop}>e</motion.h1>
                             <motion.h1 variants={itemBottomToTop}>e</motion.h1>
                          </motion.div>
                      </div>
                      <img src={leftBeansOfCoffeeBeans} alt="" className='loadingRightBeans' />
                      <img src={loadingAbstarct} alt="" className='loadingAbstarct' />
                  </div>
                  <div className="preLoaderMask">
                        
                  </div>
                    <div className="container">
                       
                    </div>
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
          <Footer/>
        </div>
    )
}
export default Home;