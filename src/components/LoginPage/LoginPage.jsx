import { apiRequest } from '../../service/apiRequest';
import '../LoginPage/LoginPage.css'
import { MainFooter } from '../MainFooter/MainFooter'

export const LoginPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataJson = Object.fromEntries(formData.entries());
        
        apiRequest({
            method: 'POST',
            data: formDataJson,
            path: '/auth/login',
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('token', response.token || '');
            })
            .catch(err => console.error(err));   
    }
   
    return (
        <>
        <div className='body-login'>   
            <div className='login-wrapper'>
                <div className='formulario-login'>
            <div className='login-header'>
                <h1>Acesse sua conta</h1>
                <p>Novo cliente? Então registre-se <a href="#">aqui.</a></p>
            </div> 
            <form className='login-body' onSubmit={handleSubmit}>
                <div>
                    <label className='labels' htmlFor="email">Email*</label>
                    <input id="email" name="email" className='inputs' type="text" placeholder='Insira seu login ou email' />
                </div>
                <div> 
                    <label className='labels' htmlFor="password">Senha*</label>
                    <input className='inputs' type="password" name="password" id="password" required placeholder='Insira sua senha' />
                </div>
                <div className='new-password'>
                    <a className='forgot-password' href="#">Esqueci minha senha</a>
                </div>
                <button className='btnAcessar' type='submit'>Acessar Conta</button>
            </form>
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
