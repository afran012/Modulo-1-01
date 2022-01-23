import React from "react";

import { H2Styled } from "../styleds/H2Styled";

export const Education = () => {
    return(
        <div>
            <H2Styled name= 'Mis estudios'/>
            <div className="Education-container">
                <div className="Education-item2">
                    <h1>Universidad de San Buenaventura Medellín - <span>2020</span></h1>
                    <p>Ingeniería electrónica</p>
                </div>
                <div className="Education-item3">
                    <h1>ITM - <span>2019</span></h1>
                    <p>Ingenieria de sistemas</p>
                </div>
            </div>
        </div>
    )
}