import React from 'react'
import './About.css';

const About = () => {
  return (

    <div className="body">


    <div className="hero">
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    
    <nav className="navbar">
            <ul>
            <li><a href="#home"><h2>Home</h2></a></li>
              <li><a href="#services"><h2>Menu</h2></a></li>
              <li><a href="#about"><h2>About</h2></a></li>
              <li><a href="#contact"><h2>Contact</h2></a></li>
            </ul>
          </nav>
    <br/>
      {/* <h1>Welcome to Pees~Pastry</h1> */}
      <p>where every bite tells a story of tradition, passion, and craftsmanship</p>
      <br/>
      {/* create image  */}
      <img src="https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2021/05/10/growing-demand-for-better-for-you-bakery/12434244-1-eng-GB/Growing-demand-for-better-for-you-bakery.jpg" alt="bakery" width={400} height={200} />
    
       
          <h1>Our Story</h1>
      <p>Pees Pastry began its journey in the quaint town of Millbrook,<br/> 
      where the aroma of freshly baked goods danced through the streets.<br/> 
      Founded by the visionary baker, Mrs. Margaret Pees, in 1978<br/>, 
      our bakery was built upon a foundation of love for<br/>
       creating delectable treats that brought joy to the community.<br/>
        With recipes passed down through generations and a commitment<br/> to quality ingredients, Pees Pastry quickly<br/>
         became a beloved establishment, cherished by locals and visitors alike.</p>
    
    <h1> Our Mission</h1>
    <p>At Pees Pastry, our mission is simple:<br/>
     to delight our customers with irresistible pastries that <br/>
     evoke memories of home and warmth. <br/>
     We strive to uphold the rich traditions of baking <br/>
     while continuously innovating to surprise and delight our patrons. <br/></p>
     {/* Every creation that leaves our kitchen is a testament to<br/> 
     our dedication to excellence and our unwavering<br/> 
     passion for the art of pastry making. */}
    
    <h1>Our Values</h1>
    <p>Quality is at the heart of everything we do.<br/> 
    Community is our cornerstone.<br/> 
    Innovation drives us forward.<br/> 
    <br/>
    Thank you <br/>for choosing Pees Pastry.<br/> 
    {/* We're honored to be a part of your moments,<br/> big and small, and we look forward to<br/> serving you for generations to come. */}</p>
    </div>
     
        </div>
  )
}

export default About;