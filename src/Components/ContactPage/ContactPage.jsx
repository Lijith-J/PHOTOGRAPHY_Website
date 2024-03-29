import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './ContactPage_style.css'
import './ContactPage_media.css'



// Ad Photos______________________________________________________
import photoOne from './images/anna-vi-QUi84upBhoc-unsplash.jpg'
import photoTwo from './images/nathan-dumlao-5BB_atDT4oA-unsplash.jpg'

// Thanks Giving box __________________________________________________
import cheersImg from './images/cheers1.jpg'




const ContactPage = () => {

  const [currentImage, setCurrentImage] = useState('');

  const [inputValues, setInputValues] = useState({})


  // Define an array of image URLs
  const imageUrls = [
    photoOne,
    photoTwo,
  ];

  // Define a state to track the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the image after some seconds
  useEffect(() => {
    // Define a timer to change the image every 5 seconds (5000 milliseconds)
    const timer = setInterval(() => {
      // Increment the index to get the next image
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change image every 5 seconds

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, [currentIndex, imageUrls.length]);

  // Update the current image URL when the index changes
  useEffect(() => {
    setCurrentImage(imageUrls[currentIndex]);
  }, [currentIndex, imageUrls]);



  const getValueFromContactForm = (e) => {
    const { name, value } = e.target
    setInputValues((prev) => ({ ...prev, [name]: value }));

  }

  console.log(inputValues)


  const handleApi = async () => {
    const url = await axios.post("http://localhost:9000/verify-email", inputValues)
    const response = url.data
    // console.log("ppppppp", response)
  }

  return (

    <>
      <div className='container-fluid p-0 contact-Ad-photos-div'>
        <img className=' img-fluid ' src={currentImage} alt="" />

      </div>


      {/* Contact Description ________________________________________________ */}
      <div className='container-fluid p-4 p-md-5 d-flex justify-content-center  contactUs-description-div'>
        <div className='col-md-6 p-3  p-md-4 gap-3 d-flex flex-column justify-content-between'>
          <h1>Contact Us</h1>
          <span>INQUIRE ABOUT YOUR UPCOMING EVENT</span>
          <p>We're absolutely thrilled that you're considering us to capture your upcoming event. Photography holds a unique place as one of the few tangible items you'll have to remember your special occasion. It not only preserves cherished family memories but is also a responsibility we hold with the utmost care and dedication. Please take a moment to complete the contact form below, and let's start a conversation about how we can make your event unforgettable through our lens.</p>
        </div>
      </div>



      {/* Contact Form  _____________________________________________________________________*/}

      <div className='container-fluid p-5 d-flex flex-column align-items-center  contact-form-div'>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Full name *</label>
          <input className=' w-100 ' name='fullname' value={inputValues.fullname} onChange={getValueFromContactForm} type="text" placeholder='Your Name Here' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Email *</label>
          <input className=' w-100 ' name="email" value={inputValues.email} onChange={getValueFromContactForm} type="text" placeholder='Email Here' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Phone number</label>
          <input className=' w-100 ' name='phonenumber' value={inputValues.phonenumber} onChange={getValueFromContactForm} type="text" placeholder='Your Phone number' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Event date</label>
          {/* <input className=' w-100 ' type="text" placeholder='MM/DD/YY' /> */}
          <input className=' w-100  date-input' name='eventDate' value={inputValues.eventDate} onChange={getValueFromContactForm} type="date" placeholder='MM/DD/YY' />

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Event Location</label>
          <input className=' w-100 ' name='eventLocation' value={inputValues.eventLocation} onChange={getValueFromContactForm} type="text" placeholder='Event Location Address' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">What type of session are you looking for?</label>
          {/* <input className=' w-100 ' type="text" placeholder='select an option' /> */}

          <select name="eventType" value={inputValues.eventType} onChange={getValueFromContactForm}>

            <option value="">Select an option</option>
            <option value="Event">Event</option>
            <option value="Family">Family</option>
            <option value="Party">Party</option>
            <option value="Design">Design</option>

          </select>

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Budget</label>
          <input className=' w-100 ' name='budget' value={inputValues.budget} onChange={getValueFromContactForm} type="text" placeholder='$1000' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">How did you hear about us?</label>
          {/* <input className=' w-100 hear-about-input' type="text" placeholder='Select an option' /> */}

          <select name="hearAboutUs" value={inputValues.hearAboutUs} onChange={getValueFromContactForm} >
            <option value="">Select an option</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
          </select>

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Tell me more about your session or event</label>
          <textarea cols="10" rows="3" name='TellAboutEvent' value={inputValues.TellAboutEvent} onChange={getValueFromContactForm} placeholder='   What are you envisioning?'></textarea>
        </div>

        <div className='col-md-4 p-5  d-flex justify-content-center form-button-div'>
          <button className='' onClick={() => handleApi()}>SEND</button>
        </div>

      </div>



      {/* Thanks giving box___________________________________________________ */}


      <div className='container-fluid p-3 p-md-5 d-flex flex-wrap justify-content-evenly align-items-center   thanks-giving-box'>

        <div className='col-md-5 p-4 h-75 '>
          <h2>Thanks for contacting us.
            We will be in touch soon!
          </h2>
          <p>If you don't hear back within 48 hrs please email us at leephotography@gmail.com</p>

        </div>

        <div className='col-md-6 p-3 p-md-5 '>
          <img className='img-fluid w-md-100 ' src={cheersImg} alt="" />
        </div>
      </div>


    </>
  )
}

export default ContactPage

