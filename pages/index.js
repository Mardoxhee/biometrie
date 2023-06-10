import styles from './home.module.scss'
import LogoHv from './../public/logohv.png'
import Image from 'next/image'

const Home = () => {
    return (
      <>
      <section className={styles.mainContainer}>
      <div className={styles.textSide}>
        <h1 className={styles.maintitle}>Bienvenue sur la plateforme d'identification des agents de l'administration publique de la ville de kinshasa</h1>
        <p>lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem</p>
        <div className={styles.btnContainer}>
          <a className={styles.connexionbtn} href="/connexion" >Se connecter</a>
          <a className={styles.accountbtn}  href='#'> Créer un profile</a>
        </div>
      </div>
      <div className={styles.imgSide}>
        <Image 
            width={500}
            height={500}
            alt="Picture of the author"
            src={LogoHv}
            />
      </div>    
        </section>
      </>
    );
  };
  
  export default Home;