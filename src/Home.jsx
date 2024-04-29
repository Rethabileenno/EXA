import React from 'react'
import { Link } from 'react-router-dom';

import './App.css';

const Home = () => {
  return (
    

<div className="body">


<div className="hero">
<br/>   <br/>
<br/> <br/> <br/> <br/> 
 <br/>   <br/>
{/* <br/> <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/>  */} 

<nav className="navbar">
        <ul>
        <li><a href="#home"><h2>Home</h2></a></li>
          <li><Link to="/Menu"><h2>Menu</h2></Link></li>     
          <li><Link to="/about"><h2>About</h2></Link></li>     
         <li><a href="#contact"><h2>Contact</h2></a></li>
        </ul>
      </nav>
<br/>
  <h1>Welcome to Pees~Pastry</h1>
  <p>where every bite tells a story of tradition, passion, and craftsmanship</p>
  <br/>
  {/* create image  */}
  <img src="https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2021/05/10/growing-demand-for-better-for-you-bakery/12434244-1-eng-GB/Growing-demand-for-better-for-you-bakery.jpg" alt="bakery" width={400} height={200} />

   
      


</div>
 
    </div>
  )
}

export default Home;

