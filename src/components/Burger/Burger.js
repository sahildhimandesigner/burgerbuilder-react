import React from 'react'
import './Burger.css'
import BurgerIngredient from './../BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let transferIngredients = Object.keys(props.ingredients)
        .map(igKey => {      
            //getting the length of array   
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
        if(transferIngredients.length === 0) {
            transferIngredients = <p>Please start adding ingredients!</p>
        }
        console.log(transferIngredients)          
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transferIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;