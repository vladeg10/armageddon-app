import {Header} from "../components/header/Header";
import {useContext} from "react";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";


export const Destroyment = () =>{


    const contextValue = useContext(AsteroidsContext)

    console.log('Destroyment page')

    return <div>
        <Header/>
        Destroyment page
    </div>
}