import React from "react";
import "./Menu.scss";

import pngwing  from "..//..//Assets/Image/pngwing.svg"
import golc  from "..//..//Assets/Image/golc.svg"
import coin  from "..//..//Assets/Image/coin.svg"
import card  from "..//..//Assets/Image/status.svg"
// import { Navlink } from "react-router-dom";


function Menu(){
    return(
        <>
           <div >
           <h2 className="menu__title">
                Панель управления
            </h2>
           <div className="menu">
            <div className="menu__hero">
                <ul className="menu__list">
                    <li className="menu__item">
                        <h3 className="menu__item__title">
                            Активных услуг
                        </h3>
                        <span className="menu__item__digit menu__item__digit--1">
                            56
                        </span>
                    </li>  
                    <li className="menu__item">
                        <h3 className="menu__item__title">
                            Активных услуг
                        </h3>
                        <span className="menu__item__digit menu__item__digit--2">
                            1.1 K
                        </span>
                    </li>  
                    <li className="menu__item">
                        <h3 className="menu__item__title">
                            Активных услуг
                        </h3>
                        <span className="menu__item__digit menu__item__digit--3">
                            10
                        </span>
                    </li>  
                    <li className="menu__item">
                        <h3 className="menu__item__title">
                            Активных услуг
                        </h3>
                        <span className="menu__item__digit menu__item__digit--4">
                            10
                        </span>
                    </li>  
                </ul>
            </div>

            <div className="heading">
                <ul className="heading__list">
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="heading__item">
                        <h3 className="heading__item__title"> 
                            Название: CD-01
                        </h3>
                        <div className="heading__item__block">
                            <img className="heading__item__img" src={pngwing} alt="" width={59} height={64}/>
                            <ul className="heading__item__list">
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={card} alt="" width={24} height={24}  />
                                <span className="heading__item__text">Статус: <span className="heading__item__work">Работает</span></span>
                            </li>
                            <li  className="heading__item__list--item">
                                <img className="heading__img" src={golc} alt=""  width={24} height={24} />
                                <span>Модерация: Пройдена</span>
                            </li>
                            <li className="heading__item__list--item">
                                <img className="heading__img" src={coin} alt="" width={24} height={24} />
                                <span>Цена: 250 р/мес</span>
                            </li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
           </div>
           </div>
        </>
    )
}

export default Menu;