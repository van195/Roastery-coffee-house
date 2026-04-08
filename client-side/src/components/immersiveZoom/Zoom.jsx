import "./zoom.scss";
import maskedImage from "../../assets/espresso-surrounded-by-scattered-coffee-beans-dark-surface.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Zoom = ()=>{
    const maskContainer = useRef()
    const maskImage = useRef()
    const maskHeader = useRef()
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger:'.spotlight',
            start:"top top",
            end:`+=400px`,
            pin:true,
            pinSpacing:true,
            scrub:1,
            onUpdate:(self)=>{
                const progress = self.progress;

                if(maskContainer.current && maskImage.current){
                    if(progress >= 0.25 && progress <= 0.75){
                        const MaskProgress = (progress-0.25) / 0.5;
                        const MaskSize = `${MaskProgress * 450}%`;
                        const imageScale = 1.5 - MaskProgress * 0.5;

                        maskContainer?.current?.style?.setProperty("-webkit-mask-size", MaskSize);
                        maskContainer?.current?.style?.setProperty("mask-size", MaskSize);

                        gsap.set(maskImage.current,{
                            scale:imageScale
                        })

                    }else if(progress < 0.25){
                        maskContainer?.current?.style?.setProperty("-webkit-mask-size", "0%");
                        maskContainer?.current?.style?.setProperty("mask-size", "0%"); 
                        gsap.set(maskImage.current,{
                            scale:1.5
                        })
                    }else if(progress > 0.75){
                        maskContainer?.current?.style?.setProperty("-webkit-mask-size", "450%");
                        maskContainer?.current?.style?.setProperty("mask-size", "450%"); 
                        gsap.set(maskImage.current,{
                            scale:1
                        })
                    }
                }        
            }

        })
    },[])
    return(
        <div className="zoom">
            <div className="spotlight">
                <div className="mask-container" ref={maskContainer}>
                    <div className="mask-image" ref={maskImage}>
                        <img src={maskedImage} alt="" />
                    </div>
                    <div className="header">
                        <h1 ref={maskHeader}>Try Our Cinnamon Roast!</h1>
                        <p>Whether the weather is warm or cool, this blend tastes just as good hot as it does cold</p>
                        <span>Explore More <ArrowForwardOutlinedIcon/></span>
                    </div>
               </div>
            </div>
        </div>
    )
} 
export default Zoom;
