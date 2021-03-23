import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';
import styles from './styles.module.css'
import {useHttp} from '../hooks/http.hook'
const {AuthContext} = require('../context/AuthContext')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
    const Button = () => {

        const history = useHistory()

        const auth = useContext (AuthContext)

    

        const {request} = useHttp()

        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
        function openModal() {
            setIsOpen(true);
        }
    
        function afterOpenModal() {
            subtitle.style.color = ' #2F281E';
        }
    
        function closeModal() {
            setIsOpen(false);

        }


        const [form,setForm] = useState({
            title: '', genre: 'detectives', shortDescription:''
        }) 

       
        const changeHandler = event => {
            setForm({...form, [event.target.name]: event.target.value})
           
        }
        
        const createHandler = async () => {
            try{
                const data = await request('/api/fanfic/generate', 'POST', {...form}, {
                    Authorization: `Bearer ${auth.token}`
                })    
            }
            catch (err) {
    
            }
        }

        return (

            <div className={styles.flexButton}>
                <button className={styles.start} onClick={openModal}>Create fanfic</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    className={styles.modal}
                    contentLabel="Example Modal"
                >
                    <div className={styles.mainWrappForm}>
                    <h2 ref={_subtitle => (subtitle = _subtitle)} className={styles.fanfic}>New Fanfic</h2>
                    <div className={styles.wrappForm}>
                    <label className={styles.labels}  >Name of the fanfic*</label>
                        <input type="text" name= "title" className={styles.inputColumn}  onChange={changeHandler}></input> 
                    </div>
                    <div className={styles.wrappForm}>
                    <label className={styles.labels}> Genres*</label>
                   
                    <select name="genre" id="genre" className={styles.labels}  onChange={changeHandler}> 
                      <option value='detectives'>Detectives</option>
                      <option value='comics and manga'>Comics and manga</option>
                      <option value='romance'>Romance</option>
                      <option value='poetry'>Poetry</option>
                      <option value='thrillers'>Thrillers</option>
                      <option value='adventures'>Adventures</option>
                      <option value='prose'>Prose</option>
                      <option value='horror'>Horror</option>
                    </select>
                    </div>
                    <div className={styles.wrappForm}>
                    < label >Short description*</label>
                        <input type="text" name= "shortDescription"  className={styles.inputDescription} onChange={changeHandler}></input> 
                    </div>
                    </div>
                    <div  className={styles.wrappButtons}>
                    <button onClick={closeModal} className={styles.close}>Close</button>
                    <button className={styles.create} onClick={createHandler}> Create</button>
                   
                   </div>
                   
                </Modal>
            </div>


        )

    }


    export default Button
