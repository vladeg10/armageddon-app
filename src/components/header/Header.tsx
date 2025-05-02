import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import {getUserKey} from "../../utils/getUserKey";
import {memo, useState} from "react";

export const Header = memo(() => {

    const [inputOpened,SetInputOpened] = useState(false);

    return <div className={styles.container}>
        <div>
            <h1>ARMAGGEDON V</h1>
            <div>Сервис мониторинга и уничтожения астеройдов, опасно подлетевщих к Земле.</div>

        </div>
        <div>
            <Link to={"/asteroids"}>Астеройды</Link>
            <Link to={"/destroyment"}>Уничтожение</Link>
        </div>
        <div>
            {getUserKey() === "DEMO_KEY" ? <button onClick={()=>SetInputOpened(!inputOpened)}>Unauthorized</button> : <div>Api Key provided</div> }
        </div>
        {inputOpened ? <input onChange={(ev)=>{
            if(ev.target.value.length == 40){
                localStorage.setItem("API_KEY",ev.target.value)
                SetInputOpened(false)
            }
        }
        }/> : null}

    </div>

})

Header.displayName = "Header"

