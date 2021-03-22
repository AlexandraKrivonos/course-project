import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import img from './Bitmap.svg'
import {useState, useContext} from 'react'
import {useHttp} from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'

 const LoginPage = () => {

  const auth = useContext(AuthContext)

  const {loading,error,request} = useHttp()

  const [form,setForm] = useState({
    email: '', password:''
}) 

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async() => {
        try {
            const data = await request ('api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
         
        } catch (e) {}
    }   

    return (
        <div className="wrapp">
            <header>
            <div className={styles.wrappTitle}>
                         <img src={img}></img>
                         <a href="/" className={styles.title}>MORDOR</a>
                         </div>
            </header>
            <div className={styles.wrappMain}>
                <form className={styles.wrappColumn}>
                    <h2 className={styles.titleUp}>Log in</h2>
                    <div className={styles.wrappForm} >
                    <label className={styles.labels}>Email*</label>
                        <input type="email" name = "email" className={styles.inputColumn} onChange={changeHandler}></input> 
                    </div>
                    <div className={styles.wrappForm}>
                    <label className={styles.labels}>Password*</label>
                        <input type="text" name="password" className={styles.inputColumn} onChange={changeHandler}></input> 
                    </div>
                    <button className={styles.Sign} disabled={loading} onClick={loginHandler}> <Link to="/profile"> Log in</Link></button>
                </form>
            </div>
            

            
        </div>
    )
}

export default LoginPage