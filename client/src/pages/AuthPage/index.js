import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import img from './Bitmap.svg'
import imgMain from './Image.svg'

const AuthPage = () => {
    return (
        <div className="MyContainer">
             <header>
                 <div className={styles.myWrapp}>
                     
                     <div className={styles.navWrapp}>
                     <div className={styles.wrappTitle}>
                         <img src={img}></img>
                         <a href="#" className={styles.title}>MORDOR</a>
                         </div>
                            <div className={styles.butt}>
                            <ul>
                                 <button className={styles.Sigh}><Link to="/create">Sign up</Link></button>
                                 <button className={styles.Log}><Link to="/login" className={styles.black}>Log in</Link></button>
                             </ul>
                             </div>
                     </div>
                 </div>
             </header>
             <div className={styles.wrappMain}>
                    <div className={styles.wrappSubTitle}>
                     <h2 className={styles.subtitle}> The Best Platform <br></br> for your imagination </h2>
                     <h3 className={styles.discr}>
Fandoms, popular authors, your favorite genres,<br></br> the ability to upload your work and get feedback!<br></br>The most intuitive way to imagine your next user experience.</h3>
<a href="/detail">
<button className={styles.start}>Get started</button>
</a>
</div>
                     <img src={imgMain}></img>
                    
             </div>
        </div>
      
     
    )
}

export default AuthPage