import styles from './connexion.module.scss'
import Image from 'next/image'
import Man from "./../../public/man.webp"

const Connexion = () => {
    return (
      <>
      <section className={styles.mainContainer}>
          <div className={styles.imgSide}>
          </div>   
          <form className={styles.formSide}>
            <div className={styles.iptContainer}>
              <input></input>
              <input type='password'></input>
              <a href='/register-card'>
                Connexion
              </a>
            </div>
             
          </form>
        </section>
      </>
    );
  };
  
  export default Connexion;