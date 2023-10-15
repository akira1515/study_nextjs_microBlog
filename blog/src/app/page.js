import Image from 'next/image'
import styles from './page.module.css'
import Layout from '../../components/Layout'
import utilStyle from '../../src/app/utils.module.css'
import Link from 'next/link'
import { getPostsData } from './lib/post'

// SSGの場合
export async function generateStaticParams() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>
            私はエンジニアです!!フルスタックになります!PdMにもなります!
          </p>
        </section>

        <section>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/posts/${id}`}>
                <div className={utilStyle.boldText}>{title}</div>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>{date}</small>
            </article>
            ))}
          </div>
        </section>
      </Layout>
  )
}
