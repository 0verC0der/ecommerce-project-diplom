import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';


const Product = () => {
  
const [selectedImg, setSelectedImg] = useState("img");
const id = useParams().id;
const uploadHost = 'http://localhost:1337'
const [quantity, setQuantity] = useState(1);

const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

  console.log(data)
 
  return (
    <div className='product'>
      {/* Ліва частина блоку */}
      {loading 
      ? "loading" 
      :( 
      <>
        <div className='left'>
          <div className='images'>
            <img 
              src={uploadHost + data?.attributes?.img?.data?.attributes?.url} 
              alt='Зображення товару' 
              onClick={(e) => setSelectedImg("img")}/>
            <img 
              src={uploadHost + data?.attributes?.img2?.data?.attributes?.url} 
              alt='Зображення товару' 
              onClick={(e) => setSelectedImg("img2")}/>
          </div>
          <div className='mainImg'>
            <img 
            src= {uploadHost + data?.attributes?.img?.data?.attributes?.url} 
            alt= 'logo'/>
          </div>
        </div>

        <div className='right'>
          <h1>{data?.attributes?.title}</h1>
          <span className='price'>₴{data?.attributes?.price}</span>
          <p>
            {data?.attributes?.desc}
          </p>
          <div className='quantity'>
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
              {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <button className='add'>
            <AddShoppingCartIcon/> ДОДАТИ В КОРЗИНКУ
          </button>
          <div className='links'>
            <div className='item'>
              <FavoriteBorderIcon/> В СПИСОК БАЖАНОГО
            </div>
            <div className='item'>
              <BalanceIcon/> ПОРІВНЯТИ
            </div>
          </div>
          <div className='info'>
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr/>
          <div className='info'>
              <span>Опис</span>
              <hr/>
              <span>Додаткова інформація</span>
              <hr/>
              <span>ЧАПИ</span>
          </div>
        </div>
      </>)}
    </div>
  )
}

export default Product