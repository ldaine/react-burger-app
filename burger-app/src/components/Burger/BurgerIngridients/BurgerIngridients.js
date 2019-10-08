import React, { Component } from 'react'; 
import styles from './BurgerIngridients.module.css'; 
import { BURGER_INGRIDIENTS } from '../BurgerIngridientConst'; 
import PropTypes from 'prop-types'; 

class BurgerIngridient extends Component {

    render(){

        let ingridient = null; 

        switch (this.props.type) {
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
    }

}

BurgerIngridient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngridient; 