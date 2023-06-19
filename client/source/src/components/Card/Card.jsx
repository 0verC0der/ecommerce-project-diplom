import React from 'react'
import { Link } from "react-router-dom";
import "./Card.scss";

const apiUploadImg = 'http://localhost:1337';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className='image'>
       {item?.attributes.isNew && <span>Новинка</span>}
          <img src={apiUploadImg + item.attributes.img.data.attributes.url} alt="Фото товару" className='mainImg'/>
          <img src={apiUploadImg + item.attributes.img2.data.attributes.url} alt="Фото товару" className='secondImg'/>
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className='prices'>
        <h3>₴{item.oldPrice || item?.attributes.price + 144}</h3>
        <h3>₴{item?.attributes.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card