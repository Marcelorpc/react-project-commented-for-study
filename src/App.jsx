import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


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

        <div>
          <Post />
          <Post />
        </div>
      </main>
    </div>
  )
}

export default App