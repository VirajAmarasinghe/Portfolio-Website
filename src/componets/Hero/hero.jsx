import React from "react"
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";


export const Hero = () => {
    return (
        <section className ={styles.container}>
            <div className={styles.virajimgContainer}>
                <img 
                    src = {getImageUrl("hero/Viraj-Amarasinghe.png")} 
                    alt = "Hero Image Of me" 
                    className = {styles.virajimg} 
                />  
            </div>

            <div className = {styles.content}>
                <h1 className ={styles.title}> Hi I am Viraj</h1>
                <p className = {styles.description}>I am a Computer Engineer and a Full Stack Developer. I have been in the web design and devlopment field over 10 years with marketing experince. Reach out if you you would like to learn more!</p>
                <a href="mailto:info@virajamarasinghe.com" className = {styles.contactBtn}>Contact Me</a>
            </div>
           
            <div className= {styles.topBlur}/>
            <div className= {styles.bottomBlur}/>



            
        </section>
    );
};


