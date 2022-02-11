import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {formSincrono} from '../actions/actionForm';

export const Formulario = () => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        email: '',
        obser: ''
    })

    const {email,obser} = values;

    const handleInputChanged = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,obser);
        const registro = {
            email,
            obser
        }
        dispatch(formSincrono(registro))
    }


    return (
        <div className="m-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Correo Electrónico</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="email"
                    value={email}
                    onChange={handleInputChanged} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Observaciones</label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    name="obser"
                    value={obser}
                    onChange={handleInputChanged}></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-dark">Enviar al Store</button>
                </div>
            </form>
        </div>
    )
}
