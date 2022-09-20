import React from 'react';

function ModalBar(){

return (<>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document" style={{zIndex: 1060}} >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Резюме:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{
            marginLeft: 30}}>
              <p>Это приложение - доска объявлений небольшого города (например Колпино в СПб)</p>
              <p>Данный сайт создан для демонстрации возможностей автора https://github.com/woskresk по созданию приложений на фреймворке Laravel.</p>
              <p>Функциональность сайта:</p>
                    <ul><li>Регистрация пользователей (стандартный модуль laravel, авторская верстка)</li>
                    <li>Создание объявлений каждым отдельным пользователем</li>
                    <li>Редактирование объявлений</li>
                    <li>Просмотр и сортировка объявлени</li>
                    <li>Показ Топовых объявлений по 5 шт (Новые, Дешевые...)</li>
                    <li>Показ 5 недавно просмотреных объявлений</li></ul>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </>);

        };

        export default ModalBar;