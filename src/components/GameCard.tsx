import { FC, } from "react";
import styles from "@/styles/GameCard.module.scss";
import Image from "@/components/Image";

interface GameCardProps {
    imagePath: string,
    imageAlt: string,
    name: string,
    description: string
}

const GameCard: FC<GameCardProps> = ({imagePath, imageAlt, name, description}) => {
    return (
        <div className={styles.container}>
            <Image src={imagePath} alt={imageAlt} className={styles.image} />

            <div className={styles.textContainer}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default GameCard;