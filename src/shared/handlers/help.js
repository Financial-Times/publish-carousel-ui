import React from "react";
import {Link} from "react-router"

import Header from '../components/header';

export default class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <ul>
          <li><Link to="metadata">Metadata</Link></li>
          <li><Link to="articles">Articles</Link></li>
        </ul>
      </div>
    )
  }
}
