import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image';
export default function contact() {
  return (
    <Layout>
        <div class="circle"></div>
      <div className="container">
        <div className="card">
          <h1 className="title-card">Contact Us</h1>
          <p>Get professional services help today...</p>
          <h2>
            Contact us today to learn more about how we can help your business
            succeed in the digital world
          </h2>
          <h1 className="title-icons">Contact Info</h1>
          <div className="icons">
            <div className="icon">
              <StaticImage src="../assets/images/phone.svg" />
              <h3>(+968) 9911 1277 </h3>
            </div>
            <div className="icon">
              <StaticImage src="../assets/images/email.svg" />
              <h3>info@media-corner.net</h3>
            </div>
            <div className="icon">
              <StaticImage src="../assets/images/location.svg" />
              <h3>Al-Seeb , Muscat, Oman</h3>
            </div>
            <div className="icon">
              <StaticImage src="../assets/images/time.svg" />
              <h3>All week days 8 AM - 8 PM</h3>
            </div>
          </div>
        </div>
        <div className="form">
          <form>
            <h1>Send Us An Email</h1>
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Please type your name here"
            />
            <label for="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="(+968) 123 123 1234"
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Hello@domain.com"
            />
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message here...."
            ></textarea>
            <button type="submit">
              <span>SEND EMAIL</span>
              <StaticImage src="../assets/images/Vector.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
