import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NikeLogo from "../img/niket.png"
import AdidasLogo from "../img/adidas.png"
import PumaLogo from "../img/puma.png"
import NikeAir from "../img/nike-basket.png"
import NikeAir1 from "../img/nikeair2.png"
import NikeAir2 from "../img/nikeairforce.png"
import NikeAir3 from "../img/nikeflywire.png"
import NikeAir4 from "../img/nikeairbranco.png"
import NikeAir5 from "../img/nikeairmax.png"
import adidas1 from "../img/adidasoriginal.png"
import adidas2 from "../img/pngwing.com.png"
import adidas3 from "../img/adidasnova.png"
import adidas4 from "../img/gazelle.png"
import puma1 from '../img/adidassuede.png'
import puma2 from '../img/pumawomen.png'
import puma3 from '../img/pumaskate.png'
import puma4 from '../img/pumatrainer.png'
import Jordan from "../img/jordan-shoe.png"

const alignCenter = { display: 'flex', alignItems: 'center' };

const scrollfotos = () => {
  return (
    <>
        <Parallax pages={16}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className='scrollText'><i class="fa-solid fa-arrow-up"></i> Deslize para cima <i class="fa-solid fa-arrow-up"></i></p>
        </ParallaxLayer>

        {/*----------------------------------------Nike--------------------------------------------------*/}

        <ParallaxLayer sticky={{ start: 1, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='sticky'>
            <img className='logotipos' src={NikeLogo} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
           <img src={Jordan} alt="" />
          </div>
          
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir2} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir3} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir4} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir5} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={NikeAir1} alt="" />
          </div>
        </ParallaxLayer>

        {/*----------------------------------------Adidas--------------------------------------------------*/}

        <ParallaxLayer sticky={{ start: 7, end: 10 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='sticky'>
            <img className='logotiposadidas' src={AdidasLogo} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={adidas1} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={8.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={adidas2} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={9.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={adidas3} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={10.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={adidas4} alt="" />
          </div>
        </ParallaxLayer>

        {/*--------------------------------------------Puma---------------------------------------------*/}

      <ParallaxLayer sticky={{ start: 11, end: 14 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='sticky'>
            <img className='logotipos' src={PumaLogo} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={11.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={puma1} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={12.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={puma2} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={13.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={puma3} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={14.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='tenis'>
          <img src={puma4} alt="" />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={15} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className='scrollText'><i class="fa-solid fa-arrow-down"></i> Deslize para baixo <i class="fa-solid fa-arrow-down"></i></p>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default scrollfotos