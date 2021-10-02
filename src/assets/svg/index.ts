import React from 'react';
import Home from './home.svg';
import Game from './game.svg';
import Profile from './profile.svg';
import Search from './search.svg';
import ShoppingCart from './shopping-cart.svg';
import Fruits from './fruits.svg';
import Check from './check.svg';
import { colors } from '@theme';

const icons = {
  Home,
  Game,
  Profile,
  Check,
  Search,
  ShoppingCart,
  Fruits,
};

const Icon = ({ name, style, fill = colors.default.alert.error, stroke, width = 16, height = 16 }) =>
  React.createElement(icons[name], {
    style,
    height,
    width,
    fill,
    stroke,
  });

export { Icon };
