import React, {Component} from 'react'; 
import Burger from '../../components/Burger/Burger'; 
import {BURGER_INGRIDIENTS, INGRIDIENT_PRICES} from '../../components/Burger/BurgerIngridientConst'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{
    constructor(props){
        super(props); 
        this.state = {
            ingridients: {
                [BURGER_INGRIDIENTS.SALAD]: 0, 
                [BURGER_INGRIDIENTS.BACON]: 0, 
                [BURGER_INGRIDIENTS.CHEESE]: 0, 
                [BURGER_INGRIDIENTS.MEAT]: 0
            } , 
            totalPrice: 4  
        }
    }
    render(){
        const disabledInfo = {
            ...this.state.ingridients
        }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <React.Fragment>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                    ingridientAdded={this.addIngriedientHandler}
                    ingridientRemoved={this.removeIngriedientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </React.Fragment>
        ); 
    }
    addIngriedientHandler = (type) => {
        //calculate count
        const oldCount = this.state.ingridients[type]; 
        const updatedCount = oldCount + 1; 
        const updatedIngridients = {
            ...this.state.ingridients
        }; 
        updatedIngridients[type] = updatedCount; 
        
        //calculate price
        const priceAddition = INGRIDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice + priceAddition

        //set new state
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients}); 
    }

    removeIngriedientHandler = (type) => {
        //calculate count
        const oldCount = this.state.ingridients[type]; 
        if(oldCount <= 0){
            return; 
        }
        const updatedCount = oldCount - 1; 
        const updatedIngridients = {
            ...this.state.ingridients
        }; 
        updatedIngridients[type] = updatedCount; 
        
        //calculate price
        const priceDeduction = INGRIDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice - priceDeduction; 
        //set new state
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients}); 
    }
}

export default BurgerBuilder; 