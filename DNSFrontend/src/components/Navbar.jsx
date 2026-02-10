import React from 'react'
import './navbar.css'
import IDIcon from './assets/13IDIcon.png'
import linkedInIcon from './assets/linkedInIcon.png'

export default function Navbar() {
    const toggleMenu = () => {
        if (dropdown_menu.style.maxHeight == "300px") {
            dropdown_menu.style.maxHeight = "0px";
            dropdown_menu.style.paddingBottom = "0px";
        }
        else {
            dropdown_menu.style.maxHeight = "300px";
        }
    }
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={IDIcon} alt="" style={{mixBlendMode:"multiply"}}/>
                </div>
                <ul id="links">
                    <li className="link"><a href="#home">HOME</a></li>
                    <li className="link"><a href="#records">RECORDS</a></li>
                    <li className="link"><a href="#graph">GRAPH</a></li>
                </ul>
                <a href="https://www.linkedin.com/in/yash-kadam-9a69032b5/"><img src={linkedInIcon}
                    className="action_btn" /></a>

                <div className="menu-bar">
                    <span className="material-symbols-outlined" onClick={toggleMenu}>
                        menu
                    </span>
                </div>

                <div id="dropdown_menu">
                    <li className="link"><a href="">HOME</a></li>
                    <li className="link"><a href="">RECORDS</a></li>
                    <li className="link"><a href="">GRAPH</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/yash-kadam-9a69032b5/"><img src={linkedInIcon}
                            className="action_btn2" /></a>
                    </li>
                </div>
            </div>

        </>
    )
}
