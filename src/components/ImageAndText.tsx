import { FC, MutableRefObject, ReactNode } from "react";
import styles from "@/styles/ImageAndText.module.scss";

interface ImageAndTextProps {
    containerRef?: MutableRefObject<HTMLElement | null> 
    heading: string,
    reversed?: boolean,
    children: ReactNode
}

const ImageAndText: FC<ImageAndTextProps> = ({containerRef, heading, reversed, children}) => {
    let first = <div className={styles.image} />;
    let second = (
        <div className={styles.textContainer}>
            <h2>{heading}</h2>
            {children}
        </div>
    );
    
    // switch the order of elements if "reversed"
    if (reversed) {
        let temp = first;
        first = second;
        second = temp;
    }

    return (
        <section ref={containerRef} className={styles.container}>
            {/* TODO: Add image */}
            {first}
            {second}
        </section>
    );
}

export default ImageAndText;