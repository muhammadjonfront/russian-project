import React from "react";
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
             {/* <Link to={"/menu"}> */}
                <img src={logo2} alt="" width={22} height={22} />
              {/* </Link>  */}
            </li>
            <li className="logo__menu__item">
                <img src={chart} alt="" width={22} height={22} />
            </li> 
            <li className="logo__menu__item">
                <img src={statik} alt="" width={22} height={22}/>
            </li>        
        </ul>
        <img className="logo__profile" src={logo3} alt="" width={22} height={22}/>
       </div>
        </>
    )
}

export default Header;