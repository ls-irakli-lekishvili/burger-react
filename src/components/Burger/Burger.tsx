import React from 'react';

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';

interface IBurgerIngredients {
    ingredients: {
        salad?: number;
        bacon?: number;
        cheese?: number;
        meat?: number;
    }
}

type Ingredient = 'salad' | 'bacon' | 'cheese' | 'meat';


const Burger = (props: IBurgerIngredients) => {
    let burger: JSX.Element | JSX.Element[] = Object.keys(props.ingredients)
        .flatMap((ingredient: string) =>
            [...new Array(props.ingredients[ingredient as Ingredient])]
                .map((_, index) => (
                    <BurgerIngredient type={ingredient} key={ingredient + index}/>
                ))
        )
    const isEmpty = burger.length === 0
    if (isEmpty) burger = (
        <p>
            Please start adding ingredients
        </p>
    )

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {burger}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default Burger;