import React from "react";
import {Link} from "react-router"

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title !== undefined ? `${this.props.title}` : '';

    return (
      <div className="clearfix header">
        <Link to="/">
          <h1>UPP Carousel {title}</h1>
        </Link>
      </div>
    );
  }
}
