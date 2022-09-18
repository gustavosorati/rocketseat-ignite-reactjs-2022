import { Link } from "react-router-dom";
import { About, HomeContainer, PerfilContainer } from "./styles";
import userImg from '../../assets/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SearchBar } from "./components/SearchBar";
import { Post } from "./components/Posts";



export function Home() {
  return (
    <HomeContainer className="container">
      <PerfilContainer>
        <img src={userImg} alt="" />

        <About className="about">
          <div>
            <strong>Cameron Williamson</strong>
            <Link to="/">github</Link>
          </div>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

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
        </About>
      </PerfilContainer>

      <SearchBar />

      <section>
          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />

          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />

          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />

          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />

          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />

          <Post
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />
      </section>
    </HomeContainer>
  )
}
