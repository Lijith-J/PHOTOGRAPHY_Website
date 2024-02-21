import React from 'react'
import './HomePage_style.css'
import './HomePage_media.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'

import '../Main_Ad_Photos/Main_Add_Photos'
import Main_Add_Photos from '../Main_Ad_Photos/Main_Add_Photos'

// import backImage from './images/freestocks-a1Fmxesw31g-unsplash.jpg'
import couple from './images/anna-vi-rQSauuUzx0w-unsplash.jpg'
import coupleHand_standing from './images/nathan-dumlao-BOhDR9n4u2s-unsplash.jpg'
import rightArrow from './images/right-arrow.png'

// categories imgs______________________________________________________
import couplesImg from './images/categories images/nikita-shirokov-qGgjalogCdE-unsplash.jpg'
import kidImage from './images/categories images/daiga-ellaby-yUCxdsqPhbQ-unsplash.jpg'
import TravelImage from './images/categories images/vesela-vaclavik-ywIr0EVEJaY-unsplash.jpg'
import rightArrowBlack from './images/right-arrow black.png'
// ____________________________________________________________________


import weddingVid from './vids/wedding.mp4'

// ________________________________________________________________________________________________

import coupleWithFlower from './images/review images/jonathan-borba-flower.jpg'
import smileCoupleImage from './images/review images/jonathan-borba-sYVvnpTcRrA-unsplash.jpg'


const HomePage = () => {
    return (
        <>

            <Main_Add_Photos />

            <div className='container-fluid backside-image back-image'>
                {/* <img className='img img-fluid ' src={backImage} alt="" /> */}

            </div>

            <div className=' home-main '>

                <div className='container-fluid pt-5  gap-5   d-flex flex-column  justify-content-center align-items-center readmore-content-div'>

                    <div className='container row-cols-md-6  d-flex justify-content-between  flex-wrap  readmore-content-top-div' >

                        <div className='col-md-4 p-3  top-description-div'>

                            <h4 className=' text-white fs-3'> Creating intimate and refined images for the timeless couple.</h4>
                            <p>Driven by authentic connections and dedicated to crafting enduring memories, Alexi is a proficient photographer adept in both film and digital mediums. Her expertise lies in capturing intimate, elegant, and timeless imagery that resonates deeply with couples in love.</p>

                        </div>

                        <div className='col-md-7  d-flex justify-content-center align-items-center  top-image-div'>
                            <img className='img img-fluid' src={couple} alt="" />

                        </div>

                    </div>

                    {/* Bottom_________________________________________________________ */}

                    <div className='container row-cols-md-6 d-flex flex-wrap-reverse  readmore-content-bottom-div'>

                        <div className='col-md-5 p-5 d-flex justify-content-center align-items-center  bottom-image-div'>
                            <img className='img  img-fluid d-flex justify-content-center' src={coupleHand_standing} alt="" />

                        </div>

                        <div className='col-md-5 p-3 text-white bottom-description-div'>

                            <h2 className=' text-white fs-3'> LIJITH J</h2>
                            <span>FOUNDER + PHOTOGRAPHER</span>
                            <p>I am a photographer specializing in weddings, portraits, and editorial work, with a deep passion for film cameras, the beauty of natural light, and the allure of natural surroundings. My primary objective during each session is to authentically capture your connection and the unexpected, all while providing gentle guidance throughout.</p>
                            <p>My mission is to provide my clients with a truly unique and memorable experience. I am committed to cultivating lasting relationships and creating cherished memories that will stand the test of time.</p>


                            <span className='readmore-text'>READ MORE</span>
                            <img className=' m-3 ' src={rightArrow} alt="" />

                        </div>
                    </div>



                </div>


                {/* _________________________________________________________ */}


                <div className='container col-md-12 p-5 gapView-div'>
                    <div className='container col-md-8 d-flex  gapView-sub-div'>
                        <h1 className=''>The Knot <br />
                            The White Wren
                            Style Me Pretty
                            B'Loved
                            Bajan Wedding
                            Elizabeth Anne Designs
                            I Do Y'all
                            The Overwhelmed Bride
                        </h1>
                    </div>
                </div>

                {/* ___________________________________________________________________________________________ */}

                <div className='container-fluid p-5 d-flex flex-column align-items-center  categories-offering-mainDiv'>

                    <div className='container row p-2 d-flex flex-md-wrap justify-content-evenly categories-main-div'>
                        <div className='col-md-4  categories-div'>
                            <h1>Couples</h1>
                            <p>VIEW GALLERY</p>
                            <img className='img img-fluid ' src={couplesImg} alt="" />
                        </div>
                        <div className='col-md-4 categories-div'>
                            <h1>Family</h1>
                            <p>VIEW GALLERY</p>
                            <img className='img img-fluid ' src={kidImage} alt="" />
                        </div>
                        <div className='col-md-4 categories-div'>
                            <h1>Travel</h1>
                            <p>VIEW GALLERY</p>
                            <img className='img img-fluid ' src={TravelImage} alt="" />
                        </div>

                    </div>

                    <div className='container col-md-8 text-center p-5 our-offerings-div'>
                        <h1>Our Offerings</h1>
                        <p>WEDDING / ENGAGEMENTS / DESTINATIONS / FAMILIES / SOCIAL</p>

                        <p>We provide a diverse range of services, and our passion for travel shines through in our work. We specialize in wedding photography that embraces an organic approach, capturing moments exactly as they unfold, with a genuine and unscripted style. We capture family sessions  with a lifestyle approach, aiming to authentically reflect your family's unique personality and dynamics.</p>

                        <span>OUR INVESTMENTS</span>
                        <img className='m-3' src={rightArrowBlack} alt="" />
                    </div>

                </div>



                {/* __Video Portion____________________________________________________________ */}


                <div className='container-flui d-flex bg-black  justify-content-center align-items-center video-div'>

                    <video className='wedding-video' autoPlay muted loop src={weddingVid}></video>

                    <h1 className=''>LJ LEE</h1>


                </div>



                {/* ___________________________________________________________________________________________ */}

                <div className='container-fluid col-12  gap-4  p-5 d-flex flex-wrap  justify-content-evenly  review-main-div'>

                    <div className='col-md-4 d-flex flex-column  justify-content-between  align-items-center  review-image-div'>
                        <img src={coupleWithFlower} className='d-md-none d-block ' alt="" />

                        <img src={smileCoupleImage} className=' col-md-4 d-md-block d-none ' alt="" />
                    </div>

                    <div className='col-md-6 p-4 review-description-main-div'>
                        <h1>"AS SOON AS I MET HER, SHE PUT MY WEDDING PHOTOGRAPHY WORRIES AT EASE"</h1>

                        <div className=' review-description-div '>
                            <p className=' '> Photographs are one of the most tangible keepsakes you have from your wedding day. Finding the perfect photographer for my wedding was so important to me. Alexi is incredibly talented, organized,
                                professional, and kind. She captures beautiful imagery and special moments that will tell a story for a lifetime. As soon as I met her, she put my wedding photography worries at ease. I could not recommend Alexi more!</p>

                            <h6>LAUREN + NATHAN</h6>
                            <h6>A GREENERY WEDDING</h6>
                        </div>

                        <span className='lets-talk-text'>LET'S TALK</span>
                        <img className='lets-talk-arrow' src={rightArrow} alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default HomePage
