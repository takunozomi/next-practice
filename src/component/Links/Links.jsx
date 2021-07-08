import styles from "../../styles/Home.module.css";

const ITEMS = [
  {
    anthor: "https://nextjs.org/docs",
    title: `Documentation →`,
    describe: "Find in-depth information about Next.js features and API.",
  },
  {
    anthor: "https://nextjs.org/learn",
    title: "Learn →",
    describe: "Find in-depth information about Next.js features and API.",
  },
  {
    anthor: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    describe: "iscover and deploy boilerplate example Next.js projects.",
  },
  {
    anthor: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Documentation →",
    describe: " Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Links = () => {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a href={item.anthor} className={styles.card} key={item.anthor}>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
          </a>
        );
      })}
    </div>
  );
};
