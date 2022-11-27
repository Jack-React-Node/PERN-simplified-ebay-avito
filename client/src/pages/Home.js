import {useState, useEffect} from 'react';
import axios from '../http/Axios';
// import SiteBar from '../components/SiteBar';


export default function  Home(){
        const [goods, setGoods] = useState();


 
    const m1 = async () => {
        const {data}= await axios.get('/device/');
        return data;
    }



    useEffect(() => {
        m1().then(data => setGoods(data)).catch(e => console.log(e.message));
     if(goods) console.log(goods.created);
    }, [])

    if(!goods){ return(

    <p >Hello! e</p>
);}

// return(<p>{goods.created[0].name}</p>);


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








                <div id="tab-latest" className="tab-content">
                    <div className="box">
                        <div id="latest-slidertab" className="row owl-carousel product-slider">



                            {Object.keys(goods.created[0]).map((index) => {
     return   <div className="item" key={index}>
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + goods.created[0].img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{goods.created[0].name}</h4>
                                <p className="price product-price">{goods.created[0].price}  <span className="price-old">{goods.created[0].old_price}</span></p>
                                <div className="rating">Sale: {goods.created[0].sale}%</div>
                            </div>
                        </div>
                    </div>
})}

                        </div>
                    </div>
                </div>
              




                <div id="tab-special" className="tab-content">
                    <div className="box">
                        <div id="special-slidertab" className="row owl-carousel product-slider">
                            
                            
                        {Object.keys(goods.created[0]).map((index) => {
     return   <div className="item" key={index}>
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + goods.created[0].img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{goods.created[0].name}</h4>
                                <p className="price product-price">{goods.created[0].price}  <span className="price-old">{goods.created[0].old_price}</span></p>
                                <div className="rating">Sale: {goods.created[0].sale}%</div>
                            </div>
                        </div>
                    </div>
})}


                        </div>
                    </div>
                </div>


              <div id="tab-bestseller" className="tab-content">
                    <div className="box">
                        <div id="bestseller-slidertab" className="row owl-carousel product-slider">

                            
                        {Object.keys(goods.created[0]).map((index) => {
     return   <div className="item" key={index}>
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + goods.created[0].img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{goods.created[0].name}</h4>
                                <p className="price product-price">{goods.created[0].price}  <span className="price-old">{goods.created[0].old_price}</span></p>
                                <div className="rating">Sale: {goods.created[0].sale}%</div>
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







              {/* <h3 className="productblock-title">Последние 4 шт</h3>
                <div className="box">
                    <div id="feature-slider" className="row owl-carousel product-slider">

                    {Object.keys(goods.created[0]).map((index) => {
     return   <div className="item" key={index}>
                        <div className="product-thumb transition">
                            <div className="image product-imageblock"> <a href=""><img src={'image/product/' + goods.created[0].img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                            <div className="caption product-detail">
                                <h4 className="product-name">{goods.created[0].name}</h4>
                                <p className="price product-price">{goods.created[0].price}  <span className="price-old">{goods.created[0].old_price}</span></p>
                                <div className="rating">Sale: {goods.created[0].sale}%</div>
                            </div>
                        </div>
                    </div>
})}
                        

                    </div>
                </div> */}
            </div>




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