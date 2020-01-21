import React from 'react';
import style from './summary.module.scss';
import {data} from "../Data/data";

function Summary() {
    return (
        <section className={style.summarySection}>
            <div className={style.background}>
                <div className={style.controlPanel}>
                    <div className={style.bar}>
                        <div className={style.company} style={{color:'white'}}>
                            <span>Company</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.type}>
                            <span>Type</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.partner}>
                            <span>Partner</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.tags}>
                            <span>Tags</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.findings}>
                            <span>Findings</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.something}>
                            <span>Something</span><i className="fas fa-chevron-up"></i>
                        </div>
                        <div className={style.empty}></div>
                    </div>
                    <ul>
                        {data.map((el,ix) =>
                            <li key={ix} className={style.record}>
                                <p className={style.company}>{el.company}</p>
                                <p className={`${style.type} ${style.server}`}><i className="fas fa-server"></i>{el.type}</p>
                                <p className={style.partner}>{el.partner}</p>
                                <p className={style.tags}>{el.tags}</p>
                                <p className={style.findings}>
                                    <span className={style.red}>2880</span>
                                    <span className={style.yellow}>2880</span>
                                    <span className={style.green}>2880</span>
                                    <span className={style.blue}>2880</span>
                                </p>
                                <p className={style.something}>{el.something}</p>
                                <p className={style.empty}><i className="fas fa-ellipsis-h"></i></p>
                            </li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Summary;