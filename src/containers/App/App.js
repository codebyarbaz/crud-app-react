import React, { Component } from "react";

// Components
import AddMember from "../../components/addMember/addMember";
import MemberList from "../../components/memberList/memberList";

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
          profileURL: "https://google.com"
        },
        {
          name: "Diksha Jamwal",
          position: "CEO",
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

  deleteMember = index => {
    const members = [...this.state.members];
    members.splice(index, 1);
    this.setState({ ...this.state, members });
  };

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
        <hr className="mb-lg-5 mb-3" />
        <MemberList
          members={this.state.members}
          deleteMember={this.deleteMember}
          showEditButton={this.showEditButton}
        />
      </div>
    );
  }
}
