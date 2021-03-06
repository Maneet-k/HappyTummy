import Head from 'next/head'
import Featured from '../Components/Featured';
import styles from '../styles/Home.module.css'
import BookList from '../Components/BookList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PustkStore</title>
        <meta name="description" content="Buy and read books" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <BookList/>
      <Featured/>
    </div>
  );
}
