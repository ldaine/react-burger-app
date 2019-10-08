import React, {Component} from 'react'; 
import Burger from '../../components/Burger/Burger'; 
import {BURGER_INGRIDIENTS} from '../../components/Burger/BurgerIngridientConst'; 
class BurgerBuilder extends Component{
    constructor(props){
        super(props); 
        this.state = {
            ingridients: {
                [BURGER_INGRIDIENTS.SALAD]: 1, 
                [BURGER_INGRIDIENTS.BACON]: 1, 
                [BURGER_INGRIDIENTS.CHEESE]: 2, 
                [BURGER_INGRIDIENTS.MEAT]: 2
            }    
        }
    }
    render(){
        return(
            <React.Fragment>
                <Burger ingridients={this.state.ingridients}/>
                <div>Build Controls</div>
            </React.Fragment>
        ); 
    }

}

export default BurgerBuilder; 