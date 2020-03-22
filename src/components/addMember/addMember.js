import React, { Component } from "react";

export default class AddMember extends Component {
  render() {
    let CTAButton = (
      <button
        className="btn btn-primary px-4"
        onClick={() => this.props.newMemberAdded(this.props.memberDetails)}
      >
        Add
      </button>
    );

    if (this.props.editable === true) {
      CTAButton = (
        <button
          className="btn btn-secondary px-4"
          onClick={() =>
            this.props.updateMember(this.props.memberDetails)
          }
        >
          Update
        </button>
      );
    }

    return (
      <div className="container my-5">
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
                  onChange={event => this.props.updateInputValue(event, "name")}
                  value={this.props.memberDetails.name}
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="memberPosition"
                  placeholder="CEO"
                  onChange={event =>
                    this.props.updateInputValue(event, "position")
                  }
                  value={this.props.memberDetails.position}
                />
              </div>
              <div className="form-group">
                <label>Profile URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="memberURL"
                  placeholder="https://www.linedin.com"
                  onChange={event =>
                    this.props.updateInputValue(event, "profileURL")
                  }
                  value={this.props.memberDetails.profileURL}
                />
              </div>
              <div className="form-group">{CTAButton}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
