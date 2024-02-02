import styles from "./Post.module.css"
import { Comment } from './Comment.jsx'

import { Avatar } from "./Avatar"

//fiz desestruturacao para receber as propriedades vindas do app
export function Post({author, publishedAt, content}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="teste" dateTime="teste">
          {publishedAt}
        </time>
      </header>
      {/*}uso o map para retornar o conteudo de acordo com o tipo dele, com a tag correta para cada caso{*/}
      <div className={styles.content}>
        {content.map(line => {
          if(line.type == 'paragraph'){
            return <p>{line.content}</p>
          } else if(line.type == 'link'){
            return <p><a>{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario!"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}