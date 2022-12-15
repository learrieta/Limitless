import React, { useState, useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';
import '../pages/LoginForm.css';
//import useForm from './useForm';
import { UserAuth } from '../../context/AuthContext';
import {GoogleButton} from 'react-google-button';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate('/account')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    };

    const {googleSignIn, user} = UserAuth();
    


    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();

        } catch (error) {
            console.log(error);
        }
    };

    //const{handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
    /*const [popupStyle, showPopup] = useState("hide")
    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }*/
    useEffect(() =>{
        if (user != null){
            navigate('/account');
            
        }
    },[user]);

  return (
    <div className='container1'>
        <div className='app-wrapper1'>
            <div>
                <h2 className='title1'>Sign In</h2>
            </div>
            <form className='form-wrapper1' onSubmit={handleSubmit}>
                
                <div className='name1'>
                    <label className='label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='input1' type='text'  name='username' /*value={values.username} onChange = {handleChange}*/ />
                    {/*errors.fullname && <p className='error'>{errors.username}</p>*/}
                </div>
                <div className='password1'>
                    <label className='label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='input1' type = 'password'  name='password' /*value={values.password} onChange = {handleChange}*//>
                    {/*errors.password && <p className='error'>{errors.password}</p>*/}
                </div>
                <button className='submit1' /*</form>onClick={handleFormSubmit}*/>Sign In</button>
                <p className='text'>OR SIGNIN USING</p>

                <div className='alt-login'>
                    <div className='facebook'></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <GoogleButton onClick = {handleGoogleSignIn} />
                </div>

            

                
            </form>
        </div>    
    </div>
  )
}

export default LoginForm

/*<div className={popupStyle}>
<h3>Login Failed</h3>
<p>Username or password incorrect</p>

</div>*/