import React from 'react';

const AdminPanel = () => {
    let loop = [{name: 'phone', price: 29, old_price: 89, sale: 12, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'},
    {name: 'tablet', price: 23, old_price: 59, sale: 22, img: 'product1.jpg'}

            ];
    return (
        <>
            
        
        <div id="content" className="col-sm-9">
  <div className="productinfo-tab">
    <h3 className="productblock-title">Мои объявления  <a href=""><button className="btn btn-primary">Создать объявление</button></a>
    </h3>
    <div className="box">
      <div id="related-slidertab" className="row owl-carousel product-slider">



      {loop.map((prop) => {
     return   <div className="item">
                    <div className="product-thumb transition">
                    <div className="image product-imageblock"> <a href=""><img src="" alt="iPod classic" title="iPod classic" className="img-responsive" /></a>
                    </div>
                    <div className="caption product-detail">
                        <h4 className="product-name">{prop.name}</h4>
                        <p className="price product-price"><a href="" style={{cursor: 'pointer'}}>Редактировать </a></p>
                        <div className="rating"><a href="" style={{cursor: 'pointer'}}> Удалить</a></div>
                    </div>                 
                    </div>
                </div>
})}


      </div>
    </div>
  </div>
</div>


        </>
    );
};

export default AdminPanel;