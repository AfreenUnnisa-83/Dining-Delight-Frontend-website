import React from "react";
import AboutImg from "../Pictures/images/about-img2.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            We’re passionate about bringing you fresh, flavorful dishes made from the highest quality ingredients.
            Our chefs blend creativity with tradition, crafting a menu that reflects our love for great food. Whether you’re here for a casual meal or a special occasion, we’re dedicated to making every dining experience memorable.
            </p>
            <p>
            We’re more than just a place to eat—we’re a place to savor. 
            Our focus on quality ingredients and warm hospitality ensures a dining experience you’ll love.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
