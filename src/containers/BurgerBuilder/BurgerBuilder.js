import React, { Component } from 'react'
import Aux from '../../hoc/_Aux'
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
  state = {  }
  render() { 
    return ( 
      <Aux>
        <Burger></Burger>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;