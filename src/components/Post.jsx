import styles from "./Post.module.css"
import { Comment } from './Comment.jsx'

import { Avatar } from "./Avatar"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/105247533?v=4" />
          
          <div className={styles.authorInfo}>
            <strong>Marcelo Paiva</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="teste" dateTime="teste">
          "ha 1h"
        </time>
      </header>

      <div className={styles.content}>
        <div>conteudo</div>
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