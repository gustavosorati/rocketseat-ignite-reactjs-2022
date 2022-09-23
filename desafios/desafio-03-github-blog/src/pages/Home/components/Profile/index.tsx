import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Content, Footer, Middle, PerfilContainer, Top } from "./styles";
import { faBuilding, faUsers, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/api";
import { Spinner } from "../../../../components/Spinner";

export interface IUser {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  company: string;
  followers: number;
}

const username = import.meta.env.VITE_GIT_USERNAME;

export function Profile() {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(async() => {
  try {
    setIsLoading(true);
    const response = await api.get(`/users/${username}`);

    setUser(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [user])

  useEffect(() => {
    getUser();
  }, []);

  return (
    <PerfilContainer>
      {isLoading ? <Spinner /> : (
        <>
          <img src={user.avatar_url} alt="" />

          <Content className="about">
            <Top>
              <strong>{user.name}</strong>
              <Link to={user.html_url}>
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </Top>

            <Middle>{user.bio}</Middle>

            <Footer>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  {user.login}
                </span>

              {user.company && (
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                  {user.company}
                </span>
              )}

              <span>
                <FontAwesomeIcon icon={faUsers} />
                {user.followers} seguidores
              </span>
            </Footer>
          </Content>
        </>
      )}
    </PerfilContainer>
  )
}
