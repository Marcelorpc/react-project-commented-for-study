import styles from "./Post.module.css"
import { Comment } from './Comment.jsx'

import { Avatar } from "./Avatar"

//instalei o pacote date-fns e importei o format
//o formatDistanceToNow para pegar o tempo relativo da postagem ate o momento
// o set para 
import { format, formatDistanceToNow, set } from "date-fns"
//Por padrao o pacote vem em ingles, entao faco a importacao do ptBR
import ptBR from "date-fns/locale/pt-BR"

//fiz desestruturacao para receber as propriedades vindas do app
export function Post({author, publishedAt, content}) {
  //Uso o format para formatar a informacao da data de acordo com o que quero
  //posso acessar o site para ver os padroes de formatacoes possiveis
  //no final, informo que deve ser em ptBR que importei
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  //uso o formatDistanceToNow para formatar o conteudo da data
  //no ingles, o sufixo e relativo ao nosso prefixo nesse caso
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

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

        {/*}Utilizo a data que fiz o format para o title, e a data relativetoNow para o conteudo{*/}
        <time title={publishedDateFormatted} dateTime="teste">
          {publishedDateRelativeToNow}
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