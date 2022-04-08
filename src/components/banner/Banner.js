import React from 'react'
import "./Banner.css"
import LogotipoNike from "../img/nike-logo-white.png"
import { useState } from 'react'
import SlideTenis from '../bdai/scrollfotos'
import Fade from 'react-reveal/Fade';

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
      <Fade left big cascade>
        <a href="#"><img src={LogotipoNike} alt="" /></a>
        </Fade>
      </div>

      <nav className="slide">
      <Fade left big cascade>
        <a href="#">Home</a>
        <a href="#">Novos lançamentos</a>
        <a href="#">Loja</a>
        <a href="#">Contactos</a>
        </Fade>
      </nav>

      {/*Acção*/}
      <div className="accao">

      {/*Pesquisa*/}
      <Fade left big cascade>
        <button className="pesquisa"><i class="fas fa-search"></i></button>
        </Fade>
      </div>
    </div>
  </header>
  <section className="publicidade">
  <Fade left big cascade>
    <div className="container">
      <div className="meio">
      <h2>sun<br/>ikas</h2>
        <SlideTenis/>
      </div>
    </div>
    </Fade> 

    <div className="lado-esquerdo">
    <Fade left big cascade>
    <a href="#" className="activo">Principal</a>
      <a href="#">Homens</a>
      <a href="#">Mulheres</a>
      <a href="#">Crianças</a>
      </Fade>
    </div>

    <div className="lado-direito">
    <Fade left big cascade>
      <a href="#" onClick={() => setImage(tenis.Airnike)}>01</a>
      <a href="#">02</a>
      <a href="#" onClick={() => setImage(tenis.NikeBasket)}>03</a>
      </Fade>
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