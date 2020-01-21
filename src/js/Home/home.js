import React, {useState} from 'react';
import style from './home.module.scss';
import SeccondTab from "./2ndTab/seccondTab";
import Summary from "./Summary/summary";

function Home() {
    const [activeComponent, setActive] = useState(true);
    return (
        <section className={style.homeSection}>
            <section className={style.infoBar}>
                <div className={style.header}>
                    <div className={style.panel}>
                        <h2>Header</h2>
                        <p><i className="fas fa-ellipsis-h"></i></p>
                    </div>
                    <div className={style.buttons}>
                        <p onClick={() => setActive(true)}
                           style={activeComponent ? {color: '#43A5EF', borderBottom: '3px solid'} : {color:'black'}}
                        >
                            Summary
                        </p>
                        <p onClick={() => setActive(false)}
                           style={!activeComponent ? {color: '#43A5EF', borderBottom: '3px solid'} : {color:'black'}}
                        >
                            2nd Tab
                        </p>
                    </div>
                </div>
                <i className="far fa-question-circle"></i>
            </section>
            {activeComponent ? <Summary/> : <SeccondTab/>}
        </section>
    )
}
export default Home