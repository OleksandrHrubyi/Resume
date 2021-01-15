import styles from '../MainInfo/mainInfo.module.css'

function MainInfo({name, age})
{
    return <div className ={styles.container}>
       <h1 className ={styles.title}>{name}</h1>
        <h2 className ={styles.title}>Вік: {age} роки</h2>
        </div>

  

}


export default MainInfo