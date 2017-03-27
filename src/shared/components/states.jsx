import React from "react";

export default ({state}) => {
  switch (state.toLowerCase()) {
  case "running":
    return (
      <span className="tag is-success space">{state.toUpperCase()}</span>
    )
  case "cooldown":
    return (
     <span className="tag is-primary space">{state.toUpperCase()}</span>
    )
  case "unhealthy":
    return (
       <span className="tag is-warning space">{state.toUpperCase()}</span>
    )
  case "stopped":
    return (
      <span className="tag is-danger space">{state.toUpperCase()}</span>
    )
  case "starting":
    return (
     <span className="tag is-light space">{state.toUpperCase()}</span>
    )
  }

  return null
};
