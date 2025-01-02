"use client";
import React from 'react';
import style from '../../styles/whatsAppButton.module.css'

interface IWhatsAppButton {
    text: string
}

const WhatsAppButton = (props: IWhatsAppButton) => {
    const handleClick = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(props.text)}`;
        window.open(url);
    };
    return <button className={style.botaoWpp} onClick={handleClick}>Compartilhar no WhatsApp</button>;
};

export default WhatsAppButton;