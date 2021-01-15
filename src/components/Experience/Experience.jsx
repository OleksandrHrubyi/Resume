
import styles from '../Experience/experience.module.css';

function Experience (){
    return <div className ={styles.container}>
        <h3 className ={styles.title}>Досвід роботи</h3>
        <ul>
            <li className ={styles.item}>
                <h4>ТОВ «Альпарі»</h4>
                <h5>Менеджер по торгівлі</h5>
                <span>2006 - 2014</span>
            </li>
            <li className ={styles.item}>
              <h4>ТОВ «Інтер`єр Груп»</h4>
                <h5>Менеджер з логістики</h5>
                <span>2014 - 2015</span>

            </li>
            <li className ={styles.item}>
                <h4>ТОВ «Інтер`єр Груп»</h4>
                <h5>Начальник транспортного відділу</h5>
                <span>2015 - 2016</span>
            </li>

            <li className ={styles.item}>
                <h4>Фізична особа підприємець</h4>
                <span>2016 - 2020</span>
            </li>
        </ul>
    </div>
}


export default Experience