import React from "react";
import { Link } from "react-router-dom";
import { useInputContext } from "../../core/context/github_page_context/github_context";
import { useDebounce } from "../../common-app/useDebounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const MemberSearch: React.FC = () => {
  const { inputValue } = useInputContext();
  const debouncedInputValue = useDebounce(inputValue, 200); // Si hay búsqueda automática, ajustar el tiempo a 1000
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    if (debouncedInputValue) {
      fetch(`https://api.github.com/orgs/${debouncedInputValue}/members`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`La organización "${debouncedInputValue}" no existe`);
          }
          return response.json();
        })
        .then(setMembers)
        .catch((error) => console.error(error));
    } else {
      setMembers([]);
    }
  }, [debouncedInputValue]);

  return (
    <div className="list-user-list-container">
      <div className="list-header">Avatar</div>
      <div className="list-header">Id</div>
      <div className="list-header">Name</div>
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
