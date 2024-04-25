import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <React.Fragment>
      <div class="bold">{props.user}</div>
      <div>
        {props.body}
        {props.issue &&
          <div class="bold">
            <hr class="issueDivider"/>
            {props.issue}
            <br></br>
            <br></br>
          </div>
        }
      </div>
      <hr/>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  user: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Tweet;