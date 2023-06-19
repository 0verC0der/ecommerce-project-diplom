import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useSelector} from "react-redux";

const Cart = () => {
    const products = useSelector(state => state.cart.products)

return (
    <div className='cart'>
        <h1>Товари в корзині</h1>
        {products?.map(item => (
            <div className='item' key={item.id}>
                <img src={item.img} alt="Фото товару"/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className='price'>
                        1 x ₴{item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className='total'>
            <span>ЗАГАЛЬНА СУМА</span>
            <span>₴700</span>
        </div>
        <button>Оформити замовлення</button>
        <span className='reset'>Очистити корзину</span>
    </div>
  )
}

export default Cart