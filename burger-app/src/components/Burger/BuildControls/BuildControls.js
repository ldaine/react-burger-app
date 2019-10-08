import React from 'react'; 
import {BURGER_INGRIDIENTS} from '../BurgerIngridientConst'; 
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: BURGER_INGRIDIENTS.SALAD}, 
    { label: 'Bacon', type: BURGER_INGRIDIENTS.BACON}, 
    { label: 'Cheese', type: BURGER_INGRIDIENTS.CHEESE}, 
    { label: 'Meat', type: BURGER_INGRIDIENTS.MEAT}
]

const BuildControls = (props) => (
    <div className={styles.BuildControls}>
        	<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl =>(
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    ingridientAdded={() => props.ingridientAdded(ctrl.type)}
                    ingridientRemoved={() => props.ingridientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))
        }
    </div>
); 
export default BuildControls; 