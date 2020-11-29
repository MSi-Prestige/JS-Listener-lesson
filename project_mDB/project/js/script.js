/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        adv = document.querySelectorAll(".promo__adv img"),
        inputText = document.querySelector("form.add"),
        btnClick = document.querySelector("button"),
        movieList = document.querySelector(".promo__interactive-list"),
        addText = inputText.querySelector(".adding__input"),
        checkbox = inputText.querySelector('[type="checkbox"]');


    inputText.addEventListener("submit", (event) => {
        event.preventDefault();
        const newFilm = inputText.value;
        const favorite = checkbox.checked;
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();

    });

    movieDB.movies.sort();
    
    function createMovieList() {
        movieList.innerHTML = "";

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML +=
                `<li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
               </li>`;
        });

    }


    movieList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML +=
            `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
           </li>`;
    });


    adv.forEach(element => {
        element.remove();
    });


    genre.textContent = "Драмма";

    poster.style.backgroundImage = "url('img/bg.jpg')";

});