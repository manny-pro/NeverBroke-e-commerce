import { useEffect, useState } from 'react';
import styles from '../styles/globals.module.css';
import axios from 'axios';
import React from 'react';

export default function productCard ( {products}: any) {

    return (
    <div className="">
        <a href="#" target="_blank">
          <div className="colonne">
            <div className="cardZ">
              <img src={products.image} alt="" />
              <p> {products.products} </p>
              <p> {products.price} $</p>
            </div>
          </div>
        </a>
    </div>

    )
}