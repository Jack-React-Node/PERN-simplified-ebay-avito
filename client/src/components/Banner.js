import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="row">
        <div className="col-md-12">
            <div id="main-banner" className="owl-carousel home-slider">
                <div className="item"> <a href="#"><img src="image/banners/Main-Banner1.jpg" alt="main-banner1" className="img-responsive" /></a> </div>
                <div className="item"> <a href="#"><img src="image/banners/Main-Banner2.jpg" alt="main-banner2" className="img-responsive" /></a> </div>
                <div className="item"> <a href="#"><img src="image/banners/Main-Banner3.jpg" alt="main-banner3" className="img-responsive" /></a> </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Banner;