import { FC, MutableRefObject, ReactNode } from "react";
import styles from "@/styles/ImageAndText.module.scss";

interface ImageAndTextProps {
    containerRef?: MutableRefObject<HTMLElement | null> 
    heading: string,
    children: ReactNode
}

const ImageAndText: FC<ImageAndTextProps> = ({containerRef, heading, children}) => {
    return (
        <section ref={containerRef} className={styles.container}>
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