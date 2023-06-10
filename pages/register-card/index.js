import styles from './register.module.scss';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import FingerImage from '../../public/fingerprint.webp'
import LoadingIcon from '../../public/Loading_icon.gif'
import Check from '../../public/check.webp'


const Register = () => {
    const [isMarried, setIsMarried] = useState(false);
    const [isLoadingFingerPrint, setIsLoadingFingerPrint] = useState(false);
    const [fingerRegistered, setFingerRegistered] = useState(false);
    const [fingerCodeBase, setFingerCodeBase] = useState('');
    const { handleSubmit, register, formState: { errors } } = useForm();


    const onSubmit =async (values) => {
        console.log("values", values)
        const config =  { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }

          try{
            const resp = await fetch(
                `http://localhost:4000/agents`,
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers:config
               
                }   
              );
              console.log("response: ", resp);
          } catch (err) {
            console.log(err.message);
          }
    };

    const handleFingerClick = () => {
    
    }





    const handleFingerFetch = async () => {

        setIsLoadingFingerPrint(true);
        let myHeaders = new Headers();
        myHeaders.append("Origin", " https://webapi.secugen.com");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
        var urlencoded = new URLSearchParams();
        urlencoded.append("Timeout", "10000");
        urlencoded.append("Quality", "50");
        urlencoded.append("licstr", "");
        urlencoded.append("templateFormat", "ISO");
        urlencoded.append("imageWSQRate", "0.75");
    
        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };
    
    const response = await fetch("https://localhost:8443/SGIFPCapture", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    let result = await response.json();
    setFingerCodeBase(result.BMPBase64)
    if(response.status ===200){
        setFingerRegistered(true)
        setIsLoadingFingerPrint(false);
       
    }    
    }

    const handleMarried = (e)=> {
       if ( e.target.value === 'M'){
        setIsMarried(true);
       }else setIsMarried(false);
       console.log('est marié', isMarried);
    }

 
    return (
      <>
      <section className={styles.mainContainer}>
        <h1>FICHE D`IDENTIFICATION INDIVIDUELLE DE L`AGENT </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputgrp}>
                <div className={styles.group}>
                    <h2>Informations personnelles</h2>
                    <div className={styles.iptContainer}>
                        <input placeholder='Nom'   
                        {...register("nom", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Postnom'   
                        {...register("postnom", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Prénom'  
                        {...register("prenom", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Lieu de naissance' 
                         {...register("lieunaissance", {
                            required: "Required",
                           })}></input>
                        <label>Date de naissance</label>
                        <input type='date'  
                        {...register("datenaissance", {
                            required: "Required",
                           })}></input>
                        <label>Genre</label>
                        <select 
                         {...register("genre", {
                            required: "Required",
                           })}>
                            <option value='M'>Homme</option>
                            <option value='F'>Femme</option>
                        </select>
                        <label>Etat civil</label>
                        <select 
                         {...register("etatcivil", {
                            required: "Required",
                           })}
                        onChange={handleMarried} 
                        >
                        <option value='R'>Choisir...</option>
                            <option value='M'>Marié(e)</option>
                            <option value='C'>Célibataire</option>
                            <option value='D'>Divorcé</option>
                        </select>
                      <input placeholder='Nom de l epouse / épouse'   
                      {...register("epoux", {
                           
                           })}
                           disabled = {isMarried ? false : true} ></input>
                        <input placeholder='Nom du père' 
                         {...register("nompere", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Nom de la mère' 
                         {...register("nommere", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Nombre d enfants' type= 'number' 
                         {...register("nombreenfants", {
                            required: "Required",
                           })}
                        ></input>
                    </div>
                </div>

                <div className={styles.group}>
                    <h2>Origines et adresse</h2>
                    <div className={styles.iptContainer}>
                        <input placeholder='Province d origine' 
                           {...register("province", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Territoire/Commune d origine' 
                          {...register("commune", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Secteur/Chefferie d origine' 
                          {...register("secteur", {
                            required: "Required",
                           })}
                        ></input>
                        <input placeholder='Groupement d origine' 
                        {...register("groupement", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Adresse actuelle' 
                          {...register("adresse", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Numéro de téléphone' type='number'
                          {...register("telephone", {
                            required: "Required",
                           })}></input>
                    </div>
                </div>

                <div className={styles.group}>
                    <h2>Informations techniques et biométriques</h2>
                    <div className={styles.iptContainer}>
                        <input placeholder='Matricule' 
                          {...register("matricule", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Grade / Fonction' 
                          {...register("grade", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Numéro unique HVK' 
                          {...register("numerohvk", {
                            required: "Required",
                           })}></input>
                        <input placeholder='Direction/Division/Service' 
                          {...register("direction", {
                            required: "Required",
                           })}></input>
                        <label>Date d affectation</label>
                        <input type='date'   
                        {...register("dateaffectation", {
                            required: "Required",
                           })}></input>
                        <div className={styles.fingerClass}>
                        <button onClick={handleFingerFetch} className={isLoadingFingerPrint ? styles.loader : styles.dnone}>
                            <Image 
                                width={80}
                                height={50}
                                alt="Picture of the author"
                                src={LoadingIcon}
                            />
                          <span>Scannez l'empreinte digitale</span> <small>posez le pouce sur le lecteur</small> </button>
                        <Image 
                            width={100}
                            height={100}
                            alt="Picture of the author"
                            src={fingerRegistered ? Check: FingerImage}
                        />
                        </div>
                    </div>
                </div>


            </div>
            <button type='submit' className={styles.submitBtn}>Enregistrer l'agent</button>
        </form>


        </section>
      </>
    );
  };
  
  export default Register;