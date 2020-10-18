import Burger from 'react-css-burger';
import React, { Component } from 'react';
import './burger-menu.css';
export default class BurgerMenu extends Component {
  state = {
    active: false,
  };

  render() {
    return (
        <Burger
        onClick={() => this.setState({ active: !this.state.active })}
        active={this.state.active}
        burger="arrow"
        color="pink"
        hoverOpacity={0.8}
        scale={0.8}
        marginTop="0px"
        paddingTop="0px"
      />
    );
  }
}