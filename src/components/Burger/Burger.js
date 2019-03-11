import React from "react";

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';


const burger = (props) =>{

    // console.log("ingredients: " +props.ingredients)

    // let keys = Object.keys(props.ingredients);

    // console.log("keys: "+ keys);

    // let arr = keys.map(igKey =>{
    //     return [...Array(props.ingridient)]
    //  }
    // );
    
    // console.log(arr);

    //  let arr2 = arr.map((_,i)=>{
    //     console.log(i);
    //  });

    let transformedingredients = Object.keys(props.ingredients)//returns an array of an object's own property name
                                            .map(igKey=>{
                                            //  console.log("key: "+ igKey);
                                           // console.log(igKey+" "+props.ingredients[igKey] );
                                                return [...Array(props.ingredients[igKey])] //create
                                                    .map((_,i)=>{
                                                    //console.log("igkey "+igKey+i+" i: "+i);
                                                        return <BurgerIngridient key={igKey+i} type={igKey} />
                                                    });
                                            }).reduce((arr,el)=>{
                                                return arr.concat(el);
                                            },[]);

    if (transformedingredients.length === 0){
        transformedingredients = <p>Please start adding ingredients</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedingredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}
export default burger;