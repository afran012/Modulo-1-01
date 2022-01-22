import React from "react";
import '../styles/About.css'
import {AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyle} from '../styleds/AboutStyled'

const About = () => {
    return (
        <AboutStyle className="About">
            <div className="About-container">
                <AboutAvatar className="About-avatar">
                    <figure>
                        <AboutImg src="/" alt="Mi Avatar"/>
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>Airan Steven Franco Galeano</AboutH2>
                </AboutName>
                <AboutProfession className="About-profession">
                    <p>Desarrollador Full Stack</p>
                </AboutProfession>
                <AboutLocation className="About-description">
                   <p>Medellín, Colombia</p>
                </AboutLocation>
                <div className="About-social">
                    
                    <a href="www.linkedin.com/in/airan-steven-franco-galeano-7605841ba">
                        LinkedIn
                    </a>
                     
                </div>
            </div>
        </AboutStyle>

    )
}

export default About ;