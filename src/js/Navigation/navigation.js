import React from 'react';
import style from './navigation.module.scss';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className={style.navigation}>
            <ul className={style.navList}>
                <li>
                    <NavLink activeClassName={style.active} exact to="/">
                        <p><i className="fas fa-home"></i></p>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/feature-two'>
                        <p>Feature</p>
                        <p>two</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/feature-three'>
                        <p>Feature</p>
                        <p>three</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/feature-four'>
                        <p>Feature</p>
                        <p>four</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/feature-five'>
                        <p>Feature</p>
                        <p>five</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/another'>
                        <p>Another</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.active} to='/yet-another'>
                        <p>Yet</p>
                        <p>Another</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;