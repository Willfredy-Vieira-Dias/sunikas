import React, { useEffect, useState } from 'react'
import ListaTenis from '../listatenis/ListaTenis';
import "./Productos.css"

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