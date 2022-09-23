import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Content, Footer, Middle, PerfilContainer, Top } from "./styles";
import { faBuilding, faUsers, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface User {
  user: {
    name: string;
    nick: string;
    avatar: string;
    github_url: string;
    followers: number;
    company: string;
    bio: string;
  }
}


export function Profile({ user }: User) {
  return (
    <PerfilContainer>
        <img src={user.avatar} alt="" />

        <Content className="about">
          <Top>
            <strong>{user.name}</strong>
            <Link to={user.github_url}>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </Top>

          <Middle>{user.bio}</Middle>

          <Footer>
            {user.name && (
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {user.name}
              </span>
            )}

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
      </PerfilContainer>
  )
}
