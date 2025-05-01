import {Link} from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    return <div className={styles.container}>
        <div>
            <h1>ARMAGGEDON V</h1>
            <div>Сервис мониторинга и уничтожения астеройдов, опасно подлетевщих к Земле.</div>

        </div>
        <div>
            <Link to={"/asteroids"}>Астеройды</Link>
            <Link to={"/destroyment"}>Уничтожение</Link>
        </div>

    </div>

}

const InternalComponent = ()=> {
    return <div style={{backgroundColor: "red", height: "200px", wirdth: "200px"}}>

    </div>
}