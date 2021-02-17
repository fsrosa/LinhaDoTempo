import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

import api from '../../services/api'
import './BoxLogin.css'

const BoxLogin = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const userData = {
            userEmail,
            userPassword
        }

        try {
            const response = await api.post('api/login', { userData })

            localStorage.setItem('token', response.data.token)
        } catch (error) {
            alert(`Falha no Login: ${error}`)
        }
    }

    return (
        <form className="boxlogin-container" onSubmit={handleLogin}>
            <p>Entre com seus dados:</p>
            <label>Email:</label>
            <input
                className="text-input"
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)} />
            <label>Senha:</label>
            <input
                className="text-input"
                type="password"
                value={userPassword} 
                onChange={e => setUserPassword(e.target.value)}/>
            <PrimaryButton variant="submit">Entrar</PrimaryButton>
            <footer>Esqueceu sua senha?</footer>
        </form>
    )
}

export default BoxLogin