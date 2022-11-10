import React from 'react'
import PageLayout from './PageLayout'
import "./Services.css"

const Services = () => {




    return (
        <PageLayout>
            <main className='Services' >
                <h1 className='flex justify-center items-center pt-[0rem] text-[3rem] font-serif font-semibold text-sky-500' > WHAT YOU WILL GET FROM US </h1>

                <section className="accept">

                    <section className="accept1 gap-[4rem]">

                        <div className='bit'>
                            <h1 className='finder' >  10% Discount  </h1>
                            <p className="para"> we offer 10% discount to all our customers for three months of </p>
                            <p className="para">patronage.</p>
                            <button className='learn'>learn more </button>

                        </div>

                        <div className='bit' >
                            <h1 className='finder' >Expert consult</h1>
                            <p className="para"> Get workspace consultations and guidiance from our experienced </p>
                            <p className="para">experts</p>
                            <button className='learn'>learn more </button>
                        </div>

                        <div className='bit' >
                            <h1 className='finder' >Suitable location</h1>
                            <p className="para"> we will help you find the most suitable location for you to set up </p>
                            <p className="para">your workspace.</p>
                            <button className='learn'>learn more </button>
                        </div>


                    </section>

                    <section className="accept2">

                        <div className='bit' >
                            <h1 className='finder' >Workspace Remodeling</h1>
                            <p className="para"> we will give your tech workspace the complete makeover to bring </p>
                            <p className="para">your immaginations to life</p>
                            <button className='learn'>learn more </button>
                        </div>
                        <div className='bit' >
                            <h1 className='finder' >Desktop Sales</h1>
                            <p className="para"> we also deal in sales of the best desktops to fit your workspace</p>
                            <button className='learn'>learn more </button>
                        </div>

                        <div className='bit' >
                            <h1 className='finder' > Workspace Creation</h1>
                            <p className="para"> we will take the risk to provide that workspace that never existed  </p>
                            <p className="para"> from the scratch and make effort to make you feel relaxed there</p>
                            <button className='learn'>learn more </button>
                        </div>


                    </section>

                </section>

            </main>
        </PageLayout>
    )
}

export default Services
