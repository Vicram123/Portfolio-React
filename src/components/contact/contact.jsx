import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from   'emailjs-com'



const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_473f0qn', 'template_b2fq14e', form.current, 'djK9ejxTUsqbp1gZO')
      e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vicramanjohfue@mail.com</h5>
            <a href="mailto:vicramanjohfue@mail.com" target='_blank'>Send a message</a>
          </article>
           <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>vicramtutorials</h5>
            <a href="https://m.me/https://www.messenger.com/t/5386073858082259/" target='_blank'>Send a message</a>
          </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'  />
            <h4>WhatsApp</h4>
            <h5>+358-46610-3347</h5>
            <a href="https://api.whatsapp.com//send?phone=00358466103347" target='_blank'>Send a message</a>
          </article>
        </div>
        {/*======END OF CONTACT==== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="text" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact