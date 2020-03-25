import React from "react";

const AddMember = props => {
  let CTAButton = (
    <button
      className="btn btn-primary px-4"
      onClick={() => props.newMemberAdded(props.memberDetails)}
    >
      Add
    </button>
  );

  if (props.editable === true) {
    CTAButton = (
      <button
        className="btn btn-secondary px-4"
        onClick={() => props.updateMember(props.memberDetails)}
      >
        Update
      </button>
    );
  }

  return (
    <div className="container my-lg-5 my-3">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">
          <div className="WrapperShadow px-4 bg-white">
            <h3 className="text-center my-3 formHeading">Crud App</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="memberName"
                placeholder="John"
                onChange={event => props.updateInputValue(event, "name")}
                value={props.memberDetails.name}
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                id="memberPosition"
                placeholder="CEO"
                onChange={event => props.updateInputValue(event, "position")}
                value={props.memberDetails.position}
              />
            </div>
            <div className="form-group">
              <label>Profile URL</label>
              <input
                type="text"
                className="form-control"
                id="memberURL"
                placeholder="https://www.linedin.com"
                onChange={event => props.updateInputValue(event, "profileURL")}
                value={props.memberDetails.profileURL}
              />
            </div>
            <div className="form-group">{CTAButton}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
