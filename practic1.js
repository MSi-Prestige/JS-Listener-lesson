"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

     if ( a != "" && b != "" && a != null && b != null && a.length < 20 && b.length < 3){
          personalMovieDB.movies[a] = b;  //! ---------- Kljuch [a] ---- b = znachenie 
          console.log("data add in BD");
     } else {
         console.log("error");
         i--;
     }
}




// const a = prompt("Один из последних просмотренных фильмов?", ""),   //! dop ""  << dlja winExplorer 11 vers defalult
// b = prompt("На сколько оцените его?", ""),
// c = prompt("Один из последних просмотренных фильмов?", ""),
// d = prompt("На сколько оцените его?", "");


