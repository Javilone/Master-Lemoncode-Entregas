import React from "react";
import { useInputContext } from "../../core/context/git_context/github_context";
import { useDebounce } from "../../common-app/useDebounce";

import UserList from "./git_users_list";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const GitSearch: React.FC = () => {
  const { inputValue } = useInputContext();
  /* Actualmente no ejecuta la búsqueda automática.
  Si se activa: Ajustar el tiempo a 1000.
  Para activarla ir al módulo git_input.tsx y descomentar línea 11 */
  const debouncedInputValue = useDebounce(inputValue, 200);

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  // TODO Agregar manejo de errores if (!response.ok) {throw new Error("")}
  React.useEffect(() => {
    if (debouncedInputValue) {
      fetch(`https://api.github.com/orgs/${debouncedInputValue}/members`)
        .then((response) => response.json())
        .then(setMembers);
    } else {
      setMembers([]);
    }
  }, [debouncedInputValue]);

  return <UserList members={members} />;
};
