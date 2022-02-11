import React, {useState} from 'react';
import '../styles/formStyle.css';
import { useDispatch } from 'react-redux';
import { actionLogin, actionLogout } from '../actions/actionLogin';

export const Login = () => {

    const dispatch = useDispatch();

const [values, setValues] = useState({
    user: '',
    pass: ''
})

const {user,pass} = values;

const handleInputChange = ({target}) => {
   setValues({
       ...values,
       [target.name]: target.value
   })
}

const handleSubmit = (e) => {
   e.preventDefault();
   console.log(user,pass)
   dispatch(actionLogin(user,pass))
}


    return (
        <div>
            <form className='m-5' onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="user"
                        value={user} 
                        onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password" 
                        name="pass"
                        value={pass}
                        onChange={handleInputChange}/>
                </div>
                <br/>
                <div >
                    <button type="submit" className="btn btn-dark">Submit</button>
                    <button 
                    onClick={() => dispatch(actionLogout())}
                    type="button" className="btn btn-dark">Logout</button>
                </div>

            </form>
        </div>
    )
}
