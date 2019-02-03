import React from "react";

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';


const burger = (props) =>{

    // console.log("ingridients: " +props.ingridients)

    // let keys = Object.keys(props.ingridients);

    // console.log("keys: "+ keys);

    // let arr = keys.map(igKey =>{
    //     return [...Array(props.ingridient)]
    //  }
    // );
    
    // console.log(arr);

    //  let arr2 = arr.map((_,i)=>{
    //     console.log(i);
    //  });

    let transformedIngridients = Object.keys(props.ingridients)//returns an array of an object's own property name
                                            .map(igKey=>{
                                            //  console.log("key: "+ igKey);
                                            console.log(igKey+" "+props.ingridients[igKey] );
                                                return [...Array(props.ingridients[igKey])] //create
                                                    .map((_,i)=>{
                                                    //console.log("igkey "+igKey+i+" i: "+i);
                                                        return <BurgerIngridient key={igKey+i} type={igKey} />
                                                    });
                                            }).reduce((arr,el)=>{
                                                return arr.concat(el);
                                            },[]);

    if (transformedIngridients.length === 0){
        transformedIngridients = <p>Please start adding ingridients</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}
export default burger;