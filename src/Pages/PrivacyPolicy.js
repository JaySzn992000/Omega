import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {

return (

<div>

<Navbar></Navbar>

<div className="privacy_flex_">
<div>
<h1>Privacy Policy</h1>

<p>
{" "}
Omega Watches Private Limited 
(“Omega”, “We”, “Our”) respects your privacy and 
is committed to protecting your personal information. 
This Privacy Policy explains how we collect, use, 
and safeguard your data when you visit or make a 
purchase from Omega.vercel.app.
</p>
</div>
</div>

<div className="privacy_flex_tw">

<div>
<h4 className="links_sits">SCOPE AND POLICY APPLICABILITY</h4>
<p>

By using our website, you agree to the terms of this policy. 
We may collect details such as your name, email, phone number, 
address, and payment information to process your orders and improve 
our services. We may also collect non-personal details like your IP 
address or device type to enhance your browsing experience.
Your data is completely safe with us — we do not sell or rent your 
personal information. It is shared only with trusted service 
providers, such as delivery partners or payment gateways, to ensure 
your order is completed securely. All transactions are processed 
through secure, verified, and encrypted channels to protect your privacy.
</p>
</div>

</div>

{/*  */}

<Header></Header>

</div>

);

};

export default PrivacyPolicy;
