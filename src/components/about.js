import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.jpg";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Helmet>
<title>About Us | Pickle - Authentic Handcrafted Pickles</title>
<meta
name="description"
content="Discover the story behind Pickle - your go-to destination for handcrafted, traditional Indian pickles made with fresh ingredients and no preservatives."
/>
<meta
name="keywords"
content="Handmade Pickles, Traditional Indian Pickles, Desi Achar, Homemade Pickle, Authentic Pickles, Mango Pickle, Lemon Pickle"
/>
</Helmet>

{/*  */}

<Navbar></Navbar>

<main className="about_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutPickle}></img>

<section>

<h1>Fall Watch Trends & Autumn Style Collection</h1>
<h2>Omega - Celebrating the Timeless You!</h2>
<p>
{" "}
At Omega, we believe that every individual deserves 
to shine in their own unique way. Our passion lies in 
crafting exquisite timepieces that celebrate confidence, 
precision, and individuality. Each watch is designed to 
complement your style and elevate your everyday elegance.
Our vision is to bring you premium-quality luxury watches at 
the best value, blending timeless craftsmanship with modern 
innovation. From classic designs to bold chronographs, 
from everyday wear to exclusive editions — Omega offers a 
wide collection that suits every personality and occasion.
</p>
</section>

</main>


{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
