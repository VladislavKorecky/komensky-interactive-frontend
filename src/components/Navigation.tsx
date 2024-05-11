import Link from "next/link";
import { FC } from "react";
import styles from "@/styles/Navigation.module.scss"

const Navigation: FC = () => {
    return (
        <nav className={styles.container}>
                {/* TODO: Logo */}
                <Link href="/" className={styles.logo}>[Logo here]</Link>
                <Link href="/store" className={styles.link}>E-shop</Link>
        </nav>
    );
}

export default Navigation;