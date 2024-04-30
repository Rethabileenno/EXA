// Importing necessary libraries and components
import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Menu.css';
// Importing images
import image1 from './Assets/IMG_7755.jpg';
import image2 from './Assets/IMG_7756.jpg';
import image3 from './Assets/IMG_7757.jpg';
import image4 from './Assets/IMG_7759.jpg';
import image5 from './Assets/IMG_7760.jpg';

import image6 from './Assets/IMG_7761.jpg';
import image7 from './Assets/IMG_7762.jpg';
import image8 from './Assets/IMG_7763.jpg';
import image9 from './Assets/IMG_7764.jpg'; 
import image10 from './Assets/IMG_7765.jpg';

import image11 from './Assets/IMG_7766.jpg';
import image12 from './Assets/IMG_7767.jpg';
import image13 from './Assets/IMG_7768.jpg';
import image14 from './Assets/IMG_7769.jpg';
import image15 from './Assets/IMG_7771.jpg';

import image16 from './Assets/IMG_7772.jpg';
import image17 from './Assets/IMG_7773.jpg';
import image18 from './Assets/IMG_7774.jpg';
import image19 from './Assets/IMG_7775.jpg';
import image20 from './Assets/IMG_7775.jpg';

import image21 from './Assets/IMG_7779.jpg';
import image22 from './Assets/IMG_7780.jpg';
import image23 from './Assets/IMG_7781.jpg';
import image24 from './Assets/IMG_7782.jpg';
import image25 from './Assets/IMG_7783.jpg';


// Menu component
const Menu = () => {
  return (
    <div className="body">


    <div className="hero">
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    <br/>   <br/><br/>  <br/>  <br/>  <br/> 
    {/* // Navigation bar */}
    
    <nav className="navbar">
            <ul>
            <li><Link to="/"><h2>Home</h2></Link></li>     
              <li><a href="#services"><h2>Menu</h2></a></li>
              <li><Link to="/about"><h2>About</h2></Link></li> 
              <li><Link to="/contact"><h2>Contact</h2></Link></li>     
            </ul>
          </nav>
    <br/>
    {/* // Menu title and description */}

      <h1>Our Menu </h1>
      <p>At Pees~Pastry, <br/>  we're here to cater to all your cravings and occasions, <br/>  whether it's a typical day or a special event.  <br/> From weddings to birthdays, and from baby showers to graduations, <br/>  we have something for everyone, young and old alike..</p>
          
      {/* // Carousel and description for each category of items */}

    <div className="rows">
        <div className="columns">
            <div className="column1">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={image1} alt="1" />
                    </div>
                    <div>
                        <img src={image2} alt="2" />
                    </div>
                    <div>
                        <img src={image3} alt="3" />
                    </div>
                    <div>
                        <img src={image4} alt="4" />
                    </div>
                    <div>
                        <img src={image5} alt="4" />
                    </div>
                </Carousel>
            </div>
            <div className="column2">
               
                <h1>Cakes:</h1>
                <p> Our Flvours</p>
                Red Velvet Cake,
                  Chocolate Fudge Cake,
                  Carrot Cake with Cream Cheese Frosting,
                  Vanilla Bean Cake with Buttercream Frosting,
                  Lemon Drizzle Cake
                  <br/>    <br/>
                  Price range:R500-1500
               
            </div>
        </div>
      
    </div>

    <br/>   <br/> 
    <div className="rows"></div>
    <div className="rows"></div>
    <div className="rows">
        <div className="columns">
            <div className="column2">
           
                <h1>Muffins:</h1>
                <p>Our Flvours</p>
                Blueberry Muffins,
                  Banana Nut Muffins,
                  Double Chocolate Chip Muffins,
                  Cranberry Orange Muffins,
                  Apple Cinnamon Muffins,

                  <br/>    <br/>
                  Price range:R45-500
            </div>
            <div className="column1">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={image6} alt="1" />
                    </div>
                    <div>
                        <img src={image7} alt="2" />
                    </div>
                    <div>
                        <img src={image8} alt="3" />
                    </div>
                    <div>
                        <img src={image9} alt="4" />
                    </div>
                    <div>
                        <img src={image10} alt="4" />
                    </div>
                   
                </Carousel>
                
            </div>
        </div>
        
    </div>
    <br/>   <br/> 
    <div className="rows">
        <div className="columns">
            <div className="column1">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={image11} alt="1" />
                    </div>
                    <div>
                        <img src={image12} alt="2" />
                    </div>
                    <div>
                        <img src={image13} alt="3" />
                    </div>
                    <div>
                        <img src={image14} alt="4" />
                    </div>
                    <div>
                        <img src={image15} alt="4" />
                    </div>
                </Carousel>
            </div>
            <div className="column2">
      
                <h1>Croissants:</h1>
                <p>Our Favours</p>
                Classic Butter Croissant,
                  Chocolate Croissant (Pain au Chocolat),
                  Almond Croissant (Croissant aux Amandes),
                  Ham and Cheese Croissant
                  <br/>    <br/>
                  Price range:R250-600
            </div>
        </div>
      
    </div>
    <br/>   <br/> 
    <div className="rows">
        <div className="columns">
            <div className="column2">
          
                <h1>Scones:</h1>
                <p>Our Flavours</p>
                Plain Scones,
                Blueberry Scones,
                Cranberry Orange Scones,
                Chocolate Chip Scones,
                Lemon Poppy Seed Scones
                <br/>    <br/>
                  Price range:R150-500
            </div>
            <div className="column1">

            <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={image16} alt="1" />
                    </div>
                    <div>
                        <img src={image17} alt="2" />
                    </div>
                    <div>
                        <img src={image18} alt="3" />
                    </div>
                    <div>
                        <img src={image19} alt="4" />
                    <div>
                        <img src={image20} alt="4" />
                    </div>
                    </div>
                </Carousel>
                
            </div>
        </div>
        
    </div>
    <br/>   <br/> 
    <div className="rows">
        <div className="columns">
            <div className="column1">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={image21} alt="1" />
                    </div>
                    <div>
                        <img src={image22} alt="2" />
                    </div>
                    <div>
                        <img src={image23} alt="3" />
                    </div>
                    <div>
                        <img src={image24} alt="4" />
                    </div>
                    <div>
                        <img src={image25} alt="4" />
                    </div>
                </Carousel>
            </div>
            <div className="column2">
             
                <h1>Tarts:</h1>
                <p>Our Flavours</p>
                Apple Tart,
                Pumpkin Tart,
                Lemon Tart,
                Chocolate Chip Tart,
                Lemon Poppy Seed Tart
                <br/>    <br/>
                  Price range:R150-350

            </div>
        </div>
      
    </div>
    <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/>     <br/>   <br/> 
    <br/>   <br/> 
    







    
   
    </div>
     
        </div>
  )
}

export default Menu