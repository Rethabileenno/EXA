import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
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
                {/* Slide images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                {/* Add more images as needed */}
            </div>
            <div className="column2">
                {/* Image description */}
                <h1>Cakes:</h1>
                <p>This is a description of the images.</p>
            </div>
        </div>
      
    </div>

    <br/>   <br/>
    <div className="rows">
        <div className="columns">
            <div className="column2">
                {/* Image description */}
                <h1> Personalised Muffins:</h1>
                <p>This is a description of the images.</p>
            </div>
            <div className="column1">

                {/* Slide images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                {/* Add more images as needed */}
                
            </div>
        </div>
        
    </div>
    <br/>   <br/>
    <div className="rows">
        <div className="columns">
            <div className="column1">
                {/* Slide images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                {/* Add more images as needed */}
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

                {/* Slide images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                {/* Add more images as needed */}
                
            </div>
        </div>
        
    </div>
    <br/>   <br/>
    <div className="rows">
        <div className="columns">
            <div className="column1">
                {/* Slide images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                {/* Add more images as needed */}
            </div>
            <div className="column2">
                {/* Image description */}
                <h1>Tarts and Pies:</h1>
                <p>This is a description of the images.</p>
            </div>
        </div>
      
    </div>
    
   
    </div>
     
        </div>
  )
}

export default Menu