import Head from 'next/head'
import Featured from '../Components/Featured';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PustkStore</title>
        <meta name="description" content="Buy and read books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  );
}
