import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from './../../hooks/useFetch';

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
  };

  return (
    <div className='products'>
{/* Оформлення фільтрів та кнопок пошуку в ліва частина */}
      <div className='left'>
        
        <div className='filterItem'>
          <h2>Категорії товарів</h2>
          {data?.map((item) => (
          <div className='inputItem' key={item.id}>
            <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div> 
          ))}
        </div>

{/* Сортувальник за ціною */}
        <div className='filterItem'>
          <h2>Сортувати за ціною</h2>
          <div className='inputItem'> 
            <span>0</span>
            <input type='range' min={0} max={5000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        
{/* Сортувальник за ціною (Радіокнопки) */}
        <div className='filterItem'>
          <h2>Сортувати</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value="asc" name='price' onChange={e => setSort("asc")}/>
            <label htmlFor='asc'>Ціна (Спершу низькі)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value="desc" name='price' onChange={e => setSort("desc")}/>
            <label htmlFor='desc'>Ціна (Спершу високі)</label>
          </div>
        </div>
      </div>

{/* Оформлення каталогу у правій частині */}
      <div className='right'>
        <img className='catImg' src='https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Панорамне зображення'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products