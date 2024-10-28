import React from "react";
import { Link } from "react-router-dom";

// Componente que pinta los usuarios

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

interface UserListProps {
  members: Member[];
}

const UserList: React.FC<UserListProps> = ({ members }) => {
  return (
    <div className="list-user-list-container">
      <div className="list-header">Avatar</div>
      <div className="list-header">Id</div>
      <div className="list-header">Nombre</div>
      {members.map((member) => (
        <React.Fragment key={member.login}>
          <img src={member.avatar_url} alt={`${member.login}'s avatar`} />
          <span>{member.id}</span>
          <Link to={`/detail/${member.login}`}>{member.login}</Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserList;
