'use client';

import NavBar from './components/navbar';
import styles from '../styles/globals.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/productCard';
import React from 'react';


export default function Product() {
  const [data,setData] = useState([])
    useEffect(() => {
        axios
          .get('http://localhost:3018/products/')
          .then((res) => setData(res.data));
    },[]);

  return (
    
    <div>
      <NavBar />
    <div className="Po">
      <p>Phone case</p>
    </div>
      <div className="columns">
        {data.filter((val: any) => {
          if (val.id < 4) {
            return val;
          }
        })
        .map((products, index) => (
          <ProductCard products={products} key={index} />        
          ))}
      </div>
      <div className="Pa">
      <p>Screen protector</p>
      </div>
      <div className="columns">
        {data.filter((val: any) => {
          if (val.id >= 4 && val.id <= 6 ) {
            return val;
          }
        })
        .map((products, index) => (
          <ProductCard products={products} key={index} />        
          ))}
      </div>
      <div className="Pc">
      <p>Câbles</p>
    </div>
      <div className="columns">
        {data.filter((val: any) => {
          if (val.id > 6) {
            return val;
          }
        })
        .map((products, index) => (
          <ProductCard products={products} key={index} />        
          ))}
      </div>
    </div>
  )
}