import React from 'react'
import "./novos.css"
import artigo1 from "../img/product1/1.jpg"
import artigo2 from "../img/product1/2.jpg"
import artigo3 from "../img/product1/3.jpg"
import artigo4 from "../img/product1/4.jpg"
import artigo6 from "../img/product2/1.jpg"
import artigo7 from "../img/product2/2.jpg"
import artigo8 from "../img/product2/3.jpg"
import artigo9 from "../img/product2/4.jpg"
import artigo10 from "../img/product3/1.jpg"
import artigo11 from "../img/product3/2.jpg"
import artigo12 from "../img/product3/3.jpg"
import artigo13 from "../img/product3/4.jpg"
import equipa1 from "../img/willfredyimg.png"
import equipa2 from "../img/team/2.png"
import equipa3 from "../img/team/3.png"
import Fade from 'react-reveal/Fade';
import PopUp from '../popup/dialog'

const novos = () => {
  return (
    <>
        <section className="destaque" id="destake">
            <h1 className="cabecalho">Novos <span>Productos</span></h1>
            <Fade left big cascade>
            <div className="fila">
                <div className="imagem-container">
                    <div className="imagem-pequena">
                        <img src={artigo1} alt="" className="destaque-image-1"/>
                        <img src={artigo2} alt="" className="destaque-image-1"/>
                        <img src={artigo3} alt="" className="destaque-image-1"/>
                        <img src={artigo4} alt="" className="destaque-image-1"/>
                    </div>
                    <div className="imagem-grande">
                        <img src={artigo1} alt="" className="imagem-grande-1"/>
                    </div>
                </div>
                <div className="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div className="estrelas">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div className="preco">77.600 Kz <span>78.700 Kz</span></div>
                    <a href="#" className="btn"><PopUp/></a>
                </div>
            </div>
            <div className="fila">
                <div className="imagem-container">
                    <div className="imagem-pequena">
                        <img src={artigo6} alt="" className="destaque-image-2"/>
                        <img src={artigo7} alt="" className="destaque-image-2"/>
                        <img src={artigo8} alt="" className="destaque-image-2"/>
                        <img src={artigo9} alt="" className="destaque-image-2"/>
                    </div>
                    <div className="imagem-grande">
                        <img src={artigo6} alt="" className="imagem-grande-2"/>
                    </div>
                </div>
                <div className="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div className="estrelas">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div className="preco">79.600 Kz <span>80.700 Kz</span></div>
                    <a href="#" className="btn">Adicioniar ao Carrinho</a>
                </div>
            </div>
            <div className="fila">
                <div className="imagem-container">
                    <div className="imagem-pequena">
                        <img src={artigo10} alt="" className="destaque-image-3"/>
                        <img src={artigo11} alt="" className="destaque-image-3"/>
                        <img src={artigo12} alt="" className="destaque-image-3"/>
                        <img src={artigo13} alt="" className="destaque-image-3"/>
                    </div>
                    <div className="imagem-grande">
                        <img src={artigo10} alt="" className="imagem-grande-3"/>
                    </div>
                </div>
                <div className="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div className="estrelas">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div className="preco">83.600 Kz <span>82.735 Kz</span></div>
                    <a href="#" className="btn">Adicioniar ao Carrinho</a>
                </div>
            </div>
        </Fade>
        </section>
       

        <section className="equipa" id="equipa">
        <Fade left big cascade>
            <h1 className="cabecalho">Desenvolvedor do site e Criador da marca <span>Sunikas</span></h1>
            <div className="caixa-container">
                <div className="caixa">
                    <img src={equipa1} alt=""/>
                    <h3>Willfredy Vieira Dias</h3>
                    <h4>Profissional</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div className="estrelas">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa fa-star"></i>
                    </div>
                </div>
            </div>
        </Fade>
        </section>
      
        <section className="novidades" id="novidades">
        <Fade left big cascade>
            <div className="conteudo">
                <h3>Deixe o seu E-mail e receba os novos productos</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga sed itaque ducimus maxime facere nihil expedita non sunt? Nostrum, voluptatem?
                </p>
                <form action="">
                    <input type="email" placeholder="Por favor, Deixe o seu E-mail" className="email"/>
                    <input type="submit" value="Registar" className="btn"/>
                </form>
            </div>
        </Fade>
        </section>
       
        <section className="copyright" id="copyright">
            <div className="caixa">
                <h3>@Copyright Todos os direitos reservados a Willfredy Vieira Dias e a Sunikas Dev Women (SDW)
                <br/>Sinta-se à vontade. A casa é sua!.<br/>Estamos ansiosos por saber como está a ser a sua experiência cá no site.
                <br/>Visite as nossas redes sociais:<br/>
                <i class="fa-brands fa-github"></i> <i class="fa-brands fa-facebook-f"> </i> <i class="fa-brands fa-instagram"> </i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-whatsapp"></i>
                </h3>
            </div>
        </section>
    </>
  )
}

export default novos