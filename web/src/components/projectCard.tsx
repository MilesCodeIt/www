import { Component } from "react";

interface cardProps {
  options: any[];
}

/*<div className="page-content">
                <ProjectCard name="OneTwoTrie" description="A recycling app to know where you put your waste in france" link="invertime.ml"/>
              </div>*/

export default class ProjectCard extends Component<cardProps, {}> {
  listItem = this.props.options.map((el: any) => {
    return (
      <div className="card" key={el.name}>
        <div className="cardContent">
          <h2 className="title">{el.name}</h2>
          <p className="copy">{el.description}</p>
          <a className="btn" href={"https://" + el.link}>
            see the website
          </a>
        </div>
      </div>
    );
  });

  render() {
    return <div className="page-content">{this.listItem}</div>;
  }
}
