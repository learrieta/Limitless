import React, { useEffect } from 'react';
import '../pages/LoginForm.css';
import useForm from './useForm';
import { UserAuth } from '../../context/AuthContext';
import {GoogleButton} from 'react-google-button';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({submitForm}) => {

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();


    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();

        } catch (error) {
            console.log(error);
        }
    };

    const{handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
    /*const [popupStyle, showPopup] = useState("hide")
    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }*/
    useEffect(() =>{
        if (user != null){
            navigate('/account');
            
        }
    },[user])

  return (
    <div className='container1'>
        <div className='app-wrapper1'>
            <div>
                <h2 className='title1'>Sign In</h2>
            </div>
            <form className='form-wrapper1'>
                
                <div className='name1'>
                    <label className='label'>Email</label>
                    <input className='input1' type='text'  name='username' value={values.username} onChange = {handleChange}/>
                    {errors.fullname && <p className='error'>{errors.username}</p>}
                </div>
                <div className='password1'>
                    <label className='label'>Password</label>
                    <input className='input1' type = 'password'  name='password' value={values.password} onChange = {handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <button className='submit1' onClick={handleFormSubmit}>Sign In</button>
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