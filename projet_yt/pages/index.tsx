import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/globals.module.css'
import  NavBar  from './components/navbar'
import  Products  from './products'

export default function Home() {
  return (
    <div>
      <NavBar />
      <a href="https://front.codes/" className="logo" target="_blank" rel="noreferrer">
      </a>
      <div className="section-center">
        <h1 className="mb-0">Never Broke</h1>
        <h2 className="mb-1">With us your phone will never broke</h2>
      </div>
      <div className="card">
        <a href="/products">
          <div className="card-image"><img src="https://cdn.shopify.com/s/files/1/0274/8717/files/TPE_SSA_Landing-Page-Material-benefit.jpg?v=1661533338" alt="Orange" /></div>
          <div className="card-body">
            <div className="card-title">
              <h3>Products</h3>
            </div>
            <div className="card-excerpt">
              <p> Here you will find all our beautiful hulls.</p>
            </div>
          </div>
        </a>
        <div className="card2">
          <a href="/categories">
            <div className="card2-image"><img src="https://shop.gotaga.tv/330-large_default/coques-rhinoshield.jpg" alt="Orange" /></div>
            <div className="card2-body">
              <div className="card2-title">
                <h3>Categories</h3>
              </div>
              <div className="card2-excerpt">
                <p> Here you will find all our collaborations with successful licenses such as : Naruto, One piece, LOL, NBA etc. </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
