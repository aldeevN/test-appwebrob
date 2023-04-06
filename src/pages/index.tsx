import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import ContactInfo from "../components/ContactInfo";
import Galery from "../components/Gallery";
import Programs from "../components/Programs";
import Questions from "../components/Questions";
import Review from "../components/Review";
import Steps from "../components/Steps";
import TextHolder from "../components/TextHolder";
import styles from "../styles/Home.module.scss";


const Home = () => (
    <><Head>
        <title>Webtronics</title>
    </Head>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.img_holder}>
                    <Image src={"/../public/png/lidbg.png"}
                        width={1950}
                        height={850}
                        alt={"Man coding"}
                        quality={100} />
                </div>
                <section><TextHolder /></section>
                <section id="about"><About /></section>
                <section id="programs"><Programs /></section>
                <section id="steps"><Steps /></section>
                <section id="questions"><Questions /></section>
                <section><Review /></section>
                <section><Galery /></section>
                <section id="contacts"><ContactInfo /></section>
            </div>
        </main>
    </>
);

export default Home;