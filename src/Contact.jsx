// Importing necessary libraries and components
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

// Contact component
const Contact = () => {
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
                        <li><Link to="/"><h2>Home</h2></Link></li>     
                        <li><Link to="/Menu"><h2>Menu</h2></Link></li>   
                        <li><Link to="/about"><h2>About</h2></Link></li>     
                        <li><a href="#contact"><h2>Contact</h2></a></li>
                    </ul>
                </nav>
                
                {/* Contact information */}
                <h1>Contact Us</h1>
                <p>For any inquiries, please contact us at:</p>
                <p>Phone: 123-456-7890</p>

                {/* Social media links */}
                <div className='contain'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>

                {/* Contact form */}
                <form className="custom-form">
                    {/* Form fields */}
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Surname:
                        <input type="text" name="surname" />
                    </label>
                    <label>
                        Number:
                        <input type="tel" name="number" />
                    </label>
                    <label>
                        Menu:
                        <select name="menu">
                            <option value="menu0"> </option>
                            <option value="menu1">Cakes</option>
                            <option value="menu2">Muffins</option>
                            <option value="menu4">Scones</option>
                            <option value="menu5">Croissants</option>
                            <option value="menu6">Tart</option>
                        </select>
                    </label>
                    <label>
                        Flavors:
                        <select name="flavors">
                            <option value="flavor1"> </option>
                            <option value="flavor2">Chocolate</option>
                            <option value="flavor3">Almond </option>
                            <option value="flavor3">Ham and Cheese </option>
                            <option value="flavor4">Pain au Chocolat</option>
                            <option value="flavor5">Red Velvet</option>
                            <option value="flavor6">Vanilla</option>
                            <option value="flavor7">Strawberry</option>
                            <option value="flavor8">Carrot</option>
                            <option value="flavor9">Lemon</option>
                            <option value="flavor10">Apple</option>
                            <option value="flavor11">Blueberry</option>
                            <option value="flavor12">Raspberry</option>
                            <option value="flavor13">Banana</option>
                            <option value="flavor14">Pecan</option>
                            <option value="flavor15">Cinannon</option>
                        </select>
                    </label>
                    <label>
                        Collection Date:
                        <input type="date" name="collectionDate" />
                    </label>
                    <label>
                        Collection Time:
                        <input type="time" name="collectionTime" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <label>
                        <input type="checkbox" name="terms" />
                        I agree to the terms and conditions
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

// Exporting the Contact component
export default Contact;