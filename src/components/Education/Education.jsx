import styles from '../Education/education.module.css';

function Education (){
    return <div className ={styles.container}>
        <h3 className ={styles.title}>Освіта</h3>
        <ul>
            <li className ={styles.item}>
                <div className ={styles.box}>
                <h4 className ={styles.title}>Вінницький інститут економіки тернопільського національного економічного університету</h4>
                </div>
                <div>
                <h5>Облік і аудит. Спеціаліст</h5>
                <span>2006 – 2011</span>
                </div>
            </li>
            <li className ={styles.item}>
            <h4 className ={styles.title}>Курси "Prestige school"</h4>
                <h5>Англійська мова</h5>
                <span>2012</span>
            </li>
            <li className ={styles.item}>
            <h4 className ={styles.title}>Онлайн курси "GO IT"</h4>
                <h5>Frontend Full Stack</h5>
                <span>2020 по c.д.</span>
            </li>
           
            
        </ul>
    </div>
}


export default Education