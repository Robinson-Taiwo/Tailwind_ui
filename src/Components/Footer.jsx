import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (

        <div class="footer_container">
            <div class="footer_links">
                <div class="footer_wrapper">
                    <div class="footer_items">
                        <h2>About us</h2>
                        <a href="/sign_up">how it works</a>
                        <a href="/">testimonials</a>
                        <a href="/">careers</a>
                        <a href="/">investments</a>
                        <a href="/">Terms of services</a>
                    </div>
                    <div class="footer_items">
                        <h2>Contact us</h2>
                        <a href="/">Contacts</a>
                        <a href="/">destination</a>
                        <a href="/">support</a>
                        <a href="/">sponsorship</a>
                        <a href="/">newsletter</a>
                    </div>
                </div>
                <div class="footer_wrapper">
                    <div class="footer_items">
                        <h2>Videos</h2>
                        <a href="/">submit videos</a>
                        <a href="/">ambassadors</a>
                        <a href="/">agency</a>
                        <a href="/">influencer</a>
                        <a href="/">see videos</a>
                    </div>
                    <div class="footer_items">
                        <h2>Social media</h2>
                        <a href="/">instagram</a>
                        <a href="/">facebook</a>
                        <a href="/">youtube</a>
                        <a href="/">linkedin</a>
                    </div>
                </div>


            </div>

            <div class="social_media">
                <div class="social_media_wrapper">

                    <div class="footer_logo">
                        <a href="/" id="footer_logo"><i class="fa-regular fa-chess-rook"></i> WorkHub</a>
                    </div>
                    <p class="website_rights">©   WorkHub 2022. All rights reserved</p>
                    <div class="social_icons">
                        <a href="/" class="social_icons_links" target="_blank">
                            <i id='face' className="fab fa-facebook"></i>
                        </a>
                        <a href="/" class="social_icons_links" target="_blank">
                            <i id='insta' className="fab fa-instagram"></i>
                        </a>
                        <a href="/" class="social_icons_links" target="_blank">
                            <i id='tweet' className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="social_icons_links" target="_blank">
                            <i id='you' className="fab fa-youtube"></i>
                        </a>
                        <a href="/" className="social_icons_links" target="_blank">
                            <i className="fab fa-linkedinn"></i>
                        </a>
                    </div>

                </div>



            </div>

        </div>


    )
}

export default Footer
