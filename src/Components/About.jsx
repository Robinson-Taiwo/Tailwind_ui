import React from 'react'
import PageLayout from './PageLayout'
import "./About.css"

const About = () => {
    return (
        <div>
            <PageLayout>

                <main className="did">

                    <section className="dida">

                        <h1 className='text-6xl font-bold text-white' >About Us & Our Work</h1>
                        <p className=' flex justify-center items-center text-white text-2xl leading-loose'> we provide expert and premium workspace remodelling and creation.</p>
                        <p className=' flex justify-center items-center text-white text-2xl leading-loose'>with over 10 years experience we will ensure you get the perfect workspace the suits your preference.</p>
                        <p className=' flex justify-center items-center text-white text-2xl leading-loose'>we will also bring your imaginations to life</p>

                    </section>

                    <section className="didb">

                        <div className='lit' >
                            <p>10</p>
                            <p>Specialists</p>

                        </div>
                        <div className='lit' >
                            <p>1000</p>
                            <p>Clients</p>
                        </div>
                        <div className='lit' >
                            <p>37</p>
                            <p>Jobs</p>
                        </div>
                        <div className='lit' >
                            <p>50</p>
                            <p>Awards</p>
                        </div>


                    </section>

                </main>

            </PageLayout>
        </div>
    )
}

export default About
