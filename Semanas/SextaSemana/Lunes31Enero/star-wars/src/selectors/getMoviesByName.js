//import { movies } from '../data/movies';


export const getMoviesByName = ( name = '', personajes ) => {


    name = name.toLocaleLowerCase();
    return personajes.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );

}