import React from 'react'
import "./Formulario.css"
const formularioulario = () => {
  return (
    <>
        <section>
            <div class="bloco">
    <div class="titlo1">
      Formulário de Compras
    </div>
    <div class="formulario">
       <div class="entrada-dados">
          <label>Primeiro nome</label>
          <input type="text" class="input"/>
       </div>  
        <div class="entrada-dados">
          <label>Último Nome</label>
          <input type="text" class="input"/>
       </div>  
       <div class="entrada-dados">
          <label>Endereço</label>
          <input type="text" class="input"/>
       </div>  
      <div class="entrada-dados">
          <label>Codigo do cartão</label>
          <input type="text" class="input"/>
       </div> 
        <div class="entrada-dados">
          <label>Gênero</label>
          <div class="custom_select">
            <select>
              <option value="">Seleciona</option>
              <option value="male">Homem</option>
              <option value="female">Mulher</option>
            </select>
          </div>
       </div> 
        <div class="entrada-dados">
          <label>Endereço de Email</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados">
          <label>Número de telefone</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados">
          <label>Informações Adicionais</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="entrada-dados">
          <label>Codigo Postal</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Concordar com os termos e condições</p>
       </div> 
      <div class="entrada-dados">
        <input type="submit" value="Register" class="btn"/>
      </div>
    </div>
</div>	
        </section>
    </>
  )
}

export default formularioulario