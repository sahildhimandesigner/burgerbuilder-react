import React from 'react'
import Aux from './../../hoc/Aux'
import Burger from './../../components/Burger/Burger'
import BurgerBuilderControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            chees: 0,
            meat: 0,
        },
        totalPrice: 4, 
    }

    appIngredientHandler = (type) => {
        debugger;
        const oldCount = this.state.ingredients[type]
        const updateCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientsHandler = (type) => {
        debugger;
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuilderControls 
                    ingredientsAdded={this.appIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;