import React, { useState, useEffect } from "react";
import banners from "./BannerCataloge.json";

const WelcomeBanner = () => {
  const [bannerImageSrc, setbannerImageSrc] = useState(banners[0].imageSrc);
  const [bannerCounter, setBannerCounter] = useState(0);

  useEffect(() => {
    // Set background-color of relevant counter div based on bannerCounter state value
    const bannerCounter1 = document.getElementById("bannerCounter1");
    const bannerCounter2 = document.getElementById("bannerCounter2");
    const bannerCounter3 = document.getElementById("bannerCounter3");

    if (bannerCounter === 0) {
      bannerCounter1.style.backgroundColor = "rgba(206, 204, 204, 7)";
      bannerCounter2.style.backgroundColor = "";
      bannerCounter3.style.backgroundColor = "";
    } else if (bannerCounter === 1) {
      bannerCounter1.style.backgroundColor = "";
      bannerCounter2.style.backgroundColor = "rgba(206, 204, 204, 7)";
      bannerCounter3.style.backgroundColor = "";
    } else if (bannerCounter === 2) {
      bannerCounter1.style.backgroundColor = "";
      bannerCounter2.style.backgroundColor = "";
      bannerCounter3.style.backgroundColor = "rgba(206, 204, 204, 7)";
    }
  }, [bannerCounter]);

  const nextBanner = () => {
    const currentIndex = banners.findIndex(
      (banner) => banner.imageSrc === bannerImageSrc
    );
    if (currentIndex === banners.length - 1) {
      setbannerImageSrc(banners[0].imageSrc);
      setBannerCounter(0);
    } else {
      setbannerImageSrc(banners[currentIndex + 1].imageSrc);
      setBannerCounter(bannerCounter + 1);
    }
  };

  const prevBanner = () => {
    const currentIndex = banners.findIndex(
      (banner) => banner.imageSrc === bannerImageSrc
    );
    if (currentIndex === 0) {
      setbannerImageSrc(banners[banners.length - 1].imageSrc);
      setBannerCounter(2);
    } else {
      setbannerImageSrc(banners[currentIndex - 1].imageSrc);
      setBannerCounter(bannerCounter - 1);
    }
  };

  return (
    <div id="welcomeBanner">
      <button id="welcomeBanner_prevButton" onClick={nextBanner}>
        <i className="fa-solid fa-angles-right" ></i>
      </button>

      <img id="BannerImage" src={bannerImageSrc} alt="Banner" />

      <div id="bannerCounterBox">
        <div id="bannerCounter1"></div>
        <div id="bannerCounter2"></div>
        <div id="bannerCounter3"></div>
      </div>

      <button id="welcomeBanner_nextButton" onClick={prevBanner}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
    </div>
  );
};

export default WelcomeBanner;