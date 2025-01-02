"use client";
// Home.tsx
import { PiGooglePlayLogoDuotone } from "react-icons/pi";
import React, { useState } from "react";
import Corpo from "@/component/paginaInicial/Corpo";
import Cabecalho from "@/component/paginaInicial/Cabecalho";
import styles from '../styles/principal.module.css';

export default function App() {
  const [coletarEmail, setColetarEmail] = useState('');

  async function cadastrarEmail() {
    try {
      const formData = new FormData();
      formData.append('email', coletarEmail);

      const response = await fetch('/api/coletarEmails', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      // Limpar o campo de entrada após o envio bem-sucedido
      setColetarEmail(''); // Aqui estamos limpando o campo de e-mail
    } catch (error) {
      console.error('Erro ao inserir email no banco de dados', error);
      setColetarEmail('');
    }
  }

  return (
    <div className={styles.containerTotal}>
      <Cabecalho titulo="Mahends" />
      <Corpo />
      <div className={styles.containerRodape}>
        <input
          className={styles.email}
          type="email"
          placeholder="Digite seu e-mail, fique por dentro de notícias atualizadas, cursos inovadores, bônus exclusivos e projetos empolgantes"
          value={coletarEmail}
          onChange={(e) => setColetarEmail(e.target.value)}
        />
        <div onClick={cadastrarEmail} className={styles.coletar}><PiGooglePlayLogoDuotone /></div>
      </div>
    </div>
  );
}
