import styles from '../About/about.module.css';

function About ({options}){
    return <div className ={styles.container}>
        <h3 className ={styles.title}>Особисті якості</h3>
        <ul>{options.map((el) => {return<li className ={styles.item}>
               <span>{el}</span>
            </li>})}
           

            
        </ul>
    </div>
}


export default About