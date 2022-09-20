import React from 'react';

const AdminAdd = () => {
    return (
        <>
            
        
        <div className="col-sm-9" id="content">
            <h1>Создать объявление</h1>
            
            <h3 style={{color: 'crimson'}}>What is it? </h3>
          
            <form className="form-horizontal" method="post" action="{{ route('products.store') }}" enctype="multipart/form-data">
                    
                    <legend>Введите данные по примеру</legend>
                    <div className="form-group required">
                        <label for="input-firstname" className="col-sm-3 control-label">Название услуги</label>
                        <div className="col-sm-9">
                            <input  type="text" className="form-control @error('name') is-invalid @enderror"   placeholder="Маникюр" value="" name="name"/>
                                
                                    
                                        <strong>Name</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-firstname" className="col-sm-3 control-label">Выберите категорию</label>
                        <div className="col-sm-9">
                            <select type="text" className="form-control" id="input-firstname" placeholder="Красота" value="" name="cat">
                                <option value="fashion">Красота</option>
                                <option value="fun">Развлечения</option>
                                <option value="helth">Здоровье</option>
                                <option value="cultur">Культура</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Фото (600х800)</label>
                        <div className="col-sm-9">
                            <input  type="file" className="form-control @error('foto') is-invalid @enderror"  name="foto"/>
                                
                                    
                                        <strong>Photo</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Старая цена (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('old_price') is-invalid @enderror"   placeholder="123" name="old_price"/>
                               
                                    
                                        <strong>Old-price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Цена со скидкой (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('price') is-invalid @enderror"   placeholder="123" name="price"/>
                               
                                    
                                        <strong>Price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Общая скидка (%)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('sale') is-invalid @enderror" placeholder="50" name="sale"/>
                                
                                    
                                        <strong>Sale</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Адрес</label>
                        <div className="col-sm-9">
                            <input  type="text" className="form-control @error('address') is-invalid @enderror" placeholder="Колпино..." name="address"/>
                                
                                    
                                        <strong>Address</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Телефон</label>
                        <div className="col-sm-9">
                            <input  type="tel" className="form-control @error('tel') is-invalid @enderror" placeholder="8 (812) 123-45-67" name="tel" />
                                
                                    
                                        <strong>Phone-number</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Описание</label>
                        <div className="col-sm-9">
                            <input  type="text" className="form-control @error('desc') is-invalid @enderror" placeholder="Салон красоты Венера..." name="desc" />
                                
                                    
                                        <strong>Description</strong>
                                    
                               
                        </div>
                    </div>
                <div className="buttons">
                    <div className="pull-right">Нажимая кнопку отправить, я соглашаюсь с <a className="agree" href="#"><b>политикой конфеденциальности </b></a>
                        <input type="submit" className="btn btn-primary" value="Отправить" />
                    </div>
                </div>
            </form>
        </div>

        </>
    );
};

export default AdminAdd;