import { useState } from "react";
import { useEffect } from "react";

export const useFormulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        email: ''
    })


    useEffect(() => {
        console.log("ComponenDidMount");
        return () => {
            console.log('ComponentUnmount');
        }
    }, [datos])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }


    return {
        datos,
        useEffect,
        handleSubmit,
        handleInputChange
    }


};