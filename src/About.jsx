import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';



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
            <li><Link to="/"><h2>Home</h2></Link></li>     
            <li><Link to="/Menu"><h2>Menu</h2></Link></li>     
              <li><a href="#about"><h2>About</h2></a></li>
              <li><Link to="/contact"><h2>Contact</h2></Link></li>     
            </ul>
          </nav>
    <br/>

      <p>Pees~Pasrty  where every bite tells a story <br/> of tradition, passion, and craftsmanship</p>
      <br/>
  
      <img src="https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2021/05/10/growing-demand-for-better-for-you-bakery/12434244-1-eng-GB/Growing-demand-for-better-for-you-bakery.jpg" alt="bakery" width={400} height={200} />
    
       
          <h1>Our Story</h1>
      <p>Pees~Pastry began its journey in the quaint town of Millbrook,<br/> 
      where the aroma of freshly baked goods danced through the streets.<br/> 
      Founded by the visionary baker, Mrs. Margaret Pees, in 1978<br/>, 
      our bakery was built upon a foundation of love for<br/>
       creating delectable treats that brought joy to the community.<br/>
        With recipes passed down through generations and a commitment<br/> to quality ingredients, Pees~Pastry quickly<br/>
         became a beloved establishment, cherished by locals and visitors alike.</p>
    
    <h1> Our Mission</h1>
    <p>At Pees~Pastry, our mission is simple:<br/>
     to delight our customers with irresistible pastries that <br/>
     evoke memories of home and warmth. <br/>
     We strive to uphold the rich traditions of baking <br/>
     while continuously innovating to surprise and delight our patrons. <br/></p>
   
    
    <h1>Our Values</h1>
    <p>Quality is at the heart of everything we do.<br/> 
    Community is our cornerstone.<br/> 
    Innovation drives us forward.<br/> 
    <br/>
    Thank you <br/>for choosing Pees~Pastry.<br/> </p>
   
    <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/> 
    <br/>   <br/> 

    </div>
     
     
        </div>

  )
}

export default About;