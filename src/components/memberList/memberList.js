import React from "react";

import "./memberList.css";

const memberList = props => {
  return (
    <div className="WrapperShadow w-100 text-center d-inline-block px-4 py-5">
      <h4 className="memberNameText mb-3">{props.name}</h4>
      <span className="memberPositionText d-block mb-3">{props.position}</span>
      <a
        className="d-block text-decoration-none mb-3"
        target="_blank"
        rel="noopener noreferrer"
        href={props.profileURL}
      >
        <span className="memberPositionText d-inline-block">
          {props.profileURL}
        </span>
      </a>
      <button className="btn btn-primary mr-3" onClick={props.showEditButton}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={props.deleted}>
        Delete
      </button>
    </div>
  );
};

export default memberList;
