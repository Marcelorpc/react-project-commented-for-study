import styles from './Avatar.module.css'

//usei desestruturacao para passar um valor padrao no avatar, no qual no lugar da propriedade, eu utilizo um objeto e especifico o que irei receber
//Ao passar uma propriedade no react, do tipo booleana, caso seja true, basta passar o nome da propriedade. So e necessario especificar caso deseje passar false
export function Avatar({hasBorder = true, src}) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} //operador ternario para definir qual estilo aplicar
      src={src} //Passo a src de forma dinamica, onde a src e passada como parametro da funcao
    />
  )
}