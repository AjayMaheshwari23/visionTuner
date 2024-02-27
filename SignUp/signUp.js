import styles from './signUp.module.css'
import Link from 'next/link'
import {FaFacebook , FaTwitter , FaLinkedinIn , FaGoogle} from 'react-icons/fa'

// const facebook = <FontAwesomeIcon icon

export default function Login() { 

    return (
        <div className={styles.bodyi}>
            <div className={styles.container} onclick="onclick">
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <div className={styles.center}>
                    <h1> Sign Up </h1>
                    <input type="email" placeholder="username" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    {/* <h3>&nbsp;</h3> */} 
                    <div className={styles.f_social_icon}>
                        <Link href="#" className ={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                        <Link href="#" className ={`${styles.social} ${styles.twitter}`}><FaTwitter size={23}/></Link>
                        <Link href="#" className ={`${styles.social} ${styles.google}`}><FaGoogle size={23}/></Link>
                        <Link href="#" className ={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23}/></Link>
                    </div>
                    <button className={styles.btn}> Sign Up </button>
                </div >
            </div >
        </div >
    )

}


