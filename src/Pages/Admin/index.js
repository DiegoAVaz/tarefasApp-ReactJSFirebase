import './admin.css'
import { useState } from 'react'
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'

export default function Admin(){

    const [tarefaInput, setTarefaInput] = useState()

    function handleRegister(e){
        e.preventDefault()

        alert('Clicou')
    }

    async function handleLogout(){
        await signOut(auth)
    }

    return(
        <div className='adminContainer'>
            <h1>Minhas tarefas</h1>

            <form className='form' onSubmit={handleRegister}>
                <textarea 
                    placeholder='Digite sua tarefa...'
                    value={tarefaInput}
                    onChange={(e) => setTarefaInput(e.target.value)}
                />

                <button className='btnRegister' type='submit'>Registrar tarefa</button>
            </form>

            <article className='list'>
                <p>Estudar JS e ReactJS hoje a noite</p>

                <div>
                    <button>Editar</button>
                    <button className='btnDelete'>Concluir</button>
                </div>
            </article>

            <button className='btnLogout' onClick={handleLogout}>Sair</button>

        </div>

    )
}