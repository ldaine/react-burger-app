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
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); 

    return(
        <React.Fragment>
            <div className={styles.Burger} >
                <BurgerIngridient type={BURGER_INGRIDIENTS.BREAD_TOP}/>
                {
                    ingridients.length == 0 ?
                    <p>Please start adding ingridients</p>
                    :
                    ingridients
                }
                <BurgerIngridient type={BURGER_INGRIDIENTS.BREAD_BOTTOM}/>
            </div>
        </React.Fragment>
    ); 
}

export default Burger; 