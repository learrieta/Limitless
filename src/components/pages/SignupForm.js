import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SignupForm.css';
//import useForm from './useForm';
import { UserAuth } from '../../context/AuthContext';

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password);
            navigate('/account')
        }catch (e){
            setError(e.message);
            console.log(e.message);
        }
        
    };


    //const{handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper' onSubmit={handleSubmit}>
                <div className='name'>
                    <label className='label'>Full Name</label>
                    <input  className='input' type='text' name='fullname' /*value={values.fullname} onChange = {handleChange}*/ />
                    {/*errors.fullname && <p className='error'>{errors.fullname}</p>*/}
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='input' type='email' name='email' /*value={values.email} onInput = {handleChange}*/ />
                    {/*errors.email && <p className='error'>{errors.email}</p>*/}
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='input' type='password' name='password' /*value={values.password} onInput = {handleChange} *//>
                    {/*errors.password && <p className='error'>{errors.password}</p>*/}
                </div>
                <button className='submit' >Sign Up</button>
            </form>
        </div>

    </div>
  )
}

export default SignupForm