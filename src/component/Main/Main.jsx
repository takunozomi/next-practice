import styles from "../../styles/Home.module.css";
import { Links } from "src/component/Links/Links";
import { Headline } from "src/component/Headline/Headline";

export function Main(props) {
  const { page } = props;
  return (
    <main className={styles.main}>
      <Headline page={page} />
      <Links />
    </main>
  );
}
