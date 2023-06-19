import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src='https://images.pexels.com/photos/1407157/pexels-photo-1407157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='фото спідниці в зебру з футболкою'/>
                <button>
                    <Link className="link" to="/products/1">Новинки</Link>
                </button>
            </div>
            <div className='row'>
                <img src='https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='фото спідниці в зебру з футболкою'/>
                <button>
                    <Link className="link" to="/products/1">Для Жінок</Link>
                </button>
            </div>
        </div>

        <div className='col'>
            <div className='row'>
                <img src='https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Товари для чоловіків"/>
                <button>
                    <Link className="link" to="/products/1">Для Чоловіків</Link>
                </button>
            </div>
        </div>

        <div className='col col-l'>

            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='фото спідниці в зебру з футболкою'/>
                        <button>
                            <Link className="link" to="/products/1">Аксесуари</Link>
                        </button>
                    </div>
                </div>

                <div className='col'>
                    <div className='row'>
                        <img src='https://images.pexels.com/photos/5585846/pexels-photo-5585846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='фото спідниці в зебру з футболкою'/>
                        <button>
                            <Link className="link" to="/products/1">Розпродаж</Link>
                        </button>
                    </div>
                </div>   
            </div>

                <div className='row'>
                    <img src='https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='фото спідниці в зебру з футболкою'/>
                    <button>
                        <Link className="link" to="/products/1">Взуття</Link>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Categories