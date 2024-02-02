import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

//criei um array de posts para ser renderizado de forma dinamica
//em um projeto real, as informacoes de cada propriedade viriam dinamicamente de um banco de dados do backend
const posts = [
  {
    //o author e um objeto, pos cada autor precisa de um avatar, nome e uma area de atuacao
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/105247533?v=4',
      name: 'Marcelo Paiva',
      role: 'Web Developer',
    },
    publishedAt: '2024-01-30 16:00:00',
    //o content e um array, pos podemos ter variacoes nas informacoes, tendo mais ou menos paragrafos, links etc
    content: [
      //cada elemento do array vai ser um objeto com propriedades, indicado o tipo de informacao que vai ser 
      //recebida de o conteudo dessa informacao
      {type: 'paragraph', content: 'teste conteudo post'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ]
  },
]

//Uso a funcao App para renderizar a pagina principal, chamando os componentes que criei
//Os modulos css importados sao especificos para cada componente
//Pra criar varios componentes um abaixo do outro, eles precisam estar dentro de um componente unico, como uma div
//ao declarar uma classe para uma tag no react, em vez de class, usar className, para nao confundir com o class nativo do js
function App() {
  return (
    <div>
      <Header />
      
      <main className={styles.wrapper}>
        <Sidebar />
        {/*}uso o map para renderizar todos os posts do array, e em cada post eu passo as propriedades
        necessarias para o componente post{*/}
        <div>
          {posts.map(post => {
            return(<Post 
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />)
          })}
        </div>
      </main>
    </div>
  )
}

export default App