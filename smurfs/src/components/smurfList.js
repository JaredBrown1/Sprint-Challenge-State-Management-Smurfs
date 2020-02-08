import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const SmurfList = props => {
  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurf.map(smurf => (
          <div>
            Smurf here
            <h3>{smurf.name}</h3>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapStateToProps, { getData })(SmurfList);
