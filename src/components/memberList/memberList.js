import React from "react";

import Member from "../member/member";

const memberList = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {props.members.map((member, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-12 mb-lg-5 mb-4" key={index}>
              <Member
                i={index}
                name={member.name}
                position={member.position}
                profileURL={member.profileURL}
                deleted={() => props.deleteMember(index)}
                editted={() => props.showEditButton(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memberList;
