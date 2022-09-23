import { Link, useNavigate } from "react-router-dom";
import { Footer, PerfilContainer, Title } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faArrowUpRightFromSquare, faChevronLeft, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from "date-fns";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface TitleProps {
  url_post: string;
  comments: string;
  title: string;
  // nick: string;
  created_at: string;
}

export function PostHeader(post: TitleProps) {
  const navigate = useNavigate();

  return (
    <PerfilContainer className="xxx">
        <header>
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </button>

          <Link to={post.url_post} target="_blank">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>

        <Title>{post.title}</Title>

        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            gustavosorati
          </span>

            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 5 dias
            </span>


          <span>
            <FontAwesomeIcon icon={faComment} />
            0 comentários
          </span>
        </Footer>
    </PerfilContainer>
  )
}
