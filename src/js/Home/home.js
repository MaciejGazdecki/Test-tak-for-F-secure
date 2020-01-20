import React from 'react';
import style from './home.module.scss';

function Home() {
    return (
        <section className={style.homeSection}>
            <div className={style.infoBar}>
                <div className={style.header}>
                    <h2>Header</h2>
                    <p><i className="fas fa-ellipsis-h"></i></p>
                </div>
                <i className="far fa-question-circle"></i>
            </div>
        </section>
    )
}
export default Home