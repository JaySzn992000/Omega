import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import BottomFavcomp from "../componentsBoot/bottomFavcomp";
// import SlidCakeImg from "../Slider/CakeSlide.jpg";
import Namasyaa from "../Slider/namasyaa.jpeg";
import Contactus from "./Contactus";
import Slider from "../slider";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickles from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
import VideoSliderComponent from "../videoslider";
// import TestimonialSlider from "./Testimonial";
// import CategoryMangoes from "../Products/CategoryMangoes";
// import DeliveryBanner from "../OtherImages/DeliveryBanner.jpg";
// import CategoryChilli from "../Products/CategoryChilli";
// import CategoryMixed from "../Products/CategoryMixed";
// import Message from "./Message";


const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/ProductList')
}


return (

<div>

<Helmet>
<title>Buy Best Homemade Pickles Online | Pickles & More</title>
<meta
name="description"
content="Explore 100+ delicious homemade pickles including mango, garlic, carrot & more. Fast delivery across India."
/>
<meta
name="keywords"
content="Pickles, Homemade Achaar, Mango Pickle, Buy Pickles Online, Indian Pickles"
/>
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:title" content="Pickles & More - Authentic Homemade Pickles" />
<meta property="og:description" content="Discover tasty and hygienically packed pickles. Subscribe for updates and offers." />
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="robots" content="index, follow" />
</Helmet>

<Topnav></Topnav>
<Navbar />

<div className="Catelog_Items">

<div>
<img src="https://watches.ae/cdn/shop/files/seiko-sje101j1_1.jpg?v=1727972241&width=720" 
loading="lazy"
alt="Desi Ghee"></img>
<h4>Cutomized</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/files/seiko-sje099j1_1.jpg?v=1727972317&width=720" 
loading="lazy"
alt="Garlic"></img>
<h4>Luxury Shaps</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/files/800A-CBKRG-SS.jpg?v=1703595313&width=540" 
loading="lazy"
alt="Ginger"></img>
<h4>Premium Chrono</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/products/philip-watch-r8223216011_1.jpg?v=1690790797&width=540" 
loading="lazy"
alt="Radish"></img>
<h4>Trending Watches</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/products/philip-watch-r8223597023_1.jpg?v=1690790750&width=540" 
loading="lazy"
alt="Jackfruit"></img>
<h4>Gifts</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/products/raymond-weil-5425stc00300_1.jpg?v=1636664134&width=540" 
loading="lazy"
alt="Banana"></img>
<h4>Elite Edition</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/products/west-end-6858.10.mopgreen-h_1.jpg?v=1708604813&width=540" 
loading="lazy"
alt="Bitter"></img>
<h4>Premium</h4>
</div>

<div>
<img src="https://watches.ae/cdn/shop/products/west-end-6858.10.mopgreen-h_1.jpg?v=1708604813&width=540" 
loading="lazy"
alt="Sudh Ghee"></img>
<h4>Special Edition</h4>
</div>
</div>


<Slider />

<div className="Catelog_Items">
  <div>
    <img src="https://watches.ae/cdn/shop/files/seiko_raymond.002.jpeg?v=1614288270&width=360" loading="lazy" alt="Doctor" />
    {/* <h4>Swan pendant</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/grand-seiko_logo.jpg?v=1646288907&width=360s" loading="lazy" alt="Engineer" />
    {/* <h4>Swan pendant and brooch</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/seiko_raymond.001.jpeg?v=1614288270&width=360" loading="lazy" alt="Entrepreneur" />
    {/* <h4>Swan necklace</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/ps_logo.001_75835fb0-56dd-4c34-9051-4e06d36c4c7d.jpeg?v=1614288271&width=360" loading="lazy" alt="Blogger" />
    {/* <h4>Hyperbola necklace</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/fossil.001.jpeg?v=1614288271&width=360" loading="lazy" alt="Teacher" />
    {/* <h4>Constella necklace</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/dkny-black-logo.jpg?v=1739800304&width=360s" loading="lazy" alt="Makeup" />
    {/* <h4>Hyperbola ring</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/WestEnd_logo_200x250_ef4c10ec-39db-4abc-9774-dcd9c2406c27.jpg?v=1708933700&width=360" loading="lazy" alt="Soldier" />
    {/* <h4>Sublima pendant</h4> */}
  </div>

  <div>
    <img src="https://watches.ae/cdn/shop/files/u-boat-black-logo.jpg?v=1727801244&width=360s" loading="lazy" alt="Traveller" />
    {/* <h4>The Vienna Collection open ring</h4> */}
  </div>
</div>


<VideoSliderComponent></VideoSliderComponent>


<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={10}></Pickles>
</div>

{/*  */}


{/*  */}

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<div id="bottomFav_comp">
<BottomFavcomp />
</div>

{/*  */}

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={5}></Pickles>
</div>

<button onClick={seeAllProducts} 
className="seeLLProducts">View All</button>

{/*  */}

<Contactus></Contactus>

<a
href='https://api.whatsapp.com/send/?phone=%2B919821187225&text&type=phone_number&app_absent=0'
target="_blank"
rel="noopener noreferrer"
>
    
<img
className="whatsapp_message"
src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
alt=""
loading="lazy"
></img>

</a>

{/*  */}

<div className="Secure_ordering">
<h2>Omega - Watches
</h2>
<p>At Omega, every timepiece is crafted with 
precision and passion to celebrate the style, 
strength, and individuality of every person. 
Each watch tells a story — timeless, elegant, 
and made to make your moments unforgettable.
</p>

<img src={Namasyaa}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img>


</div>

{/* <img src={SlidCakeImg}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img> */}


{/* SlidCakeImg */}

<div className="subscribe_kk">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

<VideoSliderComponent></VideoSliderComponent>

{/* <div className="subscribe_k">

<div className="subscribe_flx">

<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/email-icon.svg" 
alt="" loading="lazy" />

<div>
<h2>Let's Stay Connected</h2>
<p>Subscribe here</p>
</div>

</div>


<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

<div className="subscribe_flx">

<input
type="email"
name="email"
placeholder="Enter your email here..."
value={formData.email}
onChange={(e) =>
setFormData({
...formData,
email: e.target.value,
message: e.target.value,
})
} required />
<button type="submit">Subscribe</button>
sss
</div>
s
</form>

</div> */}

<Header />

</div>

);

};

export default Home;
