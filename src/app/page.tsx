"use client";

import ImageAndText from "@/components/ImageAndText";
import Link from "next/link";
import { FC, useRef } from "react";
import styles from "@/styles/Home.module.scss"

const Home: FC = () => {
    const firstSectionRef = useRef<HTMLElement | null>(null);

    return (
        <>
            <nav className={styles.nav}>
                {/* TODO: Logo */}
                <span>[Logo here]</span>
                <Link href="/store" className={styles.navLink}>E-shop</Link>
            </nav>

            {/* Hero section */}
            <section className={styles.hero}>
                <video autoPlay muted loop>
                    <source src="/background.mp4" type="video/mp4" />
                </video>

                <h1>Výuka lépe a zábavně</h1>
                <span>Chcete svým žákům dopřát kvalitnější výuku, která je bude i bavit?</span>

                <div>
                    <button onClick={() => {
                        firstSectionRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }} className="primary-button">Číst dál</button>
                    <Link href="/store" className="secondary-button">Do e-shopu</Link>
                </div>
            </section>

            {/* Main content */}
            <ImageAndText containerRef={firstSectionRef} heading="Výuka lépe a zábavně" imagePath="/illustrations/0.svg" imageAlt="ilustrace kluka, který si čte s hromadou knih kolem">
                <p>
                    Chcete svým žákům dopřát kvalitnější výuku, která je bude i bavit? <b>Skloubit kvalitní znalosti se zábavou je někdy až Herkulovským úkolem.</b> Do lekce dáváte ohromnou dávku času a energie, ale pak to nejde podle představ. To nás někdy vede k závěru, že je to jedno nebo druhé. Co kdyby jste si ale nemuseli vybírat?
                    <br />
                    <br />
                    <b>Řešením jsou edukační hry.</b> Pokud správně navrženy, žáci si užívají přirozenou konkurenci nebo budování a ani neví, že se vlastně něco učí. Hra může např. simulovat reálnou situaci nebo využívat školních konceptů pro dosažení cíle. Hráč se tak až při závěrečném sdílení uvědomuje svých nově získaných znalostí.
                </p>
            </ImageAndText>
            <ImageAndText heading="Co můžete zkusit?" reversed={true} imagePath="/illustrations/1.svg" imageAlt="ilustrace holky, která studuje na svém počítači">
                <p>
                    <b>Mohli byste si vytvořit vlastní hru. To má ale několik háčků. Kromě časové a materiální náročnosti je tu i potřeba znalostí v herní výrobě.</b> Vytvořit zábavnou, vybalancovanou a do toho znalostmi nabitou hru není jen tak.
                    <br />
                    <br />
                    V nabitém rozvrhu máte sotva čas na samotnou výrobu, natož na učení game designu. Dnešní generace navíc očekává hry digitální. Nad již předešlé požadavky můžete tedy přidat ještě techniku a uvařili jste si pěknou fušku.
                </p>
            </ImageAndText>
            <ImageAndText heading="Jak teda na to?" imagePath="/illustrations/2.svg" imageAlt="ilustrace holky s nákupními taškami">
                <p>
                    <b>Hru pro vaší školu můžete na pár kliknutí koupit.</b> Všechny naše produkty mají doživotní licence, takže si hru pořídíte jednou a můžete ji už navždy používat. Proč zrovna my? Jsem skupina nadšených studentů z alternativní školy a víme co žáky baví. Již několik let se zajímáme o výrobu her a z vlastní zkušenosti víme jaké metody učení fungují a jaké ne.
                    <Link href="/store" className="primary-button">Do e-shopu</Link>
                </p>
            </ImageAndText>

            {/* Footer */}
            <footer className={styles.footer}>
                <span><a href="https://www.iconfinder.com/icons/7900074/books_mortarboard_magnifier_read_cap_school_graduate_graduation_education_degree_icon">This image</a> is attributed to <a href="https://www.iconfinder.com/webalys">Webalys on Iconfinder</a> under the <a href="https://creativecommons.org/licenses/by/2.5/">Creative Commons (Attribution 2.5 Generic)</a>, no changes were made</span>
                <span><a href="https://www.iconfinder.com/icons/7900068/play_video_learning_online_media_app_idea_books_light_bulb_laptop_education_icon">This image</a> is attributed to <a href="https://www.iconfinder.com/webalys">Webalys on Iconfinder</a> under the <a href="https://creativecommons.org/licenses/by/2.5/">Creative Commons (Attribution 2.5 Generic)</a>, no changes were made</span>
            </footer>
        </>
    );
}

export default Home;