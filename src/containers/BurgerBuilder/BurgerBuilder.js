import React, { Component } from 'react';

import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state ={
            
    //     }
    // }

    state = {
        ingridients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 1
        }
    }

    render() {
        return (
            <Auxillary>
                <Burger ingridients = {this.state.ingridients} />
                <BuildControls />

            </Auxillary>
        );
    }
}

export default BurgerBuilder;