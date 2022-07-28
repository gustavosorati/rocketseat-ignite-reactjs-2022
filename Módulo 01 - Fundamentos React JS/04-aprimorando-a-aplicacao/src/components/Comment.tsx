import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
   content: string;
   onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment(){
      onDeleteComment(content)
   }

   function handleLikeComment() {
      setLikeCount((state) => {
         return state + 1;
      });
   }

   return (
      <div className={styles.content}>
         <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Gustavo Sorati</strong>
                     <time title="18 de julho de 2022 às 03:00 "dateTime='2022-07-18 00:03:00'>Cerca de 1h atrás</time>
                  </div>

                  <button 
                     title="Deletar comentário"
                     onClick={handleDeleteComment}
                  >
                     <Trash size={24}/>
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button
                  onClick={handleLikeComment}
               >
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   );
}
