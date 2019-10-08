import React from 'react'; 
import styles from './BuildControl.module.css'; 

const BuildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button disabled={props.disabled} className={styles.Less} onClick={props.ingridientRemoved}>Less</button>
        <button className={styles.More} onClick={props.ingridientAdded}>More</button>
    </div>
); 

export default BuildControl; 