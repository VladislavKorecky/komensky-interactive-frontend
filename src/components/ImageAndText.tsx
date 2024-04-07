import { FC, MutableRefObject, ReactNode } from "react";
import styles from "@/styles/ImageAndText.module.scss";
import Image from "@/components/Image";

interface ImageAndTextProps {
    containerRef?: MutableRefObject<HTMLElement | null> 
    heading: string,
    imagePath: string,
    imageAlt: string,
    reversed?: boolean,
    children: ReactNode
}

const ImageAndText: FC<ImageAndTextProps> = ({containerRef, heading, imagePath, imageAlt, reversed, children}) => {
    let first = <Image src={imagePath} alt={imageAlt} className={styles.image} />;
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
            {first}
            {second}
        </section>
    );
}

export default ImageAndText;