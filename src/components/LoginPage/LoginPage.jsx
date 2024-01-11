import { useEffect, useState } from 'react'
import './LoginPage.css'
import { MainFooter } from '../MainFooter/MainFooter'

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [IsLoading, setIsLoading] = useState()
    const [error, setError] = useState(false)

    const handleUsernameChange = async (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = async (event) => {
        setPassword(event.target.value)
    }

    
    const enviarFormulario = async () => {
        console.log('Formulario enviado por:', {username, password})
        const API_URL = ''

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ username, password }),
            })
            const data = await response.json()
            console.log('resposta do servidor', data)
        }
        catch (err) {
            console.error('Erro ao enviar o formulário', err)
        }
    }

    useEffect(() => {
        enviarFormulario()
    }, [])
   
    return (
        <>
        <div className='body-login'>   
            <div className='login-wrapper'>
                <div className='formulario-login'>
            <div className='login-header'>
                <h1>Acesse sua conta</h1>
                <p>Novo cliente? Então registre-se <a href="#">aqui.</a></p>
            </div> 
            <div className='login-body'>
                <div>
                    <label className='labels' htmlFor="username">Login*</label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder='Insira seu login ou email' />
                </div>
                <div> 
                    <label className='labels' htmlFor="password">Senha*</label>
                    <input type="password" value={password} name="password" id="pass" onChange={handlePasswordChange} minLength={8} required placeholder='Insira sua senha' />
                </div>
                <div className='new-password'>
                    <a className='forgot-password' href="#">Esqueci minha senha</a>
                </div>
                <button type='submit' onClick={enviarFormulario}>Acessar Conta</button>
            </div>
            <div className='login-footer'>
                <h4>Ou faça login com</h4>
                <a href="#"><img src="../images/gmail-icon.svg" id='gmail-icon' alt="icone-gmail" /></a>
                <a href="#"><img src="../images/fb-icon.svg" alt="icone-facebook" /></a>
            </div>
            </div>
            <div>
                <img src="../images/tenis-juntos.png" alt="tenis-imagem" />
            </div>
            </div>           
        </div>
        <MainFooter />
        
        </>
    )
}