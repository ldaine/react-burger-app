import React from 'react'; 
import styles from './Burger.module.css'; 
import BurgerIngridient from './BurgerIngridients/BurgerIngridients'
import {BURGER_INGRIDIENTS} from './BurgerIngridientConst'; 

const Burger = (props) => {

    const ingridients = Object.keys(props.ingridients)
    .map(key => {
        return [...Array(props.ingridients[key]) ].map((_, i) => {
            return <BurgerIngridient key ={key +i} type={key} /> 
        }) 
    }) 
    return(
        <div className={styles.Burger} >
            <BurgerIngridient type={BURGER_INGRIDIENTS.BREAD_TOP}/>
            {ingridients}
            <BurgerIngridient type={BURGER_INGRIDIENTS.BREAD_BOTTOM}/>
        </div>
    ); 
}

export default Burger; 