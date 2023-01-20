import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()

    if (email !== '' && senha !== ''){
      
      await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate('/admin', {replace: true})
      })
      .catch(() => {
        console.log('Erro ao logar')
      })

    }else{
      alert('Preencha todos os campos!')
    }
  }

  return (
    <div className='homeContainer'>
      <h1>Lista de Tarefas</h1>
      <span>Gerencia sua agenda de forma fácil</span>

      <form className='form' onSubmit={handleLogin}>
        <input 
          type='text'
          placeholder='Digite seu e-mail...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type='password'
          placeholder='Digite sua senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type='submit'>Acessar</button>
      </form>

      <Link className='buttonLink' to='/register'>
        Não possui uma conta? Cadastre-se!
      </Link>

    </div>
  );
}