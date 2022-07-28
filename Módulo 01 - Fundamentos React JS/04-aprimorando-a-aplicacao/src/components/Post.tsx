import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author {
   name: string;
   role: string;
   avatarUrl: string;
}

interface Content {
   type: 'paragraph' | 'link';
   content: string;
}

interface PostProps {
   author: Author;
   content: Content[];
   publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps) {
   const [newCommentText, setNewCommentText] = useState('');
   const [comments, setComments] = useState([
      'Post muito bacana, hein?',
   ]);

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
   });
  
   function handleSubmitComment(event: FormEvent) {
      event.preventDefault();

      setComments([...comments, newCommentText]);
      setNewCommentText('');
   }

   function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
   }

   function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('Esse campo é obrigatório!');
   }

   function deleteComment(commentToDelete: string){
      const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
      setComments(commentsWithoutDeletedOne);
   }

   const isNewCommentEmpty = newCommentText.length === 0;

   return (
   <article className={styles.post}>
      <header>
         <div className={styles.author}>
            <Avatar src="https://github.com/gustavo-sorati.png" />

            <div className={styles.authorInfo}>
               <strong>{author.name}</strong>
               <span>{author.role}</span>
            </div>
         </div>

         <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
         {content.map(line => {
            if(line.type === 'paragraph') {
               return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link') {
               return <p key={line.content}><a href="#">{line.content}</a></p>
            }
         })}
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmitComment}>
         <strong>Deixe seu feedback</strong>

         <textarea
            name="comment"
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
         />

         <footer className={styles.footer}>
            <button 
               type='submit'
               disabled={isNewCommentEmpty}
            >
               Publicar
            </button>
            
         </footer>
      </form>

      <div className={styles.commentList}>
         {comments.map(comment => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
         })}
      </div>
   </article>
   )
}

