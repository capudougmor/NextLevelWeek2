import React from 'react'

import './styles.css'

import whatsappIcom from '../../assets/images/icons/whatsapp.svg'


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/60409911?s=460&u=8fdd6fe687515b06f34e33f6a4811e82d1f31712&v=4" alt="" />
        <div>
          <strong>Douglas Mendes</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Instrutor de Educação Física para iniciantes. <br /> Minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
            Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcom} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem