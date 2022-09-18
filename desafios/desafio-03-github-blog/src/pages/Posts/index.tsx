import { Link } from "react-router-dom";
import { PostsContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Posts(){
  return (
    <PostsContainer className="container">
      <header>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to="/">Ver no Github</Link>
        </div>

        <strong>JavaScript data types and data structures</strong>

        <footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </span>

            <span>
              <FontAwesomeIcon icon={faUsers} />
              32 seguidores
            </span>
          </footer>
      </header>

      <p>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </p>
    </PostsContainer>
  )
}
