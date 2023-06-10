import styles from './register.module.scss';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";


const Register = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const [isMarried, setIsMarried] = useState(false);
    const onSubmit = values => alert(values.province);

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
                            required: "Required",
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
                        <input placeholder='Numéro de téléphone' 
                          {...register("telephone", {
                            required: "Required",
                           })}></input>
                    </div>
                </div>

                <div className={styles.group}>
                    <h2>Informations techniques</h2>
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
                    </div>
                </div>
            
            </div>
            <button type='submit'>Enregistrer l'agent</button>
        </form>


        </section>
      </>
    );
  };
  
  export default Register;