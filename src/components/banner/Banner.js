import React from 'react'
import "./Banner.css"
import LogotipoNike from "../img/nike-logo-white.png"
import { useState } from 'react'
import SlideTenis from '../bdai/scrollfotos'

const Airnike = require('../img/jordan-shoe.png');
const NikeBasket = require('../img/nike-basket.png');
const tenis = {Airnike, NikeBasket}

const Banner = () => {

  const [JordanShoes, setImage] = useState(tenis.Airnike);

  return (
    <>
    <section className='apresentacao'>
    <header>
    <div className="container">
      <div className="logo">
        <a href="#"><img src={LogotipoNike} alt="" /></a>
      </div>

      <nav className="slide">
        <a href="#">Home</a>
        <a href="#">Novos lançamentos</a>
        <a href="#">Loja</a>
        <a href="#">Contactos</a>
      </nav>

      {/*Acção*/}
      <div className="accao">

      {/*Pesquisa*/}
        <button className="pesquisa"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </header>
  
  <section className="publicidade">
    <div className="container">
      <div className="meio">
      <h2>sun<br/>ikas</h2>
        <SlideTenis/>
      </div>  

    </div>

    {/*<p style={{color: '#fff', marginTop: 300, fontSize: 30}}>NIKE FLYWIRE</p>*/}

    {/*<h2>sunika</h2>
        <img src={JordanShoes} alt="" /> */}

    <div className="lado-esquerdo">
    <a href="#" className="activo">Principal</a>
      <a href="#">Homens</a>
      <a href="#">Mulheres</a>
      <a href="#">Crianças</a>
    </div>

    <div className="lado-direito">
      <a href="#" onClick={() => setImage(tenis.Airnike)}>01</a>
      <a href="#">02</a>
      <a href="#" onClick={() => setImage(tenis.NikeBasket)}>03</a>
    </div>
  </section>
  <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
      <defs>
        <linearGradient id="Gradiente">
          <stop offset="5%" stop-color="#111111" />
          <stop offset="95%" stop-color="#212121" />
        </linearGradient>
      </defs>
    <path  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" fill="url(#Gradiente)" fill-opacity="1">
    </path>
    </svg>
    </section>
    </>
  )
}

export default Banner