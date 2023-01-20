import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault()

    if (email !== '' && senha !== ''){
      await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate('/admin', {replace: true})
      })
      .catch(() => {
        console.log('Erro ao cadastrar')
      })

    }else{
      alert('Preencha todos os campos!')
    }
  }

  return (
    <div className='homeContainer'>
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className='form' onSubmit={handleRegister}>
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

        <button type='submit'>Cadastrar</button>
      </form>

      <Link className='buttonLink' to='/'>
        Já possui uma conta? Faça login!
      </Link>

    </div>
  );
}