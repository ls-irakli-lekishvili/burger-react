import React, {useState} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControl/BuildControl";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

interface Ingredients {
    salad?: number;
    bacon?: number;
    cheese?: number;
    meat?: number;
}

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState<Ingredients>({
        salad: 1,
        bacon: 2,
        cheese: 1,
        meat: 1
    })



    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls/>
        </>
    )
}

export default BurgerBuilder;