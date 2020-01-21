import React,{useContext} from 'react';
import style from './header.module.scss';
import {OptionContext} from "../App/optionContext";
import {SetOptionContext} from "../App/setOptionContext";

function Header() {
    const option = useContext(OptionContext);
    const setOption = useContext(SetOptionContext);

    return (
        <header className={style.header}>
            <select name="company" className={style.select}
                    onChange={(event)=> setOption(event.target.value)} value={option}
            >
                <option value="">All Companies</option>
                <option value="F-Secure">F-Secure</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
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