import React from 'react'
import'../../App.css';
import Footer from '../Footer';
import ContactForm from '../pages/ContactForm';

function Contact() {
  return (
    <>
        <h1 className='contact'> Contact Us</h1>
        <section className='contact-message'>
          <p className='contact-paragraph'> We would love to respond your queries and help you succeed
              with any fitness goals, diet or activity you in mind. We are a community that thrives in helping one another
              become the best versions of ourselves. There is no limit to what we can accomplish once we set our mind to it!
              Feel free to get in touch with us. 
          </p>
        </section>
        <ContactForm/>
        <Footer/>
    </>
    
  )
}

export default Contact