import { AsteroidCardAction } from './AsteroidCardAction/AsteroidCardAction'
import { AsteroidCardContent } from './AsteroidCardContent/AsteroidCardContent'
import { AsteroidCardImage } from './AsteroidCardImage/AsteroidCardImage'
import styles from './Card.module.css'
import {AsteroidCardContentContainer} from "./AsteroidCardContent/AsteroidCardContentContainer";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";
import {DinoCardImage} from "./DinoCardImage/DinoCardImage";


type AsteroidCardProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    isDangerous: boolean
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous } = props

    const {addAsteroid} = useContext(AsteroidsContext)

    return (
        <div className={styles.card}>
            <div
                className={isDangerous ? styles.cardRed : styles.regularCard}
            ></div>
            <AsteroidCardImage />
            <AsteroidCardContentContainer
                name={name}
                date={date}
                distance={distance}
                size={size}
            />
            <AsteroidCardAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
            <DinoCardImage />
        </div>
    )
}
