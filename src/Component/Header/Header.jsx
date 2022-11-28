import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo  from "..//..//Assets/Image/logo.svg"
import chart from "..//..//Assets/Image/Vector.svg";
import statik from "..//..//Assets/Image/card.svg";
import logo2 from "..//..//Assets/Image/chart.svg";
import logo3 from "..//..//Assets/Image/profile.svg";
// import {NavLink} from "react-router-dom";
// import { Link } from "react-router-dom";
function Header() {

    return (
        <>
       <div className="logo">
       <div>
            <img src={logo} alt="" width={82} height={77} />
        </div>            
        <ul className="logo__menu">
            <li className="logo__menu__item">
            <NavLink className="logo__menu__item" to={"/"}>
                <img src={logo2} alt="" width={22} height={22} />
            </NavLink>
            </li>
           <NavLink className="logo__menu__item" to={"/"}>
           <li className="logo__menu__item">
                <img src={chart} alt="" width={22} height={22} />
            </li> 
           </NavLink>
            <li className="logo__menu__item">
                <NavLink to={"/balans"}>
                <img src={statik} alt="" width={22} height={22}/>
                </NavLink>
            </li>        
        </ul>
        <Link to="/author" >
        <img className="logo__profile" src={logo3} alt="" width={22} height={22}/>
        </Link>
       </div>
        </>
    )
}

export default Header;