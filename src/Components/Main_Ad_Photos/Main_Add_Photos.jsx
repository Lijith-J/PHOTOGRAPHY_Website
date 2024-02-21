import React, { useEffect, useState } from 'react'
import './Main_Ad_Photos.css'
import './Main_Ad_Media.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import img1 from './images/red_wedding_saree_photoshoot_girl_model_women_pose_hd_girls-1920x1080.jpg'
import img2 from './images/renee_murden_white_wedding_dress_net_green_trees_plants_photoshoot_4k_hd_girls-2560x1440.jpg'

const Main_Add_Photos = () => {

  const [currentImage, setCurrentImage] = useState('');

  // Define an array of image URLs
  const imageUrls = [
    img1,
    img2,

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


  return (
    <>
    <div className='potos-ad-div'>
      <img className='img img-fluid ad-image' src={currentImage} alt="" />
      {/* <h1 className='logo-text'>LEE</h1> */}
    </div>
    </>
  )
}

export default Main_Add_Photos
