import styles from '../Section/section.module.css'

function Section ({children}){
    return <div className ={styles.section}>{children}</div>
}

export default Section