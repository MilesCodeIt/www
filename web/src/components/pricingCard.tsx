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
              <hr />
              <li>front-end</li>
              <hr />
              <li>back-end</li>
              <hr />
              <li>security</li>
            </ul>
            <p className="price">$666666</p>
            <a href="test-uwu">Contact us</a>
          </div>
        </div>
      </div>
    );
  }
}
