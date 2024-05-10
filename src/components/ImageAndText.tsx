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
    return (
        <section ref={containerRef} className={styles.container}>
            <h2>{heading}</h2>
            <Image src={imagePath} alt={imageAlt} className={styles.image} />
            {children}
        </section>
    );
}

export default ImageAndText;