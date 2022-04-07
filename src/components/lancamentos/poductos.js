import React from 'react'
import "./productos.css"
import producto1 from "../img/jordannikesplush.png"
import producto2 from "../img/nikemagmacfly.png"
import producto3 from "../img/NikeMystymax.png"
import producto4 from "../img/nikeairmax22.png"
import producto5 from "../img/3.jpg"
import producto6 from "../img/vansscama.png"
import producto7 from "../img/6.jpg"
import producto8 from "../img/1.jpg"
import producto9 from "../img/vansold.png"

const poductos = () => {
  return (
    <>
        <section className="producto" id="producto">
            <h1 className="cabecalho"><span>Últimos</span> productos</h1>
            <div className="caixa-container">
                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto1} alt=""/>
                        <h3>Nike Air Jordan XXXI</h3>
                        <div className="preco">70.000 Kz <span>115.450 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto2} alt=""/>
                        <h3>Nike Mag McFly</h3>
                        <div className="preco">947.890 Kz <span>1.250.000 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto3} alt=""/>
                        <h3>Nike Misty Max Z</h3>
                        <div className="preco">33.900 Kz <span>45.999 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto4} alt=""/>
                        <h3>Nike Air Max</h3>
                        <div className="preco">80.230 Kz <span>45.999 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto5} alt=""/>
                        <h3>Vans Old Skool</h3>
                        <div className="preco">70.000 Kz <span>115.450 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto6} alt=""/>
                        <h3>Vans Old Skool Hi</h3>
                        <div className="preco">78.199 Kz <span>81.100 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto7} alt=""/>
                        <h3>Nike Vans</h3>
                        <div className="preco">39.000 Kz <span>64.000 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto8} alt=""/>
                        <h3>Willfredy Phantom 7</h3>
                        <div className="preco">870.999 Kz <span>999.999 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="caixa">
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={producto9} alt=""/>
                        <h3>Vans Old Skool</h3>
                        <div className="preco">18.600 Kz <span>23.000 Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default poductos