import { useEffect, useRef } from "react";
import "./spotlight.scss";
import {CONFIG ,totalImages ,aspectRatios,baseImageHeight} from "../../config/config.jsx"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SpotLight = ()=>{
    const spotlightImagesContainer = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
    const container = spotlightImagesContainer.current;
    if (!container) return;

    // Clear previous (important for re-renders)
    container.innerHTML = "";

    // Create images
    for (let i = 0; i < totalImages; i++) {
      const imageItem = document.createElement("div");
      imageItem.classList.add("spotlight-image");

      const aspectRatio = aspectRatios[i % aspectRatios.length];
      imageItem.style.aspectRatio = aspectRatio;

      const shrinkStartIndex = Math.floor(totalImages * 0.75);

      let shrinkFactor = 0;
      if (i >= shrinkStartIndex) {
        shrinkFactor =
          (i - shrinkStartIndex + 1) /
          (totalImages - shrinkStartIndex);
      }

      const adjustedHeight =
        baseImageHeight * (1 - shrinkFactor * 0.5);

      imageItem.style.height = `${Math.round(adjustedHeight)}px`;

      const img = document.createElement("img");
      img.src = `/img${i + 1}.png`;

      imageItem.appendChild(img);
      container.appendChild(imageItem);
    }

    // Now elements exist → GSAP can target them
    const imageItems = gsap.utils.toArray(".spotlight-image");

    function updateImageSizes() {
      const sizeFactor = Math.min(window.innerWidth / 750, 1);
      const shrinkStartIndex = Math.floor(totalImages * 0.75);

      imageItems.forEach((imageItem, index) => {
        let shrinkFactor = 0;

        if (index >= shrinkStartIndex) {
          const imagesToShrink = totalImages - shrinkStartIndex;
          shrinkFactor =
            (index - shrinkStartIndex + 1) / imagesToShrink;
        }

        const height =
          baseImageHeight *
          sizeFactor *
          (1 - shrinkFactor * 0.5);

        imageItem.style.height = `${Math.round(height)}px`;
      });
    }

    updateImageSizes();
     imageItems.forEach((imageItem, index)=>{
       const normailzeIndex = index / (totalImages - 1);

       ScrollTrigger.create({
        trigger:imageItem,
        start:"top bottom",
        end:"bottom top",
        onUpdate:({progress})=>{
          const {base,flow,detail}= CONFIG.waves;
          const vw = window.innerWidth;

          const baseWave = Math.sin(
                normailzeIndex * base.frequency +
                (1 - progress) * base.speed +
                base.phase
            );
          const flowWave =
                0.5 *
                Math.sin(
                    normailzeIndex * flow.frequency + flow.phase + progress * flow.speed,
            );
          const detailWave =
                0.5 *
                Math.sin(
                    normailzeIndex * detail.frequency +
                    detail.phase +
                    progress * detail.speed,
            );

         const translateX = 
          (vw - imageItem.offsetWidth) / 2 -
           vw * 0.1 +
           baseWave * vw * base.amplitude +
           flowWave * vw * flow.amplitude +
           detailWave * vw * detail.amplitude;

           const centerOffset = Math.abs(progress - 0.5) * 2;

           const clipAmount = 
            Math.pow(centerOffset,CONFIG.clipping.power) * CONFIG.clipping.maxValue;
  
            imageItem.style.translate = `${translateX}px`;
            imageItem.style.clipPath = `inset(0 ${clipAmount}% 0 ${clipAmount}%)` ;
        },
       });
     })

    // Optional: update on resize
    window.addEventListener("resize", updateImageSizes);

    return () => {
      window.removeEventListener("resize", updateImageSizes);
    };
  }, []);
  
    return(
        <div className="spotLight">
            <div className="spotLight-images" ref={spotlightImagesContainer}>

            </div>
        </div>
    )
}
export default SpotLight;