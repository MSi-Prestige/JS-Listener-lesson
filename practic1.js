"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),   //! dop ""  << dlja winExplorer 11 vers defalult
b = prompt("На сколько оцените его?", ""),
c = prompt("Один из последних просмотренных фильмов?", ""),
d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;   //! Kljuch [a] ---- b = znachenie 
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
console.log(numberOfFilms);
