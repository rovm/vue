import React from 'react';
import styles from '../css/CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
        {/* <div className={[styles.wrapper, styles.inverted].join(' ')}></div> */}
            안녕하세요, 저는 <span className={"something"}>CSS Module!</span>
        </div>
    )
};

export default CSSModule;