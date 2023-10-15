import Image from 'next/image'
import styles from './page.module.css'
import Layout from '../../components/Layout'
import utilStyle from '../../src/app/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>
            私はエンジニアです!!フルスタックになります!PdMにもなります!
          </p>
        </section>

        <section>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
                <div className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</div>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>2021-10-01</small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
                <div className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</div>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>2021-10-01</small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
                <div className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</div>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>2021-10-01</small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
              </Link>
              <Link href="/">
                <div className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</div>
              </Link>
              <br/>
              <small className={utilStyle.lightText}>2021-10-01</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}
