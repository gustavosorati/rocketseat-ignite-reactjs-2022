import { useNavigate } from "react-router-dom";
import { Footer, PerfilContainer, Title } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from "date-fns";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Post } from "../..";
import ptBR from "date-fns/locale/pt-BR/index.js";
import { Spinner } from "../../../../components/Spinner";

interface PostHeaderProps {
  postData: Post;
  isLoading: boolean;
}

export function PostHeader({postData, isLoading}: PostHeaderProps) {
  const navigate = useNavigate();
  let formatedDate: string = '0';

  if(postData.created_at) {
    formatedDate = formatDistance(new Date(`${postData.created_at}`), new Date(), {
      addSuffix: true,
      locale: ptBR
    });
  }


  return (
    <PerfilContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <button onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </button>

            <a href={postData.html_url} target="_blank">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <Title>{postData.title}</Title>

          <Footer>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {postData.user.login}
              </span>


            <span>
               <FontAwesomeIcon icon={faCalendarDay} />
               {formatedDate}
            </span>

             <span>
               <FontAwesomeIcon icon={faComment} />
               {postData.comments} comentários
             </span>
           </Footer>
        </>
      )}
    </PerfilContainer>
  )
}
