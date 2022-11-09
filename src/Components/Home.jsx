import React from 'react'
import PageLayout from './PageLayout'
import "./Home.css"
const Home = () => {
    return (
        <PageLayout>

            <>

                <section className="first">

                    <div className='box' >

                        <div className="square">
                            <h1 className='workspace1' >
                                workspace Design and planning
                            </h1>

                            <h1 className='workspace' >workspace Designs for your personal space</h1>
                        </div>

                    </div>

                    <div className='box2' >

                        <div className="circle">
                        </div>

                        <div className="circle2">
                        </div>

                    </div>

                </section>
                <section className="second">

                    <div className="what">
                        <h1 className='whath' >Turn your Workspace <br /> into a War Space</h1>
                        <p className='lorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br />  Tempora veniam quia iste mollitia  eveniet deserunt,
                            <br /> pariatur aliquid corporis fugit atque explicabo voluptatum  <br /> voluptate perspiciatis ex, fuga officiis porro reprehenderit vel. </p>

                    </div>

                    <div className="water">

                        <div className="building">
                            <h2 className='text-4xl  flex  justiy-center items-center flex-col mt-[1rem]  ' > workspace creation </h2>
                            <p className=' pl-10 mt-11'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vitae aspernatur, blanditiis tenetur natus voluptas, voluptatibus tempora, excepturi quam illum perspiciatis architecto sit. Nostrum, rem? <br /> Voluptate repellendus odit similique earum.</p>
                        </div>

                        <div className="remod">
                            <h2 className='text-4xl  flex  justiy-center items-center flex-col mt-[1rem]  ' > workspace remodeling </h2>
                            <p className=' pl-10 mt-11'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vitae aspernatur, blanditiis tenetur natus voluptas, voluptatibus tempora, excepturi quam illum perspiciatis architecto sit. Nostrum, rem? <br /> Voluptate repellendus odit similique earum.</p>

                        </div>


                    </div>

                </section>

            </>

        </PageLayout>


    )
}

export default Home
