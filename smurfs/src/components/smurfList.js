import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import Smurf from "./smurf";

const SmurfList = props => {
  //   useEffect(() => {
  //     props.getData();
  //   }, []);

  const displaySmurfs = smurfs => {
    return smurfs.map(res => <Smurf smurf={res} />);
  };

  return (
    <div>
      {displaySmurfs(props.smurf)}
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  isFetching: state.isFetching,
  error: state.error
});

export default connect(mapStateToProps, { getData })(SmurfList);
