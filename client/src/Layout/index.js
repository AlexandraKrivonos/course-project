import React from 'react'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import img from './Bitmap.svg'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faTools, faSignOutAlt, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';


 const Layout = ({ children }) => { 
  const history = useHistory()
  const auth  = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }



  let isHomePage = false
  let isFunfic = false
  let isSetting = false
  let currentUrl = window.location.href;
  
  if (currentUrl.includes('detail')){
    isHomePage = true
  }

  if (currentUrl.includes('profile')){
    isFunfic = true
  }

  if (currentUrl.includes('setting')){
    isSetting = true
  }


   
    return (
        <div>
        <div className={styles.sidebarContainer}>
  <div className={styles.contentContainer}> 
  <div className={styles.wrapper}>
    <img src={img}></img>
    <a href="/" className={styles.contentLogo}>MORDOR</a>
  </div>
   </div>
   <div className={styles.wrappMain}>
  <ul className = {styles.sidebarNavigation}>
    <li className = {styles.liNav}>
      <a href="/detail" className={isHomePage ? styles.profile : styles.aNav}>
          <FontAwesomeIcon icon= {faHome} className={styles.pic}/>
        <i class="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    <li className = {styles.liNav}>
      <a href="/profile" className={isFunfic ? styles.profile : styles.aNav}>
      <FontAwesomeIcon icon= {faBookOpen} className={styles.pic} />
        <i class="fa fa-tachometer" aria-hidden="true"></i> Fanfiction
      </a>
    </li>
    <li className = {styles.liNav}>
      <a href="#" className={isSetting ? styles.profile : styles.aNav}>
      <FontAwesomeIcon icon= {faTools} className={styles.pic} />
        <i class="fa fa-users" aria-hidden="true"></i> Settings
      </a>
    </li>
    <li className = {styles.liNav}>
      <a href="/" className={styles.aNav} onClick={logoutHandler}>
      <FontAwesomeIcon icon= {faSignOutAlt} className={styles.pic} />
        <i class="fa fa-info-circle" aria-hidden="true"></i> Exit
      </a>
    </li>
 
     </ul>
     </div>
</div>
{children}
</div>





    )
 }

export default Layout