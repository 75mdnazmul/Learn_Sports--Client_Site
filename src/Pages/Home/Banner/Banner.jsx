import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import bannerImg1 from "../../../../src/assets/Banner/banner1.webp"
import bannerImg2 from "../../../../src/assets/Banner/banner2.webp"
import bannerImg3 from "../../../../src/assets/Banner/banner3.webp"
import bannerImg4 from "../../../../src/assets/Banner/banner4.webp"
import bannerImg5 from "../../../../src/assets/Banner/banner5.webp"
import bannerImg6 from "../../../../src/assets/Banner/banner6.webp"
import bannerImg7 from "../../../../src/assets/Banner/banner7.webp"
import bannerImg8 from "../../../../src/assets/Banner/banner8.webp"
import bannerImg9 from "../../../../src/assets/Banner/banner9.webp"
import bannerImg10 from "../../../../src/assets/Banner/banner10.webp"
import bannerImg11 from "../../../../src/assets/Banner/banner11.webp"

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider relative ">
                
                <h1 className='text-7xl font-bold text-white z-10'style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}>Learn Sports</h1>

                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg4})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg7})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg8})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg9})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg10})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg11})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>
                <div className=" keen-slider__slide number-slide" style={{ backgroundImage: `url(${bannerImg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px', filter: "brightness(0.7) contrast(1.2) saturate(0.8)" }}>
                </div>

            </div>
        </>
    )
};

export default Banner;