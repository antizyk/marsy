/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo__adv');
const promoTitle = promo.querySelector('.promo__adv-title');
const promoImg = promo.querySelectorAll('img');
const ganre = document.querySelector('.promo__genre');
const body = document.querySelector('body');
const promoContentBg = document.querySelector('.promo__bg');

//1 quest
promo.remove();
promoTitle.remove();
promoImg.forEach((item) => {
    item.remove();
});

//2 quest
ganre.textContent = 'Драма';

//3 quest
body.style.cssText = 'background: url("img/bg.jpg") 0 0/ cover no-repeat;"';

//Доп изменение от меня
promoContentBg.style.background = 'none';