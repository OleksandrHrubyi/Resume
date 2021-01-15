import styles from '../SectionInfo/sectionInfo.module.css';

function SectionInfo ({children}){
    return <div className ={styles.container}>{children}</div>
}

export default SectionInfo