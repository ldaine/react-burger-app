import React from 'react'; 
import styles from './BurgerIngridient.module.css'; 
import { BURGER_INGRIDIENTS } from '../BurgerIngridientConst'; 

const BurgerIngridient = (props) => {
    let ingridient = null; 

    switch (props.type) {
        case BURGER_INGRIDIENTS.BREAD_BOTTOM:
            ingridient = (
            <div className={styles.BreadBottom}></div>
            )
            
            break;

        case BURGER_INGRIDIENTS.BREAD_TOP:
            ingridient = (
            <div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>
            );  
            
            break;
        case BURGER_INGRIDIENTS.MEAT:
            ingridient = <div className={styles.Meat}></div>
            
            break;


        case BURGER_INGRIDIENTS.CHEESE:
            ingridient = <div className={styles.Cheese}></div>
            
            break;
    
        case BURGER_INGRIDIENTS.SALAD:
            ingridient = <div className={styles.Salad}></div>
            
            break;
    
        case BURGER_INGRIDIENTS.BACON:
            ingridient = <div className={styles.Bacon}></div>
            
            break;
    
    
        default:
            ingridient = null; 
            break;
    }

    return ingridient; 
}; 

export default BurgerIngridient; 