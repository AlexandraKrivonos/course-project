import React from 'react'
import styles from './styles.module.css'
import img from './Bitmap.svg'
import img1 from './Bg.svg'
import {useState} from 'react'
import {useHttp} from '../../hooks/http.hook'


 const CreatePage = () => {

    const {loading, request} = useHttp()
    
    const [form,setForm] = useState({
        name: '',email: '', password:''
    }) 

    const changeHandler = event => {

        setForm({...form, [event.target.name]: event.target.value})
       
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log("Data",data)

        }
        catch (err) {

        }
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
                    <h2 className={styles.titleUp}>Sign up</h2>
                <div className={styles.wrappForm}>
                    <label className={styles.labels}  >Name*</label>
                        <input type="text" name= "name" className={styles.inputColumn} onChange={changeHandler}></input> 
                    </div>
                    <div className={styles.wrappForm} >
                    <label className={styles.labels}  >Email*</label>
                        <input type="email" name= "email" className={styles.inputColumn}onChange={changeHandler}></input> 
                    </div>
                    <div className={styles.wrappForm}>
                    <label className={styles.labels}  >Password*</label>
                        <input type="text" name= "password"  className={styles.inputColumn} onChange={changeHandler}></input> 
                    </div>
                    <button className={styles.Sign} onClick={registerHandler} disabled={loading}>Sign up</button>
                </form>
            </div>
            

            
        </div>
    )
}

export default CreatePage


