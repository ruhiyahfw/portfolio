import React from 'react'
import './../css/contact.css'
import email from './../images/email.png'
import github from './../images/github.png'
import gitlab from './../images/gitlab.png'
import linkedin from './../images/linkedin.png'

function Contact(){
    return (
        <div id='contact'>
            <div className='subtitle'>
                <h1 className="highlight-text">Contact Me</h1>
                <p>Feel free to contact me Ψ(￣∀￣)Ψ</p>
            </div>
            <div className='contact-container'>
                <a href='mailto:13519034@std.stei.itb.ac.id'><img src={email} alt="email"/></a>
                <a href='https://github.com/ruhiyahfw'><img src={github} alt="github"/></a>
                <a href='https://gitlab.informatika.org/ruhiyahfaradishi'><img src={gitlab} alt="gitlab"/></a>
                <a href='https://www.linkedin.com/in/ruhiyah-faradishi-widiaputri-610288194/'><img src={linkedin} alt="linkedin"/></a>
            </div>
            
        </div>
    )
}

export default Contact