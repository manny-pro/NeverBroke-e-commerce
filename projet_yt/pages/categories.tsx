'use client';

import { useRouter } from 'next/navigation';
import NavBar from './components/navbar';
import styles from '../styles/globals.module.css';

export default function categories() {
  const router = useRouter();

  return (
    
    <div>
    <NavBar />
    <div className='Co'>
      <p>NeverBroke 
              X 
        Collabs</p>
    </div>
    <a href="https://front.codes/" className="logo" target="_blank" rel="noreferrer">
    </a>
    <div className="DBZ">
        <div className="DBZ_img"> 
          <img src="https://p4.wallpaperbetter.com/wallpaper/221/453/197/dragon-ball-dragon-ball-super-wallpaper-preview.jpg" alt="user-image" />
        </div>
        <div className="DBZ_info">
          <a href="#!">Dragon Ball Z <br />Take your phone to the next level with legendary characters from the Dragon Ball Z series, including Goku, Gohan, Vegeta, and Turtle, as well as villains such as Freezer, Cell, Majin Buu, and many more. For best friends who have become friends over the course of the series, check out the Goten and Trunks Fusion designs!

Protect your devices now with Dragon Ball Z shells!</a>
        </div>
    </div>
    <div className="OP"> 
        <div className="OP_img"> 
          <img src="https://ih1.redbubble.net/image.1525851204.1370/pp,840x830-pad,1000x1000,f8f8f8.jpg" alt="user-image" />
        </div>
        <div className="OP_info"> 
          <h2></h2>
          <a href="#!">One Piece <br />
I am Luffy! The one who will become King of the Pirates! Join Luffy in his quest for the One Piece! Discover our new official collection of One Piece x Never Broke shells. From Zoro to Chopper to the Yonko, the most iconic characters from One Piece are available in a unique collection!</a>
        </div>
    </div>
    <div className="NA"> 
        <div className="NA_img"> 
          <img src="http://static1.squarespace.com/static/5f7337311939f8485ea0325f/5f970d4b96c7b33a7bdb80b9/620f8105e552c7444dd81586/1645183436195/stickers-vinyle-naruto-logo-decoupe-a-la-forme-couleurs_PREV1.jpg?format=1500w" alt="user-image" />
        </div>
        <div className="NA_info"> 
          <h2></h2>
          <a href="#!">Naruto <br />Naruto, the most popular Konoha ninja in the world is now a member of Team NeverBroke!
Discover our new official Naruto Shippuden collection from the famous masterpiece by Masashi Kishimoto.</a>
        </div>
    </div>
    <div className="NBA"> 
        <div className="NBA_img"> 
          <img src="https://img5.goodfon.com/wallpaper/nbig/1/e5/nba-logo-basketball.jpg" alt="user-image" />
        </div>
        <div className="NBA_info"> 
          <h2></h2>
          <a href="#!">NBA <br />Built on integrity, teamwork and respect, the NBA is the most innovative league in sports. It helps to raise the profile of basketball around the world.

Never Broke is proud to present the official NBA shell collection! This collaboration connects your passion for sports with our revolutionary technology, so you can support your favorite teams wherever you go.</a>
        </div>
    </div>
    <div className="psg"> 
        <div className="psg_img"> 
          <img src="https://images.cults3d.com/gBtRfBhnKueD5B6mtJ5j-RUgO-4=/https://files.cults3d.com/uploaders/24731789/illustration-file/67b1e613-761c-4f4e-9116-d1078008ebd1/PSG.png" alt="user-image" />
        </div>
        <div className="psg_info"> 
          <h2></h2>
          <a href="#!">PSG <br />Discover our new collection of PSG x NeverBroke shells.
Just like the club, we present you a collection that will leave no one indifferent.
Find the iconic PSG jerseys as well as the players who make you vibrate in red and blue.</a>
        </div>
    </div>
    <div className="r6"> 
        <div className="r6_img"> 
          <img src="https://www.1min30.com/wp-content/uploads/2018/12/Rainbow-Six-Siège-logo-1.jpg" alt="user-image" />
        </div>
        <div className="r6_info"> 
          <h2></h2>
          <a href="#!">6:siege <br />Discover our new official collection in collaboration with Ubisoft, dedicated to the Six: Siege universe!</a>
        </div>
    </div>
    <div className="hxh"> 
        <div className="hxh_img"> 
          <img src="https://comicsense.b-cdn.net/wp-content/uploads/2021/03/hunter_X_logo_sticker_comicsense.jpg" alt="user-image" />
        </div>
        <div className="hxh_info"> 
          <h2></h2>
          <a href="#!">Hunter x Hunter <br />Discover our official collection of Hunter x Hunter shells featuring your most iconic anime characters.
As enthusiasts, we have slipped in a few subtle references, which should please the biggest fans.</a>
        </div>
    </div>
    <div className="lsn"> 
        <div className="lsn_img"> 
          <img src="https://cdn.shopify.com/s/files/1/1286/1203/collections/the-power-puff-girls-logo.jpg?v=1663049755" alt="user-image" />
        </div>
        <div className="lsn_info"> 
          <h2></h2>
          <a href="#!">Les Super Nana <br />Our collection of Super Nanas shells has arrived! They save the world </a>
        </div>
    </div>
    </div>
    
  );
}
