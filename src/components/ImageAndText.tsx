import { FC, ReactNode } from "react";
import styles from "@/styles/ImageAndText.module.scss";

interface ImageAndTextProps {
    heading: string,
    children: ReactNode
}

const ImageAndText: FC<ImageAndTextProps> = ({heading, children}) => {
    return (
        <section className={styles.container}>
            {/* TODO: Add image */}
            <div className={styles.image} />
            <div className={styles.textContainer}>
                <h2>{heading}</h2>
                {children}
            </div>
        </section>
    );
}

export default ImageAndText;