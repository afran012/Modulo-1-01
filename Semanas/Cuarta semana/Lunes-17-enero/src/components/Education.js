import React from "react";

import { H2Styled } from "../styleds/H2Styled";

export const Education = () => {
    return(
        <div>
            <H2Styled name= 'Mis estudios'/>
            <div className="Education-container">
                <div className="Education-item">
                    <h1>ITM - <span>2019</span></h1>
                    <p>Ingenieria de sistemas</p>
                </div>
            </div>
        </div>
    )
}