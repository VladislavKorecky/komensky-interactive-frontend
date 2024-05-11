import { FC } from "react";
import styles from "@/styles/Store.module.scss"
import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";

const Store: FC = () => {
    return (
        <>
            <Navigation />

            <div className={styles.container}>
                <GameCard 
                    imagePath="/rain world.png"
                    imageAlt="graphic for the game rain world"
                    name="Rain World"
                    description="You are a slugcat. The world around you is full of danger, and you must face it - alone. Separated from your family in a devastating flood, you will need to find food and shelter between terrifying torrential downpours which threaten to drown all life."
                />
                <GameCard 
                    imagePath="/rain world.png"
                    imageAlt="graphic for the game rain world"
                    name="Rain World"
                    description="You are a slugcat. The world around you is full of danger, and you must face it - alone. Separated from your family in a devastating flood, you will need to find food and shelter between terrifying torrential downpours which threaten to drown all life."
                />
                <GameCard 
                    imagePath="/rain world.png"
                    imageAlt="graphic for the game rain world"
                    name="Rain World"
                    description="You are a slugcat. The world around you is full of danger, and you must face it - alone. Separated from your family in a devastating flood, you will need to find food and shelter between terrifying torrential downpours which threaten to drown all life."
                />
            </div>
        </>
    );
}

export default Store;