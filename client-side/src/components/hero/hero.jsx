import "./hero.scss";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import BrownCoffeeCup from "../../assets/brownCoffeeCup.png";
import liquidSplashCoffee from "../../assets/liquid-splash-coffee-beans-white-background-removebg-preview.png";
import singleCoffeeBean from "../../assets/singleCoffeeBean.png";
import leaf from "../../assets/background-removed-leaf.png";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { itemBottomToTop, itemBottomToToptoText } from "../../config/FrameMotion";
const Hero = ()=>{
    const Ref = useRef()
    const container = useRef()
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
       gsap.to(Ref.current,{
        keyframes: [
        {
            x: -530,
            rotate: 20,
            scale: .8,
            y:100
        },
        {   
            x:-287,
            rotate:0,
            scale: 0.3
        }],
        scrollTrigger:{
            trigger:Ref.current,
            start: "top top",
            end:"+=860",
            scrub:true,
            pin: true
        }

       })
       gsap.fromTo(
         Ref.current,
        { scale: 0.2},
        {
            scale: [1.1,1],
            duration: 0.5,
            delay: 4.2,
            ease: "back.out(2.5)"
        }
       );
       gsap.fromTo(
         ".leafBottom",
        { x:2,
            rotate:0
         },
        {
            x: 0,
            rotate:-30,
            duration: 0.5,
            delay: 4.6,
            ease: "back.out(2.5)"
        }
       );
       gsap.fromTo(
         ".leafTop",
        { x:-2,
            rotate:0
         },
        {
            x: 0,
            rotate:30,
            duration: 0.5,
            delay: 4.6,
            ease: "back.out(2.5)"
        }
       );
       gsap.timeline({
        ScrollTrigger:{
            trigger:'.heroContainer',
            start:'top top',
            end:'top top',
            scrub:'true',
            pin:true
        }
       })
        .to('.leafTop',{y:-20},0)
        .to('.leafBottom',{y:20},0)
    }, { scope: container })
    return(
        <div className="hero" >
           <div className="heroContainer" ref={container}>
             <img src={leaf} alt="" className="leafTop" />
             <img src={leaf} alt="" className="leafBottom" />
              <motion.div className="heroTextPart">
                   <img src={singleCoffeeBean} className="coffeeBeans1" alt="" />
                   <img src={singleCoffeeBean} className="coffeeBeans2" alt="" />
                   <img src={singleCoffeeBean} className="coffeeBeans3" alt="" />
                   <motion.h1 variants={itemBottomToToptoText} initial='hidden' animate='visible'>
                     Ro<strong>a</strong>stery Co<strong>ff</strong>ee House
                    </motion.h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia sol.</p>
                   <motion.span variants={itemBottomToToptoText} initial='hidden' animate='visible'>Order Now! <KeyboardDoubleArrowRightOutlinedIcon/></motion.span>
              </motion.div>
              <div className="heroImagePart">
                    <img src={BrownCoffeeCup} className='coffeeCup' alt="" ref={Ref}/>
                    <img src={liquidSplashCoffee} className='splashCoffee' alt="" />
              </div>
           </div>
        </div>
    )
}
export default Hero