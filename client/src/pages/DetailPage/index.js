import React, {useCallback, useContext, useState, useEffect} from 'react'
import img from './Bitmap.svg'
import styles from './styles.module.css'
import {useHttp} from '../../hooks/http.hook'
import{useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import Loader from '../../components/Loader'
import FanficCard from '../../components/FanficCard'



 const DetailPage = () => { 
    const { AuthContext } = require("../../context/AuthContext");
    const auth = useContext(AuthContext);
    const [fanfics, setFanfics] = useState([]);
    const { loading, request } = useHttp();
  
    const fetchFanfics = useCallback(async () => {
      try {
        const fetched = await request("api/fanfic", "GET", null, {
          Authorization: `Bearer ${auth.token}`,
        });
        setFanfics(fetched);
      } catch (e) {}
    }, [auth.token, request]);
  
    useEffect(() => {
      fetchFanfics();
    }, [fetchFanfics]);
  
    if (loading) {
      return <Loader />;
    }
  
    return (

<div className={styles.profileMain}>
     <div className={styles.mainContain}>
         <div className={styles.greeting}>
         <form className={styles.avatar}></form>
    <div className={styles.title}>Hello, {fanfics.author}! We missed you!</div>             
         </div>
     </div>
     <div className={styles.acticleWrapp}>
     <div className={styles.article}>Your fanfiction</div>
     <FontAwesomeIcon icon= {faArrowUp } className={styles.articlePic} />
     <div className={styles.articleTitle}>up</div>
     <FontAwesomeIcon icon= {faArrowDown} className={styles.articlePic} />
     <div className={styles.articleTitle}>down</div>
     </div>
     <>
     {<FanficCard fanfics={fanfics} />}
     </>
     </div>

    )
 }

export default DetailPage