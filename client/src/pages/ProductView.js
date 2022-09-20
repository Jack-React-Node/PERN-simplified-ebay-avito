import React from 'react';

const ProductView = () => {
    return (
        <>


        <div id="content" className="col-sm-9">
            <div className="row">
                <div className="col-sm-6">
                    <ul className="thumbnails">
                        <li><span className="thumbnail fancybox"><img src="image/product/product1.jpg" /></span>
                        </li>
                    </ul>
                </div>
                
                <div className="col-sm-6">
                    <h1 className="productpage-title">ProductName</h1>
                    <ul className="list-unstyled productinfo-details-top">
                        <li>
                            <h2 className="productpage-price">Price - 10$ <span className="price-old">30</span></h2>
                        </li>
                        <li><span className="productinfo-tax">Скидка: 30 %</span></li>
                    </ul>
                    <hr/>
                    <ul className="list-unstyled product_info">
                        <li>
                            <label>До конца акции:</label>
                            <span> 12 дней</span></li>
                        <li>
                            <label>Адрес:</label>
                            <span>Kolpini</span></li>
                        <li>
                            <label>Телефон:</label>
                            <span>79865656564</span></li>
                    </ul>
                    <hr/>
                    <p className="product-desc">????</p>
                </div>
            </div>
                            {/* <div className="productinfo-tab">
                                <h3 className="productblock-title">Рекомендуем также</h3>
                                <div className="box">
                                    <div id="related-slidertab" className="row owl-carousel product-slider">
                                        @isset($prod)
                                        @foreach ($prod as $prods)
                                            
                                        <div className="item">
                                            <div className="product-thumb transition">
                                                <div className="image product-imageblock"> <a href="{{ route('products.show', ['product' => $prods->id]) }}"><img src="{{ asset('/storage/' . $prods->file) }}" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                                                <div className="caption product-detail">
                                                    <h4 className="product-name">{{$prods->name}}</h4>
                                                    <p className="price product-price">&#8381 {{$prods->old_price}}  <span className="price-old">{{$prods->price}}</span></p>
                                                    <div className="rating">Sale: {{$prods->sale}}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                        @endisset
                                        
                                    </div>
                                </div>
                            </div> */}
                            
                            





                {/* <div className="customtab">
                            <h3 className="productblock-title">Вы просматривали</h3>
                <div className="box">
                    <div id="feature-slider" className="row owl-carousel product-slider">

                        @isset($prod)
                            @foreach ($prod as $prods)
                        <div className="item product-slider-item">
                            <div className="product-thumb transition">
                                <div className="image product-imageblock">  <a href="{{ route('products.show', ['product' => $prods->id]) }}"><img src="{{ asset('/storage/' . $prods->file) }}" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a></div>
                                <div className="caption product-detail">
                                    <h4 className="product-name">{{ $prods->name }}</h4>
                                    <p className="price product-price">&#8381 {{ $prods->price }} <span className="price-old"> {{ $prods->old_price }}</span></p>
                                    <div className="rating">Sale: {{ $prods->sale }}%</div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                        @endisset

                    </div>
                </div>
            </div>  */}


                        </div>
                    
      


        </>
    );
};

export default ProductView;