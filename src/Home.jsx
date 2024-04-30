// Importing necessary libraries and components
import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from './Assets/IMG_7757.jpg';
import image2 from './Assets/IMG_7765.jpg';
import image3 from './Assets/IMG_7771.jpg';
import image4 from './Assets/IMG_7775.jpg';
import image5 from './Assets/IMG_7783.jpg';
import './App.css';

// Home component
const Home = () => {
    return (
        <div className="body">
            <div className="hero">
            <br/>   <br/>
<br/> <br/> <br/> <br/> 
 <br/>   <br/>
<br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/> 

                {/* Navigation bar */}
                <nav className="navbar">
                    <ul>
                        <li><a href="#home"><h2>Home</h2></a></li>
                        <li><Link to="/Menu"><h2>Menu</h2></Link></li>     
                        <li><Link to="/about"><h2>About</h2></Link></li>   
                        <li><Link to="/contact"><h2>Contact</h2></Link></li>     
                    </ul>
                </nav>

                {/* Welcome message */}
                <h1>Welcome to Pees~Pastry</h1>
                <p>where every bite tells a story of tradition, passion, and craftsmanship</p>

                {/* Carousel for images */}
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
                                    <img src={image5} alt="5" />
                                </div>
                            </Carousel>
                        </div>

                        {/* Menu items */}
                        <div className="column2">
                            <h1>On Our Menu</h1>
                            <p>CAKES, MUFFINS, CROISSANTS, SCONES, TARTS</p>
                        </div>
                    </div>
                </div>
                <br/>   <br/>
                {/* Buttons for navigation */}
                <div className="button-container">
                    <Link to="/Menu">
                        <button className="custom-button">View Menu </button>
                    </Link>
                    <Link to="/contact">
                        <button className="custom-button">Order Now</button>
                    </Link>
                </div>  
                <br/>   <br/>
<br/> <br/> <br/> <br/> 
 <br/>   <br/>

            </div>
            
        </div>
        
    )
}

// Exporting the Home component
export default Home;