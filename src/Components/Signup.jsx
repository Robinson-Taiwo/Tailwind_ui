import React from 'react'
import "./Signup.css"

const Signup = () => {
    return (

        <main className="meat">

            <section className='beef'>

                <div className="war">
                    <h1 className='space'>
                        SIGN-UP
                    </h1>
                    <p className='pro' >create your account to join get our premium services</p>

                </div>

            </section>

            <section className="pork">

                <form className='action'>
                    <div className="fo">Sign up Form</div>

                    <div className='up' >FIRST-NAME <input className='mil' type="text" label="name" />
                    </div>
                    <div className="up">LAST-NAME <input className='mil' type="text" label="name" />
                    </div>
                    <div className="up">USERNAME <input className='mil' type="text" label="name" />
                    </div>
                    <div className="up">PASSWORD <input className='mil' type="text" label="name" />
                    </div>
                    <div className="up">CONFIRM PASSWORD <input className='mil' type="text" label="name" />
                    </div>

                    <span><input type="checkbox" label="name" /> by checking the box, you agree to all our terms, policies and
                        conditions
                    </span>
                    <button className='sum' >submit</button>


                </form>

            </section>

        </main>

    )
}

export default Signup
