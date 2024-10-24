import React from "react";
import { Link, useParams } from "react-router-dom";
import "./git_details_styles.css";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatar_url: string;
  type: string;
}

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then(setMember);
  }, []);

  return (
    <div className="detail-member-container">
      {member ? (
        <>
          <Link to="/github_members">Volver</Link>
          <h1>{id}</h1>
          <img src={member.avatar_url} />
          <p>
            <b>id:</b> {member.id}
          </p>
          <p>
            <b>login:</b>
            {member.login}
          </p>
          <p>
            <b>name:</b>
            {member.name}
          </p>
          <p>
            <b>company:</b>
            {member.company}
          </p>
          <p>
            <b>bio:</b>
            {member.bio}
          </p>
          <p>
            <b>type:</b>
            {member.type}
          </p>
        </>
      ) : (
        <h1>Loading member</h1>
      )}{" "}
    </div>
  );
};
