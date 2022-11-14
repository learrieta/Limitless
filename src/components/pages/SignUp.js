import React, { useState } from 'react'
import SignupForm from './SignupForm'
import Footer from '../Footer.js'
import SignupFormSuccess from './SignupFormSuccess'

const SignUp = () => {

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => 
    setFormIsSubmitted(true);
    return (
      <div>
        {!formIsSubmitted ? <SignupForm submitForm = {submitForm} /> : <SignupFormSuccess/>}
        <Footer/>
      
      </div>

    )
    
 
};

export default SignUp



/*return (
  <div>
    {!formIsSubmitted ? <SignupForm submitForm = {submitForm} /> : <SignupFormSuccess/>}
    <SignupForm/>
    <Footer/>
  </div>
)*/