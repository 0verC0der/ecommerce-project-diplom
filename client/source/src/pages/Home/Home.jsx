import React from 'react'
import Slider from '../../components/Slider/Slider';
import "./Home.scss"
import { FeaturedProducts } from '../../components/Featured Products/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="trending"/>
      <Categories/>
      <FeaturedProducts type="featured"/>
      <Contact/>
    </div>
  )
}

export default Home