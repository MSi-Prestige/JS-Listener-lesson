"use strict";

let numberOfFilms;

//!---------------------------FUNCTION--------------------------------
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    //! Если будет хоть одна правда на пути while - ||  будет повтор цикла. 
    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms.length > 5) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();
//!-------------------------------------------------------------------
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};
//!----------------------------FUNCITON---------------------------------
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("На сколько оцените его?");

        if (a != "" && b != "" && a != null && b != null && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log("ok well done");
        } else {
            console.log("errors");
            i--;
        }
    }
}

//!----------------------------FUNCTION----------------------------------
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("you are a super giroy");
    }
}
//!----------------------------------------------------------------------
function showMyDB(privat) {
   if (privat == false) {
      console.log(personalMovieDB);
   } else {
       console.log("DBASE is close");
   }
   // function showMyDB(hidden) {
   // if (!hidden){ console.log(personalMovieDB); }
   //}

}
//!----------------------------FUNCTION-------------------------------------
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр под номером ${i}"`);
        
    }
}
writeYourGenres();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);
console.log(personalMovieDB.genres);