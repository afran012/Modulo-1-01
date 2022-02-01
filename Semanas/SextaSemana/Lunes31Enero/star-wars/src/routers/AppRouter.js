import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { HobbitScreen } from '../components/HobbitScreen';
import { MovieScreen } from '../components/MovieScreen';
import { Navbar } from '../components/Navbar';
import { SeacrhScreen } from '../components/SeacrhScreen';
import { SeniorScreen } from '../components/SeniorScreen';
import { url } from '../helpers/url';

export const AppRouter = () => {

    const [Personajes, setPersonajes] = useState({results:[]});

    const getData = async () => {
        try {
          const resp = await fetch(url);
          const data = await resp.json();  
          setPersonajes(data)    
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        getData()
        
    }, []);

    const {results} = Personajes
    console.log(results);

    return (
        <Router>
                <Navbar />
                <Routes> 
                    <Route exact path="/senior" element={<SeniorScreen/>} />
                    <Route exact path="/hobbit" element={<HobbitScreen/>} />
                    <Route exact path="/movie/:id" element={<MovieScreen/>} />
                    <Route exact path="/search" element={<SeacrhScreen pjData = {results}/>} />
                    
                </Routes>
        </Router>
    )
}
