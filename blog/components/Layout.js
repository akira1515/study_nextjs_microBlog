import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../src/app/utils.module.css";

const name = "Akira Code";
export const siteTitle = "Next.js  Blog";

function Layout({ children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.png"  className={utilStyles.borderCircle}/>
                <h1 className={utilStyles.heading2X1}>{name}</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout