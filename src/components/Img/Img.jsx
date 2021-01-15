import myImg from "../../image/res-min.jpeg";
import styles from '../Img/img.module.css';
 
function MainImg ({name, skills, soft})
{
    return <>
    <div>
        <img className ={styles.img} src={myImg} alt={name}/>
        </div>
        <div className ={styles.contactBox}>
            <h3 className ={styles.title}>Контакти</h3>
        <a className={styles.contact} href="tel:+380675034024">+38067-503-40-24</a>
        <a className ={styles.contact} href="mailto:ghrubyi@ukr.net">Ghrubyi@ukr.net</a>
        </div>
        <div className ={styles.box}>
        <h3 className ={styles.title}>Технічні навички</h3>
        <ol className ={styles.list}>
            {skills.map(skill => {return  <li key ={skill} className ={styles.item}><span className ={styles.skills}>{skill}</span></li>})}
           
        </ol>

        </div>
        <div className ={styles.box}>
        <h3 className ={styles.title}>Особисті якості</h3>
        <ol className ={styles.list}>
            {soft.map(skill => {return  <li key ={skill} className ={styles.item}><span className ={styles.skills}>{skill}</span></li>})}
           
        </ol >
        
        </div>
    </>
}

export default MainImg


