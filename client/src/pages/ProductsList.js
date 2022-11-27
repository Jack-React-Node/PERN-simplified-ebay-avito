import React from 'react';

const ProductsList = () => {
    let loop = [{name: 'phone', price: 29, old_price: 89, sale: 12, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'}

            ];

    return (
        <>
        

        <div id="content" className="col-sm-9">
          

            <div className="category-page-wrapper">

              <div className="col-md-2 text-left sort-wrapper">
                <label className="control-label" for="input-sort">Сортировать:</label>
                <div className="sort-inner">
                    
                  
                  {/* <form action="" id="myForm" method="post" style={{position: 'relative'}}>
                  
                <select id="input-sort" className="form-control" name="wjs">
                  <option value="2" >Дата (Убывание)</option>
                  <option value="1" >Дата (Возростание)</option>
                  <option value="3" >Цена (Возростание)</option>
                  <option value="4" >Цена (Убывание)</option>
                </select>
                <button type="submit" style="position: absolute; top: 3px; left: 103%;">Выбрать</button>
              </form> */}

                </div>
              </div>
            </div>



          <div className="grid-list-wrapper">
            

            {loop.map((prop) => {
     return   <div className="product-layout product-grid col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="product-thumb">
                <div className="image product-imageblock"><a href=""><img src={'image/product/' + prop.img} alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /> </a>
                </div>
                <div className="caption product-detail">
                    <h4 className="product-name"> <a href="#" title="#">{prop.name}</a> </h4>
                    <p className="price product-price"><span className="price-old">{prop.old_price}</span> {prop.price}</p>
                    <div className="rating">Sale: {prop.sale}%</div>
                </div>
                </div>
            </div>
})}


        </div>
            <div className="category-page-wrapper">
              <div className="result-inner">Показанны ?? страниц)</div>
              <div className="pagination-inner">
                <ul className="pagination">
                  
                    
                    <li><a href=""> Paginationn</a></li>
                  
                 
                </ul>
              </div>
            </div>
          </div>

        </>
    );
};

export default ProductsList;