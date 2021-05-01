import { Component } from "react";
import ProjectCard from "./projectCard";
import PricingCard from "./pricingCard";
import ContactUs from "./contactUs";

let card = [
  {
    name: "OneTwoTrie",
    description: "A recycling app to know where you put your waste in france",
    link:"apps.vexcited.me/onetwotrie"
  },
  {
    name: "lpadder",
    description: "A recycling app to know where you put your waste in france",
    link:"invertime.ml"
  },
]

class Content extends Component {
  render() {
    return (
      <div className="page">
        <div className="header" id="header">
          <h1>Miles Code</h1>
          <hr />
          <h2>dev agency</h2>
        </div>
        <div className="content">
          <div className="about" id="about">
            <h3>About us :</h3>
            <p>
              We are 2 french student and freelancing developers. We both like
              front-end, back-end and but we have our specialties.
            </p>
          </div>
          <div className="projects" id="projects">
            <h3>Projects :</h3>
            <div className="lastProjects">
              <ProjectCard options={card}/>
            </div>
          </div>
          <div className="pricing" id="pricing">
            <h3>Pricing :</h3>
            <PricingCard />
          </div>
          <div className="contactUs" id="contactUs">
            <h3>Contact us :</h3>
            <ContactUs />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
