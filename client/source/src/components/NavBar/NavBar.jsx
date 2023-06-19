import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./NavBar.scss"
import Cart from '../Cart/Cart';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='wrapper'>
{/* ліва частина навігації       */}
        <div className='left'>
          <div className='item'>
              <img src='/img/uk icon.png' alt='lang'/>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
              <span>UAH</span>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
                <Link className="link" to="/products/1">Жіночий</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/products/2">Чоловічий</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/products/3">Дитячий</Link>
            </div>
        </div>
          

        <div className='center'>
          <Link className="link" to="/">SHAFA Clothes</Link>
        </div>
{/* Права частина навігації */}
        <div className='right'>
          <div className='item'>
            <Link className="link" to="/">Про нас</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/">Наші контакти</Link>
          </div>

{/* іконки навігації */}
            <div className='icons'>
              <SearchOutlinedIcon/>
              <PersonOutlineOutlinedIcon/>
              <FavoriteBorderOutlinedIcon/>
            <div className='cartIcon' onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
            </div>
          </div>
        </div> 
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default NavBar