import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('');

    async function handleSubmit(event){
      //Impede que a página recarrega ao fazer o submit
      event.preventDefault();
      console.log(email);
  
      const response = await api.post('/sessions', {email});
      const { _id } = response.data;
      console.log(_id);
      localStorage.setItem('user', _id);
      //Manda o usuário para a próxima página  
      history.push('/dashboard');
    }
  
    return (
    
    <>
        <p>
          Ofereça <strong>spots</strong>  para programadores e encontre 
          <strong>talentos</strong> para sua empresa
        </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" 
                id="email" 
                placeholder="Seu melhor e-mail" 
                value= {email}
                onChange= {event => setEmail(event.target.value)}
        />
        <button  className="btn" type="submit">Entrar</button>
      </form>
    </>
    )
}