import React from 'react';

import SiteBar from '../components/SiteBar';


export default function  Home(){
    let loop = [{name: 'phone', price: 29, old_price: 89, sale: 12, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'}

            ];

    return ( <>
   



        <div id="content" className="col-sm-9">
            <div className="customtab">
                <div id="tabs" className="customtab-wrapper">
                    <ul className='customtab-inner'>
                        <li className='tab'><a href="#tab-latest">Новые (5шт)</a></li>
                        <li className='tab'><a href="#tab-special">Дешевые (5шт)</a></li>
                        <li className='tab'><a href="#tab-bestseller">Больше скидка (5шт)</a></li>
                    </ul>
                </div>







{/* TODO create loop */}
                <div id="tab-latest" className="tab-content">
                    <div className="box">
                        <div id="latest-slidertab" className="row owl-carousel product-slider">

                            {loop.map((prop) => {
     return   <div className="item">
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + prop.img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{prop.name}</h4>
                                <p className="price product-price">{prop.price}  <span className="price-old">{prop.old_price}</span></p>
                                <div className="rating">Sale: {prop.sale}%</div>
                            </div>
                        </div>
                    </div>
})}

                        </div>
                    </div>
                </div>
              




{/* TODO create loop */}
                <div id="tab-special" className="tab-content">
                    <div className="box">
                        <div id="special-slidertab" className="row owl-carousel product-slider">
                            
                            
                        {loop.map((prop) => {
     return   <div className="item">
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + prop.img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{prop.name}</h4>
                                <p className="price product-price">{prop.price}  <span className="price-old">{prop.old_price}</span></p>
                                <div className="rating">Sale: {prop.sale}%</div>
                            </div>
                        </div>
                    </div>
})}


                        </div>
                    </div>
                </div>






{/* TODO create loop */}
                <div id="tab-bestseller" className="tab-content">
                    <div className="box">
                        <div id="bestseller-slidertab" className="row owl-carousel product-slider">

                            
                        {loop.map((prop) => {
     return   <div className="item">
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + prop.img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{prop.name}</h4>
                                <p className="price product-price">{prop.price}  <span className="price-old">{prop.old_price}</span></p>
                                <div className="rating">Sale: {prop.sale}%</div>
                            </div>
                        </div>
                    </div>
})}


                        </div>
                    </div>
                </div>






                <div id="subbanner4" className="banner" >
                    <div className="item"> <a href="#"><img src="image/banners/subbanner4.jpg" alt="Sub Banner4" className="img-responsive" /></a> </div>
                </div>
                <div id="subbanner5" className="banner" >
                    <div className="item"> <a href="#"><img src="image/banners/subbanner5.jpg" alt="Sub Banner5" className="img-responsive" /></a> </div>
                </div>






{/* Строка последних 4 картинок */}
{/* TODO Create a loop  */}
                <h3 className="productblock-title">Последние 4 шт</h3>
                <div className="box">
                    <div id="feature-slider" className="row owl-carousel product-slider">

                    {loop.map((prop) => {
     return   <div className="item">
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + prop.img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{prop.name}</h4>
                                <p className="price product-price">{prop.price}  <span className="price-old">{prop.old_price}</span></p>
                                <div className="rating">Sale: {prop.sale}%</div>
                            </div>
                        </div>
                    </div>
})}
                        

                    </div>
                </div>
            </div>



{/* Статичные картинки */}
            <div id="brand_carouse" className="owl-carousel brand-logo">
                <div className="item text-center"> <a href="#"><img src="image/brand/brand1.png" alt="Disney" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="image/brand/brand1.png" alt="Dell" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="image/brand/brand3.png" alt="Harley" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="image/brand/brand4.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="#"><img src="image/brand/brand6.png" alt="Canon" className="img-responsive" /></a> </div>
                </div>
        </div>
   



    </>);
}