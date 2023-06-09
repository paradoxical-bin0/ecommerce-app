import React from 'react'

import {client} from "../lib/client"

import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner 
      heroBanner={bannerData[0]}
      ></HeroBanner>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Welcome to SBS Store</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product._id} product={product}></Product>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
    
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default Home
