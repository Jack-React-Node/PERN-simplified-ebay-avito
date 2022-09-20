import React from 'react';

export default function  Header(){

    return ( <><header>
                    <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="top-left pull-left">
                                
                            </div>
                            <div className="top-right pull-right">
                                <div id="top-links" className="nav pull-right">
                                    <ul className="list-inline">
                                        <li className="dropdown"><a href="#" title="My Account" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> <span>Аккаунт</span> <span className="caret"></span></a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li><a href="">Объявления</a></li>
                                                <li><a href="">Вход</a></li>
                                                <li><a className="dropdown-item" href="">Выход</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header-inner">
                    <div className="col-sm-4 col-xs-6 header-left">
                        <div className="shipping">
                            
                            <a href="" alt="E-Commerce" style={{width: '200 px'}} />
                            
                        </div>
                        
                    </div>
                    <div className="col-sm-4 col-xs-6 header-middle">
                        <div className="header-middle-top">
                            
                            <div id="logo"> <a href="/" title="E-Commerce" alt="E-Commerce" className="img-responsive" /> </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-6 header-right">
                        
                        <div id="search" className="input-group">
                        <form action="" method="post">
                            
                            <input type="text" name="search" value="" placeholder="Поиск услуги" className="form-control input-lg" />
                            <span className="input-group-btn">
                            <button type="submit" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
                            </span> 
                        </form>
                        </div>
                    </div>
                </div>
    </div>
    </header>
    </>

);

}