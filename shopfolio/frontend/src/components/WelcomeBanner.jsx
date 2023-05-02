import React from "react";

const welcomeBanner = () => {
return (
<div id="welcomeBanner">
<button id="welcomeBanner_nextButton"><i className="fa-solid fa-angles-left"></i></button>
<div id="BannerContent"> 
<img src="../img/banner.jpg" alt="Banner" />
</div>
<button id="welcomeBanner_prevButton"><i className="fa-solid fa-angles-right"></i></button>
</div>)
}
export default welcomeBanner 