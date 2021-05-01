import { Component } from "react";

export default class PricingCard extends Component {
  render() {
    return (
      <div className="priceContainer">
        <div className="pricingCard">
          <div className="priceHeader">
            <h4>fullstack dev</h4>
          </div>
          <div className="priceContent">
            <ul>
              <li>design</li>
              <li>front-end</li>
              <li>back-end</li>
              <li>security</li>
            </ul>
            <p>$666666</p>
            <a href="test-uwu">Contact us</a>
          </div>
        </div>
      </div>
    );
  }
}
