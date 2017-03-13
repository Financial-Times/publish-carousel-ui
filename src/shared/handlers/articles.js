import React from "react";

import Header from '../components/header';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        Article Dashboard
      </div>
    )
  }
}
