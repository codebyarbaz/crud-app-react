import React, { Component } from "react";

// Components
import AddMember from "../addMember/addMember";
import MemberList from "../memberList/memberList";

// Css Styles
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          name: "Arbaz Tyagi",
          position: "CEO",
          profileURL: "https://arbaztyagi.com"
        },
        {
          name: "Diksha Jamwal",
          position: "CEO",
          profileURL: "https://google.com"
        },
        {
          name: "New Boy",
          position: "DevOps",
          profileURL: "https://google.com"
        }
      ],
      editable: false,
      editableIndex: -1,
      memberDetails: {
        name: "",
        position: "",
        profileURL: ""
      }
    };
  }

  onKeyPress = (event, type) => {
    const memberDetails = { ...this.state.memberDetails };
    memberDetails[type] = event.target.value;
    this.setState({ ...this.state, memberDetails });
  };

  addNewMember = memberDetails => {
    const members = [...this.state.members];
    members.push(memberDetails);
    this.setState({
      ...this.state,
      members,
      memberDetails: {
        name: "",
        position: "",
        profileURL: ""
      }
    });
  };

  updateMember = memberDetails => {
    const members = [...this.state.members];
    members[this.state.editableIndex] = memberDetails;
    this.setState({
      ...this.state,
      members,
      editable: false,
      editableIndex: -1,
      memberDetails: {
        name: "",
        position: "",
        profileURL: ""
      }
    });
  };

  deleteMember(index) {
    const members = [...this.state.members];
    members.splice(index, 1);
    this.setState({ ...this.state, members });
  }

  showEditButton = index => {
    const memberDetails = { ...this.state.members[index] };
    this.setState({
      ...this.state,
      memberDetails,
      editable: true,
      editableIndex: index
    });
  };

  render() {
    return (
      <div>
        <AddMember
          newMemberAdded={this.addNewMember}
          updateMember={this.updateMember}
          memberDetails={this.state.memberDetails}
          editable={this.state.editable}
          updateInputValue={this.onKeyPress}
        />
        <hr className="mb-5" />
        <div className="container">
          <div className="row justify-content-center">
            {this.state.members.map((member, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12 mb-lg-5 mb-4"
                  key={index}
                >
                  <MemberList
                    i={index}
                    name={member.name}
                    position={member.position}
                    profileURL={member.profileURL}
                    deleted={() => this.deleteMember(index)}
                    editted={() => this.showEditButton(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
