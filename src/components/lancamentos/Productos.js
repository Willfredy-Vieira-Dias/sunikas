import React, { useEffect, useState } from 'react'
import ListaTenis from '../listatenis/ListaTenis';
import "./Productos.css"
import Aos from "aos";
import "aos/dist/aos.css"

const Poductos = () => {

    const [artigos, setArtigos] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:8000/artigos')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setArtigos(data);
        });
    }, []);

    const Pricing = () => {
        useEffect(() =>{
            Aos.init({duration: 1000});
        }, []);
    }

  return (
    <>
        <section className="producto" id="producto">
            <h1 className="cabecalho"><span>Últimos</span> productos</h1>
            <div className="caixa-container">

                {artigos && <ListaTenis artigos={artigos} />}

            </div>
        </section>
    </>
  )
}

export default Poductos