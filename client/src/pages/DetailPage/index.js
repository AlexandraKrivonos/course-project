import React from 'react'
import img from './Bitmap.svg'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';


 const DetailPage = () => { 
   
    return (

<div className={styles.profileMain}>
     <div className={styles.mainContain}>
         <div className={styles.greeting}>
         <form className={styles.avatar}></form>
         <div className={styles.title}>Hello, name! We missed you!</div>             
         </div>
     </div>
     <div className={styles.acticleWrapp}>
     <div className={styles.article}>Your fanfiction</div>
     <FontAwesomeIcon icon= {faArrowUp } className={styles.articlePic} />
     <div className={styles.articleTitle}>up</div>
     <FontAwesomeIcon icon= {faArrowDown} className={styles.articlePic} />
     <div className={styles.articleTitle}>down</div>
     </div>
     </div>
    )
 }

export default DetailPage