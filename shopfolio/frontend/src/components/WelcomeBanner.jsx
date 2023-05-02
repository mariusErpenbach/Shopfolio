import React, { useState,useEffect } from "react";
import banners from "./BannerCataloge.json"
const WelcomeBanner = () => {
   
  const [bannerImageSrc, setbannerImageSrc] = useState(banners[0].imageSrc);

  const nextBanner = () => {
    const currentIndex = banners.findIndex(banner => banner.imageSrc === bannerImageSrc);
    if (currentIndex === banners.length - 1) {
      setbannerImageSrc(banners[0].imageSrc);
    } else {
      setbannerImageSrc(banners[currentIndex + 1].imageSrc);
    }
  };
  const prevBanner = () => {
  const currentIndex = banners.findIndex(banner => banner.imageSrc === bannerImageSrc);
  if (currentIndex === 0) {
    setbannerImageSrc(banners[banners.length - 1].imageSrc);
  } else {
    setbannerImageSrc(banners[currentIndex - 1].imageSrc);
  }
};
  return (
    <div id="welcomeBanner">
      <button id="welcomeBanner_prevButton">
        <i className="fa-solid fa-angles-right" onClick={nextBanner}></i>
      </button>
   
        <img id="BannerImage" src={bannerImageSrc} alt="Banner"/>
        
        <p> hello world</p>
        
        <div id="BannerCounterBox"> 
            <div className="bannerCounter"></div>
            <div className="bannerCounter"></div>
            <div className="bannerCounter"></div> 
        </div>
      
      <button id="welcomeBanner_nextButton" onClick={prevBanner}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
    </div>
  );
};

export default WelcomeBanner;