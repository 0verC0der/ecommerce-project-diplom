import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Каталог</h1>
          <span>Жіноче</span>
          <span>Чоловіче</span>
          <span>Взуття</span>
          <span>Аксесуари</span>
          <span>Новинки</span>
        </div>
        <div className='item'>
          <h1>Детальніше</h1>
          <span>FAQ</span>
          <span>Новинки</span>
          <span>Оплата</span>
          <span>Відгуки</span>
        </div>
        <div className='item'>
          <h1>Про сторінку</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        <div className='item'>
        <h1>Контакти</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>SHAFA Clothes</span>
          <span className='copyright'>
            2023
          </span>
        </div>
        <div className='right'>
          <img src='/img/payment_crop.png' alt='paymet_methods'></img>
        </div>
      </div>
    </div>
  )
}

export default Footer