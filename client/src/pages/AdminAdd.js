import React, {useState} from 'react';
import axios from '../http/Axios';


const AdminAdd = () => {
 
       const {name, setName} = useState('');
        const {price, setPrice} = useState('');
        const {old_price, setOld_price} = useState('');
        const {sale, setSale} = useState('');
        const {category, setCategory} = useState('');

    async function gGoods(){
        try{
            const goods = await axios.post('/create-device/',
            {
                name: name,
                price: price,
                old_price: old_price,
                sale: sale,
                category: category
              }
            );
            alert(
                'success!'
            );

        }catch(e){
                alert(
                    'no data'
                );
        }
    }
    gGoods();

    return (
        <>
            
        
        <div className="col-sm-9" id="content">
            <h1>Создать объявление</h1>
            
            <h3 style={{color: 'crimson'}}>What is it? </h3>
          
            <form className="form-horizontal">
                    
                    <legend>Введите данные по примеру</legend>
                    <div className="form-group required">
                        <label for="input-firstname" className="col-sm-3 control-label">Название услуги</label>
                        <div className="col-sm-9">
                            <input  type="text" className="form-control @error('name') is-invalid @enderror"   placeholder="Маникюр"  name="name" onChange={e => setName(e.target.value)} />
                                
                                    
                                        <strong>Name</strong>
                                    
                                
                        </div>
                    </div>
                    {/* <div className="form-group required">
                        <label for="input-firstname" className="col-sm-3 control-label">Выберите категорию</label>
                        <div className="col-sm-9">
                            <select type="text" className="form-control" id="input-firstname" placeholder="Красота" name="cat" onChange={e => setCategory(e.target.value)}>
                                <option value="fashion">Красота</option>
                                <option value="fun">Развлечения</option>
                                <option value="helth">Здоровье</option>
                                <option value="cultur">Культура</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Фото (600х800)</label>
                        <div className="col-sm-9">
                            <input  type="file" className="form-control @error('foto') is-invalid @enderror"  name="foto" onChange={e => setCategory(e.target.value)} />
                                
                                    
                                        <strong>Photo</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Старая цена (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('old_price') is-invalid @enderror"   placeholder="123" name="old_price" onChange={e => setOld_price(Number(e.target.value))} />
                               
                                    
                                        <strong>Old-price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Цена со скидкой (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('price') is-invalid @enderror"   placeholder="123" name="price" onChange={e => setPrice(Number(e.target.value))} />
                               
                                    
                                        <strong>Price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label for="input-email" className="col-sm-3 control-label">Общая скидка (%)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control @error('sale') is-invalid @enderror" placeholder="50" name="sale" onChange={e => setSale(Number(e.target.value))} />
                                
                                    
                                        <strong>Sale</strong>
                                    
                               
                        </div>
                    </div>
                <div className="buttons">
                    <div className="pull-right">Нажимая кнопку отправить, я соглашаюсь с <a className="agree" href="#"><b>политикой конфеденциальности </b></a>
                        <input type="submit" className="btn btn-primary"  onClick={gGoods}/>
                    </div>
                </div>
            </form>
        </div>

        </>
    );
};

export default AdminAdd;