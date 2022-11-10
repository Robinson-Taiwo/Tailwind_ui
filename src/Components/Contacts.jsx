import React from 'react'
import PageLayout from './PageLayout'
import "./Contacts.css"
import mail from "/mail.svg"
import location from "/location.svg"
import phone from "/phone.svg"



const Contacts = () => {
    return (
        <PageLayout>

            <main className="contacts">

                <div className='cont1'>

                    <div className="num1">
                        <h1 className='fle' >  Get In Touch</h1>

                        <p className='par'> Reach out to us for our amazing services and we will
                            be ready to work at any time</p>
                    </div>

                    <div className="num1">
                        <h1 className='fle' ><img src={mail} alt="" /> E-mail us</h1>
                        <p className='par'>Our friendly team is ready to help</p>
                        <p className='par' >omoyenisamuel66@gmail.com</p>
                    </div>

                    <div className="num1">

                        <h1 className='fle'><img src={location} alt="" />  OFFICE </h1>
                        <p className='par'>come say hello at our office HQ</p>
                        <p className='par'>37 Taiwo's street, 21 Avenue</p>
                        <p className='par'>ilorin, Kwara State. Nigeria. </p>
                    </div>

                    <div className="num1">
                        <h1 className='fle' ><img src={phone} alt="" />PHONE</h1>
                        <p className='par'>monday-friday from 8am-5pm</p>
                        <p className='par'>+2348088704731, +2348038234548</p>
                    </div>

                    <div className="num5">
                        <i id='face' className="fab fa-facebook"></i>
                        <i id='insta' className="fab fa-instagram"></i>
                        <i id='tweet' className="fab fa-twitter"></i>


                    </div>

                </div>

                <div className='cont2'>

                    <div className="sub">

                        <form className='subb'>
                            <h3 className='col'>Subscribe to our newsletter</h3>
                            <p className='part'>Get updated about our latest information</p>

                            <input type="text" required placeholder='input email here' />
                            <button className='bul'>submit</button>

                        </form>

                    </div>

                </div>

            </main>

        </PageLayout>
    )
}

export default Contacts
