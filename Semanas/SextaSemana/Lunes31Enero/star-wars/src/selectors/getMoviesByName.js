import { movies } from '../data/movies';

import {getData} from '../helpers/getData'
import {url} from '../helpers/url'
export const getMoviesByName = async ( name = '' ) => {

    try {
        let pjs
        name = name.toLocaleLowerCase();
        let personajes = await getData(url)
        //console.log(personajes.results);
        pjs = await personajes.results.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );
        //console.log(pjs);

        return pjs
        
    } catch (error) {
        console.log(error);
        
    }
}