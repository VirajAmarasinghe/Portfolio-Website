import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className = {styles.container} id="about">
            <h2 className = {styles.title}>About</h2>

            <div className = {styles.content}>
                <ul className = {styles.aboutItemes}>
                    <li className = {styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt = "Cursor icon"/>
                        <div className = {styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I am a Frontend Developer with experince in building responsive and optimize  sites.</p>
                        </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} 
                    alt = "Server icon"/>
                    <div className = {styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I am a Backend Developer with experince in building secure and scalable web applications.</p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/seoIcon.png")} 
                    alt = "SEO icon"/>
                    <div className = {styles.aboutItemText}>
                        <h3>SEO</h3>
                        <p>I am an SEO expert with experince in optimizing websites for search engines.</p>
                    </div>
                </li>

                
                </ul>
                <img src= {getImageUrl("about/aboutImage.png")}
                alt="I am sitting with a laptop"
                 className = {styles.aboutImage}/>
            </div>
            
        </section>
    );
}


        