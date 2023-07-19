import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../../styles/FormularioCorreo.css'

export const FormularioCorreo: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (form.current){
      emailjs.sendForm('service_yg8098h', 'template_r9q3t3n', form.current, '1tuiM9-4n-FZpi65L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          alert(`Error:${error.text}`);
      });
    }
  };

  return (
    <div className="contenedor-principal-formulario-correo">
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Ingrese usuario" type="text" name="user_name" />
        <input placeholder="Ingrese email" type="email" name="user_email" />
        <textarea placeholder='Ingrese mensaje' name="message" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}