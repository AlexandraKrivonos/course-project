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
    const {AuthContext} = require('../../context/AuthContext')
    const {token} = useContext(AuthContext)
    
    const {request,loading} = useHttp()
    const fanficId = useParams()
    const [fanfic, setFanfic] = useState(null)
    

    const getFanfic = useCallback( async() => {
        try {
           const fetched = await request(`/`, 'GET', null, {
            Authorization: `Bearer ${token}`
           })
           setFanfic(fetched)
        } catch (e) {

        }
    }, [token, fanficId, request])

    useEffect(() => {
        getFanfic()
    }, [getFanfic])

    if (loading) {
        return <Loader />

    }



   
    return (

<div className={styles.profileMain}>
     <div className={styles.mainContain}>
         <div className={styles.greeting}>
         <form className={styles.avatar}></form>
    <div className={styles.title}>Hello, ! We missed you!</div>             
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
     {!loading && fanfic && <FanficCard fanfic={fanfic} />}
     </>
     </div>

    )
 }

export default DetailPage