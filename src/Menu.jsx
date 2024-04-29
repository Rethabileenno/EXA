import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Menu.css';

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



const Menu = () => {
  return (
    <div className="body">


    <div className="hero">
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    <br/>   <br/>
    <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 
    <br/>   <br/>

    
    <nav className="navbar">
            <ul>
            <li><Link to="/"><h2>Home</h2></Link></li>     
              <li><a href="#services"><h2>Menu</h2></a></li>
              <li><Link to="/about"><h2>About</h2></Link></li>     
             <li><a href="#contact"><h2>Contact</h2></a></li>
            </ul>
          </nav>
    <br/>
      <h1>Our Menu </h1>
          
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
                {/* Image description */}
                <h1>Cakes:</h1>
                <p> Our Flvours</p>
                Red Velvet Cake,
                  Chocolate Fudge Cake,
                  Carrot Cake with Cream Cheese Frosting,
                  Vanilla Bean Cake with Buttercream Frosting,
                  Lemon Drizzle Cake
               
            </div>
        </div>
      
    </div>

    <br/>   <br/> 
    <div className="rows"></div>
    <div className="rows"></div>
    <div className="rows">
        <div className="columns">
            <div className="column2">
                {/* Image description */}
                <h1>Muffins:</h1>
                <p>This is a description of the images.</p>
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
                {/* Image description */}
                <h1>Croissants:</h1>
                <p>This is a description of the images.</p>
            </div>
        </div>
      
    </div>
    <br/>   <br/> 
    <div className="rows">
        <div className="columns">
            <div className="column2">
                {/* Image description */}
                <h1>Scones:</h1>
                <p>This is a description of the images.</p>
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
                {/* Image description */}
                <h1>Tarts:</h1>
                <p>This is a description of the images.</p>
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