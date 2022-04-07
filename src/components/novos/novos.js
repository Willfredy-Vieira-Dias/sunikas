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


const novos = () => {
  return (
    <>
        <section class="destaque" id="destake">
            <h1 class="cabecalho">Novos <span>Productos</span></h1>
            <div class="fila">
                <div class="imagem-container">
                    <div class="imagem-pequena">
                        <img src={artigo1} alt="" class="destaque-image-1"/>
                        <img src={artigo2} alt="" class="destaque-image-1"/>
                        <img src={artigo3} alt="" class="destaque-image-1"/>
                        <img src={artigo4} alt="" class="destaque-image-1"/>
                    </div>
                    <div class="imagem-grande">
                        <img src={artigo1} alt="" class="imagem-grande-1"/>
                    </div>
                </div>
                <div class="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div class="estrelas">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div class="preco">77.600 Kz <span>78.700 Kz</span></div>
                    <a href="#" class="btn">Adicioniar ao Carrinho</a>
                </div>
            </div>
            <div class="fila">
                <div class="imagem-container">
                    <div class="imagem-pequena">
                        <img src={artigo6} alt="" class="destaque-image-2"/>
                        <img src={artigo7} alt="" class="destaque-image-2"/>
                        <img src={artigo8} alt="" class="destaque-image-2"/>
                        <img src={artigo9} alt="" class="destaque-image-2"/>
                    </div>
                    <div class="imagem-grande">
                        <img src={artigo6} alt="" class="imagem-grande-2"/>
                    </div>
                </div>
                <div class="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div class="estrelas">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div class="preco">79.600 Kz <span>80.700 Kz</span></div>
                    <a href="#" class="btn">Adicioniar ao Carrinho</a>
                </div>
            </div>
            <div class="fila">
                <div class="imagem-container">
                    <div class="imagem-pequena">
                        <img src={artigo10} alt="" class="destaque-image-3"/>
                        <img src={artigo11} alt="" class="destaque-image-3"/>
                        <img src={artigo12} alt="" class="destaque-image-3"/>
                        <img src={artigo13} alt="" class="destaque-image-3"/>
                    </div>
                    <div class="imagem-grande">
                        <img src={artigo10} alt="" class="imagem-grande-3"/>
                    </div>
                </div>
                <div class="conteudo">
                    <h3>Novas Nike Airmac</h3>
                    <div class="estrelas">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                    </p>
                    <div class="preco">83.600 Kz <span>82.735 Kz</span></div>
                    <a href="#" class="btn">Adicioniar ao Carrinho</a>
                </div>
            </div>
        </section>
       

        <section class="equipa" id="equipa">
            <h1 class="cabecalho">Desenvolvedor do site e Criador da marca <span>Sunikas</span></h1>
            <div class="caixa-container">
                <div class="caixa">
                    <img src={equipa1} alt=""/>
                    <h3>Willfredy Vieira Dias</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div class="estrelas">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa fa-star"></i>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="novidades" id="novidades">
            <div class="conteudo">
                <h3>Deixe o seu E-mail e receba os novos productos</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga sed itaque ducimus maxime facere nihil expedita non sunt? Nostrum, voluptatem?
                </p>
                <form action="">
                    <input type="email" placeholder="Por favor, Deixe o seu E-mail" class="email"/>
                    <input type="submit" value="Registar" class="btn"/>
                </form>
            </div>
        </section>
       
        <section class="copyright" id="copyright">
            <div class="caixa">
                <h3>@Copyright Todos os direitos reservados a Willfredy Vieira Dias e a Sunikas Dev Women (SDW)</h3>
            </div>
            <script src="../anijs/script.js"></script>
        </section>
    </>
  )
}

export default novos