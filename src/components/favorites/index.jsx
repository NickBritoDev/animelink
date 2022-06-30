import React from 'react';
import './style.css';
import uchiha from './images/uchiha.png';
export default function FavoriteButton() {
  return (
    <div className="favorite-container">
      <img src={uchiha} alt="simbolo do cla uchiha" />
        <h3>Favorites</h3>
    </div>
  )
};