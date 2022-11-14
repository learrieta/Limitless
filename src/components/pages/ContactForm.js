import React from 'react'
import '../pages/ContactForm.css';

function ContactForm() {
    return (
        <div className='container2'>
            <div className='contact-box'>
                <div className='contact-left'>
                    <h3 className='request'>Send your request</h3>

                    <form>
                        <div className='input-row'>

                            <div className='input-group'>
                                <label for="Name">Name:</label>
                                <input type="text" />
                            </div>
                            <div className='input-group'>
                                <label for="Name">Phone:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-group'>
                                <label for="Name">Email:</label>
                                <input type="email" />
                            </div>
                            <div className='input-group'>
                                <label for="Name">Subject:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea rows="5" ></textarea>

                        <button className='submit2'>SEND</button>
                    </form>
                </div>
                <div className='contact-right'>
                    <h3 className='reach'>Our Information</h3>
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>contactus@gmail.com</th>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <th>+1 208 345 6789</th>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <th>Rexburg, ID 83440 </th>
                            <th>United States </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        
    )
}

export default ContactForm
