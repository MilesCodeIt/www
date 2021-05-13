import { Component } from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import menu from "../assets/img/menu.png";
import close from "../assets/img/close.png";

class Navbar extends Component {


  state = {
    imgCode: img1,
    menuToggled: false,
    icon: menu,
    iconSize: 20
  };



  changeImg(num: number) {
    if (num === 1) {
      this.setState({ imgCode: img1 });
    } else if (num === 2) {
      this.setState({ imgCode: img2 });
    } else if (num === 3) {
      this.setState({ imgCode: img3 });
    } else if (num === 4) {
      this.setState({ imgCode: img4 });
    } else if (num === 5) {
      this.setState({ imgCode: img5 });
    } else if (num === 6) {
      this.setState({ imgCode: img6 });
    }
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    if (this.state.icon === menu) {
      this.setState({ icon: close });
      this.setState({ iconSize: 20 + "px" });
    } else {
      this.setState({ icon: menu });
      this.setState({ iconSize: 30 + "px" });
    }
  }
  render() {
    return (
      <div className="navbar">
        <div className="menuToggle" onClick={() => this.toggleMenu()}>
          <img
            src={this.state.icon}
            style={{ width: this.state.iconSize }}
            alt=""
          />
        </div>
        {this.state.menuToggled && (
          <div className="navigation">
            <div className="navArea">
              <ul>
                <li>
                  <a href='#header' onMouseOver={() => this.changeImg(1)} onClick={() => this.toggleMenu()}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onMouseOver={() => this.changeImg(2)} onClick={() => this.toggleMenu()}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#projects" onMouseOver={() => this.changeImg(3)} onClick={() => this.toggleMenu()}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#pricing" onMouseOver={() => this.changeImg(4)} onClick={() => this.toggleMenu()}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="I#contactUs" onMouseOver={() => this.changeImg(5)} onClick={() => this.toggleMenu()}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="imgArea">
              <img src={this.state.imgCode} alt="back" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;