import styles from './Comment.module.css'
import { Avatar } from './Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      {/*passo a propriedade hasborder como false para selecionar qual classe ele pertence no css module do avatar}{*/}
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/105247533?v=4' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Paiva Chaves</strong>
              {/*}o title aparece ao pausar o mouse em cima do elemento{*/}
              <time title="28 de Janeiro as 11:08h" dateTime="28-01-2024 11:08:30">Publicado ha 30min</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />{/*}Alterei o tamanho padrao do icone importado, posso ver na plataforma quais
              outras alteracoes podem ser feitas{*/}
            </button>
          </header>

          <p>Teste conteudo comentario</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}