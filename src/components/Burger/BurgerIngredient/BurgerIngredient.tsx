import React from 'react';
import classes from './BurgerIngredient.module.css';

interface IBurgerIngredient {
    type: string;
}

const BurgerIngredient = (props: IBurgerIngredient) => {
    let ingredient: JSX.Element | null = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}/>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}/>
                    <div className={classes.Seeds2}/>
                </div>
            )
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}/>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}/>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}/>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}/>
            break;
        default:
            ingredient = null;
    }


    return ingredient;
};

export default BurgerIngredient;
