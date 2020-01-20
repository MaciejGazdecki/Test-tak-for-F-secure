import React from 'react';
import style from './header.module.scss';

function Header() {
    return (
        <header className={style.header}>
            <select name="company" className={style.select}>
                <option value="">Select Company</option>
                <option value="Company 1">Company 1</option>
                <option value="Company 2">Company 2</option>
                <option value="Company 3">Company 3</option>
                <option value="Company 4">Company 4</option>
            </select>
            <div className={style.icons}>
                <i className="far fa-bell"></i>
                <i className="fas fa-th"></i>
                <i className="fas fa-user-circle"></i>
            </div>
        </header>
    )
}
export default Header