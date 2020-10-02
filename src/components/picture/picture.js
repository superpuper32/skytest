import React from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions/index.js";

// const mapStateToProps = (state) => {
//   const {
//     tasksFetchingState,
//     tasks: { byId, allIds },
//   } = state;
//   const tasks = allIds.map((id) => byId[id]);
//   return { tasks, tasksFetchingState };
// };

// const actionCreators = {
//   removeTask: actions.removeTask,
// };

export default class Picture extends React.Component {
  //   handleRemoveTask = (id) => () => {
  //     const { removeTask } = this.props;
  //     removeTask({ id });
  //   };

  render() {
    // const { tasks, tasksFetchingState } = this.props;

    // if (tasksFetchingState === "requested") {
    //   return (
    //     <div className="spinner-border m-3" role="status">
    //       <span className="sr-only">Loading...</span>
    //     </div>
    //   );
    // }
    // if (tasksFetchingState === "failed") {
    //   return <span>Please, reload page!</span>;
    // }

    // if (tasks.length === 0) {
    //   return null;
    // }

    return (
      <div>
        <img
          src="https://media2.giphy.com/media/jIeHN8CMVi2GRBlvbE/giphy.gif?cid=75f265f1fcdc16d93e9ee3b10ab630df095d5e5de377a9ce&rid=giphy.gif"
          alt="UKTVGIFBANK"
        />
      </div>
    );
  }
}

// export default connect(mapStateToProps, actionCreators)(Picture);
