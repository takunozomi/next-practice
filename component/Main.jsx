import styles from '../styles/Home.module.css'
import { Links } from '../component/Links'
import { Headline } from '../component/Headline'

export function Main(props) {
  const {page} = props;
  return (
      <main className={styles.main}>
        <Headline page={page} />
        <Links />  
      </main>
  )
}
