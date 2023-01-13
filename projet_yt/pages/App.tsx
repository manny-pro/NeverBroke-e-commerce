import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/globals.module.css'
import NavBar from './components/navbar'
import React, { useState, useEffect } from "react";
import LoginForm from './components/loginForm';
import axios from 'axios';

export default function Appli(){
    return (
      <div className="App">
        <NavBar />
        <LoginForm/>
      </div>
    );
}

